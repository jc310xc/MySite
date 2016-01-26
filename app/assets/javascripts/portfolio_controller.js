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
    WIDTH = $("#mazeCanvas").width();
    HEIGHT = $("#mazeCanvas").height();
    return setTimeout(draw, 10);
  }

  function circle(x,y,r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
  }

  function rect(x,y,w,h) {
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.closePath();
    ctx.fill();
  }

  function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
  }

  function draw() {
    ctx.fillStyle("#BADA55");
    ctx.clearRect(0,0,300,300);
    ctx.rect(100,100,10,10);
    ctx.rect(115,115,10,10);
    ctx.rect(130,130,10,10);
    ctx.rect(145,145,10,10);
    ctx.rect(160,160,10,10);
  }

  init();
});
