from news_api_app.views import business_views as views 
from django.urls import path

urlpatterns = [
    path('list/', views.BusinessList, name="list"),
    path('list/<int:pk>/', views.BusinessDetailList, name="detail"),
    path('create/', views.BusinessCreate, name="create"),
    path('delete/<int:pk>/', views.BusinessDelete, name="delete"),
]
