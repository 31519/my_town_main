from news_api_app.views import users_views as views 
from django.urls import path
from news_api_app.views.users_views import MyTokenObtainPairView
from rest_framework_simplejwt.views import (

    TokenRefreshView,
)

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),


    path('users-list/', views.UserList, name="user-list"),
    path('user-register/', views.UserRegistration, name="user-register"),
    path('user-detail/<int:pk>/', views.UserDetail, name="user-detail"),
    path('user-update/<int:pk>/', views.UserUpdate, name="user-update"),
    path('user-delete/<int:pk>/', views.UserDelete, name="user-delete"),

    # PROFILE

    path('profile-list/', views.ProfileList, name="profile-list"),
    path('profile-detail/', views.ProfileDetail, name="profile-detail"),
    path('profile-update/<int:pk>/', views.ProfileUpdate, name="profile-update"),


]
