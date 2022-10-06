from django.contrib import admin
from .models import UserAccount, ObjectViewed, DetailObjectViewed, ContactUs


admin.site.register(UserAccount)
# admin.site.register(ObjectViewed)
# admin.site.register(DetailObjectViewed)
admin.site.register(ContactUs)
