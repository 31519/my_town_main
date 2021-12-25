from news_api_app.views import science_views as views 
from django.urls import path

urlpatterns = [
    path('list/', views.ScienceList, name="list"),
    path('list/<int:pk>/', views.ScienceDetailList, name="detail"),
    path('create/', views.ScienceCreate, name="create"),
    path('delete/<int:pk>/', views.ScienceDelete, name="delete"),
]
