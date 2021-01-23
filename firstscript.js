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

document.write(`<table>
<tr>
<th>Started time</th>
<th>Finished at</th>
<th>Tasks given</th>
<th>Tasks finished</th>
<th>Topic</th>
<th>Total time</th>
<th>Tasks finished Precent</th>
</tr>`);
for (props of info) {
  document.write(`<tr>      
  <td >
  ${textFormatForDate(
    props["startedAt"].getHours(),
    props["startedAt"].getMinutes()
  )}
  </td>
  <td>
  ${textFormatForDate(
    props["finishedAt"].getHours(),
    props["finishedAt"].getMinutes()
  )}
  </td>
  <td>
  ${props["tasksGiven"]}
  </td>
  <td style=${tasksColorChange(props["tasksFinished"])}>
  ${props["tasksFinished"]}
  </td>
  <td>
  ${props["topic"]}
  </td>
  <td>
  ${props.totalTime}
  </td>
  <td style=${pColor(props["tasksFinishedPrecent"])}>
  ${(props["tasksFinishedPrecent"] += "%")}
  </td>
  </tr>`);
}
document.write(`</table>`);

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
