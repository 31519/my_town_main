from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify

# Create your models here.

class Jobs(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.CharField(max_length=300, null=True, blank=True, default="Category")
    country = models.CharField(max_length=300, blank=True, null=True, default='India')
    state = models.CharField(max_length=300, blank=True, null=True, default='Meghalaya')
    address = models.CharField(max_length=300, blank=True, null=True, default='Jowai')
    contact = models.CharField(max_length=300, blank=True, null=True, default='contact')
    image = models.CharField(max_length=300, blank=True, default='image')
    title = models.TextField(blank=True, null=True, default='title')
    content = models.TextField(blank=True, null=True, default='content')
    isApproved = models.BooleanField(default=False, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    slug = models.SlugField(max_length=500, blank=True, null=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Jobs,self).save(*args, **kwargs)



    def __str__(self):
        return str(self.title)

class Event(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.CharField(max_length=300, null=True, blank=True, default="Category")
    country = models.CharField(max_length=300, blank=True, null=True, default='India')
    state = models.CharField(max_length=300, blank=True, null=True, default='Meghalaya')
    address = models.CharField(max_length=300, blank=True, null=True, default='Jowai')
    contact = models.CharField(max_length=300, blank=True, null=True, default='contact')
    image = models.CharField(max_length=300, blank=True, default='image')
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
    contact = models.CharField(max_length=300, blank=True, null=True, default='contact')
    image = models.CharField(max_length=300, blank=True, default='image')
    title = models.TextField(blank=True, null=True, default='title')
    content = models.TextField(blank=True, null=True, default='content')
    isApproved = models.BooleanField(default=False, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
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
    contact = models.CharField(max_length=300, blank=True, null=True, default='contact')
    image = models.CharField(max_length=300, blank=True, default='image')
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
    contact = models.CharField(max_length=300, blank=True, null=True, default='contact')
    image = models.CharField(max_length=300, blank=True, default='image')
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
    image = models.CharField(max_length=300, blank=True, default='image')
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
    contact = models.CharField(max_length=300, blank=True, null=True, default='contact')
    image = models.CharField(max_length=300, blank=True, default='image')
    title = models.TextField(blank=True, null=True, default='title')
    content = models.TextField(blank=True, null=True, default='content')
    isApproved = models.BooleanField(default=False, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length=500, blank=True, null=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Celebrities,self).save(*args, **kwargs)


    def __str__(self):
        return str(self.title)


class Hotels(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE )
    category = models.CharField(max_length=300, null=True, blank=True, default="Category")
    country = models.CharField(max_length=300, blank=True, null=True, default='India')
    state = models.CharField(max_length=300, blank=True, null=True, default='Meghalaya')
    address = models.CharField(max_length=300, blank=True, null=True, default='Jowai')
    contact = models.CharField(max_length=300, blank=True, null=True, default='contact')
    image = models.CharField(max_length=300, blank=True, default='image')
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
    contact = models.CharField(max_length=300, blank=True, null=True, default='contact')
    image = models.CharField(max_length=300, blank=True, default='image')
    title = models.TextField(blank=True, null=True, default='title')
    content = models.TextField(blank=True, null=True, default='content')
    isApproved = models.BooleanField(default=False, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length=500, blank=True, null=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Tourisms,self).save(*args, **kwargs)


    def __str__(self):
        return str(self.title)


class Resell(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.CharField(max_length=300, null=True, blank=True, default="Category")
    country = models.CharField(max_length=300, blank=True, null=True, default='India')
    state = models.CharField(max_length=300, blank=True, null=True, default='Meghalaya')
    address = models.CharField(max_length=300, blank=True, null=True, default='Jowai')
    contact = models.CharField(max_length=300, blank=True, null=True, default='contact')
    image = models.CharField(max_length=300, blank=True, default='image')
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