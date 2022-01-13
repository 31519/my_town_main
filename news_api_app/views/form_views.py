from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from news_api_app.models import RequestForm, Profile
from news_api_app.serializers import RequestFormSerializers
from rest_framework import status



@api_view(['GET'])
def RequestFormList(request):
    form = RequestForm.objects.all()
    serializer = RequestFormSerializers(form, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def RequestFormDetail(request, pk, slug):
    form = RequestForm.objects.get(pk=pk, slug=slug)
    serializer = RequestFormSerializers(form, many=False)
    return Response(serializer.data)



@api_view(['POST'])
def RequestFormCreate(request):
    current_user = request.user
    data = request.data
    form = RequestForm.objects.create(
        user =current_user,
        username= data['username'],
        email= data['email'],
        category= data['category'],
        content= data['content']

    )
    profile = Profile.objects.get(user=current_user)
    profile.isRequested = True
    profile.save()
    serializer = RequestFormSerializers(form, many=False)
    return Response(serializer.data)



@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def RequestFormUpdate(request, pk, slug):
    data = request.data
    form = RequestForm.objects.get(pk=pk,slug=slug)
    form.category =data['category']
    form.username = data['username']
    form.email = data['email']
    form.content = data['content']
    form.save()
    serializer = RequestFormSerializers(form, many=False)
    return Response(serializer.data)