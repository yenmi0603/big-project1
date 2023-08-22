function ortext(){
  var user=localStorage.getItem("taikhoan");
  var user=JSON.parse(user);
  var data=localStorage.getItem("quanly");
  var data=JSON.parse(data);
  let a =document.querySelector(".navbar2");
  
  let h="";
  if(user.username===""&&data.username==="")
  { 
    h=`
    <li class="navbar-item"><a class="navbar-item-link"><i class="fa-regular fa-bell"></i>Thông báo</a>
                        <div class="notify">
                            <div class="notify__h4">
                                <h4>Thông báo mới nhận</h4>
                            </div>
                            <ul>
                                <li class="notify-item notify-item--viewed">
                                    <a href="index13.html" class="notify-link">
                                        <img src="img/notify1.jpg" alt="Hình ảnh" class="notify-img">
                                         <div class="notify-ifno">
                                             <span class="notify-name">HOẠT ĐỘNG THẮP NẾN TRI ÂN ANH HÙNG, LIỆT SỸ</span> 
                                              <span class="notify-decrition">Nhằm 76 năm Ngày Thương binh - Liệt sỹ (27/07/1947 - 27/07/2023), các đội hình của chiến dịch Mùa Hè Xanh 2023 đã tổ chức thắp nến tri ân...</span>
                                         </div>
                                     </a>
                                </li>
                                <li class="notify-item notify-item--viewed">
                                    <a href="index8.html" class="notify-link">
                                        <img src="img/notify2.jpg" alt="Hình ảnh" class="notify-img">
                                         <div class="notify-ifno">
                                             <span class="notify-name">HỘI THẢO VƯỢT QUA RÀO CẢN TÂM LÝ TROGN QUÁ TRÌNH TÌM VIỆC</span> 
                                              <span class="notify-decrition">Xin chào các bạn, Đội hình Văn hóa - Kỹ năng đã quay trở lại rồi đây! Tuần này, Đội hình chúng mình sẽ đưa các tham quan vùng đất Tây Nguyên ...</span>
                                         </div>
                                     </a>
                                </li><li class="notify-item notify-item--viewed">
                                    <a href="index9.html" class="notify-link ">
                                        <img src="img/notify3.jpg" alt="Hình ảnh" class="notify-img">
                                         <div class="notify-ifno">
                                             <span class="notify-name">NGÀY HỘI VIỆC LÀM – OU JOB FAIR 2023</span> 
                                              <span class="notify-decrition">
                                                Còn suy nghĩ đắn đo làm chi nữa các Boss hãy nhanh cái tay lẹ cái chân đăng kí dự thi để rinh thật nhiều giải thưởng thật đặc biệt từ Stop nhaaa...
                                              </span>
                                         </div>
                                     </a>
                                </li><li class="notify-item notify-item--viewed">
                                    <a href="index10.html" class="notify-link">
                                        <img src="img/notify4.jpg" alt="Hình ảnh" class="notify-img">
                                         <div class="notify-ifno">
                                             <span class="notify-name">TÁI CHẾ RÁC NHỰA, THAY ĐỔI VONGF ĐỜI CÙNG THIẾU NHI</span> 
                                              <span class="notify-decrition">
                                                Nhằm hưởng ứng hoạt động cao điểm “Chủ nhật xanh”, vào sáng ngày 23/07/2023 trên địa bàn Thành phố Hồ Chí Minh, chiến sĩ tình nguyện ...
                                              </span>
                                         </div>
                                     </a>
                                </li><li class="notify-item notify-item--viewed">
                                    <a href="index11.html" class="notify-link">
                                        <img src="img/notify5.jpg" alt="Hình ảnh" class="notify-img">
                                         <div class="notify-ifno">
                                             <span class="notify-name">CÁC HOẠT ĐỘNG TRONG CHIẾN DỊCH MÙA HÈ XANH 2023</span> 
                                              <span class="notify-decrition">
                                                Nhằm hưởng ứng hoạt động cao điểm “Chiến sĩ tình nguyện uống nước nhớ nguồn, tham gia đảm bảo an ninh xã hội” ngày 23/07/2023...
                                              </span>
                                         </div>
                                     </a>
                                </li>
                            </ul>
                            <footer class="notify-footer">
                                <a href=" " class="notify-footer-btn">Xem tất cả</a>
                            </footer>
                        </div>
                    </li>
     <li class="navbar-item ortext"><a href="index2.html"><i class="fa-regular fa-user"></i>Đăng nhập</a></li>
    `
    if(a!==null)
  {
    a.innerHTML=h;
  }
  }

};
window.onload = ortext();
