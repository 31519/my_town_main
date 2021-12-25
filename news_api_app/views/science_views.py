from rest_framework.response import Response
from rest_framework import status
from news_api_app.models import Science
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from news_api_app.serializers import ScienceSerializers



@api_view(['GET'])
def ScienceList(request):
    science = Science.objects.all()
    serializer = ScienceSerializers(science, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def ScienceDetailList(request, pk):
    science = Science.objects.get(pk=pk)
    serializer = ScienceSerializers(science, many=False)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def ScienceCreate(request):
    data = request.data
    user = request.user
    science = Science.objects.create(
        user = user,
        author = data['author'],
        title= data['title'],
        description= data['description'],
        url=data['url'],
        urlToImage=data['urlToImage'],
        publishedAt=data['publishedAt'],
        content = data['content']
    )

    serializer = ScienceSerializers(science, many=False)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def ScienceDelete(request, pk):
    if request.method == 'POST':
        science = Science.object.get(pk=pk)
        serializer = ScienceSerializers(science, many=False)
        return Response(serializer.data)
    elif request.method == 'DELETE':
        science = Science.object.get(pk=pk)
        science.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

