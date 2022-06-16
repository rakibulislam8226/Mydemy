from rest_framework import serializers
from . models import *


class InstructorSerializer(serializers.ModelSerializer):
  class Meta:
    model = Instructor
    fields = ['id','fullname','email','password','qualification','mobile_no','address']


