from productivity.views import event_views as views 
from django.urls import path

urlpatterns = [
    path('list/', views.EventList, name='list'),
    path('list/<int:pk>/<str:slug>/', views.EventDetailList, name='detail'),
    path('create/', views.EventCreate, name='create'),
    path('image/', views.EventImage, name='image'),
    path('update/<int:pk>/<str:slug>/', views.EventUpdate, name='update'),
    path('adminUpdate/<int:pk>/', views.EventAdminUpdate, name='adminUpdate'),
    path('delete/<int:pk>/<str:slug>/', views.EventDelete, name='delete'),
    path('user-list/', views.UserEventList, name='user-list'),
]
