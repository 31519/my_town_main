from news_api_app.views import localnews_views as views 
from django.urls import path

urlpatterns = [
    path('mainlist/', views.LocalNewsMainList, name="mainlist"),
    path('list/', views.LocalNewsList, name="list"),
    path('list/<int:pk>/<str:slug>/', views.LocalNewsDetailList, name="detail"),
    path('create/', views.LocalNewsCreate, name="create"),
    path('image/', views.LocalNewsImage, name='image'),
    path('many-image/', views.LocalManyImage, name='many-image'),
    path('delete/<int:pk>/<str:slug>/', views.LocalNewsDelete, name="delete"),
    path('update/<int:pk>/<str:slug>/', views.LocalNewsUpdate, name="update"),
    path('user-list/', views.UserLocalNewsList, name='user-list'),
]