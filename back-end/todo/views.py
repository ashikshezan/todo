from rest_framework import generics
from .models import Todo
from .serializers import TodoSerializer
from rest_framework.permissions import IsAdminUser, DjangoModelPermissionsOrAnonReadOnly
from .permissions import TodoUserWritePermission


class TodoList(generics.ListCreateAPIView):
    permission_classes = [IsAdminUser]
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class TodoDetail(generics.RetrieveDestroyAPIView, TodoUserWritePermission):
    permission_classes = [TodoUserWritePermission]
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
