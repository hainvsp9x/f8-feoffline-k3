// Chưa Làm xong, chưa hiển thị đc validate
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnShow = $(".btn-main");
const modal = $(".js-modal");
const modalContainer = $(".js-modal-container");
const btnLogin = $(".js-btn-login");
const btnRegister = $(".js-btn-register");
const formLogin = $(".js-form-login");
const formRegis = $(".js-form-register");

const inputName = $("#name");
const inputEmail = $("#email");
const inputpassword = $("#password");

function showModal() {
  modal.classList.remove("hide");
  modal.classList.add("show");
  formLogin.classList.remove("hide");
}
function hideModal() {
  modal.classList.add("hide");
}
btnShow.addEventListener("click", showModal);
modal.addEventListener("click", hideModal);

modalContainer.addEventListener("click", function (e) {
  // e.stopPropagation();
});
btnRegister.addEventListener("click", function () {
  btnLogin.classList.remove("active");
  btnRegister.classList.add("active");
  formLogin.classList.add("hide");
  formRegis.classList.remove("hide");
});
btnLogin.addEventListener("click", function () {
  btnLogin.classList.add("active");
  btnRegister.classList.remove("active");
  formLogin.classList.remove("hide");
  formRegis.classList.add("hide");
});

// Validate
inputName.addEventListener("input", () => {
  let isValid = checkValidate();

  if (isValid) {
    lgSuccess.innerText = "";
  }
});

// lay gia tri input
function getValue(id) {
  return document.getElementById(id).value.trim();
}
//Hien thi loi
function showError(key, mess) {
  document.getElementById(key + "_error").innerHTML = mess;
}

function validate() {
  const usernameVal = inputName.value;
  const emailVal = inputEmail.value;
  const passwordVal = inputpassword.value;

  const messName = $("#name_error");
  const messEmail = $("#email_error");
  const messPassword = $("#password_error");
  let isCheck = true;

  if (usernameValue == "") {
    messName.innerText = "Tên không được để trống";
    isCheck = false;
  } else if (usernameVal.length < 5 || usernameVal.length > 20) {
    messName.innerText = "Tên quá ngắn hoặc quá dài";
    isCheck = false;
  } else {
    inputName.style.borderColor = "green";
  }
  if (emailVal == "") {
    messEmail.innerText = "Email không được để trống";
    isCheck = false;
  } else if (!isEmail(emailVal)) {
    messEmail.innerText = "Email không hợp lê";
  } else {
    inputEmail.style.borderColor = "green";
  }
  if (passwordVal == "") {
    messPassword.innerText = "Mật khẩu không được để trống";
    isCheck = false;
  } else if (!isPassword(passwordVal)) {
    messPassword.innerText = "Mật khẩu không đúng định dạng";
    isCheck = false;
  } else {
    inputpassword.style.borderColor = "green";
  }
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
function isPassword(val) {
  const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
}
// message error
function setError(ele, message) {
  let parentEle = ele.parentNode;
  parentEle.classList.add("error");
  parentEle.querySelector(".password_error").innerText = message;
}
