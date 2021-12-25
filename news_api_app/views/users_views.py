from rest_framework import serializers
from news_api_app.models import Profile
from news_api_app.serializers import UserSerializers, RegistrationSerializer, UserSerializerWithToken, ProfileSerializers
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from rest_framework import status

from rest_framework_simplejwt.tokens import RefreshToken

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v

        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
@permission_classes([IsAdminUser])
def UserList(request):
    user = User.objects.all()
    serializer = UserSerializers(user, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def UserDetail(request, pk):
    user = User.objects.get(pk=pk)
    serializer = UserSerializers(user, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def UserRegistration(request):
    if request.method == 'POST':
        profileData = request.data
        serializers = RegistrationSerializer(data=request.data)

        data ={}
        if serializers.is_valid():
            account = serializers.save()
            # profile = Profile.objects.create(
            #     user=account,
            #     username=account.username,
            #     email=account.email,
            #     # email=profileData['email'],
            #     flag=True,
            #     firstName=profileData['firstName'],
            #     lastName=profileData['lastName'],
            #     gender=profileData['gender'],
            #     country=profileData['country'],
            #     state=profileData['state'],
            #     town=profileData['town'],
            #     pincode=profileData['pincode'],
            #     phoneNumber=profileData['phoneNumber'],
            #     profession=profileData['profession']

            # )
            # profile.save()

            data['username'] = account.username
            data['email'] = account.email
            data['password'] = account.password
            # token = Token.objects.get(user=account).key
            # data['token'] = token
            refresh = RefreshToken.for_user(account)
            data['token'] = {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }
        else:
            data = serializers.errors
        
        profile = Profile.objects.create(
            user=account,
            username=account.username,
            email=account.email,
            # email=profileData['email'],
            flag=True,
            firstName=profileData['firstName'],
            lastName=profileData['lastName'],
            gender=profileData['gender'],
            country=profileData['country'],
            state=profileData['state'],
            town=profileData['town'],
            pincode=profileData['pincode'],
            phoneNumber=profileData['phoneNumber'],
            profession=profileData['profession']

        )
        profile.save()


        
            

        return Response(data)


@api_view(['DELETE', 'GET'])
@permission_classes([IsAdminUser, IsAuthenticated])
def UserDelete(request, pk):
    if request.method == 'GET':
        user = User.objects.get(pk=pk)
        serializer = UserSerializers(user, many=False)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        user = User.objects.get(pk=pk)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def UserUpdate(request, pk):
    data = request.data
    user = User.objects.get(pk=pk)
    user.username =data['username']
    user.password = data['password']
    user.email = data['email']
    user.save()
    serializer = ProfileSerializers(user, many=False)
    return Response(serializer.data)



# @api_view(['POST'])
# def UserRegistration(request):
#     data  = request.data
#     user = User.objects.create(
#         username=data['username'],
#         email = data['email'],
#         password = data['password'],
#         # password2 = data['password2']

#     )
#     serializer = RegistrationSerializer(user, many=False)
#     return Response(serializer.data)



@api_view(['GET'])
@permission_classes([IsAdminUser])
def ProfileList(request):
    profile = Profile.objects.all()
    serializer = ProfileSerializers(profile, many=True)
    return Response(serializer.data)



@api_view(['GET'])
@permission_classes([ IsAuthenticated])
def ProfileDetail(request):
    current_user = request.user
    profile = Profile.objects.get(user = current_user)
    serializer = ProfileSerializers(profile, many=False)
    return Response(serializer.data)




@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def ProfileUpdate(request, pk):
    current_user = request.user
    data = request.data
    profile = Profile.objects.get(pk=pk)
    profile.username =data['username']
    profile.firstName = data['firstName']
    profile.lastName = data['lastName']
    profile.email = data['email']
    profile.state = data['state']
    profile.town=data['town']
    profile.country= data['country']
    profile.pincode = data['pincode']
    profile.profession = data['profession']
    profile.phoneNumber = data['phoneNumber']
    profile.isApproved = data['isApproved']
    profile.save()
    current_user.username = profile.username
    current_user.email = profile.email
    current_user.save()
    serializer = ProfileSerializers(profile, many=False)
    return Response(serializer.data)





