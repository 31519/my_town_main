from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify
from django.utils import timezone

# Create your models here.

class Jobs(models.Model):
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
    flag = models.IntegerField(default=0, blank=True, null=True)
    startDate = models.DateTimeField(auto_now_add=False, null=True)
    endDate = models.DateTimeField(auto_now_add=False, null=True)

    slug = models.SlugField(max_length=500, blank=True, null=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        self.startDate = timezone.now()
        super(Jobs,self).save(*args, **kwargs)



    def __str__(self):
        return str(self.title)

class Event(models.Model):
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
    image = models.ImageField(blank=True, default='/placeholder.png')
    title = models.TextField(blank=True, null=True, default='title')
    content = models.TextField(blank=True, null=True, default='content')
    isApproved = models.BooleanField(default=False, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    flag = models.IntegerField(default=0, blank=True, null=True)
    slug = models.SlugField(max_length=500, blank=True, null=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Advertisement,self).save(*args, **kwargs)


    def __str__(self):
        return str(self.title)


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
    image = models.ImageField(blank=True, default='/placeholder.png')
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
    image = models.ImageField(blank=True, default='/placeholder.png')
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
    image = models.ImageField(blank=True, default='/placeholder.png')
    title = models.TextField(blank=True, null=True, default='title')
    content = models.TextField(blank=True, null=True, default='content')
    isApproved = models.BooleanField(default=False, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    flag = models.IntegerField(default=0, blank=True, null=True)
    slug = models.SlugField(max_length=500, blank=True, null=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Celebrities,self).save(*args, **kwargs)


    def __str__(self):
        return str(self.title)


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
    contact = models.CharField(max_length=100, blank=True, null=True)
    image = models.ImageField(blank=True, default='/placeholder.png')
    title = models.TextField(blank=True, null=True, default='title')
    content = models.TextField(blank=True, null=True, default='content')
    distance = models.IntegerField(null=True, blank=True, default=0)
    isApproved = models.BooleanField(default=False, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    flag = models.IntegerField(default=0, blank=True, null=True)
    slug = models.SlugField(max_length=500, blank=True, null=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Tourisms,self).save(*args, **kwargs)


    def __str__(self):
        return str(self.title)

class TourismsGallary(models.Model):
    tourisms= models.ForeignKey(Tourisms, on_delete=models.CASCADE)
    image = models.ImageField(blank=True, default='/placeholder.png', upload_to='tourismsImage')

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