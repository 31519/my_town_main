from Dashboards.views import dash_views
from Dashboards.views import users_forms
from Dashboards.views import users_views as views 
from django.urls import path
from Dashboards.views.users_views import MyTokenObtainPairView
from rest_framework_simplejwt.views import (

    TokenRefreshView,
)

urlpatterns = [
    path('viewList/', dash_views.ViewList, name="viewList"),
    path('createViews/', dash_views.ViewsCreate, name="viewCreate"),


    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),


    path('users-list/', views.UserList, name="user-list"),
    path('user-register/', views.UserRegistration, name="user-register"),
    path('user-detail/<int:pk>/', views.UserDetail, name="user-detail"),
    path('user-update/<int:pk>/', views.UserUpdate, name="user-update"),
    path('user-delete/<int:pk>/', views.UserDelete, name="user-delete"),

    # Contact Us
    path('users-forms/', users_forms.ContactUsForm, name="users-forms"),
]