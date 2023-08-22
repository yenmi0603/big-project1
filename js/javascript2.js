function profile(){
    var user=localStorage.getItem("quanly");
      var user=JSON.parse(user);
        fetch("js/student.json").then(res=>res.json()).then(data=>{
            let h="";
            for(let c of data)
            {
                if(c.username=== user.username)
                {
                    h=`
                    <h3 class="avatar-text">${c.username}</h3>
                        <div class="account">
                            <p><i class="far fa-envelope"></i>${c.email}</p>
                            <p><i class="fa-regular fa-pen-to-square"></i>${c.mssv}</p>
                            <p><i class="fa-regular fa-address-card"></i>${c.khoa}</p>
                        </div>
                    `
                }
            }
            let e =document.getElementById("avarta-main");
            if(e!==null)
               e.innerHTML=h;
        })
    
    };
    window.onload = () =>{
        profile();
    
    };