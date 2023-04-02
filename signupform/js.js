let submitBtn = document.getElementById("submitBtn");
let theForm = document.getElementById("theForm");

submitBtn.addEventListener("click", () => theForm.submit());

function onChange() {
    const password = document.querySelector('input[name=userPass]');
    const confirm = document.querySelector('input[name=userCPass]');
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match');
    }
  }