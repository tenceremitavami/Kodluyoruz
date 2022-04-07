const inputSelector = document.querySelector("#taskMessage");
const sendButtonSelector = document.querySelector("#saveTaskButton");
const listSelector = document.querySelector("#list");

// const defaultList = [
//   {message: 'usman', isCompleted: false},
//   {message: 'suluman', isCompleted: false},
// ]

let list = JSON.parse(localStorage.getItem("list")) || [];

sendButtonSelector.addEventListener("click", () => {
  if (inputSelector.value === "") {
    errorToast();
  } else {
    list.push({
      message: inputSelector.value,
      isCompleted: false
    });
    inputSelector.value = "";
    listElement();
    successToast();
  }
});

function listElement() {
  listSelector.innerHTML = "";
  localStorage.setItem("list", JSON.stringify(list));
  const data = list.map((e, i) => {
    //listSelector.insertAdjacentHTML("beforeend", "<li>" + e + " <span class='deleteItem' data-index='" + i + "'> x </span></li>");
    const isChecked = e.isCompleted ? 'checked' : '';
    listSelector.insertAdjacentHTML("beforeend", "<li class='"+isChecked+"'><div class='item' data-index='" + i + "'>" + e.message + "</div> <button data-index='" + i + "' style='margin-right: 20px; margin-top:15px' class='close'>&times</button></li>");
  });

  const deleteItemSelector = document.querySelectorAll(".close");
  const selectedItemSelector = document.querySelectorAll(".item");

  deleteElement(deleteItemSelector);
  selectedItem(selectedItemSelector);
  
}

listElement();

function deleteElement(elements) {
  elements.forEach(function (e) {
    e.addEventListener("click", () => {
      //  console.log("basıldı delete");
      const filtered = list.filter(function (value, index) {
        return index != e.dataset.index;
      });
      list = filtered;
      listElement();
    });
  });
}

function selectedItem(elements) {
  elements.forEach(function (e) {
    e.addEventListener("click", () => {
      const newList = list.map((item, index) => {
        if(index == e.dataset.index){
          
          return {message: item.message, isCompleted: !item.isCompleted}
        }
        return item;
      });

      list = newList;
      listElement();
    });
  });
}


function successToast() {
  let toast = document.querySelector("#successToast");
  let toastAdd = new bootstrap.Toast(toast);
  toastAdd.show();
}

function errorToast() {
  let toast = document.querySelector("#errorToast");
  let toastAdd = new bootstrap.Toast(toast);
  toastAdd.show();
}
