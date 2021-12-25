from productivity.views import celebrities_views as views 
from django.urls import path

urlpatterns = [
    path('list/', views.CelebritiesList, name='list'),
    path('list/<int:pk>/<str:slug>/', views.CelebritiesDetailList, name='detail'),
    path('create/', views.CelebritiesCreate, name='create'),
    path('update/<int:pk>/<str:slug>/', views.CelebritiesUpdate, name='update'),
    path('adminUpdate/<int:pk>/<str:slug>/', views.CelebritiesAdminUpdate, name='adminUpdate'),
    path('delete/<int:pk>/<str:slug>/', views.CelebritiesDelete, name='delete'),
    
]
