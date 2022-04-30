import sys
from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify
from django.utils import timezone
from PIL import Image
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile

# Create your models here.

class Jobs(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.CharField(max_length=300, null=True, blank=True, default="Category")
    country = models.CharField(max_length=300, blank=True, null=True, default='India')
    state = models.CharField(max_length=300, blank=True, null=True, default='Meghalaya')
    address = models.CharField(max_length=300, blank=True, null=True, default='Jowai')
    contact = models.CharField(max_length=100, blank=True, null=True)
    image = models.ImageField(blank=True, null=True)
    title = models.TextField(blank=True, null=True, default='title')
    content = models.TextField(blank=True, null=True, default='content')
    isApproved = models.BooleanField(default=False, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    flag = models.IntegerField(default=0, blank=True, null=True)
    startDate = models.DateTimeField(auto_now_add=False, null=True)
    endDate = models.DateTimeField(auto_now_add=False, null=True)

    slug = models.SlugField(max_length=500, blank=True, null=True)


    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        # if self.image:
        #     if not self.id:
        #         self.image = self.compressImage(self.image)
        super(Jobs,self).save(*args, **kwargs)
        
    def __str__(self):
        return str(self.title)

    # def compressImage(self, image):
    #     imageTemproary = Image.open(image)
    #     outputIoStream = BytesIO()
    #     imageTemproaryResize = imageTemproary.resize((1020, 573))
    #     imageTemproary.save(outputIoStream, format='JPEG', quality=10)
    #     outputIoStream.seek(0)
    #     image = InMemoryUploadedFile(outputIoStream, 'ImageField', "%s.jpg" % image.name.split('.')[0], 'image/jpeg', sys.getsizeof(outputIoStream), None)
    #     return image


class Event(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.CharField(max_length=300, null=True, blank=True, default="Category")
    country = models.CharField(max_length=300, blank=True, null=True, default='India')
    state = models.CharField(max_length=300, blank=True, null=True, default='Meghalaya')
    address = models.CharField(max_length=300, blank=True, null=True, default='Jowai')
    contact = models.CharField(max_length=100, blank=True, null=True)
    image = models.ImageField(blank=True, default='placeholder.png')
    title = models.TextField(blank=True, null=True, default='title')
    content = models.TextField(blank=True, null=True, default='content')
    isApproved = models.BooleanField(default=False, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length=500, blank=True, null=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Event,self).save(*args, **kwargs)


    def __str__(self):
        return str(self.title)


class Advertisement(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.CharField(max_length=300, null=True, blank=True, default="Category")
    country = models.CharField(max_length=300, blank=True, null=True, default='India')
    state = models.CharField(max_length=300, blank=True, null=True, default='Meghalaya')
    address = models.CharField(max_length=300, blank=True, null=True, default='Jowai')
    contact = models.CharField(max_length=100, blank=True, null=True)
    image = models.ImageField(blank=True, null=True)
    title = models.TextField(blank=True, null=True, default='title')
    content = models.TextField(blank=True, null=True, default='content')
    isApproved = models.BooleanField(default=False, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    flag = models.IntegerField(default=0, blank=True, null=True)
    slug = models.SlugField(max_length=500, blank=True, null=True)


    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        # if self.image:
        #     if not self.id:
        #         self.image = self.compressImage(self.image)
        super(Advertisement,self).save(*args, **kwargs)
        
    def __str__(self):
        return str(self.title)

    # def compressImage(self, image):
    #     imageTemproary = Image.open(image)
    #     outputIoStream = BytesIO()
    #     imageTemproaryResize = imageTemproary.resize((1020, 573))
    #     imageTemproary.save(outputIoStream, format='JPEG', quality=10)
    #     outputIoStream.seek(0)
    #     image = InMemoryUploadedFile(outputIoStream, 'ImageField', "%s.jpg" % image.name.split('.')[0], 'image/jpeg', sys.getsizeof(outputIoStream), None)
    #     return image


class OwnBusiness(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.CharField(max_length=300, null=True, blank=True, default="Category")
    country = models.CharField(max_length=300, blank=True, null=True, default='India')
    state = models.CharField(max_length=300, blank=True, null=True, default='Meghalaya')
    address = models.CharField(max_length=300, blank=True, null=True, default='Jowai')
    contact = models.CharField(max_length=100, blank=True, null=True)
    image = models.ImageField(blank=True, default='/placeholder.png')
    title = models.TextField(blank=True, null=True, default='title')
    content = models.TextField(blank=True, null=True, default='content')
    isApproved = models.BooleanField(default=False, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length=500, blank=True, null=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(OwnBusiness,self).save(*args, **kwargs)


    def __str__(self):
        return str(self.title)

class Shops(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE )
    category = models.CharField(max_length=300, null=True, blank=True, default="Category")
    country = models.CharField(max_length=300, blank=True, null=True, default='India')
    state = models.CharField(max_length=300, blank=True, null=True, default='Meghalaya')
    address = models.CharField(max_length=300, blank=True, null=True, default='Jowai')
    contact = models.CharField(max_length=100, blank=True, null=True)
    image = models.ImageField(blank=True, default='placeholder.png')
    title = models.TextField(blank=True, null=True, default='title')
    content = models.TextField(blank=True, null=True, default='content')
    isApproved = models.BooleanField(default=False, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length=500, blank=True, null=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Shops,self).save(*args, **kwargs)


    def __str__(self):
        return str(self.title)

class ShopProduct(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE )
    shops = models.ForeignKey(Shops, on_delete=models.CASCADE)
    image = models.ImageField(blank=True, default='placeholder.png')
    title = models.TextField(blank=True, null=True, default='title')
    content = models.TextField(blank=True, null=True, default='content')
    price = models.IntegerField(blank=True, null=True)
    isApproved = models.BooleanField(default=False, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length=500, blank=True, null=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(ShopProduct,self).save(*args, **kwargs)


    def __str__(self):
        return str(self.title)

class Celebrities(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.CharField(max_length=300, null=True, blank=True, default="Category")
    country = models.CharField(max_length=300, blank=True, null=True, default='India')
    state = models.CharField(max_length=300, blank=True, null=True, default='Meghalaya')
    address = models.CharField(max_length=300, blank=True, null=True, default='Jowai')
    url = models.CharField(max_length=300, blank=True, null=True,)
    contact = models.CharField(max_length=100, blank=True, null=True)
    image = models.ImageField(blank=True, default='celebrityPlaceholder.png')
    title = models.TextField(blank=True, null=True, default='title')
    content = models.TextField(blank=True, null=True, default='content')
    isApproved = models.BooleanField(default=False, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    flag = models.IntegerField(default=0, blank=True, null=True)
    slug = models.SlugField(max_length=500, blank=True, null=True)


    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        if not self.id:
            self.image = self.compressImage(self.image)
        super(Celebrities,self).save(*args, **kwargs)
        
    def __str__(self):
        return str(self.title)

    def compressImage(self, image):
        imageTemproary = Image.open(image)
        outputIoStream = BytesIO()
        imageTemproaryResize = imageTemproary.resize((1020, 573))
        imageTemproary.save(outputIoStream, format='JPEG', quality=10)
        outputIoStream.seek(0)
        image = InMemoryUploadedFile(outputIoStream, 'ImageField', "%s.jpg" % image.name.split('.')[0], 'image/jpeg', sys.getsizeof(outputIoStream), None)
        return image


class CelebritiesGallary(models.Model):
    celebrity= models.ForeignKey(Celebrities, on_delete=models.CASCADE)
    image = models.ImageField(blank=True, default='/placeholder.png', upload_to='celebritiesImage')

    def __str__(self):
        return str(self.celebrity.title)


class Hotels(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE )
    category = models.CharField(max_length=300, null=True, blank=True, default="Category")
    country = models.CharField(max_length=300, blank=True, null=True, default='India')
    state = models.CharField(max_length=300, blank=True, null=True, default='Meghalaya')
    address = models.CharField(max_length=300, blank=True, null=True, default='Jowai')
    contact =models.CharField(max_length=100, blank=True, null=True)
    image = models.ImageField(blank=True, default='/placeholder.png')
    title = models.TextField(blank=True, null=True, default='title')
    content = models.TextField(blank=True, null=True, default='content')
    isApproved = models.BooleanField(default=False, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length=500, blank=True, null=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Hotels,self).save(*args, **kwargs)


    def __str__(self):
        return str(self.title)



class Tourisms(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE )
    category = models.CharField(max_length=300, null=True, blank=True, default="Category")
    country = models.CharField(max_length=300, blank=True, null=True, default='India')
    state = models.CharField(max_length=300, blank=True, null=True, default='Meghalaya')
    address = models.CharField(max_length=300, blank=True, null=True, default='Jowai')
    contact = models.CharField(max_length=100, blank=True, null=True, default="91+ 000000xxxxx")
    image = models.ImageField(blank=True, null=True)
    title = models.TextField(blank=True, null=True, default='Best Tourisms Spot')
    content = models.TextField(blank=True, null=True, default='Best Tourisms spot')
    distance = models.IntegerField(null=True, blank=True, default=0)
    hotel = models.IntegerField(null=True, blank=True, default=0)
    resort = models.IntegerField(null=True, blank=True, default=0)
    isApproved = models.BooleanField(default=False, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    fees = models.IntegerField(null=True, blank=True, default=0)
    flag = models.IntegerField(default=0, blank=True, null=True)
    slug = models.SlugField(max_length=500, blank=True, null=True)


    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        # if self.image:

        #     if not self.id:
        #         self.image = self.compressImage(self.image)
        super(Tourisms,self).save(*args, **kwargs)
        
    def __str__(self):
        return str(self.title)

    # def compressImage(self, image):
    #     imageTemproary = Image.open(image)
    #     outputIoStream = BytesIO()
    #     imageTemproaryResize = imageTemproary.resize((1020, 573))
    #     imageTemproary.save(outputIoStream, format='JPEG', quality=10)
    #     outputIoStream.seek(0)
    #     image = InMemoryUploadedFile(outputIoStream, 'ImageField', "%s.jpg" % image.name.split('.')[0], 'image/jpeg', sys.getsizeof(outputIoStream), None)
    #     return image

class TourismsGallary(models.Model):
    tourisms= models.ForeignKey(Tourisms, on_delete=models.CASCADE)
    image = models.ImageField(blank=True, null=True, upload_to='tourismsImage')

    def save(self, *args, **kwargs):
        # self.slug = slugify(self.tourisms.title)
        # if self.image:
        #     if not self.id:
        #         self.image = self.compressImage(self.image)
        super(TourismsGallary,self).save(*args, **kwargs)
    

    # def compressImage(self, image):
    #     imageTemproary = Image.open(image)
    #     outputIoStream = BytesIO()
    #     imageTemproaryResize = imageTemproary.resize((1020, 573))
    #     imageTemproary.save(outputIoStream, format='JPEG', quality=10)
    #     outputIoStream.seek(0)
    #     image = InMemoryUploadedFile(outputIoStream, 'ImageField', "%s.jpg" % image.name.split('.')[0], 'image/jpeg', sys.getsizeof(outputIoStream), None)
    #     return image

    def __str__(self):
        return str(self.tourisms.title)


class Resell(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.CharField(max_length=300, null=True, blank=True, default="Category")
    country = models.CharField(max_length=300, blank=True, null=True, default='India')
    state = models.CharField(max_length=300, blank=True, null=True, default='Meghalaya')
    address = models.CharField(max_length=300, blank=True, null=True, default='Jowai')
    contact = models.CharField(max_length=100, blank=True, null=True)
    image = models.ImageField(blank=True, default='/placeholder.png')
    title = models.TextField(blank=True, null=True, default='title')
    content = models.TextField(blank=True, null=True, default='content')
    isApproved = models.BooleanField(default=False, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length=500, blank=True, null=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Resell,self).save(*args, **kwargs)


    def __str__(self):
        return str(self.title)


class Meme(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(blank=True, default='/placeholder.png')
    title = models.TextField(blank=True, null=True, default='title')
    isApproved = models.BooleanField(default=False, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length=500, blank=True, null=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Meme,self).save(*args, **kwargs)

    def __str__(self):
        return str(self.title)


class Banner(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(blank=True, default='/placeholder.png')
    createdAt = models.DateTimeField(auto_now_add=True)
    flag = models.IntegerField(default=0, blank=True, null=True)


    def __str__(self):
        return str(self.createdAt)