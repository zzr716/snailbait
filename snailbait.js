// //alert('snailbait');
// // canvas 添加背景图片
// //一 获得canvas 引用
// var canvas = document.getElementById('game-canvas');
// //绘图上下文环境，绘制API都由context提供
// context = canvas.getContext('2d');
// //获得了一张图片
// var background = new Image();
// background.src = './images/background.png';
// // 图片加载自本地或远程，需要时间的，
// // onload 事件，在图片加载完成时触发
// background.onload = function() {
//   context.drawImage(background, 0, 0)
//   context.drawImage(person, '50', 300);
// }
// // 二 drawImage
// // 三 图片在images文件夹下
// // 将游戏主人公添加到canvas
// // 将图片加载进来，runner.png
// // drawImage汇至以下
// // left 50px 底部50px
// var person = new Image();
// person.src = './images/runner.png';
var canvas =
  document.getElementById('game-canvas'),
  context = canvas.getContext('2d'),
  background = new Image(),//整张背景
  runnerImage = new Image();//sprite


function startGame () {
  draw();
}
function draw () {
  drawBackground(); //独立的功能模块
  drawRunner();
}
function drawBackground () {
  context.drawImage(background, 0, 0);
}
function drawRunner () {
  context.drawImage(runnerImage, 50, 300);
}
function initializeImages () {
  background.src = './images/background.png';
  runnerImage.src ='./images/runner.png';
  background.onload = function (e) {
    startGame();
  }
}
initializeImages();
