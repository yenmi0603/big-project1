
    function Goout() {
        const user ={
            username :"",
            email :"",
            password :""
        };
        let json = JSON.stringify(user);
        localStorage.setItem("quanly", json);
        localStorage.setItem("taikhoan", json);
        
    };
    window.onload = () =>{
       Goout();
    };
   function upload(){
    fetch("js/student.json").then(res=>res.json()).then(data=>{
        for(let c of data)
        {
            const user = {
                username: c.username,
                email: c.email,
                password: c.password,
              };
              let json = JSON.stringify(user);
              localStorage.setItem(username.value, json);
        }
       
   })
};
window.onload=upload();