// var timer = null;
// function displayClock(num) {
//   //num是传入的startClock中的动态值
//   if (num < 10) {
//     return "0" + num;
//   } else {
//     return num;
//   }
// }
// //停止计时
// function stopClock() {
//   clearTimeout(timer);
// }
//开始计时
function startClock() {
  const bornTime = new Date("2022-03-30T00:33:00+02:00");
  var currentTime = new Date();
  // const currentTime = new Date("2022-03-30T00:33:00Z");
  //显示时间
  var deltaTime = currentTime - bornTime;
  // var days = deltaTime / (1000 * 60 * 60 * 24);
  show.innerHTML = forHumans(Math.round(deltaTime / 1000)); //在id为show的块区域显示
  timer = setTimeout("startClock()", 1000); //延时器
  // console.log(currentTime.toISOString());
}
function forHumans(seconds) {
  var levels = [
    [Math.floor(seconds / 31536000), "years"],
    [Math.floor((seconds % 31536000) / 86400), "days"],
    [Math.floor(((seconds % 31536000) % 86400) / 3600), "hours"],
    [Math.floor((((seconds % 31536000) % 86400) % 3600) / 60), "minutes"],
    [(((seconds % 31536000) % 86400) % 3600) % 60, "seconds"]
  ];
  var returntext = "";

  for (var i = 0, max = levels.length; i < max; i++) {
    if (levels[i][0] === 0) continue;
    returntext +=
      " " +
      levels[i][0] +
      " " +
      (levels[i][0] === 1
        ? levels[i][1].substr(0, levels[i][1].length - 1)
        : levels[i][1]);
  }
  return returntext.trim();
}