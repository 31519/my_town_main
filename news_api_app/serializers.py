
from news_api_app.models import Technology, Science, Health, Business, LocalNews,LocalNewsGallary, Profile, RequestForm
from Dashboards.serializers import UserSerializers
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

class LocalNewsGallarySerializers(serializers.ModelSerializer):
    class Meta:
        model = LocalNewsGallary
        fields= "__all__"





class RequestFormSerializers(serializers.ModelSerializer):
    class Meta:
        model = RequestForm
        fields = '__all__'


class LocalNewsSerializers(serializers.ModelSerializer):
    user = UserSerializers(read_only=True)
    manyImages = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = LocalNews
        fields = '__all__'


    def get_manyImages(self, obj):
        localnews = obj.localnewsgallary_set.all()
        serializer = LocalNewsGallarySerializers(localnews, many=True)
        return serializer.data



  

class ProfileSerializers(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields= "__all__"