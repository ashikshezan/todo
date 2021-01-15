from django.urls import path
from .views import TodoList, TodoDetail

app_name = 'todo'  # this necessary to use the 'namespace feature'

urlpatterns = [
    path('', TodoList.as_view(), name='todo_list_api'),
    path('<int:pk>/', TodoDetail.as_view(), name='todo_detail_api')
]
