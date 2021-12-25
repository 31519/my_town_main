# from rest_framework.serializers import Serializer
from productivity.models import Tourisms
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from productivity.serializers import TourismsSerializers
from rest_framework import status
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger



@api_view(['GET'])
def TourismsList(request):
    query = request.query_params.get('keyword')
    if query ==None:
        query = ""
    tourisms = Tourisms.objects.filter(title__icontains=query)

    page = request.query_params.get('page')
    paginator = Paginator(tourisms, 5)
    try:
        tourisms = paginator.page(page)
    except EmptyPage:
        tourisms = paginator.page(1)
    except PageNotAnInteger:
        tourisms = paginator.page(paginator.num_pages)

    if page == None:
        page = 1
    page = int(page)

    serializer = TourismsSerializers(tourisms, many=True)
    return Response({"tourisms":serializer.data, "page":page, "pages": paginator.num_pages})

@api_view(['GET'])
def TourismsDetailList(request, pk, slug):
    tourisms = Tourisms.objects.get(pk=pk, slug=slug)
    serializer = TourismsSerializers(tourisms, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def TourismsCreate(request):
    data = request.data
    current_user = request.user
    tourisms = Tourisms.objects.create(
        user =current_user,
        category="Tourisms Category",
        country= "Tourisms Country",
        state=   "Tourisms State",
        address= "Tourisms Address",
        contact= "Tourisms Contact",
        image=   "Tourisms Image",
        title=   "Tourisms Title",
        content= "Tourisms Content"
    )
    serializer = TourismsSerializers(tourisms, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def TourismsUpdate(request, pk, slug):
    data = request.data
    tourisms = Tourisms.objects.get(pk=pk, slug=slug)
    tourisms.category =data['category']
    tourisms.country = data['country']
    tourisms.state = data['state']
    tourisms.address = data['address']
    tourisms.contact = data['contact']
    tourisms.image=data['image']
    tourisms.title = data['title']
    tourisms.content = data['content']
    tourisms.isApproved = data['isApproved']
    tourisms.save()
    serializer = TourismsSerializers(tourisms, many=False)
    return Response(serializer.data)



@api_view(['PUT'])
@permission_classes([IsAdminUser])
def TourismsAdminUpdate(request, pk, slug):
    data = request.data
    tourisms = Tourisms.objects.get(pk=pk, slug=slug)
    tourisms.category =data['category']
    tourisms.country = data['country']
    tourisms.state = data['state']
    tourisms.address = data['address']
    tourisms.contact = data['contact']
    tourisms.image=data['image']
    tourisms.title = data['title']
    tourisms.content = data['content']
    tourisms.isApproved = data['isApproved']
    tourisms.save()
    serializer = TourismsSerializers(tourisms, many=False)
    return Response(serializer.data)



@api_view(['DELETE', 'GET'])
@permission_classes([IsAdminUser])
def TourismsDelete(request, pk, slug):
    if request.method == 'GET':
        tourisms = Tourisms.objects.get(pk=pk, slug=slug)
        serializer = TourismsSerializers(tourisms, many=False)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        tourisms = Tourisms.objects.get(pk=pk, slug=slug)
        tourisms.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
