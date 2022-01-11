from news_api_app.views import form_views as views 
from django.urls import path

urlpatterns = [
    path('list/', views.RequestFormList, name="list"),
    path('create/', views.RequestFormCreate, name="create"),
    path('list/<int:pk>/<str:slug>/', views.RequestFormDetail, name='detail'),
    path('update/<int:pk>/<str:slug>/', views.RequestFormUpdate, name='update'),
]