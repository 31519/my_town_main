from productivity.views import meme_views as views 
from django.urls import path

urlpatterns = [
    path('list/', views.MemeList, name='list'),
    path('banner/list/', views.BannerList, name='banner'),
    path('list/<int:pk>/<str:slug>/', views.MemeDetailList, name='detail'),
    path('create/', views.MemeCreate, name='create'),
    path('image/', views.MemeImage, name='image'),
    path('update/<int:pk>/<str:slug>/', views.MemeUpdate, name='update'),
    # path('adminUpdate/<int:pk>/', views.JobsAdminUpdate, name='adminUpdate'),
    path('delete/<int:pk>/<str:slug>/', views.MemeDelete, name='delete'),
    path('user-list/', views.UserMemeList, name='user-list'),
]

