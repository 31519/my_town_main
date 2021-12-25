from productivity.views import tourisms_views as views 
from django.urls import path

urlpatterns = [
    path('list/', views.TourismsList, name='list'),
    path('list/<int:pk>/<str:slug>/', views.TourismsDetailList, name='detail'),
    path('create/', views.TourismsCreate, name='create'),
    path('update/<int:pk>/<str:slug>/', views.TourismsUpdate, name='update'),
    path('adminUpdate/<int:pk>/<str:slug>/', views.TourismsAdminUpdate, name='adminUpdate'),
    path('delete/<int:pk>/<str:slug>/', views.TourismsDelete, name='delete'),
    
]