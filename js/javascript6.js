function ortext(){
    var user=localStorage.getItem("taikhoan");
    var user=JSON.parse(user);
    var data=localStorage.getItem("quanly");
    var data=JSON.parse(data);
    let a =document.querySelector(".sub-menu");
    
    let h="";
    if(user.username===""&&data.username!=="")
    { 
      
      h=`
      <li><a href="index7.html">Trang chủ</a></li>
      <li><a href="index4.html">Đăng kí sinh viên</a></li>
      <li><a href="index5.html">Hồ sơ cá nhân</a></li>
      `
      if(a!==null)
    {
      a.innerHTML=h;
    }
    }
    else if(data.username===""&&user.username!=="")
    {
      
      
        h=`
      <li><a href="index6.html">Trang chủ</a></li>
      <li><a href="index1.html">Đánh giá rèn luyện</a></li>
      <li><a href="index3.html">Hồ sơ cá nhân</a></li>
      `
      if(a!==null)
    {
      a.innerHTML=h;
    }
    }
    else
    {     

        h=`
        <li><a href="index.html">Trang chủ</a></li>
        <li><a href="index1.html">Đánh giá rèn luyện</a></li>
        <li><a href="index3.html">Hồ sơ cá nhân</a></li>
        `
        if(a!==null)
      {
        a.innerHTML=h;
      }
    }
  
  };
  window.onload = ortext();
  