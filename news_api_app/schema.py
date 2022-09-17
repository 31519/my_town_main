import graphene_django
import graphene
from graphene import relay
from graphene_django.types import DjangoObjectType
from .models import LocalNews, Technology
from Dashboards.models import UserAccount
import graphql_jwt
from graphql_jwt.decorators import login_required
from graphene_django.filter import DjangoFilterConnectionField



# TYPES 

class UserType(DjangoObjectType):
    class Meta:
        model = UserAccount
        fields = "__all__"

class NewsType(DjangoObjectType):
    class Meta:
        model = LocalNews
        fields = "__all__"

    def resolve_image(self, info):
        if self.image:
            self.image = info.context.build_absolute_uri(self.image.url)
            return self.image


# JUST FOR relay

class NewsNode(DjangoObjectType):
    class Meta:
        model = LocalNews
        filter_fields = {
                        "title": ['exact', 'icontains'], 
                        'category':['exact', 'icontains'],}

        def resolve_image(self, info):
            if self.image:
                self.image = info.context.build_absolute_uri(self.image.url)
                return self.image
        interfaces = (relay.Node, )


class TechnologyNode(DjangoObjectType):
    class Meta:
        model = Technology
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
    all_news = DjangoFilterConnectionField(NewsNode)
    news_detail = relay.Node.Field(NewsNode)

    all_technology = DjangoFilterConnectionField(TechnologyNode)
    technology_detail = relay.Node.Field(TechnologyNode)

    # news_detail = graphene.Field(NewsType, id=graphene.Int(), slug=graphene.String())
    # all_news = graphene.List(NewsType)


    # def resolve_all_news(root, info, **kwargs):
    #     return LocalNews.objects.all()

    # def resolve_news_detail(root, info, id, slug):
    #     try: 
    #         return LocalNews.objects.get(id=id, slug=slug)
    #     except LocalNews.DoesNotExist:
    #         return None


# CREATE MUTATION
class NewsCreateMutation(graphene.Mutation):
    class Arguments:
        title = graphene.String(required=True)
        content = graphene.String(required=True)

    news = graphene.Field(NewsType)

    def mutate(root, info, title, content):
        news = LocalNews.objects.create(title=title, content=content)
        return NewsCreateMutation(news=news)


# UPDATE MUTATION
class NewsUpdateMutation(graphene.Mutation):
    class Arguments:
        title = graphene.String(required=True)
        content = graphene.String(required=True)
        id = graphene.ID(required=True)

    news = graphene.Field(NewsType)

    def mutate(root, info, title, content, id):
        try:
            news = LocalNews.objects.get(id=id)
            news.title = title
            news.content = content
            news.save()
            return NewsUpdateMutation(news=news)
        except LocalNews.DoesNotExist:
            return None


# DELETE MUTATION
class NewsDeleteMutation(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)

    news = graphene.Field(NewsType)

    def mutate(root, info, title, content, id):
        try:
            news = LocalNews.objects.get(id=id)
            news.delete()
            return NewsDeleteMutation(news=None )
        except LocalNews.DoesNotExist:
            return None

class Mutation:
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()


    create_news = NewsCreateMutation.Field()
    update_news = NewsUpdateMutation.Field()
    delete_news = NewsDeleteMutation.Field()