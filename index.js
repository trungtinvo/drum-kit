for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    var audio = new Audio('sounds/' + buttonInnerHTML + '.mp3');
    audio.play();
    buttonAnimation(buttonInnerHTML);
  });
}
document.addEventListener("keydown", function(event) {
  var audio = new Audio('sounds/' + event.key + '.mp3');
  audio.play();
  buttonAnimation(event.key);

});
function buttonAnimation (currentKey) {
var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("pressed");
setTimeout(function () {
  activeButton.classList.remove("pressed");
}, 200);
}
