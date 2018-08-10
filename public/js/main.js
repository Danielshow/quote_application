$('document').ready(function(){
  $('.deleteUser').on('click', deleteUser)
})

function deleteUser(){
  let confirmation = confirm("Are you sure you want to Delete")

  if (confirmation){
    $.ajax({
      type: 'DELETE',
      url: '/'+ $(this).data("id")
    })
    window.location.replace('/')
  }else{
    return false;
  }
}
