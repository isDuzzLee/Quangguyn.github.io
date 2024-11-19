// Lấy các phần tử
const loginButton = document.getElementById("loginButton");
const loginDialog = document.getElementById("loginDialog");
const closeDialog = document.getElementById("closeDialog");

// Hiển thị dialog khi nhấn nút
loginButton.addEventListener("click", () => {
  loginDialog.classList.add("active");
});

// Đóng dialog khi nhấn nút đóng
closeDialog.addEventListener("click", () => {
  loginDialog.classList.remove("active");
});

// Đóng dialog khi nhấn ra ngoài
loginDialog.addEventListener("click", (e) => {
  if (e.target === loginDialog) {
    loginDialog.classList.remove("active");
  }
});
