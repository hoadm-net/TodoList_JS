// Khởi tạo biến global để lưu trữ danh sách công việc
let todos = [];
let currentFilter = 'all'; // Bộ lọc hiện tại: 'all', 'pending', 'completed'

// Hàm khởi tạo ứng dụng khi trang web được load
function initApp() {
    console.log('🚀 Khởi tạo ứng dụng TodoList');
    loadTodosFromStorage(); // Tải dữ liệu từ localStorage
    renderTodoList(); // Hiển thị danh sách công việc
    updateStats(); // Cập nhật thống kê
    setupEventListeners(); // Thiết lập các event listener
}

// Thiết lập các event listener
function setupEventListeners() {
    // Lắng nghe sự kiện Enter khi gõ trong input
    const todoInput = document.getElementById('todoInput');
    todoInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTodo();
        }
    });
    
    console.log('✅ Đã thiết lập event listeners');
}

// Hàm tạo ID duy nhất cho mỗi todo
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Hàm lấy thời gian hiện tại định dạng đẹp
function getCurrentDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString('vi-VN');
    const time = now.toLocaleTimeString('vi-VN', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
    return `${date} ${time}`;
}

// Hàm thêm công việc mới
function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();
    
    // Kiểm tra input không được rỗng
    if (todoText === '') {
        alert('⚠️ Vui lòng nhập nội dung công việc!');
        todoInput.focus();
        return;
    }
    
    // Kiểm tra độ dài tối đa
    if (todoText.length > 100) {
        alert('⚠️ Nội dung công việc không được vượt quá 100 ký tự!');
        return;
    }
    
    // Tạo đối tượng todo mới
    const newTodo = {
        id: generateId(),
        text: todoText,
        completed: false,
        createdAt: getCurrentDateTime()
    };
    
    // Thêm vào đầu mảng todos
    todos.unshift(newTodo);
    
    // Xóa nội dung input
    todoInput.value = '';
    
    // Cập nhật giao diện
    saveTodosToStorage();
    renderTodoList();
    updateStats();
    
    console.log('✅ Đã thêm công việc mới:', newTodo.text);
}

// Hàm chuyển đổi trạng thái hoàn thành của todo
function toggleTodo(todoId) {
    todos = todos.map(todo => {
        if (todo.id === todoId) {
            return {
                ...todo,
                completed: !todo.completed
            };
        }
        return todo;
    });
    
    saveTodosToStorage();
    renderTodoList();
    updateStats();
    
    console.log('🔄 Đã cập nhật trạng thái todo:', todoId);
}

// Hàm xóa một todo
function deleteTodo(todoId) {
    const todoToDelete = todos.find(todo => todo.id === todoId);
    
    if (confirm(`🗑️ Bạn có chắc muốn xóa công việc "${todoToDelete.text}"?`)) {
        todos = todos.filter(todo => todo.id !== todoId);
        
        saveTodosToStorage();
        renderTodoList();
        updateStats();
        
        console.log('🗑️ Đã xóa todo:', todoToDelete.text);
    }
}

// Hàm xóa tất cả todos
function clearAllTodos() {
    if (todos.length === 0) {
        alert('📝 Không có công việc nào để xóa!');
        return;
    }
    
    if (confirm(`🗑️ Bạn có chắc muốn xóa tất cả ${todos.length} công việc?`)) {
        todos = [];
        
        saveTodosToStorage();
        renderTodoList();
        updateStats();
        
        console.log('🧹 Đã xóa tất cả todos');
    }
}

// Hàm lọc todos theo trạng thái
function filterTodos(filterType) {
    currentFilter = filterType;
    
    // Cập nhật trạng thái active của các nút filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    
    // Tìm và active nút được click
    const activeButton = Array.from(filterButtons).find(btn => 
        btn.textContent.toLowerCase().includes(getFilterKeyword(filterType))
    );
    if (activeButton) {
        activeButton.classList.add('active');
    }
    
    renderTodoList();
    console.log('🔍 Đã áp dụng bộ lọc:', filterType);
}

// Hàm helper để lấy từ khóa của filter
function getFilterKeyword(filterType) {
    const keywords = {
        'all': 'tất cả',
        'pending': 'chưa',
        'completed': 'đã'
    };
    return keywords[filterType] || 'tất cả';
}

