// 1. Lấy các phần tử DOM cần thiết
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// 2. Hàm thêm công việc mới
function addTask() {
    const taskText = todoInput.value.trim();

    // Kiểm tra nếu ô nhập trống thì bỏ qua
    if (taskText === "") {
        alert("Vui lòng nhập tên công việc!");
        return;
    }

    // Tạo phần tử thẻ li mới
    const li = document.createElement('li');
    li.textContent = taskText;

    // Thêm thẻ li vào danh sách ul
    todoList.appendChild(li);

    // Xóa nội dung ô input sau khi thêm thành công
    todoInput.value = "";
    todoInput.focus();
}

// 3. Lắng nghe sự kiện click vào nút Thêm
addBtn.addEventListener('click', addTask);

// (Tùy chọn) Lắng nghe sự kiện nhấn phím Enter trên ô input
todoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});