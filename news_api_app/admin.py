from django.contrib import admin

# Register your models here.
from .models import Technology, Science, Health, Business, LocalNews, Profile, RequestForm

admin.site.register(Technology)
admin.site.register(Science)
admin.site.register(Health)
admin.site.register(Business)
admin.site.register(LocalNews)
admin.site.register(Profile)
admin.site.register(RequestForm)
