from django.urls import path
from .views import TodoList, TodoDetail

urlpatterns = [
    path('', TodoList.as_view(), name='todo_list_api'),
    path('<int:pk>/', TodoDetail.as_view(), name='todo_detail_api')
]
