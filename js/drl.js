const btnaccess = document.querySelector(".filling");
//form đăng nhập
btnaccess.addEventListener("click", (e) => {
    e.preventDefault();
    
    var inputhoten=document.querySelector(".hoten");
  var inputemail=document.querySelector(".report");
  var inputmssv=document.querySelector(".mssv");
  var inputkhoa=document.querySelector(".khoa");
   
  var user=localStorage.getItem("taikhoan");
  var user=JSON.parse(user);
  fetch("js/student.json").then(res=>res.json()).then(data=>{   
     for(let c of data)
    {
        if(c.username===user.username)
        {
            inputhoten.setAttribute("value",c.username);
            inputemail.setAttribute("value",c.email);
            inputmssv.setAttribute("value",c.mssv);
            inputkhoa.setAttribute("value",c.khoa);
        }
    }
   
  });

//html
  
  
});
function showValue() {
    // Nút radio
    // setInput();
    var select1 = document.querySelector('.r1:checked');
    document.getElementById("diemtong1").value = select1.value;

    var select2 = document.querySelector('.r2:checked');
    document.getElementById("diemtong2").value = select2.value;

    var select3 = document.querySelector('.r3:checked');
    document.getElementById("diemtong3").value = select3.value;

    var select4 = document.querySelector('.r4:checked');
    document.getElementById("diemtong4").value = select4.value;

    var select5 = document.querySelector('.r5:checked');
    document.getElementById("diemtong5").value = select5.value;

    // Tổng cộng
    const dt1 = Number(select1.value);
    const dt2 = Number(select2.value);
    const dt3 = Number(select3.value);
    const dt4 = Number(select4.value);
    const dt5 = Number(select5.value);

    var tongDiem = dt1 + dt2 + dt3 + dt4 + dt5;
    document.getElementById("tongcong").value = tongDiem;
    if(tongDiem>=80)
    {
        myDiv=document.querySelector(".xeploai");
        myDiv.innerHTML="Xuất sắc";
    }
    else if(tongDiem>=50 && tongDiem<=80)
    {
        myDiv=document.querySelector(".xeploai");
        myDiv.innerHTML="Khá";
    }
    else 
    {
        myDiv=document.querySelector(".xeploai");
        myDiv.innerHTML="Trung bình";
    }
};




