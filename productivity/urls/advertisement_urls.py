from productivity.views import advertisement_views as views 
from django.urls import path

urlpatterns = [
    path('list/', views.AdvertisementList, name='list'),
    path('list/<int:pk>/<str:slug>/', views.AdvertisementDetailList, name='detail'),
    path('create/', views.AdvertisementCreate, name='create'),
    path('update/<int:pk>/<str:slug>/', views.AdvertisementUpdate, name='update'),
    path('adminUpdate/<int:pk>/', views.AdvertisementAdminUpdate, name='adminUpdate'),
    path('delete/<int:pk>/<str:slug>/', views.AdvertisementDelete, name='delete'),
   
]