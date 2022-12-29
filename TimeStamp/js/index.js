"use strict";

const timeLists = document.getElementById("timeLists");
const addBtn = document.getElementById("addBtn");
const allDel = document.getElementById("allDel");

let currentNum = 1;
let times = [];
const DB = localStorage;
var now = new Date();

var YY = now.getFullYear;
var MM = now.getMonth;
var DD = now.getDay;
var hh = now.getHours;
var mm = now.getMinutes;
var ss = now.getSeconds;

let nowTime = hh + ':' + mm;

addBtn.addEventListener("click", () => {

  times.push({
    id: currentNum,
    title: nowTime
  });

  createListView();

  currentNum++;
});

allDel.addEventListener("click",() =>{
  times.length = 0;
  createListView();
});

const createListView = () => {
  // タスクを描画するときにtbodyの中に子要素が一つでもあれば一つになるまで削除する
  while (timeLists.firstChild) {
    timeLists.removeChild(timeLists.firstChild);
  }

  times.forEach((time) => {
    // // tr要素の生成
    let timeItem = document.createElement("tr");
    // timeのIDを表示するthの生成
    const timeId = document.createElement("th");
    // timeのタイトルを表示するthの生成
    const timeTitle = document.createElement("th");

    Id.textContent = time.id;
    timeTitle.textContent = time.title;
    deleteBtn.textContent = "削除";
    deleteBtn.classList.add("btn", "btn-secondary");
    timeDelete.appendChild(deleteBtn);

    timeItem.appendChild(timeId);
    timeItem.appendChild(timeTitle);
    timeItem.appendChild(timeDelete);
    timeLists.appendChild(timeItem);
  });
};