from rest_framework import serializers
from Dashboards.serializers import UserSerializers, RegistrationSerializer, UserSerializerWithToken
from Dashboards.models import UserAccount
# from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings

from rest_framework_simplejwt.tokens import RefreshToken

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.hashers import make_password

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
# @permission_classes([IsAdminUser])
def UserList(request):
    user = UserAccount.objects.all()
    serializer = UserSerializers(user, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def UserDetail(request, pk):
    current_user = request.user
    user = UserAccount.objects.get(pk=pk)
    serializer = UserSerializers(user, many=False)
    return Response(serializer.data)



@api_view(['POST'])
def UserRegistration(request):
    data = request.data
    # print("profiledata", data)


    try:

        user = UserAccount.objects.create(
            first_name=data['first_name'],
            last_name=data['last_name'],
            email = data['email'],
            phone_number = data['phone_number'],
            country = data['country'],
            state = data['state'],
            city = data['city'],
            pincode = data['pincode'],
            address = data['address'],
            gender = data['gender'],
            
            password=make_password(data['password']),
            is_active = True


        )
        serializers = UserSerializerWithToken(user, many=False)
        return Response(serializers.data)
    except:
        message = {'detail': 'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['POST'])
# def UserRegistration(request):
#     if request.method == 'POST':
#         profileData = request.data
#         print("profiledata", profileData)
#         serializers = RegistrationSerializer(data=request.data)

#         data ={}
#         if serializers.is_valid():
#             try:

#                 account = serializers.save()

#                 data['email'] = account.email
#                 data['password'] = account.password
                
#                 # token = Token.objects.get(user=account).key
#                 # data['token'] = token
#                 refresh = RefreshToken.for_user(account)
#                 data['token'] = {
#                     'refresh': str(refresh),
#                     'access': str(refresh.access_token),
#                 }
                

#             except:
#                 message = {'detail': "User with this email already exit"}
#                 return Response(message, status.HTTP_400_BAD_REQUEST)


#         else:
#             data = serializers.errors
#             print("profile error")


#         try: 
#             send_mail(
#                 subject="Register by " + account.username,
#                 message="Thank you for registering. Your account is live",
#                 from_email=settings.EMAIL_HOST_USER,
#                 recipient_list=[account.email, settings.EMAIL_HOST_RECIPIENT],
#             )
#         except:
#             pass

#         return Response(data)


@api_view(['DELETE', 'GET'])
@permission_classes([IsAdminUser, IsAuthenticated])
def UserDelete(request, pk):
    if request.method == 'GET':
        user = UserAccount.objects.get(pk=pk)
        serializer = UserSerializers(user, many=False)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        user = UserAccount.objects.get(pk=pk)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def UserUpdate(request, pk):
    data = request.data
    user = UserAccount.objects.get(pk=pk)
    user.email = data['email']
    user.first_name = data['firstName']
    user.last_name = data['lastName']
    user.phone_number = data['phoneNumber']
    user.country = data['country']
    user.state = data['state']
    user.city = data['city']
    user.pincode = data['pincode']
    user.address = data['address']
    user.gender = data['gender']
    user.save()
    try: 
        send_mail(
            subject="Update profile ",
            message= user.username + " your profile has been updated ",
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[user.email, settings.EMAIL_HOST_RECIPIENT],
        )
    except:
        pass
    serializer = UserSerializers(user, many=False)
    return Response(serializer.data)


