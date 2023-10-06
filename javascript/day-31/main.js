var datas = [
  {
    title: "Nhập môn lập trình web",
    content: [
      "Giới thiệu Khóa học HTML-CSS",
      "Nhập môn lập trình web - Phần 1",
      "Nhập môn lập trình web - Phần 2",
      "Công cụ - Phần mềm cần chuẩn bị",
    ],
  },
  {
    title: "Ngôn ngữ HTML",
    content: ["HTML cơ bản - Phần 1", "Nhập môn lập trình web - Phần 2"],
  },
  {
    title: "Ngôn ngữ CSS",
    content: [
      "Giới thiệu ngôn ngữ CSS - Cách viết CSS",
      "Cấu trúc CSS - Bộ chọn (Selector) trong CSS - Phần 1",
      "Bộ chọn CSS (Tiếp theo) - Các thuộc tính định dạng văn bản",
      "Chồng chéo CSS và thứ tự ưu tiên trong CSS",
      "Thuộc tính Background",
      "Thuộc tính Border",
      "Thuộc tính Width - Height",
      "Thuộc tính text-align",
      "Thuộc tính overflow",
      "Thuộc tính opacity",
      "Thuộc tính Padding - Margin",
      "Reset CSS - Tại sao Reset CSS lại quan trọng?",
      "Thuộc tính Float trong CSS",
      "Thuộc tính clear - Kỹ thuật clearfix",
      "Thuộc tính Display",
      "Thuộc tính Position trong CSS",
      "Định dạng danh sách (List Style) trong CSS",
      "Xử lý tự động thu hẹp lề khi sử dụng Margin",
      "Hướng dẫn kỹ thuật CSS Sprites chi tiết",
      "Nguyên tắc kế thừa class - id trong CSS",
      "Hướng dẫn sử dụng BEM để đặt tên Class",
      "Làm việc với thành phần giả (Pseudo Elements) before - after",
      "Làm việc với thành phần giả (Pseudo Elements) khác",
      "Làm việc với lớp giả (Pseudo Classes) - Phần 1",
      "Làm việc với lớp giả (Pseudo Classes) - Phần 2",
      "Làm việc với lớp giả (Pseudo Classes) - Phần 3",
      "Tích hợp font-awesome và kỹ thuật liên quan",
      "Hướng dẫn sử dụng biến (Variable) trong CSS",
      "Thực hành xây dựng menu đa cấp sử dụng HTML - CSS",
      "Tạo bộ đếm (Counter) trong CSS",
      "Tính toán kích thước bằng hàm calc()",
      "Đổ bóng khối và văn bản trong CSS",
      "CSS Prefixer là gì? Hướng dẫn thêm CSS Prefixer",
      "Thuộc tính transition trong CSS3",
      "Thực hành tạo hiệu ứng với transition - Phần 1",
      "Thực hành tạo hiệu ứng với transition - Phần 2",
      "Thực hành tạo hiệu ứng với transition - Phần 3",
      "Thuộc tính transform trong CSS3 - Phần 1",
      "Thuộc tính transform trong CSS3 - Phần 2",
      "Thuộc tính transform trong CSS3 - Phần 3",
      "Background Gradient trong CSS3",
      "Kỹ thuật làm việc với flexbox - Phần 1",
      "Kỹ thuật làm việc với flexbox - Phần 2",
      "Kỹ thuật làm việc với flexbox - Phần 3",
      "Thực hành với flexbox - Phần 1",
      "Thực hành với flexbox - Phần 2",
      "Kỹ thuật dựng layout với Grid CSS3",
      "Tạo hiệu ứng với Animate trong CSS3",
      "Thực hành tạo hiệu ứng với Animation trong CSS3 - Phần 1",
      "Thực hành tạo hiệu ứng với Animation trong CSS3 - Phần 2",
      "Tích hợp và sử dụng thư viện animate.css để tạo hiệu ứng",
      "Tự xây dựng Grid System để dựng layout với CSS - Phần 1",
      "Tự xây dựng Grid System để dựng layout với CSS - Phần 2",
    ],
  },
  {
    title: "Responsive Web Design",
    content: [
      "Tổng quan về Responsive Web Design",
      "Hướng dẫn code Media Queries CSS3",
      "Tối ưu Responsive Grid System - Phần 1",
      "Tối ưu Responsive Grid System - Phần 2",
      "Xây dựng menu responsive chỉ với CSS",
    ],
  },
  {
    title: "Xây dựng dự án Nature từ A - Z",
    content: [
      "Tổng quan và hướng dẫn xây dựng dự án",
      "Phân tích và tạo cấu trúc files, folder",
      "Cài đặt công cụ - Thiết lập load file header - footer",
      "Thiết lập định dạng chung cho file reset.css - base.css",
      "Xây dựng Header - Phần 1",
      "Xây dựng Header - Phần 2",
      "Xây dựng Header - Phần 3",
      "HomePage - Xây dựng Slider",
      "HomePage - Xây dựng Service Section",
      "HomePage - Xây dựng Gallery Ảnh",
      "HomePage - Xây dựng Product Box - Phần 1",
      "HomePage - Xây dựng Product Box - Phần 2",
      "HomePage - Xây dựng Product Box - Phần 3",
      "HomePage - Xây dựng Product Box - Phần 4",
      "HomePage - Xây dựng Testimonials Box",
      "HomePage - Xây dựng Support Box",
      "HomePage - Xây dựng News Box",
      "HomePage - Xây dựng Brand Box",
      "Xây dựng Footer - Phần 1",
      "Xây dựng Footer - Phần 2",
      "Xây dựng nút Back To Top Animate",
      "HomePage - Tối ưu Responsive - Phần 1",
      "HomePage - Tối ưu Responsive - Phần 2",
      "HomePage - Tối ưu Responsive - Phần 3",
      "Category Page - Xây dựng Breadcrumbs",
      "Category Page - Xây dựng Sidebar - Phần 1",
      "Category Page - Xây dựng Sidebar - Phần 2",
      "Category Page - Xây dựng Sidebar - Phần 3",
      "Category Page - Xây dựng Product Filters",
      "Category Page - Xây dựng Product Box và Phân trang",
      "Category Page - Tối ưu Responsive",
      "Product Detail Page - Phần 1",
      "Product Detail Page - Phần 2",
      "Product Detail Page - Phần 3",
      "Product Detail Page - Phần 4",
      "Product Detail Page - Phần 5",
      "Product Detail Page - Phần 6",
      "Product Detail Page - Tối ưu Responsive",
      "Tối ưu và hoàn thiện dự án Nature",
      "Thử thách - Hiểu rõ hơn công việc cắt PSD sang HTML-CSS",
    ],
  },
  {
    title: "Deployment Github - Server",
    content: [
      "Tổng quan về GIT - GitHub",
      "Hướng dẫn đăng ký tài khoản GitHub",
      "Tạo Repository và Push code lên GitHub",
      "Tạo GitHub Pages và xuất bản website",
      "Cập nhật chỉnh sửa lên GitHub",
      "Thêm tên miền riêng cho GitHub Pages",
      "Trỏ tên miền qua Cloudflare và kích hoạt HTTPS",
      "Thêm Favicon cho website",
    ],
  },
];
var num = 1;
var numItem = 1;
var list = document.querySelector(".list");
datas.forEach(function (data) {
  var textNode = document.createTextNode(`Module: ${num} `);

  var divModule = document.createElement("div");
  divModule.classList.add("item");
  divModule.classList.add("list-module");
  divModule.draggable = true;
  divModule.innerText = data.title;
  divModule.prepend(textNode);
  num++;

  list.append(divModule);

  data.content.forEach(function (item) {
    var textNodeItem = document.createTextNode(`Bài: ${numItem} `);

    var divItem = document.createElement("div");

    divItem.classList.add("item");
    divItem.classList.add("list-item");
    divItem.draggable = true;
    divItem.innerText = item;
    divItem.prepend(textNodeItem);
    numItem++;

    list.append(divItem);
  });
});

var items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("dragstart", function () {
    setTimeout(() => {
      item.classList.add("dragging");
    }, 0);
  });
  item.addEventListener("dragend", function () {
    item.classList.remove("dragging");
  });
});

var draglist = (e) => {
  e.preventDefault();
  var dragItem = list.querySelector(".dragging");

  var siblings = [...list.querySelectorAll(".item:not(.dragging)")];

  var nextSibling = siblings.find((sibling) => {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });

  list.insertBefore(dragItem, nextSibling);
};

list.addEventListener("dragover", draglist);
list.addEventListener("dragenter", function (e) {
  e.preventDefault;
});
