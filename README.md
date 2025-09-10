# Bài tập: Xây dựng ứng dụng TodoList

## 📝 Đề bài

Xây dựng một ứng dụng quản lý công việc (TodoList) đơn giản sử dụng HTML, CSS và JavaScript thuần túy.

## 🎯 Yêu cầu kỹ thuật

- ✅ Sử dụng **HTML5, CSS3, JavaScript ES6+** thuần túy
- ✅ **Không** sử dụng framework/library bên ngoài  
- ✅ CSS và JS phải là **external files**
- ✅ Áp dụng **Functional Programming** paradigm

## 📋 Chức năng cần có

### Chức năng cơ bản
1. **Thêm công việc**: Nhập tên công việc và thêm vào danh sách
2. **Hiển thị danh sách**: Hiển thị tất cả công việc đã thêm
3. **Đánh dấu hoàn thành**: Click để đánh dấu công việc đã xong/chưa xong
4. **Xóa công việc**: Xóa từng công việc hoặc xóa tất cả
5. **Lưu trữ**: Dữ liệu được lưu và khôi phục khi reload trang

### Chức năng nâng cao
6. **Lọc hiển thị**: Xem theo trạng thái (tất cả/chưa xong/đã xong)
7. **Thống kê**: Hiển thị số lượng công việc theo trạng thái
8. **Validation**: Kiểm tra input hợp lệ trước khi thêm
9. **Responsive**: Giao diện hoạt động tốt trên mobile
10. **UX/UI**: Giao diện đẹp với animations và feedback

## 🔧 Quy tắc nghiệp vụ

- Công việc **không được rỗng** và **tối đa 100 ký tự**
- Mỗi công việc có **ID duy nhất** và **thời gian tạo**
- Dữ liệu lưu trong **localStorage** của trình duyệt
- **Xác nhận** trước khi xóa công việc
- Hiển thị **thông báo lỗi** khi có vấn đề

## 🏗️ Cấu trúc dữ liệu

Mỗi công việc (todo) cần có các thông tin:
- **id**: Mã định danh duy nhất  
- **text**: Nội dung công việc
- **completed**: Trạng thái hoàn thành (true/false)
- **createdAt**: Thời gian tạo

## 📁 Cấu trúc files

```
TodoList_JS/
├── index.html      # Giao diện HTML
├── styles.css      # Styling CSS  
├── script.js       # Logic JavaScript
└── README.md       # Tài liệu hướng dẫn
```

## 🎓 Kiến thức cần áp dụng

### HTML
- Semantic HTML5 (header, main, section)
- Form elements (input, button)
- Lists (ul, li) cho hiển thị todos

### CSS  
- Flexbox/Grid layout
- Responsive design với media queries
- CSS animations và transitions
- Modern CSS properties

### JavaScript
- **DOM Manipulation**: querySelector, addEventListener
- **Array Methods**: map(), filter(), find(), forEach()
- **ES6+ Features**: arrow functions, template literals, destructuring
- **Local Storage**: setItem(), getItem(), JSON methods
- **Event Handling**: click, keypress events
- **Function Programming**: pure functions, immutability

## 🚀 Gợi ý thực hiện

### Bước 1: HTML Structure
Tạo cấu trúc HTML với form input, nút thêm, danh sách todos và các nút lọc.

### Bước 2: CSS Styling  
Thiết kế giao diện đẹp, responsive với animations cho user experience tốt.

### Bước 3: JavaScript Logic
- Tạo array để lưu todos
- Viết functions cho CRUD operations
- Implement localStorage cho data persistence
- Add event listeners cho user interactions

### Bước 4: Advanced Features
- Filter functionality
- Statistics display  
- Input validation
- Error handling
