from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from news_api_app.models import LocalNews
from news_api_app.serializers import LocalNewsSerializers
from  rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework import status



@api_view(['GET'])
def LocalNewsList(request):
    local = LocalNews.objects.all()
    serializer = LocalNewsSerializers(local, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def LocalNewsDetailList(request, pk):
    local = LocalNews.objects.get(pk=pk)
    serializer = LocalNewsSerializers(local, many=False)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def LocalNewsCreate(request):
    data = request.data
    user = request.user
    local = LocalNews.objects.create(
        user=user,
        author=data['author'],
        title=data['title'],
        description=data['description'],
        url=data['url'],
        urlToImage=data['urlToImage'],
        publishedAt=data['publishedAt'],
        content= data['content']

    )
    serializer = LocalNewsSerializers(local, many=False)
    return Response(serializer.data)

@api_view(['GET', 'DELETE'])
@permission_classes([IsAdminUser])
def LocalNewsDelete(request, pk):
    if request.method == 'GET':
        local = LocalNews.objects.get(pk=pk)
        serializer = LocalNewsSerializers(local, many=False)
        return Response(serializer.data)
    elif request.method == 'DELETE':
        local = LocalNews.objects.get(pk=pk)
        local.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)