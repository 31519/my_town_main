import sys
from PIL import Image
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile


def compressImage(image):
    imageTemproary = Image.open(image)
    outputIoStream = BytesIO()
    imageTemproaryResize = imageTemproary.resize((1020, 573))
    imageTemproary.save(outputIoStream, format='JPEG', quality=10)
    outputIoStream.seek(0)
    image = InMemoryUploadedFile(outputIoStream, 'ImageField', "%s.jpg" % image.name.split('.')[0], 'image/jpeg', sys.getsizeof(outputIoStream), None)
    return image