from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from news_api_app.models import LocalNews, LocalNewsGallary
from news_api_app.serializers import LocalNewsSerializers, LocalNewsGallarySerializers
from  rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework import status
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger





@api_view(['GET'])
def LocalNewsList(request):
    query = request.query_params.get('keyword')
    if query ==None:
        query = ""


    local = LocalNews.objects.filter(title__icontains=query)

    page = request.query_params.get('page')
    paginator = Paginator(local, 8)
    try:
        local = paginator.page(page)
    except EmptyPage:
        local = paginator.page(1)
    except PageNotAnInteger:
        local = paginator.page(paginator.num_pages)

    if page == None:
        page = 1
    page = int(page)


    serializer = LocalNewsSerializers(local, many=True)
    return Response({"local":serializer.data, "page":page, "pages": paginator.num_pages})


@api_view(['GET'])
def LocalNewsDetailList(request, pk, slug):
    local = LocalNews.objects.get(pk=pk,slug=slug)
    serializer = LocalNewsSerializers(local, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def LocalNewsCreate(request):
    current_user = request.user
    local = LocalNews.objects.create(
        user =current_user,
        category="Content category",
        author=  'Content author',
        url=   'Content url',
        description = 'Content address',
        image=   'Content image',
        title=   'Content title',
        content= 'Content content'
    )
    serializer = LocalNewsSerializers(local, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def LocalNewsUpdate(request, pk, slug):
    data = request.data
    local = LocalNews.objects.get(pk=pk, slug=slug)
    local.category =data['category']
    local.author = data['author']
    local.url = data['url']
    local.title = data['title']
    local.content = data['content']
    local.save()
    serializer = LocalNewsSerializers(local, many=False)
    return Response(serializer.data)



# @api_view(['PUT'])
# @permission_classes([IsAdminUser])
# def LocalNewsAdminUpdate(request, pk):
#     data = request.data
#     jobs = Jobs.objects.get(pk=pk)
#     jobs.category =data['category']
#     jobs.country = data['country']
#     jobs.state = data['state']
#     jobs.address = data['address']
#     jobs.contact = data['contact']
#     # jobs.image=data['image']
#     jobs.title = data['title']
#     jobs.content = data['content']
#     jobs.isApproved = data['isApproved']
#     jobs.save()
#     serializer = JobsSerializers(jobs, many=False)
#     return Response(serializer.data)



@api_view(['DELETE', 'GET'])
@permission_classes([IsAuthenticated])
def LocalNewsDelete(request, pk, slug):
    if request.method == 'GET':
        local = LocalNews.objects.get(pk=pk, slug=slug)
        serializer = LocalNewsSerializers(local, many=False)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        local = LocalNews.objects.get(pk=pk, slug=slug)
        local.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
def LocalNewsImage(request):
    data = request.data
    product_id = data['product_id']
    local = LocalNews.objects.get(id=product_id)
    local.image = request.FILES.get('image')
    local.save()
    serializer = LocalNewsSerializers(local, many=False)
    return Response(serializer.data)



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def UserLocalNewsList(request):
    current_user = request.user
    local = LocalNews.objects.filter(user=current_user)
    serializer = LocalNewsSerializers(local, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def LocalManyImage(request):
    data = request.data

    product_id = data['product_id']
    
    mainlocal = LocalNews.objects.get(id=product_id)

    images = request.FILES.get('image')
    localGallary = LocalNewsGallary.objects.create(
        local = mainlocal,
        image = images
    )
    serializer = LocalNewsGallarySerializers(localGallary, many=False)

    
    return Response(serializer.data)
