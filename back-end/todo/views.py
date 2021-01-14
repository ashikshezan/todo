from rest_framework import generics
from .models import Todo
from .serializers import TodoSerializer


class TodoList(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class TodoDetail(generics.RetrieveDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
