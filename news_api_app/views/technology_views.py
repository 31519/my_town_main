from news_api_app.models import Technology
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from news_api_app.serializers import TechnologySerializers
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

@api_view(['GET'])
def TechnologyList(request):
    query = request.query_params.get('keyword')
    if query ==None:
        query = ""

    technology = Technology.objects.filter(title__icontains=query)

    page = request.query_params.get('page')
    paginator = Paginator(technology, 5)
    try:
        technology = paginator.page(page)
    except PageNotAnInteger:
        technology = paginator.page(1)
    except EmptyPage:
        technology = paginator.page(paginator.num_pages)
    if page == None:
        page=1

    page=int(page)


    serializer = TechnologySerializers(technology, many=True)
    return Response({"technology":serializer.data, "page":page, "pages":paginator.num_pages})

@api_view(['GET'])
def TechnologyDetailList(request, pk, slug):
    technology = Technology.objects.get(pk=pk, slug=slug)
    serializer = TechnologySerializers(technology, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def TechnologyCreate(request):
    data = request.data
    user = request.user
    technology = Technology.objects.create(
        user = user,
        author = data['author'],
        title = data['title'],
        description = data['description'],
        url= data['url'],
        urlToImage= data['urlToImage'],
        publishedAt = data['publishedAt'],
        content = data['content']

    )
    serializer= TechnologySerializers(technology, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def TechnologyUpdate(request, pk):
    data = request.data
    user = request.user
    technology = Technology.objects.get(pk=pk)
    technology.author = data['author']
    technology.title  = data['title']
    technology.description = data['description']
    technology.url = data['url']
    technology.urlToImage = data['urlToImage']
    technology.publishedAt = data['publishedAt']
    technology.content = data['content']
    technology.save()
    serializer= TechnologySerializers(technology, many=False)
    return Response(serializer.data)


@api_view(['DELETE', 'GET'])
def TechnologyDelete(request, pk):
    if request.method == 'GET':
        technology = Technology.objects.get(pk=pk)
        serializer= TechnologySerializers(technology, many=False)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        technology = Technology.objects.get(pk=pk)
        technology.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# def List(request):
#     technology = Technology.objects.all()
#     # data = list(technology.values())
#     datas = {
#         'technology': list(technology.values())
#     }
#     return JsonResponse(datas)
