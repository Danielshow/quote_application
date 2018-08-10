$('document').ready(function(){
  $('.deleteUser').on('click', deleteUser)
})

function deleteUser(){
  let confirmation = confirm("Are you sure you want to Delete")

  if (confimation){
    $.ajax({
      type: "DELETE",
      url: "/users/delete/"+$(this).data("id")
    })
    windows.location.replace('/')
  }else{
    return false;
  }
}
