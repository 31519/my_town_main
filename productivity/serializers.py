from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework import serializers
from productivity.models import Jobs, Advertisement, Shops, OwnBusiness, Celebrities, Hotels, Tourisms, Resell, Event, Meme, Banner

class JobsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Jobs
        fields ='__all__'



class AdvertisementSerializers(serializers.ModelSerializer):
    class Meta:
        model = Advertisement
        fields ='__all__'



class ShopsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Shops
        fields ='__all__'


class OwnBusinessSerializers(serializers.ModelSerializer):
    class Meta:
        model = OwnBusiness
        fields ='__all__'


class CelebritiesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Celebrities
        fields ='__all__'

class HotelsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Hotels
        fields ='__all__'

class TourismsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Tourisms
        fields ='__all__'

class ResellSerializers(serializers.ModelSerializer):
    class Meta:
        model = Resell
        fields ='__all__'


class EventSerializers(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields ='__all__'



class MemeSerializers(serializers.ModelSerializer):
    class Meta:
        model = Meme
        fields ='__all__'

class BannerSerializers(serializers.ModelSerializer):
    class Meta:
        model = Banner
        fields ='__all__'
