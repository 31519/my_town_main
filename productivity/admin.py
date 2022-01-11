from django.contrib import admin
from productivity.models import Jobs, OwnBusiness, Shops,ShopProduct, Advertisement, Celebrities, Hotels, Tourisms, Resell, Event, Meme, Banner
# Register your models here.


admin.site.register(Jobs)
admin.site.register(OwnBusiness)

admin.site.register(Shops)
admin.site.register(ShopProduct)

admin.site.register(Advertisement)
admin.site.register(Event)

admin.site.register(Celebrities)
admin.site.register(Hotels)
admin.site.register(Tourisms)
admin.site.register(Resell)
admin.site.register(Meme)
admin.site.register(Banner)


# this the test for pust to github