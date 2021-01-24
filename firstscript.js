let info = [
  {
    startedAt: new Date("2021-01-21:00:10"),

    finishedAt: new Date("2021-01-21:19:05"),

    tasksGiven: 10,

    tasksFinished: 7,

    topic: "JavaScript",

    totalTime: new Date(""),

    tasksFinishedPrecent: null,
  },
  {
    startedAt: new Date("2021-01-21:13:05"),

    finishedAt: new Date("2021-01-21:19:42"),

    tasksGiven: 10,

    tasksFinished: 3,

    topic: "html",

    totalTime: new Date(""),

    tasksFinishedPrecent: null,
  },
  {
    startedAt: new Date("2021-01-21:13:14"),

    finishedAt: new Date("2021-01-21:19:19"),

    tasksGiven: 10,

    tasksFinished: 0,

    topic: "css",

    totalTime: new Date(""),

    tasksFinishedPrecent: null,
  },
  {
    startedAt: new Date("2021-01-21:16:54"),

    finishedAt: new Date("2021-01-21:18:12"),

    tasksGiven: 10,

    tasksFinished: 8,

    topic: "JavaScript",

    totalTime: new Date(""),

    tasksFinishedPrecent: null,
  },
  {
    startedAt: new Date("2021-01-21:13:40"),

    finishedAt: new Date("2021-01-21:19:19"),

    tasksGiven: 10,

    tasksFinished: 6,

    topic: "scc",

    totalTime: new Date(""),

    tasksFinishedPrecent: null,
  },
  {
    startedAt: new Date("2021-01-21:16:21"),

    finishedAt: new Date("2021-01-21:19:45"),

    tasksGiven: 10,

    tasksFinished: 5,

    topic: "html",

    totalTime: new Date(""),

    tasksFinishedPrecent: null,
  },
  {
    startedAt: new Date("2021-01-21:13:34"),

    finishedAt: new Date("2021-01-21:19:56"),

    tasksGiven: 10,

    tasksFinished: 5,

    topic: "JavaScript",

    totalTime: new Date(""),

    tasksFinishedPrecent: null,
  },
  {
    startedAt: new Date("2021-01-21:13:56"),

    finishedAt: new Date("2021-01-21:19:40"),

    tasksGiven: 10,

    tasksFinished: 10,

    topic: "scc",

    totalTime: new Date(""),

    tasksFinishedPrecent: null,
  },
  {
    startedAt: new Date("2021-01-21:05:45"),

    finishedAt: new Date("2021-01-21:13:05"),

    tasksGiven: 10,

    tasksFinished: 6,

    topic: "html",

    totalTime: new Date(""),

    tasksFinishedPrecent: null,
  },
  {
    startedAt: new Date("2021-01-21:10:00"),

    finishedAt: new Date("2021-01-21:19:00"),

    tasksGiven: 10,

    tasksFinished: 8,

    topic: "JavaScript",

    totalTime: new Date(""),

    tasksFinishedPrecent: null,
  },
];
function tSp(number1, number2) {
  return Math.floor((number1 * 100) / number2);
}

for (let i = 0; i < info.length; i++) {
  info[i].tasksFinishedPrecent = tSp(info[i].tasksFinished, info[i].tasksGiven);
}
for (let j = 0; j < info.length; j++) {
  info[j].totalTime =
    info[j].finishedAt.getHours() - info[j].startedAt.getHours();
}
let body = document.body;
const newTable = document.createElement("table");
body.append(newTable);
const newRow = document.createElement("tr");
newTable.append(newRow);
const newData1 = document.createElement("th");
newData1.innerText = "started-at";
const newData2 = document.createElement("th");
newData2.innerText = "finished-at";
const newData3 = document.createElement("th");
newData3.innerText = "tasks given";
const newData4 = document.createElement("th");
newData4.innerText = "tasks-finished";
const newData5 = document.createElement("th");
newData5.innerText = "topic";
const newData6 = document.createElement("th");
newData6.innerText = "total-time";
const newData7 = document.createElement("th");
newData7.innerText = "tasks finished-precent";
newRow.append(
  newData1,
  newData2,
  newData3,
  newData4,
  newData5,
  newData6,
  newData7
);

for (props of info) {
  let newRow1 = document.createElement("tr");
  newTable.append(newRow1);
  let newData8 = document.createElement("td");
  newData8.innerText = textFormatForDate(
    props["startedAt"].getHours(),
    props["startedAt"].getMinutes()
  );
  newRow1.append(newData8);

  let newData9 = document.createElement("td");
  newData9.innerText = textFormatForDate(
    props["finishedAt"].getHours(),
    props["finishedAt"].getMinutes()
  );
  newRow1.append(newData9);

  let newData10 = document.createElement("td");
  newData10.innerText = props["tasksGiven"];
  newRow1.append(newData10);

  let newData11 = document.createElement("td");
  newData11.style = tasksColorChange(props["tasksFinished"]);
  newData11.innerText = props["tasksFinished"];
  newRow1.append(newData11);

  let newData12 = document.createElement("td");
  newData12.innerText = props["topic"];
  newRow1.append(newData12);

  let newData13 = document.createElement("td");
  newData13.innerText = props["totalTime"];
  newRow1.append(newData13);

  let newData14 = document.createElement("td");
  newData14.style = pColor(props["tasksFinishedPrecent"]);
  newData14.innerText = props["tasksFinishedPrecent"] += "%";
  newRow1.append(newData14);

  function tasksColorChange(str) {
    if (str <= 2) {
      return "background-color:grey;";
    } else if (str > 2 && str <= 5) {
      return "background-color:orange;";
    } else if (5 < str) {
      return "background-color:red;";
    }
  }
  function pColor(num) {
    if (num <= 50) {
      return "background-color:purple;";
    }
    if (num > 50 && num <= 75) {
      return "background-color:blue;";
    }
    if (num > 75) {
      return "background-color:yellow;";
    }
  }
  function textFormatForDate(hours, mins) {
    let result = "";
    if (hours < 10) {
      result += "0" + hours; // "08"
    } else {
      result += hours;
    }
    result += ":"; // "08:"
    if (mins < 10) {
      result += "0" + mins; // "08:09"
    } else result += mins;
    return result;
  }
}
