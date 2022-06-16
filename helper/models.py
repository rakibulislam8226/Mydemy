from django.db import models

# Create your models here.
# Teacher model
class Instructor(models.Model):
  fullname=models.CharField(max_length=50)
  email=models.EmailField(max_length=50)
  password=models.CharField(max_length=50)
  qualification=models.CharField(max_length=50)
  mobile_no=models.CharField(max_length=50)
  address=models.TextField()

  def __str__(self):
    return self.email
  class Meta:
    verbose_name_plural='1. Instructor'
  

# Course category model
class CourseCategory(models.Model):
  title=models.CharField(max_length=50)
  description=models.TextField()

  def __str__(self):
    return self.title
  class Meta:
    verbose_name_plural='2. Course category'


# Course model
class Course(models.Model):
  category=models.ForeignKey(CourseCategory,on_delete=models.CASCADE)
  teacher=models.ForeignKey(Instructor,on_delete=models.CASCADE)
  title=models.CharField(max_length=50)
  description=models.TextField()

  def __str__(self):
    return self.title
  class Meta:
    verbose_name_plural='3. Course'


# Student model
class Student(models.Model):
  fullname=models.CharField(max_length=50)
  email=models.EmailField(max_length=50)
  password=models.CharField(max_length=50)
  qualification=models.CharField(max_length=50)
  mobile_no=models.CharField(max_length=50)
  address=models.TextField()
  interested_categories=models.TextField()

  def __str__(self):
    return self.email
  class Meta:
    verbose_name_plural='4. Student'









