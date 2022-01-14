from rest_framework.serializers import Serializer
from productivity.models import Meme, Banner
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from productivity.serializers import MemeSerializers, BannerSerializers
from rest_framework import status
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger




@api_view(['GET'])
def MemeList(request):
    query = request.query_params.get('keyword')
    if query ==None:
        query = ""


    meme = Meme.objects.filter(title__icontains=query, isApproved=True)

    page = request.query_params.get('page')
    paginator = Paginator(meme, 8)
    try:
        meme = paginator.page(page)
    except EmptyPage:
        meme = paginator.page(1)
    except PageNotAnInteger:
        meme = paginator.page(paginator.num_pages)

    if page == None:
        page = 1
    page = int(page)


    serializer = MemeSerializers(meme, many=True)
    return Response({"meme":serializer.data, "page":page, "pages": paginator.num_pages})

@api_view(['GET'])
def MemeDetailList(request, pk, slug):
    meme = Meme.objects.get(pk=pk,slug=slug)
    serializer = MemeSerializers(meme, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def MemeCreate(request):
    current_user = request.user
    meme = Meme.objects.create(
        user =current_user,
        image='',
        title='',
    )
    serializer = MemeSerializers(meme, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def MemeUpdate(request, pk, slug):
    data = request.data
    meme = Meme.objects.get(pk=pk, slug=slug)
    meme.title = data['title']
    meme.save()
    serializer = MemeSerializers(meme, many=False)
    return Response(serializer.data)






@api_view(['DELETE', 'GET'])
@permission_classes([IsAuthenticated])
def MemeDelete(request, pk, slug):
    if request.method == 'GET':
        meme = Meme.objects.get(pk=pk, slug=slug)
        serializer = MemeSerializers(meme, many=False)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        meme = Meme.objects.get(pk=pk, slug=slug)
        meme.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
def MemeImage(request):
    data = request.data

    product_id = data['product_id']
    meme = Meme.objects.get(id=product_id)

    meme.image = request.FILES.get('image')
    meme.save()

    serializer = MemeSerializers(meme, many=False)
    
    return Response(serializer.data)


# Banner
@api_view(['GET'])
def BannerList(request):
    banner = Banner.objects.all()
    serializer = BannerSerializers(banner, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def UserMemeList(request):
    current_user = request.user
    meme = Meme.objects.filter(user=current_user)
    serializer = MemeSerializers(meme, many=True)
    return Response(serializer.data)