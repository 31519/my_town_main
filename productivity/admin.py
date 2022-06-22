from django.contrib import admin
from productivity.models import Jobs,JobsDetail, OwnBusiness, Shops,ShopProduct, Advertisement, Celebrities, CelebritiesGallary, Hotels, Tourisms, Resell, ResellGallary, Event, Meme, Banner, TourismsGallary
# Register your models here.
class TourismsGallaryInline(admin.TabularInline):
    model = TourismsGallary
    extra = 6



class TourismsAdmin(admin.ModelAdmin):
    inlines = [TourismsGallaryInline]

class ResellGallaryInline(admin.TabularInline):
    model = ResellGallary
    extra = 6

class ResellAdmin(admin.ModelAdmin):
    inlines = [ResellGallaryInline]

class JobsDetailInline(admin.TabularInline):
    model = JobsDetail
    extra = 1

class JobsAdmin(admin.ModelAdmin):
    inlines = [JobsDetailInline]

admin.site.register(Jobs, JobsAdmin)
admin.site.register(OwnBusiness)

admin.site.register(Shops)
admin.site.register(ShopProduct)

admin.site.register(Advertisement)
admin.site.register(Event)

admin.site.register(Celebrities)
admin.site.register(CelebritiesGallary)

admin.site.register(Hotels)

admin.site.register(Tourisms, TourismsAdmin)
# admin.site.register(TourismsGallary)

admin.site.register(Resell, ResellAdmin)
admin.site.register(Meme)
admin.site.register(Banner)


# this the test for pust to github