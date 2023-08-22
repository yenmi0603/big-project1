
const btnRegister = document.querySelector("#form-submit");
const btnupdate = document.querySelector("#update");

btnRegister.addEventListener("click", (e) => {
    e.preventDefault();
 var username = document.querySelector("#fullname");
  var email = document.querySelector("#email");
  var password = document.querySelector("#password");

if (
    username.value === "" ||
    email.value === "" ||
    password.value === ""
  ) {
    alert("vui lòng không để trống");
  } else {
    // array user
    // let users=[];
    let users=localStorage.getItem('users')? JSON.parse(localStorage.getItem('users')): [] ;
    users.push({
      username: username.value,
      email: email.value,
      password: password.value,
    });
   localStorage.setItem('users', JSON.stringify(users));
   this.renderStudent();
   resetInput();
  }

});
btnupdate.addEventListener("click", (e) => {
  e.preventDefault();
  let users=localStorage.getItem('users')? JSON.parse(localStorage.getItem('users')): [] ;
  let index=document.getElementById('index').value;
  users[index]={
    username : document.getElementById("fullname").value,
    email : document.getElementById("email").value,
    password : document.getElementById("password").value,
  }
  localStorage.setItem('users', JSON.stringify(users));
  renderStudent();
  resetInput();
});
function renderStudent(){
    let users=localStorage.getItem('users')? JSON.parse(localStorage.getItem('users')): [] ;
    if(users.length==0){
        document.getElementById("list-student").style.display='none';
        return false;
    }
    document.getElementById("list-student").style.display='block';
    let tableContent=`
    <tr>
     <td>#</td>
     <td>Họ và tên</td>
     <td>Email</td>
     <td>Thao tác</td>
    </tr>`;
    users.forEach((user, Index) => {
      let userId=Index;
        Index++;
        tableContent +=`
        <tr>
          <td>${Index}</td>
          <td>${user.username}</td>
          <td>${user.email}</td>
          <td>
          <button onclick='editStudent(${userId})'>Edit</button>|<button onclick='deleteStudent(${userId})'>Delete</button>
          </td>
        </tr>`;
    });
    document.getElementById("grid-student").innerHTML=tableContent;
    document.getElementById("form-submit").style.display ='inline-block';
    document.getElementById("update").style.display ='none';

}
function deleteStudent(id){
  let users=localStorage.getItem('users')? JSON.parse(localStorage.getItem('users')): [] ;
    users.splice(id,1);
    localStorage.setItem('users', JSON.stringify(users));
    renderStudent();
}
function editStudent(id){
  let users=localStorage.getItem('users')? JSON.parse(localStorage.getItem('users')): [] ;
  document.getElementById("fullname").value=users[id].username;
  document.getElementById("email").value=users[id].email;
  document.getElementById("password").value=users[id].password;
  document.getElementById("password_confirmation").value=users[id].password;

  document.getElementById("index").value=id;
  document.getElementById("form-submit").style.display ='none';
  document.getElementById("update").style.display ='inline-block';
}
function resetInput() {
  document.getElementById("fullname").value="";
  document.getElementById("email").value="";
  document.getElementById("password").value="";
  document.getElementById("password_confirmation").value="";
}
window.onload=renderStudent();