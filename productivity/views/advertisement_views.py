# from rest_framework.serializers import Serializer
from productivity.models import Advertisement
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from productivity.serializers import AdvertisementSerializers
from rest_framework import status
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger



@api_view(['GET'])
def AdvertisementList(request):
    query = request.query_params.get('keyword')
    if query ==None:
        query = ""
    advertisement = Advertisement.objects.filter(title__icontains=query)
    page = request.query_params.get('page')
    paginator = Paginator(advertisement, 5)
    try:
        advertisement = paginator.page(page)
    except EmptyPage:
        advertisement = paginator.page(1)
    except PageNotAnInteger:
        advertisement = paginator.page(paginator.num_pages)

    if page == None:
        page = 1
    page = int(page)

    serializer = AdvertisementSerializers(advertisement, many=True)
    return Response({"advertise":serializer.data, "page":page, "pages": paginator.num_pages})

@api_view(['GET'])
def AdvertisementDetailList(request, pk, slug):
    advertisement = Advertisement.objects.get(pk=pk, slug=slug)
    serializer = AdvertisementSerializers(advertisement, many=False)
    return Response(serializer.data)


@api_view(['POST'])
# @permission_classes([IsAuthenticated,])
def AdvertisementCreate(request):
    data = request.data
    current_user = request.user
    advertisement = Advertisement.objects.create(
        user =current_user,
        category="category",
        country='country',
        state='state',
        address='address',
        contact='contact',
        image='image',
        title='title',
        content='content'
    )
    serializer = AdvertisementSerializers(advertisement, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def AdvertisementUpdate(request, pk, slug):
    data = request.data
    advertisement = Advertisement.objects.get(pk=pk, slug=slug)
    advertisement.category =data['category']
    advertisement.country = data['country']
    advertisement.state = data['state']
    advertisement.address = data['address']
    advertisement.contact = data['contact']
    advertisement.image=data['image']
    advertisement.title = data['title']
    advertisement.content = data['content']
    advertisement.save()
    serializer = AdvertisementSerializers(advertisement, many=False)
    return Response(serializer.data)



@api_view(['PUT'])
@permission_classes([IsAdminUser])
def AdvertisementAdminUpdate(request, pk):
    data = request.data
    advertisement = Advertisement.objects.get(pk=pk)
    advertisement.category =data['category']
    advertisement.country = data['country']
    advertisement.state = data['state']
    advertisement.address = data['address']
    advertisement.contact = data['contact']
    advertisement.image=data['image']
    advertisement.title = data['title']
    advertisement.content = data['content']
    advertisement.isApproved = data['isApproved']
    advertisement.save()
    serializer = AdvertisementSerializers(advertisement, many=False)
    return Response(serializer.data)



@api_view(['DELETE', 'GET'])
@permission_classes([IsAdminUser])
def AdvertisementDelete(request, pk, slug):
    if request.method == 'GET':
        advertisement = Advertisement.objects.get(pk=pk, slug=slug)
        serializer = AdvertisementSerializers(advertisement, many=False)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        advertisement = Advertisement.objects.get(pk=pk, slug=slug)
        advertisement.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
