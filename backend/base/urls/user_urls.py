from django.urls import path
from base.views import user_views as views

urlpatterns = [
    path('login/', views.TokenObtainPairView.as_view(), name='token_obtain_pair'),


    path('register/', views.registerUser, name='register'),

    path('profile/',views.getUserProfile,name="userprofile"),
    path('',views.getUsers,name="users"),




]