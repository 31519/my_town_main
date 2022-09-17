import graphene_django
import graphene
from graphene import relay
from graphene_django.types import DjangoObjectType
from .models import Advertisement, Jobs
from Dashboards.models import UserAccount
import graphql_jwt
from graphql_jwt.decorators import login_required
from graphene_django.filter import DjangoFilterConnectionField



# TYPES 

class UserType(DjangoObjectType):
    class Meta:
        model = UserAccount
        fields = "__all__"

class JobsType(DjangoObjectType):
    class Meta:
        model = Jobs
        fields = "__all__"

    def resolve_image(self, info):
        if self.image:
            self.image = info.context.build_absolute_uri(self.image.url)
            return self.image



class AdvertisementType(DjangoObjectType):
    class Meta:
        model = Advertisement
        fields = "__all__"

    def resolve_image(self, info):
        if self.image:
            self.image = info.context.build_absolute_uri(self.image.url)
            return self.image



# JUST FOR relay

class AdvertisementNode(DjangoObjectType):
    class Meta:
        model = Advertisement
        filter_fields = {
                        "title": ['exact', 'icontains'], 
                        'category':['exact', 'icontains'],}

        def resolve_image(self, info):
            if self.image:
                self.image = info.context.build_absolute_uri(self.image.url)
                return self.image
        interfaces = (relay.Node, )


class JobsNode(DjangoObjectType):
    class Meta:
        model = Jobs
        filter_fields = {
                        "title": ['exact', 'icontains'], 
                        'category':['exact', 'icontains'],}

        def resolve_image(self, info):
            if self.image:
                self.image = info.context.build_absolute_uri(self.image.url)
                return self.image
        interfaces = (relay.Node, )


#QUERY

class Query(graphene.ObjectType):

    all_jobs = DjangoFilterConnectionField(JobsNode)
    jobs_detail = relay.Node.Field(JobsNode)

    all_advertisement = DjangoFilterConnectionField(AdvertisementNode)
    advertisement_detail = relay.Node.Field(AdvertisementNode)

    # jobs_detail = graphene.Field(JobsType, id=graphene.Int(), slug=graphene.String())
    # all_jobs = graphene.List(JobsType)

    # advertisement_detail = graphene.Field(AdvertisementType, id=graphene.Int(), slug=graphene.String())
    # all_advertisement = graphene.List(AdvertisementType)

    # def resolve_all_jobs(root, info, **kwargs):
    #     return Jobs.objects.all()

    # def resolve_jobs_detail(root, info, id, slug):
    #     try: 
    #         return Jobs.objects.get(id=id, slug=slug)
    #     except Jobs.DoesNotExist:
    #         return None

    # Advertisement


    # def resolve_all_advertisement(root, info, **kwargs):
    #     return Advertisement.objects.all()

    # def resolve_advertisement_detail(root, info, id, slug):
    #     try: 
    #         return Advertisement.objects.get(id=id, slug=slug)
    #     except Advertisement.DoesNotExist:
    #         return None



