from productivity.views import jobs_views as views 
from django.urls import path

urlpatterns = [
    path('list/', views.JobsList, name='list'),
    path('list/<int:pk>/<str:slug>/', views.JobsDetailList, name='detail'),
    path('create/', views.JobsCreate, name='create'),
    path('update/<int:pk>/<str:slug>/', views.JobsUpdate, name='update'),
    path('adminUpdate/<int:pk>/', views.JobsAdminUpdate, name='adminUpdate'),
    path('delete/<int:pk>/<str:slug>/', views.JobsDelete, name='delete'),
    
]
