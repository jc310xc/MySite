// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){
  var x = 150;
  var y = 150;
  var dx = 2;
  var dy = -4;
  var ctx;

  function init() {
    ctx = $('#mazeCanvas')[0].getContext("2d");
    return setInterval(draw, 100);
  }

  function draw() {
    ctx.clearRect(0,0,300,300);
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
    x += dx;
    y += dy;
  }

  init();
});
