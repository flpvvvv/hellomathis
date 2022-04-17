var bornTime = new Date("2022-03-30T00:33:00+02:00"); // Paris time

// Start counting
function startClock() {
  var currentTime = new Date();
  var bornYear = bornTime.getFullYear();
  var currentYear = currentTime.getFullYear();
  var currentYearBirthday = new Date(bornTime.getTime());
  currentYearBirthday.setFullYear(currentYear);
  var lastYearBirthday = new Date(bornTime.getTime());
  lastYearBirthday.setFullYear(currentYear - 1);

  var deltaTime;
  var age = currentYear - bornYear;
  if (currentTime > currentYearBirthday) {
    deltaTime = currentTime - currentYearBirthday;
  } else {
    deltaTime = currentTime - lastYearBirthday;
    age = age - 1;
  }

  // console.log(age);

  showDetail.innerHTML = forHumans(Math.round(deltaTime / 1000), age);

  if (age > 0) {
    showDays.innerHTML =
      "(" +
      toDays(Math.round((currentTime - bornTime) / 1000)).toLocaleString("fr") +
      " days)";
  }

  // sleep for 1s
  timer = setTimeout("startClock()", 1000);
  // console.log(currentTime.toISOString());
}
function forHumans(seconds, age) {
  var countDays = Math.floor(seconds / 86400);
  var levels = [
    [age, age === 1 ? "year" : "years"],
    [countDays, countDays === 1 ? "day" : "days"],
    [Math.floor((seconds % 86400) / 3600), "hr"],
    [Math.floor(((seconds % 86400) % 3600) / 60), "min"],
    [((seconds % 86400) % 3600) % 60, "sec"]
  ];
  var returntext = "";

  for (var i = 0, max = levels.length; i < max; i++) {
    if (levels[i][0] === 0) continue;
    returntext += " " + levels[i][0] + " " + levels[i][1];
  }
  return returntext.trim();
}

function toDays(seconds) {
  return Math.floor(seconds / 86400);
}
