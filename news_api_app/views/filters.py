from django_filters import rest_framework as filters
from news_api_app.models import LocalNews


class LocalFilter(filters.FilterSet):

    keyword  = filters.CharFilter(field_name='title', lookup_expr='icontains')

    class Meta:
        model = LocalNews
        fields=('category','keyword', )