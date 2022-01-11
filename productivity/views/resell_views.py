# from rest_framework.serializers import Serializer
from productivity.models import Resell
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from productivity.serializers import ResellSerializers
from rest_framework import status
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger



@api_view(['GET'])
def ResellList(request):
    query = request.query_params.get('keyword')
    if query ==None:
        query = ""
    resell = Resell.objects.filter(title__icontains=query)

    page = request.query_params.get('page')
    paginator = Paginator(resell, 5)
    try:
        resell = paginator.page(page)
    except EmptyPage:
        resell = paginator.page(1)
    except PageNotAnInteger:
        resell = paginator.page(paginator.num_pages)

    if page == None:
        page = 1
    page = int(page)

    serializer = ResellSerializers(resell, many=True)
    return Response({"reseller":serializer.data, "page":page, "pages": paginator.num_pages})

@api_view(['GET'])
def ResellDetailList(request, pk, slug):
    resell = Resell.objects.get(pk=pk, slug=slug)
    serializer = ResellSerializers(resell, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def ResellCreate(request):
    data = request.data
    current_user = request.user
    resell = Resell.objects.create(
        user =current_user,
        category="Reseller Category",
        country= "Reseller Country",
        state=   "Reseller State",
        address= "Reseller Address",
        contact= "Reseller Contact",
        image=   "Reseller Image",
        title=   "Reseller Title",
        content= "Reseller Content"
    )
    serializer = ResellSerializers(resell, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def ResellUpdate(request, pk, slug):
    data = request.data
    resell = Resell.objects.get(pk=pk, slug=slug)
    resell.category =data['category']
    resell.country = data['country']
    resell.state = data['state']
    resell.address = data['address']
    resell.contact = data['contact']
    # resell.image=data['image']
    resell.title = data['title']
    resell.content = data['content']
    resell.save()
    serializer = ResellSerializers(resell, many=False)
    return Response(serializer.data)



@api_view(['PUT'])
@permission_classes([IsAdminUser])
def ResellAdminUpdate(request, pk):
    data = request.data
    resell = Resell.objects.get(pk=pk)
    resell.category =data['category']
    resell.country = data['country']
    resell.state = data['state']
    resell.address = data['address']
    resell.contact = data['contact']
    resell.image=data['image']
    resell.title = data['title']
    resell.content = data['content']
    resell.isApproved = data['isApproved']
    resell.save()
    serializer = ResellSerializers(resell, many=False)
    return Response(serializer.data)



@api_view(['DELETE', 'GET'])
@permission_classes([IsAuthenticated])
def ResellDelete(request, pk,slug):
    if request.method == 'GET':
        resell = Resell.objects.get(pk=pk, slug=slug)
        serializer = ResellSerializers(resell, many=False)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        resell = Resell.objects.get(pk=pk, slug=slug)
        resell.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
def ResellImage(request):
    data = request.data

    product_id = data['product_id']
    resell = Resell.objects.get(id=product_id)

    resell.image = request.FILES.get('image')
    resell.save()

    serializer = ResellSerializers(resell, many=False)
    
    return Response(serializer.data)
