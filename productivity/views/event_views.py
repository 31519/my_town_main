from rest_framework.serializers import Serializer
from productivity.models import Event
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from productivity.serializers import EventSerializers
from rest_framework import status
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger


@api_view(['GET'])
def EventList(request):
    keyword = request.query_params.get("keyword")
    if keyword == None:
        keyword = ""
    event = Event.objects.filter(title__icontains=keyword)

    page = request.query_params.get("page")
    paginator = Paginator(event, 5)
    try:
        event = paginator.page(page)
    except PageNotAnInteger:
        event = paginator.page(1)
    except EmptyPage:
        event = paginator.page(paginator.num_pages)
    if page == None:
        page=1

    page=int(page)

    serializer = EventSerializers(event, many=True)
    return Response({"events":serializer.data, "pages":paginator.num_pages, "page":page})

@api_view(['GET'])
def EventDetailList(request, pk, slug):
    event = Event.objects.get(pk=pk, slug=slug)
    serializer = EventSerializers(event, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def EventCreate(request):
    data = request.data
    current_user = request.user
    event = Event.objects.create(
        user =current_user,
        category="Event Category",
        country="Event Country",
        state= "Event State",
        address="Event Address",
        contact="Event Contact",
        image="Event Image",
        title="Event Title",
        content="Event Content"
    )
    serializer = EventSerializers(event, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def EventUpdate(request, pk, slug):
    data = request.data
    event = Event.objects.get(pk=pk, slug=slug)
    event.category =data['category']
    event.country = data['country']
    event.state = data['state']
    event.address = data['address']
    event.contact = data['contact']
    event.title = data['title']
    event.content = data['content']
    event.save()
    serializer = EventSerializers(event, many=False)
    return Response(serializer.data)



@api_view(['PUT'])
@permission_classes([IsAdminUser])
def EventAdminUpdate(request, pk):
    data = request.data
    event = Event.objects.get(pk=pk)
    event.category =data['category']
    event.country = data['country']
    event.state = data['state']
    event.address = data['address']
    event.contact = data['contact']
    # event.image=data['image']
    event.title = data['title']
    event.content = data['content']
    event.isApproved = data['isApproved']
    event.save()
    serializer = EventSerializers(event, many=False)
    return Response(serializer.data)



@api_view(['DELETE', 'GET'])
def EventDelete(request, pk, slug):
    if request.method == 'GET':
        event = Event.objects.get(pk=pk, slug=slug)
        serializer = EventSerializers(event, many=False)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        event = Event.objects.get(pk=pk, slug=slug)
        event.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)




@api_view(['POST'])
def EventImage(request):
    data = request.data

    product_id = data['product_id']
    event = Event.objects.get(id=product_id)

    event.image = request.FILES.get('image')
    event.save()

    serializer = EventSerializers(event, many=False)
    
    return Response(serializer.data)
