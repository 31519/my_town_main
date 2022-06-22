from rest_framework import serializers
from Dashboards.serializers import ContactUsSerializers
from Dashboards.models import ContactUs
# from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import status
from django.conf import settings

@api_view(['POST'])
def ContactUsForm(request):
    data = request.data
    print("profiledata", data)


    try:

        contact = ContactUs.objects.create(
            email=data['email'],
            full_name=data['full_name'],
            message = data['message'],
        )
        serializers = ContactUsSerializers(contact, many=False)
        message = {'detail': 'Thank you ! Your feedback has been submitted'}
        return Response(message, status=status.HTTP_200_OK)
    except:
        message = {'detail': 'Try Next Time'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
