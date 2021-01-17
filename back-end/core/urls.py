from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('todo.urls', namespace='api')),
    path('api/users/', include('users.urls', namespace='users')),
    path('api-auth/', include('rest_framework.urls',
                              namespace='drf_auth')),  # for debugging purpose
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
