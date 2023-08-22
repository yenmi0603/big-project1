const btnLogin = document.querySelector(".form-submit");
//form đăng nhập
btnLogin.addEventListener("click", (e) => {
  var username = document.querySelector("#fullname");
  var email = document.querySelector("#email");
  var password = document.querySelector("#password");
  var adviser=document.querySelector("#adviser");
  let data=localStorage.getItem('users')? JSON.parse(localStorage.getItem('users')): [] ;
  var access=0;
  
  e.preventDefault();
   data.forEach((user, Index) => {
      let userId=Index;
      Index++;
    if(   adviser.value=="sinhvien"&&
          user.username === username.value &&
          user.email === email.value &&
          user.password === password.value )
    {
      access=1;
      const user = {
        username: username.value,
        email: email.value,
        password: password.value,
      };
      let json = JSON.stringify(user);
      localStorage.setItem("taikhoan", json);
      window.location.href = "index6.html";  
    }
    else if(adviser.value=="quanly"&&
            user.username === username.value &&
            user.email === email.value &&
            user.password === password.value
           )
        {
          access=1;
          const user = {
            username: username.value,
            email: email.value,
            password: password.value,
          };
          let json = JSON.stringify(user);
          localStorage.setItem("quanly", json);
          window.location.href = "index7.html";  
        }
    else{
    }
    });
        if(access===0)
        {
          alert("Đăng Nhập Thất Bại");
          window.location.href = "index2.html"; 
        }
 });
