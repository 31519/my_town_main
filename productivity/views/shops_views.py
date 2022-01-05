# from rest_framework.serializers import Serializer
from productivity.models import Shops
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from productivity.serializers import ShopsSerializers
from rest_framework import status
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger



# @api_view(['GET'])
# def ShopsList(request):
#     query = request.query_params.get('keyword')
#     if query ==None:
#         query = ""
#     shops = Shops.objects.filter(title__icontains=query)

#     page = request.query_params.get('page')
#     paginator = Paginator(shops, 5)
#     try:
#         shops = paginator.page(page)
#     except EmptyPage:
#         shops = paginator.page(1)
#     except PageNotAnInteger:
#         shops = paginator.page(paginator.num_pages)

#     if page == None:
#         page = 1
#     page = int(page)

#     serializer = ShopsSerializers(shops, many=True)
#     return Response({"shop":serializer.data, "page":page, "pages": paginator.num_pages})

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def ShopsList(request):
    data = request.data
    current_user = request.user
    shops = Shops.objects.get(user=current_user)
    serializer = ShopsSerializers(shops, many=False)
    return Response({"shop":serializer.data})


@api_view(['GET'])
def ShopsDetailList(request, pk, slug):
    shops = Shops.objects.get(pk=pk, slug=slug)
    serializer = ShopsSerializers(shops, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def ShopsCreate(request):
    data = request.data
    current_user = request.user
    shops = Shops.objects.create(
        user =current_user,
        category="Shop category",
        country='Shop country',
        state='Shop state',
        address='Shop address',
        contact='Shop contact',
        image='Shop image',
        title='Shop title',
        content='Shop content'
    )
    serializer = ShopsSerializers(shops, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def ShopsUpdate(request, pk, slug):
    data = request.data
    shops = Shops.objects.get(pk=pk,slug=slug)
    shops.category =data['category']
    shops.country = data['country']
    shops.state = data['state']
    shops.address = data['address']
    shops.contact = data['contact']
    shops.image=data['image']
    shops.title = data['title']
    shops.content = data['content']
    shops.isApproved = data['isApproved']
    shops.save()
    serializer = ShopsSerializers(shops, many=False)
    return Response(serializer.data)



@api_view(['PUT'])
@permission_classes([IsAdminUser])
def ShopsAdminUpdate(request, pk):
    data = request.data
    shops = Shops.objects.get(pk=pk)
    shops.category =data['category']
    shops.country = data['country']
    shops.state = data['state']
    shops.address = data['address']
    shops.contact = data['contact']
    shops.image=data['image']
    shops.title = data['title']
    shops.content = data['content']
    shops.isApproved = data['isApproved']
    shops.save()
    serializer = ShopsSerializers(shops, many=False)
    return Response(serializer.data)



@api_view(['DELETE', 'GET'])
@permission_classes([IsAdminUser])
def ShopsDelete(request, pk,slug):
    if request.method == 'GET':
        shops = Shops.objects.get(pk=pk, slug=slug)
        serializer = ShopsSerializers(shops, many=False)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        shops = Shops.objects.get(pk=pk, slug=slug)
        shops.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
