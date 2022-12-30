"use strict";

const timeStamp = document.getElementById("timeStamp");
const addBtn = document.getElementById("addBtn");
const allDel = document.getElementById("allDel");

let currentNum = 1;
let times = [];


addBtn.addEventListener("click", () => {
  var now = new Date();
  var hh = now.getHours();
  var mm = now.getMinutes();
  var nowTime = hh + ':' + mm;

  times.push({
    id: currentNum,
    title: nowTime
  });

  createListView();

  nowTime = "";
  currentNum++;
});

allDel.addEventListener("click",() =>{
  times.length = 0;
  createListView();
});

const createListView = () => {
  // タスクを描画するときにtbodyの中に子要素が一つでもあれば一つになるまで削除する
  while (timeStamp.firstChild) {
    timeStamp.removeChild(timeStamp.firstChild);
  }

  times.forEach((time) => {
    // // tr要素の生成
    let timeItem = document.createElement("tr");
    // timeのIDを表示するthの生成
    const timeId = document.createElement("th");
    // timeのタイトルを表示するthの生成
    const timeTitle = document.createElement("th");

    timeId.textContent = time.id;
    timeTitle.textContent = time.title;

    timeItem.appendChild(timeId);
    timeItem.appendChild(timeTitle);
    timeStamp.appendChild(timeItem);
  });
};