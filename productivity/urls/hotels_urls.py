from productivity.views import hotels_views as views 
from django.urls import path

urlpatterns = [
    path('list/', views.HotelsList, name='list'),
    path('list/<int:pk>/<str:slug>/', views.HotelsDetailList, name='detail'),
    path('create/', views.HotelsCreate, name='create'),
    path('update/<int:pk>/<str:slug>/', views.HotelsUpdate, name='update'),
    path('adminUpdate/<int:pk>/', views.HotelsAdminUpdate, name='adminUpdate'),
    path('delete/<int:pk>/<str:slug>/', views.HotelsDelete, name='delete'),
    
]
