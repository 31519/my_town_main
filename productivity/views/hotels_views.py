# from rest_framework.serializers import Serializer
from productivity.models import Hotels
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from productivity.serializers import HotelsSerializers
from rest_framework import status
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from Dashboards.signals import object_viewed_signal, detail_object_viewed_signal


@api_view(['GET'])
def HotelsList(request):

    query = request.query_params.get('keyword')
    if query ==None:
        query = ""

    hotels = Hotels.objects.filter(title__icontains=query, isApproved=True)


    page = request.query_params.get('page')
    paginator = Paginator(hotels, 8)
    try:
        hotels = paginator.page(page)
    except EmptyPage:
        hotels = paginator.page(1)
    except PageNotAnInteger:
        hotels = paginator.page(paginator.num_pages)

    if page == None:
        page = 1
    page = int(page)
    serializer = HotelsSerializers(hotels, many=True)
    return Response({"hotel":serializer.data, "page":page, "pages": paginator.num_pages})


def HotelsViewsUpdate(pk, slug):
    hotels = Hotels.objects.get(pk=pk, slug=slug)
    hotels.views += 1
    hotels.save()

@api_view(['GET'])
def HotelsDetailList(request, pk, slug):
    hotels = Hotels.objects.get(pk=pk, slug=slug)
    HotelsViewsUpdate(pk, slug)
    serializer = HotelsSerializers(hotels, many=False)
    detail_object_viewed_signal.send(hotels.__class__, instance=hotels, request=request)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def HotelsCreate(request):
    data = request.data
    current_user = request.user
    hotels = Hotels.objects.create(
        user =current_user,
        category="",
        country='',
        state=  '',
        address='',
        contact='',
        image=  '',
        title=  'hotel',
        content=''
    )
    serializer = HotelsSerializers(hotels, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def HotelsUpdate(request, pk, slug):
    data = request.data
    hotels = Hotels.objects.get(pk=pk,slug=slug)
    hotels.category =data['category']
    hotels.country = data['country']
    hotels.state = data['state']
    hotels.address = data['address']
    hotels.contact = data['contact']
    # hotels.image=data['image']
    hotels.title = data['title']
    hotels.content = data['content']
    hotels.save()
    serializer = HotelsSerializers(hotels, many=False)
    return Response(serializer.data)



@api_view(['PUT'])
@permission_classes([IsAdminUser])
def HotelsAdminUpdate(request, pk):
    data = request.data
    hotels = Hotels.objects.get(pk=pk)
    hotels.category =data['category']
    hotels.country = data['country']
    hotels.state = data['state']
    hotels.address = data['address']
    hotels.contact = data['contact']
    hotels.image=data['image']
    hotels.title = data['title']
    hotels.content = data['content']
    hotels.isApproved = data['isApproved']
    hotels.save()
    serializer = HotelsSerializers(hotels, many=False)
    return Response(serializer.data)



@api_view(['DELETE', 'GET'])
@permission_classes([IsAuthenticated])
def HotelsDelete(request, pk, slug):
    if request.method == 'GET':
        hotels = Hotels.objects.get(pk=pk,slug=slug)
        serializer = HotelsSerializers(hotels, many=False)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        hotels = Hotels.objects.get(pk=pk,slug=slug)
        hotels.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)




@api_view(['POST'])
def HotelsImage(request):
    data = request.data

    product_id = data['product_id']
    hotels = Hotels.objects.get(id=product_id)

    hotels.image = request.FILES.get('image')
    hotels.save()

    serializer = HotelsSerializers(hotels, many=False)
    
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def UserHotelsList(request):
    current_user = request.user
    hotels = Hotels.objects.filter(user=current_user)
    serializer = HotelsSerializers(hotels, many=True)
    return Response(serializer.data)