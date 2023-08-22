//form đăng kí
const btnRegister = document.querySelector(".form-submit");
btnRegister.addEventListener("click", (e) => {
  var username = document.querySelector("#fullname");
  var email = document.querySelector("#email");
  var password = document.querySelector("#password");
  e.preventDefault();
  if (
    username.value === "" ||
    email.value === "" ||
    password.value === ""
  ) {
    alert("vui lòng không để trống");
  } else {
    // array user
    const user = {
      username: username.value,
      email: email.value,
      password: password.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem(username.value, json);
    alert("Đăng Ký Thành Công");
    window.location.href = "index.html";
  }
});
