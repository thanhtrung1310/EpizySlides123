$(document).ready(function() {
    var user = {
        acount: "epizyslides",
        password: "123123"
    }
    localStorage.setItem("user", JSON.stringify(user));
    // $(document).on('submit', '#submit-form', function(event) {
    //     const sleep = ms => new Promise(res => setTimeout(res, ms));
    //     user = JSON.parse(localStorage.getItem("user"))
    //     acount = $("#acount_login").val();
    //     password = $("#password_login").val();
    //     // console.log(acount +"____" + password);
    //     if(user.acount==acount && password==user.password){
    //         (async () => {
    //             toastr.success('Đăng nhập thành công');
    //             await sleep(2000);
    //             window.location = 'http://127.0.0.1:5500/EpizySlides123/Elearning/elearning.html'
    //         })();
    //     }
    //     else{
    //         toastr.warning('Đăng nhập không thành công');
    //     }
    // });

})
$("#submit_button").click(function() {
    const sleep = ms => new Promise(res => setTimeout(res, ms));
    user = JSON.parse(localStorage.getItem("user"))
    acount = $("#acount_login").val();
    password = $("#password_login").val();
    // console.log(acount +"____" + password);
    if (user.acount == acount && password == user.password) {
        (async() => {
            toastr.success('Đăng nhập thành công');
            await sleep(2000);
            window.location = 'http://127.0.0.1:5500/elearning.html'
        })();
    } else {
        toastr.warning('Đăng nhập không thành công');
    }
    // return false;
});