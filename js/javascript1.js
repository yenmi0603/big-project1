
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