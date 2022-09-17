import graphene

from news_api_app.schema import Query as NewsQuery
from productivity.schema import Query as ProductivityQuery
from news_api_app.schema import Mutation as NewsMutation
# import .


class Query(NewsQuery,ProductivityQuery, graphene.ObjectType):
    pass


class Mutation(NewsMutation, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)