// Hàm lấy danh sách todos đã được lọc
function getFilteredTodos() {
    switch (currentFilter) {
        case 'pending':
            return todos.filter(todo => !todo.completed);
        case 'completed':
            return todos.filter(todo => todo.completed);
        default:
            return todos;
    }
}

// Hàm render danh sách todos
function renderTodoList() {
    const todoList = document.getElementById('todoList');
    const emptyState = document.getElementById('emptyState');
    const filteredTodos = getFilteredTodos();
    
    // Xóa nội dung cũ
    todoList.innerHTML = '';
    
    // Kiểm tra nếu không có todos
    if (filteredTodos.length === 0) {
        emptyState.classList.add('show');
        todoList.style.display = 'none';
        return;
    }
    
    // Ẩn empty state và hiển thị danh sách
    emptyState.classList.remove('show');
    todoList.style.display = 'flex';
    
    // Render từng todo item
    filteredTodos.forEach(todo => {
        const todoItem = createTodoElement(todo);
        todoList.appendChild(todoItem);
    });
    
    console.log(`📋 Đã render ${filteredTodos.length} todos`);
}

// Hàm tạo element HTML cho một todo
function createTodoElement(todo) {
    const li = document.createElement('li');
    li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
    
    li.innerHTML = `
        <input 
            type="checkbox" 
            class="todo-checkbox" 
            ${todo.completed ? 'checked' : ''}
            onchange="toggleTodo('${todo.id}')"
        >
        <span class="todo-text">${escapeHtml(todo.text)}</span>
        <span class="todo-date">${todo.createdAt}</span>
        <button 
            class="delete-btn" 
            onclick="deleteTodo('${todo.id}')"
            title="Xóa công việc"
        >
            🗑️
        </button>
    `;
    
    return li;
}

// Hàm escape HTML để tránh XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Hàm cập nhật thống kê
function updateStats() {
    const totalCount = todos.length;
    const completedCount = todos.filter(todo => todo.completed).length;
    const pendingCount = totalCount - completedCount;
    
    // Cập nhật các element hiển thị thống kê
    document.getElementById('totalCount').textContent = `Tổng: ${totalCount}`;
    document.getElementById('pendingCount').textContent = `Chưa hoàn thành: ${pendingCount}`;
    document.getElementById('completedCount').textContent = `Đã hoàn thành: ${completedCount}`;
    
    console.log('📊 Cập nhật thống kê:', { totalCount, pendingCount, completedCount });
}

// Hàm lưu todos vào localStorage
function saveTodosToStorage() {
    try {
        localStorage.setItem('todolist_data', JSON.stringify(todos));
        console.log('💾 Đã lưu dữ liệu vào localStorage');
    } catch (error) {
        console.error('❌ Lỗi khi lưu dữ liệu:', error);
        alert('⚠️ Không thể lưu dữ liệu! Vui lòng kiểm tra bộ nhớ trình duyệt.');
    }
}

// Hàm tải todos từ localStorage
function loadTodosFromStorage() {
    try {
        const savedData = localStorage.getItem('todolist_data');
        if (savedData) {
            todos = JSON.parse(savedData);
            console.log('📂 Đã tải dữ liệu từ localStorage:', todos.length, 'todos');
        } else {
            console.log('📂 Không có dữ liệu cũ, khởi tạo mảng rỗng');
        }
    } catch (error) {
        console.error('❌ Lỗi khi tải dữ liệu:', error);
        todos = []; // Reset về mảng rỗng nếu có lỗi
        alert('⚠️ Không thể tải dữ liệu cũ! Bắt đầu với danh sách rỗng.');
    }
}

// Hàm helper để log trạng thái ứng dụng (dùng cho debug)
function logAppState() {
    console.log('🔍 Trạng thái ứng dụng hiện tại:');
    console.log('- Tổng số todos:', todos.length);
    console.log('- Bộ lọc hiện tại:', currentFilter);
    console.log('- Danh sách todos:', todos);
}

// Khởi tạo ứng dụng khi DOM đã sẵn sàng
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌐 DOM đã sẵn sàng, khởi tạo ứng dụng...');
    initApp();
});

// Export functions để có thể test (nếu cần)
// Chỉ export khi đang trong môi trường test
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addTodo,
        toggleTodo,
        deleteTodo,
        clearAllTodos,
        filterTodos,
        updateStats,
        saveTodosToStorage,
        loadTodosFromStorage
    };
}
