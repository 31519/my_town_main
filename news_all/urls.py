"""news_all URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),

    path('', TemplateView.as_view(template_name='index.html'),),

    path('api/technology/', include('news_api_app.urls.technology_urls')),
    path('api/business/', include('news_api_app.urls.business_urls')),
    path('api/health/', include('news_api_app.urls.health_urls')),
    path('api/science/', include('news_api_app.urls.science_urls')),
    path('api/localnews/', include('news_api_app.urls.localnews_urls')),
    path('api/users/', include('news_api_app.urls.users_urls')),

    # productivity apps
    path('api/jobs/', include('productivity.urls.jobs_urls')),
    path('api/event/', include('productivity.urls.event_urls')),
    path('api/shops/', include('productivity.urls.shops_urls')),
    path('api/advertisement/', include('productivity.urls.advertisement_urls')),
    path('api/ownbusiness/', include('productivity.urls.ownbusiness_urls')),

    path('api/celebrities/', include('productivity.urls.celebrities_urls')),
    path('api/hotels/', include('productivity.urls.hotels_urls')),
    path('api/resell/', include('productivity.urls.resell_urls')),
    path('api/tourisms/', include('productivity.urls.tourisms_urls')),
    
    
]


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)