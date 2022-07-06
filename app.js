const button = document.querySelector("#button");
const selectBox = document.querySelector("#selectColor");
const select = document.getElementById("select");
const text = document.getElementById("container");
const user = document.getElementById("inputText");
button.addEventListener("click", onClick);
selectBox.addEventListener("click", containerColor);

function containerColor() {
  text.className = "";
  if (select.value == "red") {
    text.classList.add("redOption"); //setattribute
  } else if (select.value == "blue") {
    text.classList.add("blueOption");
  } else if (select.value == "purple") {
    text.classList.add("purpleOption");
  } else if (select.value == "pink") {
    text.classList.add("pinkOption");
  } else if (select.value == "orange") {
    text.classList.add("orangeOption");
  }
}

function onClick() {
  document.getElementById("text").innerHTML = "LOGİN";
  document.getElementById("button").innerHTML = "submit";
}
onClick();

user.addEventListener("submit", formSubmit);
const alertDom = document.querySelector("#alert");
const alert = (title, message, className = "warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`;
function formSubmit(event) {
  event.preventDefault();
  console.log("işlem gerçekleşti");
  const firstName = document.querySelector("#fname");
  const lastName = document.querySelector("#lname");
  if (firstName.value && lastName.value) {
    addItem(firstName.value, lastName.value);
    firstName.value = "";
    lastName.value = "";
  } else {
    alertDom.innerHTML = alert("Başlık", "Eksik bilgi girdiniz.", "danger");
  }
}
const userList = document.querySelector("#userList");

const addItem = (firstName, lastName) => {
  let liDOM = document.createElement("li");
  liDOM.innerHTML = `${firstName} ${lastName}`;
  liDOM.classList.add("list-group-item", "success");
  userList.append(liDOM);
  userList.className = "";
  if (select.value == "red") {
    liDOM.classList.add("redOption"); //setattribute
  } else if (select.value == "blue") {
    liDOM.classList.add("blueOption");
  } else if (select.value == "purple") {
    liDOM.classList.add("purpleOption");
  } else if (select.value == "pink") {
    liDOM.classList.add("pinkOption");
  } else if (select.value == "orange") {
    liDOM.classList.add("orangeOption");
  }
};
