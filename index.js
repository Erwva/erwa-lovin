function show(image){
  var modal = document.getElementById("myModal");
  var modalImage = document.getElementById("modal-image");
  modal.style.display = "block";
  modalImage.src = image.src;
}
function close(modal){
  console.log(modal.parentElement);
  modal.parentElement.style.display="none";
}
function openPage(){
  window.open("https://www.ferit.unios.hr/", "_blank");
}