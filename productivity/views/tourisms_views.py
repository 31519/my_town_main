# from rest_framework.serializers import Serializer
from productivity.models import Tourisms, TourismsGallary
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from productivity.serializers import TourismsSerializers, TourismsGallarySerializers
from rest_framework import status
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from Dashboards.signals import object_viewed_signal, detail_object_viewed_signal



@api_view(['GET'])
def TourismsList(request):
    query = request.query_params.get('keyword')
    if query ==None:
        query = ""
    tourisms = Tourisms.objects.filter(title__icontains=query, isApproved=True).order_by('-flag', '-createdAt')

    page = request.query_params.get('page')
    paginator = Paginator(tourisms, 8)
    try:
        tourisms = paginator.page(page)
    except EmptyPage:
        t
        local = paginator.page(paginator.num_pages)
    except PageNotAnInteger:
        ourisms = paginator.page(1)

    if page == None:
        page = 1
    page = int(page)

    serializer = TourismsSerializers(tourisms, many=True)
    return Response({"tourisms":serializer.data, "page":page, "pages": paginator.num_pages})

def TourismsViewsUpdate(pk, slug):
    tourisms = Tourisms.objects.get(pk=pk, slug=slug)
    tourisms.views += 1
    tourisms.save()

@api_view(['GET'])
def TourismsDetailList(request, pk, slug):
    tourisms = Tourisms.objects.get(pk=pk, slug=slug)
    TourismsViewsUpdate(pk, slug)
    serializer = TourismsSerializers(tourisms, many=False)
    detail_object_viewed_signal.send(tourisms.__class__, instance=tourisms, request=request)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def TourismsCreate(request):
    # data = request.data
    current_user = request.user
    tourisms = Tourisms.objects.create(
        user =current_user,
        category="",
        country= "",
        state=   "",
        address= "",
        contact= '',
        image=   "",
        title=   "Tourisms",
        content= ""
    )
    tourismsGallary = TourismsGallary.objects.create(
        tourisms = tourisms
    )
    serializer = TourismsSerializers(tourisms, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def TourismsUpdate(request, pk, slug):
    data = request.data
    tourisms = Tourisms.objects.get(pk=pk, slug=slug)
    tourisms.category =data['category']
    tourisms.country = data['country']
    tourisms.state = data['state']
    tourisms.address = data['address']
    tourisms.contact = data['contact']
    # tourisms.image=data['image']
    tourisms.title = data['title']
    tourisms.content = data['content']
    tourisms.save()
    serializer = TourismsSerializers(tourisms, many=False)
    return Response(serializer.data)



@api_view(['PUT'])
@permission_classes([IsAdminUser])
def TourismsAdminUpdate(request, pk, slug):
    data = request.data
    tourisms = Tourisms.objects.get(pk=pk, slug=slug)
    tourisms.category =data['category']
    tourisms.country = data['country']
    tourisms.state = data['state']
    tourisms.address = data['address']
    tourisms.contact = data['contact']
    tourisms.image=data['image']
    tourisms.title = data['title']
    tourisms.content = data['content']
    tourisms.isApproved = data['isApproved']
    tourisms.save()
    serializer = TourismsSerializers(tourisms, many=False)
    return Response(serializer.data)



@api_view(['DELETE', 'GET'])
@permission_classes([IsAuthenticated])
def TourismsDelete(request, pk, slug):
    if request.method == 'GET':
        tourisms = Tourisms.objects.get(pk=pk, slug=slug)
        serializer = TourismsSerializers(tourisms, many=False)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        tourisms = Tourisms.objects.get(pk=pk, slug=slug)
        tourisms.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)




@api_view(['POST'])
def TourismsImage(request):
    data = request.data

    product_id = data['product_id']
    tourisms = Tourisms.objects.get(id=product_id)

    tourisms.image = request.FILES.get('image')
    tourisms.save()

    serializer = TourismsSerializers(tourisms, many=False)
    
    return Response(serializer.data)


@api_view(['POST'])
def TourismsManyImage(request):
    data = request.data

    product_id = data['product_id']
    
    maintourisms = Tourisms.objects.get(id=product_id)

    images = request.FILES.get('image')
    tourismsGallary = TourismsGallary.objects.create(
        tourisms = maintourisms,
        image = images
    )
    serializer = TourismsGallarySerializers(tourismsGallary, many=False)
    
    return Response(serializer.data)



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def UserTourismsList(request):
    current_user = request.user
    tourisms = Tourisms.objects.filter(user=current_user)
    serializer = TourismsSerializers(tourisms, many=True)
    return Response(serializer.data)