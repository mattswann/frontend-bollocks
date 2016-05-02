$(document).ready(function() {
  console.log("Loaded, bro.");
  $("#open-modal").on("click", openModal);
  $("#close-modal").on("click", closeModal);
});

function openModal() {
  console.log("You clicked the open button!");
  $("#modal").toggle();
}

function closeModal() {
  console.log("You clicked the close button!");
  $("#modal").toggle();
}

