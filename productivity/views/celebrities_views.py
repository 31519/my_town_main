# from rest_framework.serializers import Serializer
from productivity.models import Celebrities, CelebritiesGallary
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from productivity.serializers import CelebritiesSerializers, CelebritiesGallarySerializers
from rest_framework import status
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger



@api_view(['GET'])
def CelebritiesList(request):
    query = request.query_params.get('keyword')
    if query ==None:
        query = ""

    celebrities = Celebrities.objects.filter(title__icontains=query, isApproved=True)

    page = request.query_params.get('page')
    paginator = Paginator(celebrities, 8)
    try:
        celebrities = paginator.page(page)
    except EmptyPage:
        celebrities = paginator.page(1)
    except PageNotAnInteger:
        celebrities = paginator.page(paginator.num_pages)

    if page == None:
        page = 1
    page = int(page)


    serializer = CelebritiesSerializers(celebrities, many=True)
    return Response({"celebrity":serializer.data, "page":page, "pages": paginator.num_pages})

@api_view(['GET'])
def CelebritiesDetailList(request, pk, slug):
    celebrities = Celebrities.objects.get(pk=pk, slug=slug)
    serializer = CelebritiesSerializers(celebrities, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def CelebritiesCreate(request):
    data = request.data
    current_user = request.user
    celebrities = Celebrities.objects.create(
        user =current_user,
        category="",
        country= '',
        state=   '',
        address= '',
        contact= '',
        image=   '',
        title=   'celeb',
        content= ''
    )
    serializer = CelebritiesSerializers(celebrities, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def CelebritiesUpdate(request, pk, slug):
    data = request.data
    celebrities = Celebrities.objects.get(pk=pk, slug=slug)
    celebrities.category =data['category']
    celebrities.country = data['country']
    celebrities.state = data['state']
    celebrities.address = data['address']
    celebrities.contact = data['contact']
    celebrities.url=data['url']
    celebrities.title = data['title']
    celebrities.content = data['content']
    celebrities.save()
    serializer = CelebritiesSerializers(celebrities, many=False)
    return Response(serializer.data)



@api_view(['PUT'])
@permission_classes([IsAdminUser])
def CelebritiesAdminUpdate(request, pk):
    data = request.data
    celebrities = Celebrities.objects.get(pk=pk)
    celebrities.category =data['category']
    celebrities.country = data['country']
    celebrities.state = data['state']
    celebrities.address = data['address']
    celebrities.contact = data['contact']
    celebrities.image=data['image']
    celebrities.title = data['title']
    celebrities.content = data['content']
    celebrities.isApproved = data['isApproved']
    celebrities.save()
    serializer = CelebritiesSerializers(celebrities, many=False)
    return Response(serializer.data)



@api_view(['DELETE', 'GET'])
@permission_classes([IsAuthenticated])
def CelebritiesDelete(request, pk, slug):
    if request.method == 'GET':
        celebrities = Celebrities.objects.get(pk=pk, slug=slug)
        serializer = CelebritiesSerializers(celebrities, many=False)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        celebrities = Celebrities.objects.get(pk=pk)
        celebrities.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



@api_view(['POST'])
def CelebritiesImage(request):
    data = request.data

    product_id = data['product_id']
    celebrity = Celebrities.objects.get(id=product_id)

    celebrity.image = request.FILES.get('image')
    celebrity.save()

    serializer = CelebritiesSerializers(celebrity, many=False)
    
    return Response(serializer.data)

@api_view(['POST'])
def CelebritiesManyImage(request):
    data = request.data

    product_id = data['product_id']
    celebrity = Celebrities.objects.get(id=product_id)
    celebrityGallary = CelebritiesGallary.objects.create(
        celebrity = celebrity,
        image = request.FILES.get('image')
    )

    serializer = CelebritiesGallarySerializers(celebrityGallary, many=False)
    return Response(serializer.data)




@api_view(['GET'])
@permission_classes([IsAuthenticated])
def UserCelebritiesList(request):
    current_user = request.user
    celebrity = Celebrities.objects.filter(user=current_user)
    serializer = CelebritiesSerializers(celebrity, many=True)
    return Response(serializer.data)