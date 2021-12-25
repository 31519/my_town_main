from productivity.views import ownbusiness_views as views 
from django.urls import path

urlpatterns = [
    path('list/', views.OwnBusinessList, name='list'),
    path('list/<int:pk>/', views.OwnBusinessDetailList, name='detail'),
    path('create/', views.OwnBusinessCreate, name='create'),
    path('update/<int:pk>/', views.OwnBusinessUpdate, name='update'),
    path('adminUpdate/<int:pk>/', views.OwnBusinessAdminUpdate, name='adminUpdate'),
    path('delete/<int:pk>/', views.OwnBusinessDelete, name='delete'),
    
]