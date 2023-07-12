document.addEventListener("DOMContentLoaded", function () {
  const maleIcon = document.querySelector(".male-icon");
  const femaleIcon = document.querySelector(".female-icon");
  const wavingMaleIcon = document.querySelector(".waving-male-icon");
  const wavingFemaleIcon = document.querySelector(".waving-female-icon");

  maleIcon.addEventListener("click", function () {
    maleIcon.style.display = "none";
    wavingMaleIcon.style.display = "inline-block";
    femaleIcon.style.display = "inline-block";
    wavingFemaleIcon.style.display = "none";
  });

  femaleIcon.addEventListener("click", function () {
    femaleIcon.style.display = "none";
    wavingFemaleIcon.style.display = "inline-block";
    maleIcon.style.display = "inline-block";
    wavingMaleIcon.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const phoneInput = document.getElementById("phoneInput");

  const formInputs = [nameInput, emailInput, phoneInput];

  formInputs.forEach((input) => {
    input.addEventListener("blur", function () {
      if (input.value.trim() === "") {
        input.classList.add("is-invalid");
        input.nextElementSibling.style.display = "block";
      } else {
        input.classList.remove("is-invalid");
        input.nextElementSibling.style.display = "none";
      }
    });
  });
});

function submitForm() {
  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const phoneInput = document.getElementById("phoneInput");

  const formInputs = [nameInput, emailInput, phoneInput];

  formInputs.forEach((input) => {
    if (input.value.trim() === "") {
      input.classList.add("is-invalid");
      if (input.nextElementSibling) {
        input.nextElementSibling.style.display = "block";
      }
    } else {
      input.classList.remove("is-invalid");
      if (input.nextElementSibling) {
        input.nextElementSibling.style.display = "none";
      }
    }
  });

  // Check if any required field is empty
  if (
    nameInput.value.trim() === "" ||
    emailInput.value.trim() === "" ||
    phoneInput.value.trim() === ""
  ) {
    return;
  }

  // Redirect to the thank you page
  window.location.href = "./thank-you-page.html";
}

window.onload = function () {
  var form = document.getElementById("form");
  form.button.onclick = function () {
    for (var i = 0; i < form.elements.length; i++) {
      if (
        form.elements[i].value === "" &&
        form.elements[i].hasAttribute("required")
      ) {
        alert("There are some required fields!");
        return false;
      }
    }
    form.submit();
  };
};

function validEmail(text) {
  if (text.indexOf("@") === 0) {
    return "Wrong Email format";
  }
  if (text.lastIndexOf(".") === text.length - 1) {
    return "Wrong Email format";
  }

  let contorAt = 0;
  let contorDot = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "@") {
      contorAt++;
    }
    if (contorAt === 1) {
      if (text[i] === ".") {
        contorDot++;
      }
    }
  }

  if (contorAt === 0) {
    return "Wrong Email format";
  }

  if (contorAt > 1) {
    return "Wrong Email format";
  }

  if (contorDot > 1) {
    return "Wrong Email format";
  }

  if (contorDot === 0) {
    return "Wrong Email format";
  }

  for (let i = 0; i < text.length; i++) {
    if (text[i] === "@") {
      contorAt++;
    }
  }

  if (text.indexOf("@") === text.lastIndexOf(".") - 1) {
    return "Wrong Email format";
  }

  return "Valid email";
}
