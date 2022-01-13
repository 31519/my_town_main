# from rest_framework.serializers import Serializer
from productivity.models import OwnBusiness
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from productivity.serializers import OwnBusinessSerializers
from rest_framework import status


@api_view(['GET'])
def OwnBusinessList(request):
    business = OwnBusiness.objects.all()
    serializer = OwnBusinessSerializers(business, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def OwnBusinessDetailList(request, pk):
    business = OwnBusiness.objects.get(pk=pk)
    serializer = OwnBusinessSerializers(business, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def OwnBusinessCreate(request):
    data = request.data
    current_user= request.user
    business = OwnBusiness.objects.create(
        user =current_user,
        category=data['category'],
        country=data['country'],
        state=data['state'],
        address=data['address'],
        contact=data['contact'],
        image=data['image'],
        title=data['title'],
        content=data['content']
    )
    serializer = OwnBusinessSerializers(business, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def OwnBusinessUpdate(request, pk):
    data = request.data
    business = OwnBusiness.objects.get(pk=pk)
    business.category =data['category']
    business.country = data['country']
    business.state = data['state']
    business.address = data['address']
    business.contact = data['contact']
    # business.image=data['image']
    business.title = data['title']
    business.content = data['content']
    business.save()
    serializer = OwnBusinessSerializers(business, many=False)
    return Response(serializer.data)



@api_view(['POST'])
@permission_classes([IsAdminUser])
def OwnBusinessAdminUpdate(request, pk):
    data = request.data
    business = OwnBusiness.objects.get(pk=pk)
    business.category =data['category']
    business.country = data['country']
    business.state = data['state']
    business.address = data['address']
    business.contact = data['contact']
    # business.image=data['image']
    business.title = data['title']
    business.content = data['content']
    business.isApproved = data['isApproved']
    business.save()
    serializer = OwnBusinessSerializers(business, many=False)
    return Response(serializer.data)



@api_view(['DELETE', 'GET'])
@permission_classes([IsAuthenticated])
def OwnBusinessDelete(request, pk):
    if request.method == 'GET':
        business = OwnBusiness.objects.get(pk=pk)
        serializer = OwnBusinessSerializers(business, many=False)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        business = OwnBusiness.objects.get(pk=pk)
        business.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)




@api_view(['POST'])
def OwnBusinessImage(request):
    data = request.data

    product_id = data['product_id']
    ownbusiness = OwnBusiness.objects.get(id=product_id)

    ownbusiness.image = request.FILES.get('image')
    ownbusiness.save()

    serializer = OwnBusinessSerializers(ownbusiness, many=False)
    
    return Response(serializer.data)



