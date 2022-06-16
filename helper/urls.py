from django.urls import path,include
from . views import *


urlpatterns = [
  path('instructor/', InstructorList.as_view()),
  path('instructor/<int:pk>/', InstructorDetails.as_view()),
  path('api-auth/', include('rest_framework.urls')),
]