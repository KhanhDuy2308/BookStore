
function myFunction() {
    // Tóm lấy cái hộp chứa mấy cái chức năng Sách, Giỏ Hàng... thông qua Class của anh
    const navbarRight = document.querySelector('.navbar-right');
    
    // Mỗi lần bấm vào nút Hamburger, tự động bật/tắt class 'active'
    navbarRight.classList.toggle('active');
}
