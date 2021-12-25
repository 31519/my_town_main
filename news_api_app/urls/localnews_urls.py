from news_api_app.views import localnews_views as views 
from django.urls import path

urlpatterns = [
    path('list/', views.LocalNewsList, name="list"),
    path('list/<int:pk>/', views.LocalNewsDetailList, name="detail"),
    path('create/', views.LocalNewsCreate, name="create"),
    path('delete/<int:pk>/', views.LocalNewsDelete, name="delete"),
]
