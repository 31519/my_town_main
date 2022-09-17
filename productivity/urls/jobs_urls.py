from productivity.views import jobs_views as views 
from django.urls import path

urlpatterns = [
    path('mainlist/', views.JobsListMainList, name='mainlist'),
    path('list/', views.JobsList, name='list'),
    path('list/<int:pk>/<str:slug>/', views.JobsDetailList, name='detail'),
    path('create/', views.JobsCreate, name='create'),
    path('image/', views.JobsImage, name='image'),
    path('update/<int:pk>/<str:slug>/', views.JobsUpdate, name='update'),
    path('adminUpdate/<int:pk>/', views.JobsAdminUpdate, name='adminUpdate'),
    path('delete/<int:pk>/<str:slug>/', views.JobsDelete, name='delete'),
    path('user-list/', views.UserJobsList, name='user-list'),
]
