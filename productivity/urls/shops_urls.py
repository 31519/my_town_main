from productivity.views import shops_views as views 
from django.urls import path

urlpatterns = [
    path('list/', views.ShopsList, name='list'),
    path('list/<int:pk>/<str:slug>/', views.ShopsDetailList, name='detail'),
    path('create/', views.ShopsCreate, name='create'),
    path('image/', views.ShopsImage, name='image'),
    path('update/<int:pk>/<str:slug>/', views.ShopsUpdate, name='update'),
    path('adminUpdate/<int:pk>/<str:slug>/', views.ShopsAdminUpdate, name='adminUpdate'),
    path('delete/<int:pk>/<str:slug>/', views.ShopsDelete, name='delete'),
    path('user-list/', views.UserShopsList, name='user-list'),
]
