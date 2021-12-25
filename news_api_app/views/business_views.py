from rest_framework.response import Response
from rest_framework import status
from news_api_app.models import Business
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from news_api_app.serializers import BusinessSerializers



@api_view(['GET'])
def BusinessList(request):
    business = Business.objects.all()
    serializer = BusinessSerializers(business, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def BusinessDetailList(request, pk):
    business = Business.objects.get(pk=pk)
    serializer = BusinessSerializers(business, many=False)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def BusinessCreate(request):
    data = request.data
    user = request.user
    business = Business.objects.create(
        user = user,
        author = data['author'],
        title= data['title'],
        description= data['description'],
        url=data['url'],
        urlToImage=data['urlToImage'],
        publishedAt=data['publishedAt'],
        content = data['content']
    )

    serializer = BusinessSerializers(business, many=False)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def BusinessDelete(request, pk):
    if request.method == 'POST':
        business = Business.object.get(pk=pk)
        serializer = BusinessSerializers(business, many=False)
        return Response(serializer.data)
    elif request.method == 'DELETE':
        business = Business.object.get(pk=pk)
        business.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

