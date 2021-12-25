from productivity.views import resell_views as views 
from django.urls import path

urlpatterns = [
    path('list/', views.ResellList, name='list'),
    path('list/<int:pk>/<str:slug>/', views.ResellDetailList, name='detail'),
    path('create/', views.ResellCreate, name='create'),
    path('update/<int:pk>/<str:slug>/', views.ResellUpdate, name='update'),
    path('adminUpdate/<int:pk>/<str:slug>/', views.ResellAdminUpdate, name='adminUpdate'),
    path('delete/<int:pk>/<str:slug>/', views.ResellDelete, name='delete'),
    
]
