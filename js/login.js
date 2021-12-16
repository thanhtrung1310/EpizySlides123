$(document).ready(function(){
  $('#eye').click(function(){
    $(this).toggleClass('open');
    $(this).children('i').toggleClass('fa-eye-slash fa-eye');
    if($(this).hasClass('open')){
        $(this).prev().attr('type', 'text');
    }else{
        $(this).prev().attr('type', 'password');
    }
});
  var user = {
    acount : "epizyslides",
    password :"123123"
  }
  localStorage.setItem("user",JSON.stringify(user));
});

$("#submit_button").click(function() {
  const sleep = ms => new Promise(res => setTimeout(res, ms));
  user = JSON.parse(localStorage.getItem("user"))
  acount = $("#acount_login").val();
  password = $("#password_login").val();
  // console.log(acount +"____" + password);
  if(user.acount==acount && password==user.password){
      (async () => {
          toastr.success('Đăng nhập thành công');
          await sleep(2000);
          window.location = 'http://127.0.0.1:5500/index.html'
        })();
  }
  else{
      toastr.warning('Đăng nhập không thành công');
  }
  
});

