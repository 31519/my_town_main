from django.contrib import admin

# Register your models here.
from .models import Technology, Science, Health, Business, LocalNews, Profile, RequestForm, LocalNewsGallary


class LocalNewsGallaryInline(admin.TabularInline):
    model = LocalNewsGallary
    extra = 6

class LocalNewsAdmin(admin.ModelAdmin):
    inlines =[LocalNewsGallaryInline]


admin.site.register(Technology)
admin.site.register(Science)
admin.site.register(Health)
admin.site.register(Business)
admin.site.register(LocalNews, LocalNewsAdmin)
admin.site.register(Profile)
admin.site.register(RequestForm)
# admin.site.register(LocalNewsGallary)
