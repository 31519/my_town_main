from productivity.views import resell_views as views 
from django.urls import path

urlpatterns = [
    path('list/', views.ResellList, name='list'),
    path('list/<int:pk>/<str:slug>/', views.ResellDetailList, name='detail'),
    path('create/', views.ResellCreate, name='create'),
    path('image/', views.ResellImage, name='image'),
    path('update/<int:pk>/<str:slug>/', views.ResellUpdate, name='update'),
    path('adminUpdate/<int:pk>/<str:slug>/', views.ResellAdminUpdate, name='adminUpdate'),
    path('delete/<int:pk>/<str:slug>/', views.ResellDelete, name='delete'),
    path('user-list/', views.UserResellList, name='user-list'),
    path('approve/<int:pk>/<str:slug>/', views.ResellApproved, name='approve'),
    path('alllist/', views.AllResellList, name='alllist'),
]
