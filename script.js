// Modal window opening function
function openModal(imageSrc) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-image");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

// Modal window closing function
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

// The function of opening and closing contacts
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}