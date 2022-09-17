# from rest_framework.serializers import Serializer
from productivity.models import Advertisement
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from productivity.serializers import AdvertisementSerializers
from rest_framework import status
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from Dashboards.signals import object_viewed_signal, detail_object_viewed_signal
from datetime import datetime , timedelta
from rest_framework.pagination import PageNumberPagination


@api_view(['GET'])
def AdvertisementListMainList(request):
    query = request.query_params.get('keyword')
    if query ==None:
        query = ""

    advertisement = Advertisement.objects.filter(title__icontains=query).order_by('-id')

    count = advertisement.count()

    #Pagination
    resPerPage = 2

    paginator = PageNumberPagination()
    paginator.page_size = resPerPage

    queryset = paginator.paginate_queryset(advertisement, request)

    serializer = AdvertisementSerializers(queryset, many=True)
    # object_viewed_signal.send(local.__class__, instance="LocalNews", request=request)
    return Response({"advertisement":serializer.data, "count":count, "resPerPage":resPerPage})




@api_view(['GET'])
def AdvertisementList(request):
    current_date = datetime.now()
    query = request.query_params.get('keyword')
    if query ==None:
        query = ""
    advertisement = Advertisement.objects.filter(title__icontains=query, isApproved=True, expireDate__gte = current_date ).order_by('-flag', '-createdAt')
    page = request.query_params.get('page')
    paginator = Paginator(advertisement, 6)
    try:
        advertisement = paginator.page(page)
    except EmptyPage:
        
        advertisement = paginator.page(paginator.num_pages)
    except PageNotAnInteger:
        advertisement = paginator.page(1)

    if page == None:
        page = 1
    page = int(page)

    serializer = AdvertisementSerializers(advertisement, many=True)
    return Response({"advertise":serializer.data, "page":page, "pages": paginator.num_pages})


def AdvertisementViewsUpdate(pk, slug):
    advertisement = Advertisement.objects.get(pk=pk, slug=slug)
    advertisement.views += 1
    advertisement.save()

@api_view(['GET'])
def AdvertisementDetailList(request, pk, slug):
    advertisement = Advertisement.objects.get(pk=pk, slug=slug)
    AdvertisementViewsUpdate(pk, slug)
    serializer = AdvertisementSerializers(advertisement, many=False)
    detail_object_viewed_signal.send(advertisement.__class__, instance=advertisement, request=request)
    return Response(serializer.data)


@api_view(['POST'])
# @permission_classes([IsAuthenticated,])
def AdvertisementCreate(request):
    data = request.data
    current_user = request.user
    advertisement = Advertisement.objects.create(
        user =current_user,
        category="Advertisement",
        country='India',
        state=  'Meghalaya',
        address='West Jaintia Hill District',
        contact=00000000,
        image=  '',
        title=  'advertise',
        content=''
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
    advertisement.title = data['title']
    advertisement.content = data['content']
    advertisement.day     = data['days']

    advertisement.save()
    print("day", advertisement.day)
    serializer = AdvertisementSerializers(advertisement, many=False)
    return Response(serializer.data)



@api_view(['PUT'])
@permission_classes([IsAdminUser, IsAuthenticated])
def AdvertisementAdminUpdate(request, pk):
    data = request.data
    advertisement = Advertisement.objects.get(pk=pk)
    advertisement.category =data['category']
    advertisement.country = data['country']
    advertisement.state = data['state']
    advertisement.address = data['address']
    advertisement.contact = data['contact']
    # advertisement.image=data['image']
    advertisement.title = data['title']
    advertisement.content = data['content']
    advertisement.save()
    serializer = AdvertisementSerializers(advertisement, many=False)
    return Response(serializer.data)



@api_view(['DELETE', 'GET'])
@permission_classes([IsAuthenticated])
def AdvertisementDelete(request, pk, slug):
    if request.method == 'GET':
        advertisement = Advertisement.objects.get(pk=pk, slug=slug)
        serializer = AdvertisementSerializers(advertisement, many=False)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        advertisement = Advertisement.objects.get(pk=pk, slug=slug)
        advertisement.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



@api_view(['POST'])
def AdvertisementImage(request):
    data = request.data

    product_id = data['product_id']
    advertise = Advertisement.objects.get(id=product_id)

    advertise.image = request.FILES.get('image')
    advertise.save()

    serializer = AdvertisementSerializers(advertise, many=False)
    
    return Response(serializer.data)



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def UserAdvertisementList(request):
    current_user = request.user
    advertisement = Advertisement.objects.filter(user=current_user)
    serializer = AdvertisementSerializers(advertisement, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def AllAdvertisementList(request):
    advertisement = Advertisement.objects.all()
    serializer = AdvertisementSerializers(advertisement, many=True)
    return Response(serializer.data)


@api_view(['PUT'])
# @permission_classes([IsAdminUser])
def AdvertisementApproved(request, pk, slug):
    data = request.data
    advertisement = Advertisement.objects.get(pk=pk, slug=slug)
    day = int(advertisement.day) + 1
    advertisement.isApproved =data['isApprovedData']
    advertisement.approvedDate = datetime.now()
    advertisement.expireDate = datetime.now() + timedelta(days = day)
    advertisement.save()
    serializer = AdvertisementSerializers(advertisement, many=False)
    return Response(serializer.data)

