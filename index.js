const express = require("express"); // Import Express
const app = express(); // Khởi tạo ứng dụng Express

const PORT = process.env.PORT || 3000; // Lấy PORT từ biến môi trường hoặc dùng 3000

// Định nghĩa route đơn giản
app.get("/", (req, res) => {
  res.send("Hello, World!"); // Trả về chuỗi "Hello, World!" khi truy cập route "/"
});

// Lắng nghe server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
