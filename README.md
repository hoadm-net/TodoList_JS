# TodoList App - Ứng dụng quản lý công việc

Đây là một ứng dụng TodoList đơn giản được xây dựng bằng HTML, CSS và JavaScript thuần túy, phù hợp cho việc học tập và demo.

## 🎯 Mục tiêu

Ứng dụng này được tạo ra để demo cho khóa học JavaScript cơ bản với các yêu cầu:

- ✅ Sử dụng HTML, CSS và JavaScript thuần túy
- ✅ External CSS và JS files  
- ✅ Xây dựng ứng dụng TodoList hoàn chình
- ✅ Sử dụng lập trình hàm (Functional Programming)
- ✅ Code bằng tiếng Anh, comment bằng tiếng Việt

## 🚀 Tính năng

### Chức năng cơ bản
- ➕ **Thêm công việc mới**: Nhập và thêm công việc vào danh sách
- ✅ **Đánh dấu hoàn thành**: Click checkbox để đánh dấu công việc đã xong
- 🗑️ **Xóa công việc**: Xóa từng công việc hoặc xóa tất cả
- 💾 **Lưu trữ tự động**: Dữ liệu được lưu trong localStorage

### Chức năng nâng cao
- 🔍 **Bộ lọc**: Xem tất cả, chỉ công việc chưa xong, hoặc đã hoàn thành
- 📊 **Thống kê**: Hiển thị số lượng công việc theo từng trạng thái
- 📱 **Responsive**: Giao diện thích ứng với mọi thiết bị
- ⌨️ **Phím tắt**: Nhấn Enter để thêm công việc nhanh

## 📁 Cấu trúc dự án

```
TodoList_JS/
├── index.html      # File HTML chính
├── styles.css      # File CSS cho giao diện
├── script.js       # File JavaScript xử lý logic
└── README.md       # File hướng dẫn này
```

## 🛠️ Cách sử dụng

### Chạy ứng dụng
1. Mở file `index.html` bằng trình duyệt web
2. Hoặc sử dụng Live Server extension trong VS Code

### Hướng dẫn sử dụng
1. **Thêm công việc**: Nhập nội dung vào ô input và click "Thêm" hoặc nhấn Enter
2. **Đánh dấu hoàn thành**: Click vào checkbox bên trái mỗi công việc
3. **Lọc công việc**: Sử dụng các nút "Tất cả", "Chưa xong", "Đã xong"
4. **Xóa công việc**: Click nút 🗑️ để xóa từng công việc
5. **Xóa tất cả**: Click "Xóa tất cả" để xóa toàn bộ danh sách

## 💻 Kiến thức JavaScript được sử dụng

### Lập trình hàm (Functional Programming)
- **Pure Functions**: Các hàm không có side effects
- **Array Methods**: `map()`, `filter()`, `find()`, `forEach()`
- **Immutability**: Không thay đổi trực tiếp dữ liệu gốc
- **Function Composition**: Tổ hợp các hàm nhỏ thành chức năng lớn

### Kiến thức cơ bản
- **DOM Manipulation**: Thao tác với HTML elements
- **Event Handling**: Xử lý sự kiện click, keypress
- **Local Storage**: Lưu trữ dữ liệu cục bộ
- **JSON**: Chuyển đổi dữ liệu JavaScript sang JSON và ngược lại

### Kiến thức nâng cao
- **ES6+ Features**: Arrow functions, template literals, destructuring
- **Error Handling**: Try-catch để xử lý lỗi
- **Input Validation**: Kiểm tra và xác thực dữ liệu đầu vào

## 🎨 Thiết kế giao diện

- **Modern UI**: Giao diện hiện đại với gradient và box-shadow
- **Responsive Design**: Thích ứng từ desktop đến mobile
- **Animations**: Hiệu ứng mượt mà khi thêm/xóa công việc
- **User Experience**: Thông báo và feedback rõ ràng

## 🔧 Tùy chỉnh

### Thay đổi màu sắc
Chỉnh sửa các biến CSS trong file `styles.css`:
```css
/* Màu chính */
--primary-color: #4CAF50;
--primary-hover: #45a049;

/* Màu nguy hiểm */
--danger-color: #ff4757;
--danger-hover: #ff3838;
```

### Thêm tính năng mới
Các hàm trong `script.js` được tổ chức theo nguyên tắc lập trình hàm, dễ dàng mở rộng:
- Thêm trường dữ liệu mới vào object `todo`
- Tạo hàm xử lý riêng cho tính năng mới
- Cập nhật hàm `renderTodoList()` để hiển thị

## 📚 Học thêm

Dự án này bao gồm nhiều khái niệm quan trọng:

1. **HTML Semantic**: Sử dụng các thẻ có ý nghĩa
2. **CSS Flexbox**: Layout linh hoạt
3. **JavaScript ES6+**: Cú pháp hiện đại
4. **Web Storage API**: Lưu trữ phía client
5. **Event-driven Programming**: Lập trình hướng sự kiện

## 🐛 Debug và phát triển

### Console logs
Ứng dụng có nhiều console.log() để theo dõi:
```javascript
// Bật Developer Tools (F12) để xem logs
console.log('✅ Đã thêm công việc mới:', newTodo.text);
```

### Kiểm tra dữ liệu
```javascript
// Gọi hàm này trong console để xem trạng thái
logAppState();
```

## 📄 License

Dự án này được tạo ra cho mục đích giáo dục, bạn có thể tự do sử dụng và chỉnh sửa.

---

**Tác giả**: Demo cho khóa học JavaScript cơ bản  
**Ngày tạo**: Tháng 9, 2025  
**Phiên bản**: 1.0.0
