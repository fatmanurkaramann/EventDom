const button = document.querySelector("#button");
const selectBox = document.querySelector("#selectColor");
const select = document.getElementById("select");
const text = document.getElementById("container");
button.addEventListener("click", onClick);
selectBox.addEventListener("click", function () {
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
  console.log(text);
});

function onClick() {
  document.getElementById("text").innerHTML = "LOGİN";
  document.getElementById("button").innerHTML = "submit";
}
onClick();
