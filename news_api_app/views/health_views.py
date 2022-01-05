from rest_framework.response import Response
from rest_framework import status
from news_api_app.models import Health
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from news_api_app.serializers import HealthSerializers
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger



@api_view(['GET'])
def HealthList(request):
    query = request.query_params.get('keyword')
    if query ==None:
        query = ""


    health = Health.objects.filter(title__icontains=query)

    page = request.query_params.get('page')
    paginator =  Paginator(health, 5)

    try:
        health = paginator.page(page)
    except PageNotAnInteger:
        health = paginator.page(1)
    except EmptyPage:
        health = paginator.page(paginator.num_pages)
    if page == None:
        page=1

    page=int(page)


    serializer = HealthSerializers(health, many=True)
    return Response({"health":serializer.data, "page":page, "pages":paginator.num_pages})

@api_view(['GET'])
def HealthDetailList(request, pk):
    health = Health.objects.get(pk=pk)
    serializer = HealthSerializers(health, many=False)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def HealthCreate(request):
    data = request.data
    user = request.user
    health = Health.objects.create(
        user = user,
        author = data['author'],
        title= data['title'],
        description= data['description'],
        url=data['url'],
        urlToImage=data['urlToImage'],
        publishedAt=data['publishedAt'],
        content = data['content']
    )

    serializer = HealthSerializers(health, many=False)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def HealthDelete(request, pk):
    if request.method == 'POST':
        health = Health.object.get(pk=pk)
        serializer = HealthSerializers(health, many=False)
        return Response(serializer.data)
    elif request.method == 'DELETE':
        health = Health.object.get(pk=pk)
        health.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

