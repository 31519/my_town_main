from news_api_app.views import localnews_views as views 
from django.urls import path

urlpatterns = [
    path('list/', views.LocalNewsList, name="list"),
    path('list/<int:pk>/<str:slug>/', views.LocalNewsDetailList, name="detail"),
    path('create/', views.LocalNewsCreate, name="create"),
    path('image/', views.LocalNewsImage, name='image'),
    path('delete/<int:pk>/<str:slug>/', views.LocalNewsDelete, name="delete"),
    path('update/<int:pk>/<str:slug>/', views.LocalNewsUpdate, name="update"),
]
