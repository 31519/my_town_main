from ipaddress import ip_address
from django.db import models
from django.conf import settings
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from .signals import object_viewed_signal, detail_object_viewed_signal 
from .utils import get_client_ip
import datetime

# User = settings.AUTH_USER_MODEL


from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

class MyAccountManager(BaseUserManager):
    def create_user(self, first_name, last_name, email, password=None):
        if not email:
            raise ValueError('User must have an email')

        user = self.model(
            email = self.normalize_email(email),
            first_name = first_name,
            last_name = last_name
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, first_name, last_name,  email, password, **other_field):
        user = self.create_user(
            email = self.normalize_email(email),
            first_name = first_name,
            last_name =last_name,
            password = password
        )

        user.is_active = True
        user.is_admin = True
        user.is_staff = True
        user.is_superadmin = True

        user.save(using=self._db)
        return user



class UserAccount(AbstractBaseUser):

    first_name = models.CharField(max_length=200, null=True, blank=True)
    last_name = models.CharField(max_length=200, null=True, blank=True)
    email        = models.EmailField(max_length=100, unique=True)
    phone_number = models.CharField(max_length=200, null=True, blank=True)
    country = models.CharField(max_length=200, null=True, blank=True)
    state = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=200, null=True, blank=True)
    pincode = models.CharField(max_length=200, null=True, blank=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    gender = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(blank=True, default='default/userDefaultImage.png')
    flag = models.BooleanField(default=False)
    slug = models.SlugField(max_length=500, blank=True, null=True)
    is_approved = models.BooleanField(default=False, blank=True, null=True)


    # mandatory
    date_joined = models.DateTimeField(auto_now=True)
    last_login  = models.DateTimeField(auto_now_add=True)
    is_admin    = models.BooleanField(default=False)
    is_active   = models.BooleanField(default=False)
    is_staff    = models.BooleanField(default=False)
    is_superadmin = models.BooleanField(default=False)

    # important

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    objects  = MyAccountManager()

    def full_name(self):
        return f'{self.first_name} {self.last_name}'

    # mandatory
    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True

    # def save(self, *args, **kwargs):
    #     self.slug = slugify(self.email)
    #     super(UserAccount, self).save(*args, **kwargs)



    def __str__(self):
        return str(self.email)

    class Meta(AbstractBaseUser.Meta):
        swappable ='AUTH_USER_MODEL'



class ObjectViewed(models.Model):
    user            = models.ForeignKey(UserAccount, blank=True, null=True, on_delete=models.CASCADE)
    ip_address      = models.CharField(max_length=220, blank=True, null=True)
    page            = models.TextField(null=True, blank=True, default='Title')
    timestamp       = models.DateTimeField(auto_now_add=True)
    date            = models.CharField(max_length=220, null=True, blank=True)

    def save(self, *args, **kwargs):
        self.date = datetime.date.today()
        super(ObjectViewed, self).save(*args, **kwargs)

    def __str__(self):
        return (self.page)

    class Meta:
        ordering    = ['-timestamp'] #most recent saved show up first
        verbose_name = 'Object viewed'
        verbose_name_plural = 'Objects viewed'

def object_viewed_receiver(sender, instance , request, *args, **kwargs):

    new_view_obj = ObjectViewed.objects.create(
        ip_address = get_client_ip(request) ,
        page = instance
    )

object_viewed_signal.connect(object_viewed_receiver)


class DetailObjectViewed(models.Model):
    user                 = models.ForeignKey(UserAccount, blank=True, null=True, on_delete=models.CASCADE)
    ip_address           = models.CharField(max_length=220, blank=True, null=True)
    detailPageTitle      = models.TextField(null=True, blank=True, default='Title')
    timestamp            = models.DateTimeField(auto_now_add=True)
    date                 = models.CharField(max_length=220, null=True, blank=True)
    def __str__(self):
        return (self.detailPageTitle)

    class Meta:
        ordering    = ['-timestamp'] #most recent saved show up first
        verbose_name = 'Detail Page viewed'
        verbose_name_plural = 'Detail Pages viewed'

def detail_object_viewed_receiver(sender, instance , request, *args, **kwargs):

    new_view_obj = DetailObjectViewed.objects.create(
        ip_address = get_client_ip(request) ,
        detailPageTitle = instance.title
    )

# detail_object_viewed_signal.connect(detail_object_viewed_receiver)


class ContactUs(models.Model):
    email        = models.EmailField(max_length=100, blank=True, null=True)
    full_name    = models.CharField(max_length=220, blank=True, null=True)
    message      = models.TextField(max_length=220, blank=True, null=True)
    timestamp    = models.DateTimeField(auto_now_add=True)



    def __str__(self):
        return str(self.email)

    class Meta:
        ordering    = ['-timestamp'] #most recent saved show up first
        verbose_name = 'Contact us'
        verbose_name_plural = 'Contact us'