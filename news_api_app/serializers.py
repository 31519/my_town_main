from django.contrib.auth.models import User
from news_api_app.models import Technology, Science, Health, Business, LocalNews, Profile, RequestForm

from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken

class TechnologySerializers(serializers.ModelSerializer):

    class Meta:
        model = Technology
        fields = '__all__'
class ScienceSerializers(serializers.ModelSerializer):
    class Meta:
        model = Science
        fields = '__all__'
    
class HealthSerializers(serializers.ModelSerializer):
    class Meta:
        model = Health
        fields = '__all__'

class BusinessSerializers(serializers.ModelSerializer):
    class Meta:
        model = Business
        fields = '__all__'


class LocalNewsSerializers(serializers.ModelSerializer):
    class Meta:
        model = LocalNews
        fields = '__all__'


class RequestFormSerializers(serializers.ModelSerializer):
    class Meta:
        model = RequestForm
        fields = '__all__'

class UserSerializers(serializers.ModelSerializer):
    isAdmin  = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields  = ['id', 'username', 'email', 'isAdmin']

    def get_isAdmin(self, obj):
        return obj.is_staff

class UserSerializerWithToken(UserSerializers):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields  = ['id', 'username', 'email', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)



class RegistrationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    
    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'password2']

        extra_kwargs = {
            'password':{'write_only':True}
        }

    def save(self):
        password = self.validated_data['password']
        password2 = self.validated_data['password2']

        if password != password2:
            raise serializers.ValidationError({'Error':'P1 namd P2 must be the same'})
        
        if User.objects.filter(email=self.validated_data['email']).exists():
            raise serializers.ValidationError({'Error':'Email already exists'})

        account = User(email=self.validated_data['email'], username=self.validated_data['username'])
        account.set_password(password)
        account.save()
        return account
        

class ProfileSerializers(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields= "__all__"