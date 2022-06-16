from django.shortcuts import render
from rest_framework import generics
from rest_framework import permissions
from . serializers import *
from . models import *


# Create your views here.
class InstructorList(generics.ListCreateAPIView):
  queryset = Instructor.objects.all()
  serializer_class = InstructorSerializer
  permission_classes = [permissions.IsAuthenticated]


class InstructorDetails(generics.RetrieveUpdateDestroyAPIView):
  queryset = Instructor.objects.all()
  serializer_class = InstructorSerializer
  permission_classes = [permissions.IsAuthenticatedOrReadOnly]