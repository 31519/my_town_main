from django.shortcuts import render
from Dashboards.models import ObjectViewed
from Dashboards.serializers import ObjectViewedSerializers
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
# from ipaddress import ip_address
# from django.contrib.contenttypes.fields import GenericForeignKey
# from django.contrib.contenttypes.models import ContentType
# from .signals import object_viewed_signal
# from .utils import get_client_ip
# from news_api_app.models import Profile
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from Dashboards.utils import get_client_ip



@api_view(['GET'])
def ViewList(request):

    views = ObjectViewed.objects.all()

    serializer = ObjectViewedSerializers(views, many=True)
    return Response(serializer.data)

@api_view(['PUT'])
def ViewsCreate(request):
    data = request.data
    objectView = ObjectViewed.objects.create(
        page =data['VeiwPage'],
        ip_address = get_client_ip(request)
    )
    serializer = ObjectViewedSerializers(objectView, many=False)
    return Response(serializer.data)


