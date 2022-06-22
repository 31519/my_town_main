from rest_framework.serializers import Serializer
from productivity.models import Jobs
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from productivity.serializers import JobsSerializers
from rest_framework import status
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from Dashboards.signals import object_viewed_signal, detail_object_viewed_signal




@api_view(['GET'])
def JobsList(request):
    query = request.query_params.get('keyword')
    if query ==None:
        query = ""


    jobs = Jobs.objects.filter(title__icontains=query, isApproved=True).order_by('-flag', '-createdAt')

    page = request.query_params.get('page')
    paginator = Paginator(jobs, 8)
    try:
        jobs = paginator.page(page)
    except EmptyPage:
        jobs = paginator.page(paginator.num_pages)
    except PageNotAnInteger:
        jobs = paginator.page(1)
        

    if page == None:
        page = 1
    page = int(page)


    serializer = JobsSerializers(jobs, many=True)
    return Response({"jobs":serializer.data, "page":page, "pages": paginator.num_pages})


def JobsViewsUpdate(pk, slug):
    jobs = Jobs.objects.get(pk=pk,slug=slug)
    jobs.views += 1
    jobs.save()

@api_view(['GET'])
def JobsDetailList(request, pk, slug):
    jobs = Jobs.objects.get(pk=pk,slug=slug)
    JobsViewsUpdate(pk, slug)
    serializer = JobsSerializers(jobs, many=False)
    detail_object_viewed_signal.send(jobs.__class__, instance=jobs, request=request)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def JobsCreate(request):
    data = request.data
    current_user = request.user
    jobs = Jobs.objects.create(
        user =current_user,
        category="",
        country='',
        state=  '',
        address='',
        contact='',
        image=  '',
        title=  'jobs',
        content=''
    )
    serializer = JobsSerializers(jobs, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def JobsUpdate(request, pk, slug):
    data = request.data
    jobs = Jobs.objects.get(pk=pk, slug=slug)
    jobs.category =data['category']
    jobs.country = data['country']
    jobs.state = data['state']
    jobs.address = data['address']
    jobs.contact = data['contact']
    jobs.startDate=data['startDate']
    jobs.endDate=data['endDate']
    jobs.title = data['title']
    jobs.content = data['content']
    jobs.save()
    serializer = JobsSerializers(jobs, many=False)
    return Response(serializer.data)



@api_view(['PUT'])
@permission_classes([IsAdminUser])
def JobsAdminUpdate(request, pk):
    data = request.data
    jobs = Jobs.objects.get(pk=pk)
    jobs.category =data['category']
    jobs.country = data['country']
    jobs.state = data['state']
    jobs.address = data['address']
    jobs.contact = data['contact']
    # jobs.image=data['image']
    jobs.title = data['title']
    jobs.content = data['content']
    jobs.isApproved = data['isApproved']
    jobs.save()
    serializer = JobsSerializers(jobs, many=False)
    return Response(serializer.data)



@api_view(['DELETE', 'GET'])
@permission_classes([IsAuthenticated])
def JobsDelete(request, pk, slug):
    if request.method == 'GET':
        jobs = Jobs.objects.get(pk=pk, slug=slug)
        serializer = JobsSerializers(jobs, many=False)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        jobs = Jobs.objects.get(pk=pk, slug=slug)
        jobs.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
def JobsImage(request):
    data = request.data

    product_id = data['product_id']
    jobs = Jobs.objects.get(id=product_id)

    jobs.image = request.FILES.get('image')
    jobs.save()

    serializer = JobsSerializers(jobs, many=False)
    
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def UserJobsList(request):
    current_user = request.user
    jobs = Jobs.objects.filter(user=current_user)
    serializer = JobsSerializers(jobs, many=True)
    return Response(serializer.data)