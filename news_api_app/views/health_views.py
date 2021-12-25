from rest_framework.response import Response
from rest_framework import status
from news_api_app.models import Health
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from news_api_app.serializers import HealthSerializers



@api_view(['GET'])
def HealthList(request):
    health = Health.objects.all()
    serializer = HealthSerializers(health, many=True)
    return Response(serializer.data)

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

