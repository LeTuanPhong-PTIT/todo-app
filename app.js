// 1. Lấy các phần tử DOM cần thiết
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// 2. Hàm thêm công việc mới (Đã bao gồm nút Xóa)
function addTask() {
    const taskText = todoInput.value.trim();

    // Kiểm tra nếu ô nhập trống thì bỏ qua
    if (taskText === "") {
        alert("Vui lòng nhập tên công việc!");
        return;
    }

    // Tạo phần tử thẻ li mới
    const li = document.createElement('li');
    
    // Thêm nội dung công việc (sử dụng span để bọc nội dung chữ)
    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);

    // Tạo nút xóa [X] cho từng công việc
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-btn');
    
    // Xử lý sự kiện xóa công việc khi click vào nút X
    deleteBtn.addEventListener('click', function() {
        todoList.removeChild(li);
    });

    // Thêm nút xóa vào thẻ li
    li.appendChild(deleteBtn);

    // Thêm thẻ li hoàn chỉnh vào danh sách ul
    todoList.appendChild(li);

    // Xóa nội dung ô input và focus lại sau khi thêm thành công
    todoInput.value = "";
    todoInput.focus();
}

// 3. Lắng nghe sự kiện click vào nút Thêm
addBtn.addEventListener('click', addTask);

// 4. Lắng nghe sự kiện nhấn phím Enter trên ô input để thêm nhanh
todoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});