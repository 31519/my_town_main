from news_api_app.views import health_views as views 
from django.urls import path

urlpatterns = [
    path('list/', views.HealthList, name="list"),
    path('list/<int:pk>/', views.HealthDetailList, name="detail"),
    path('create/', views.HealthCreate, name="create"),
    path('delete/<int:pk>/', views.HealthDelete, name="delete"),
]
