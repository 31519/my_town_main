from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework import serializers
from productivity.models import Jobs, JobsDetail, Advertisement, Shops, OwnBusiness, Celebrities, Hotels, Tourisms, Resell, Event, Meme, Banner, CelebritiesGallary, TourismsGallary

class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields ='__all__'




class AdvertisementSerializers(serializers.ModelSerializer):
    class Meta:
        model = Advertisement
        fields ='__all__'



class ShopsSerializers(serializers.ModelSerializer):
    user = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Shops
        fields ='__all__'

    def get_user(self, obj):
        user = obj.user
        serializer = UserSerializers(user, many=False)
        return serializer.data


class OwnBusinessSerializers(serializers.ModelSerializer):
    class Meta:
        model = OwnBusiness
        fields ='__all__'


class CelebritiesGallarySerializers(serializers.ModelSerializer):
    class Meta:
        model = CelebritiesGallary
        fields ='__all__'

class CelebritiesSerializers(serializers.ModelSerializer):
    manyImages = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Celebrities
        fields ='__all__'

    def get_manyImages(self, obj):
        celebrity = obj.celebritiesgallary_set.all()
        serializer = CelebritiesGallarySerializers(celebrity, many=True)
        return serializer.data



class HotelsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Hotels
        fields ='__all__'



class JobsDetailSerializers(serializers.ModelSerializer):
    class Meta:
        model = JobsDetail
        fields ="__all__"
    


class JobsSerializers(serializers.ModelSerializer):
    jobsDetail= serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Jobs
        fields ='__all__'


    def get_jobsDetail(self, obj):
        jobsdetail = obj.jobsdetail_set.all()
        serializer = JobsDetailSerializers(jobsdetail, many=True)
        return serializer.data



class TourismsGallarySerializers(serializers.ModelSerializer):
    class Meta:
        model = TourismsGallary
        fields='__all__'

class TourismsSerializers(serializers.ModelSerializer):
    manyImages= serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Tourisms
        fields ='__all__'

    def get_manyImages(self, obj):
        tourisms = obj.tourismsgallary_set.all()
        serializer = TourismsGallarySerializers(tourisms, many=True)
        return serializer.data


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
