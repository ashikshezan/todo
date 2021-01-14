from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class Todo(models.Model):
    title = models.CharField(max_length=300)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    published_date = models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ('-published_date',)

    def __str__(self):
        return self.title[:10]
