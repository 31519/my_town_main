from django.contrib import admin
from productivity.models import Jobs, OwnBusiness, Shops,ShopProduct, Advertisement, Celebrities, CelebritiesGallary, Hotels, Tourisms, Resell, Event, Meme, Banner, TourismsGallary
# Register your models here.
class TourismsGallaryInline(admin.TabularInline):
    model = TourismsGallary
    extra = 6

class TourismsAdmin(admin.ModelAdmin):
    inlines = [TourismsGallaryInline]

admin.site.register(Jobs)
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

admin.site.register(Resell)
admin.site.register(Meme)
admin.site.register(Banner)


# this the test for pust to github