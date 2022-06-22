from rest_framework import serializers
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from rest_framework_simplejwt.tokens import RefreshToken
from .models import ObjectViewed, UserAccount, ContactUs

class ObjectViewedSerializers(serializers.ModelSerializer):
    # content_type  = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = ObjectViewed
        fields = '__all__'


class ContactUsSerializers(serializers.ModelSerializer):
    # content_type  = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = ContactUs
        fields = '__all__'

class UserSerializers(serializers.ModelSerializer):
    isAdmin  = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = UserAccount
        fields  = ['id', 'email','first_name','last_name', 'isAdmin','image', 'phone_number', 'country', 'state', 'city', 'pincode', 'address', 'gender',  'is_approved']

    def get_isAdmin(self, obj):
        return obj.is_admin

class UserSerializerWithToken(UserSerializers):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = UserAccount
        fields  = ['id', 'email','first_name','last_name', 'isAdmin', 'token',  'is_approved']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)



class RegistrationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    
    class Meta:
        model = UserAccount
        fields = [ 'email', 'password', 'password2']

        extra_kwargs = {
            'password':{'write_only':True}
        }

    def save(self):
        password = self.validated_data['password']
        password2 = self.validated_data['password2']

        if password != password2:
            raise serializers.ValidationError({'Error':'P1 namd P2 must be the same'})
        
        if UserAccount.objects.filter(email=self.validated_data['email']).exists():
            raise serializers.ValidationError({'Error':'Email already exists'})

        account = UserAccount(email=self.validated_data['email'], username=self.validated_data['username'])
        account.set_password(password)
        account.save()
        return account
      
