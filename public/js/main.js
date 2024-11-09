const form = document.querySelector("#createForm");
const button = document.querySelector("#createButton");
const editButtons = document.querySelectorAll(".editButton");

button.addEventListener("click", function () {
  if (form.classList.contains("passive")) {
    form.classList.remove("passive");
    form.classList.add("active");
    button.textContent = "X";
  } else {
    form.classList.remove("active");
    form.classList.add("passive");
    button.textContent = "New Post";
  }
});

editButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    const form = event.target.closest("form");
    const textInput = form.querySelector('input[name="title"]');
    const textArea = form.querySelector("textarea");
    const updateButton = form.querySelector(".updateButton");
    form.dataset.editable =
      form.dataset.editable === "false" ? "true" : "false";
    if (form.dataset.editable === "false") {
      updateButton.style.display = "none";
      textInput.readOnly = true;
      textArea.readOnly = true;
      form.classList.remove("bg-[#FCFAEE]");
    } else {
      updateButton.style.display = "block";
      textInput.readOnly = false;
      textArea.readOnly = false;
      form.classList.add("bg-[#FCFAEE]");
    }
  });
});
