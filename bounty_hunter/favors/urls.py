from django.urls import path
from . import views

urlpatterns = [
    # view all favors - ex: /favors/
    path("create/", views.create_favor, name="create_favor"),
    path("<slug:username>/", views.favor_list, name="favor_list"), 
    # view a specific favor - ex: /favors/2
    path("<int:favor_id>/", views.favor_detail, name="favor_detail"),
    path("delete/<int:favor_id>/", views.delete_favor, name="delete"),
    path("complete/<int:favor_id>/", views.complete_favor, name="complete"),
    # edit a favor - ex: /favors/1/edit
    # path("<int:favor_id>/edit", views.edit_favor, name="edit_favor"),
    # action history - ex: /history/deleted
    # view all tags - ex: /favors/tags
    # #path("tags/", views.tag_list, name="tag_list"),
    # # view a specific tag - ex: /favors/tags/3
    # path("tags/<int:tag_id>/", views.tag_detail, name="tag_detail"),
    # # create a new tag - ex: /favors/tags/create
    # path("tags/create/", views.create_tag, name="create_tag"),
    # # edit a tag - ex: /favors/tags/2/edit/
    # path("tags/<int:tag_id>/edit/", views.edit_tag, name="edit_tag"),
    # # delete a tag - ex: /favors/tags/2/delete
    # path("tags/<slug:tag_name>/delete/", views.delete_tag, name="delete_tag"),
    # # for whoever is logged in, get net amount owed to the user
    path("amount-owed/<slug:to_user_username>", views.get_total_amt_owed, name="get_total_amt_owed"),

    # # more paths for filters, editing/creating favors, etc
    # path("<int:favor_id>/change-status/",views.change_status, name="change_status"),

]

