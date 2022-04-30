import sys
from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify
from PIL import Image
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile

# Create your models here.

class Technology(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE )
    category = models.CharField(max_length=200, null=True, blank=True, default='Technology')
    author = models.CharField(max_length=200, null=True, blank=True, default='Author')
    title = models.TextField(null=True, blank=True, default='Title')
    description = models.TextField(null=True, blank=True, default='Description')
    url= models.CharField(max_length=500, null=True, blank=True, default='Url')
    urlToImage= models.CharField(max_length=300, null=True, blank=True, default='UrlToImage')
    publishedAt = models.CharField(max_length=300, null=True,blank=True, default='PublishedAt')
    content = models.TextField(null=True, blank=True, default='content')
    # createdAt = models.DateTimeField(auto_now_add =True)
    createAt = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length=500, blank=True, null=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Technology,self).save(*args, **kwargs)


    def __str__(self):
        return str(self.title)

class Science(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE )
    category = models.CharField(max_length=200, null=True, blank=True, default='Science')
    author = models.CharField(max_length=200, null=True, blank=True, default='Author')
    title = models.TextField(null=True, blank=True, default='Title')
    description = models.TextField(null=True, blank=True, default='Description')
    url= models.CharField(max_length=500, null=True, blank=True, default='Url')
    urlToImage= models.CharField(max_length=300, null=True, blank=True, default='UrlToImage')
    publishedAt = models.CharField(max_length=300, null=True,blank=True, default='PublishedAt')
    content = models.TextField(null=True, blank=True, default='content')
    # createdAt = models.DateTimeField(auto_now_add =True)
    createAt = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length=500, blank=True, null=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Science,self).save(*args, **kwargs)



    def __str__(self):
        return str(self.title)

class Business(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE )
    category = models.CharField(max_length=200, null=True, blank=True, default='Business')
    author = models.CharField(max_length=200, null=True, blank=True, default='Author')
    title = models.TextField(null=True, blank=True, default='Title')
    description = models.TextField(null=True, blank=True, default='Description')
    url= models.CharField(max_length=500, null=True, blank=True, default='Url')
    urlToImage= models.CharField(max_length=300, null=True, blank=True, default='UrlToImage')
    publishedAt = models.CharField(max_length=300, null=True,blank=True, default='PublishedAt')
    content = models.TextField(null=True, blank=True, default='content')
    # createdAt = models.DateTimeField(auto_now_add =True)
    createAt = models.DateTimeField(auto_now_add=True)

    slug = models.SlugField(max_length=500, blank=True, null=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Business,self).save(*args, **kwargs)


    def __str__(self):
        return str(self.title)

class Health(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE )
    category = models.CharField(max_length=200, null=True, blank=True, default='Health')
    author = models.CharField(max_length=200, null=True, blank=True, default='Author')
    title = models.TextField(null=True, blank=True, default='Title')
    description = models.TextField(null=True, blank=True, default='Description')
    url= models.CharField(max_length=500, null=True, blank=True, default='Url')
    urlToImage= models.CharField(max_length=300, null=True, blank=True, default='UrlToImage')
    publishedAt = models.CharField(max_length=300, null=True,blank=True, default='PublishedAt')
    content = models.TextField(null=True, blank=True, default='content')
    # createdAt = models.DateTimeField(auto_now_add =True)
    createAt = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length=500, blank=True, null=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Health, self).save(*args, **kwargs)


    def __str__(self):
        return str(self.title)





class LocalNews(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE )
    category = models.CharField(max_length=200, null=True, blank=True, default='Lacal')
    author = models.CharField(max_length=200, null=True, blank=True, default='Author')
    title = models.TextField(null=True, blank=True, default='Title')
    description = models.TextField(null=True, blank=True, default='Description')
    url= models.CharField(max_length=500, null=True, blank=True, default='Url')
    image = models.ImageField(blank=True, null=True)
    content = models.TextField(null=True, blank=True, default='content')
    # createdAt = models.DateTimeField(auto_now_add =True)
    createdAt = models.DateTimeField(auto_now_add=True)
    flag = models.IntegerField(default=0, blank=True, null=True)
    slug = models.SlugField(max_length=500, blank=True, null=True)
    publishedAt = models.CharField(max_length=300, null=True,blank=True, default='PublishedAt')


    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        if self.image: 
            if not self.id:
                self.image = self.compressImage(self.image)
        super(LocalNews,self).save(*args, **kwargs)
        
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



class LocalNewsGallary(models.Model):
    local= models.ForeignKey(LocalNews, on_delete=models.CASCADE)
    image = models.ImageField(blank=True, default='/placeholder.png', upload_to='localnewsImage')

    def save(self, *args, **kwargs):
        self.slug = slugify(self.local.title)
        if self.image: 
            if not self.id:
                self.image = self.compressImage(self.image)
        super(LocalNewsGallary,self).save(*args, **kwargs)


    def compressImage(self, image):
        imageTemproary = Image.open(image)
        outputIoStream = BytesIO()
        imageTemproaryResize = imageTemproary.resize((1020, 573))
        imageTemproary.save(outputIoStream, format='JPEG', quality=10)
        outputIoStream.seek(0)
        image = InMemoryUploadedFile(outputIoStream, 'ImageField', "%s.jpg" % image.name.split('.')[0], 'image/jpeg', sys.getsizeof(outputIoStream), None)
        return image

    def __str__(self):
        return str(self.local.title)


class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    flag = models.BooleanField(default=False)
    username =  models.CharField(max_length=300, null=True, blank=True, default='username')
    image = models.ImageField(blank=True, default='/placeholder.png')
    firstName = models.CharField(max_length=300, null=True, blank=True, default='First Name')
    lastName = models.CharField(max_length=300, null=True, blank=True, default='Last Name')
    gender= models.CharField(max_length=300, null=True, blank=True, default='Gender')
    email = models.CharField(max_length=300, null=True, blank=True, default="Email")
    state   = models.CharField(max_length=300, null=True, blank=True, default='State')
    town = models.CharField(max_length=300, null=True, blank=True, default='town')
    country = models.CharField(max_length=300, null=True, blank=True, default="country")
    pincode = models.IntegerField(null=True, blank=True)
    phoneNumber =models.CharField(max_length=100, blank=True, null=True)
    profession = models.CharField(max_length=300, null=True, blank=True, default="Profession")
    isRequested = models.BooleanField(default=False)
    isApproved = models.BooleanField(default=False)
    isApprovedJob = models.BooleanField(default=False)
    isApprovedResseller = models.BooleanField(default=False)
    isApprovedShop = models.BooleanField(default=False)
    isApprovedAdvertise = models.BooleanField(default=False)
    isApprovedCelebrities = models.BooleanField(default=False)
    isApprovedTourisms = models.BooleanField(default=False)
    isApprovedHotel = models.BooleanField(default=False)
    isApprovedEvent = models.BooleanField(default=False)
    isApprovedMeme = models.BooleanField(default=False)
    isApprovedAll = models.BooleanField(default=False)
    
    createdAt = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length=500, blank=True, null=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.username)
        super(Profile, self).save(*args, **kwargs)



    def __str__(self):
        return str(self.username)


class RequestForm(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    username=models.CharField(max_length=200, blank=True, default="username")
    email = models.CharField(max_length=200, blank=True, default="email")
    category = models.CharField(max_length=200, blank=True, default="category")
    content = models.TextField(max_length=5000, blank=True, null=True, default="content")
    slug = models.SlugField(max_length=500, blank=True, null=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.username)
        super(RequestForm, self).save(*args, **kwargs)


    def __str__(self):
        return str(self.username)


