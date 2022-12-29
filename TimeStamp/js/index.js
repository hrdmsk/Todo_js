"use strict";

const todoLists = document.getElementById("timeLists");
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

  todos.push({
    id: currentNum,
    title: nowTime
  });

  createListView();

  currentNum++;
});

allDel.addEventListener("click",() =>{
  todos.length = 0;
  createListView();
});

const createListView = () => {
  // タスクを描画するときにtbodyの中に子要素が一つでもあれば一つになるまで削除する
  while (todoLists.firstChild) {
    todoLists.removeChild(todoLists.firstChild);
  }

  todos.forEach((todo) => {
    // // tr要素の生成
    let todoItem = document.createElement("tr");
    // todoのIDを表示するthの生成
    const todoId = document.createElement("th");
    // todoのタイトルを表示するthの生成
    const todoTitle = document.createElement("th");
    // 削除ボタンを表示するthの生成
    const todoDelete = document.createElement("th");
    // 削除ボタンの生成
    const deleteBtn = document.createElement("button");

    todoId.textContent = todo.id;
    todoTitle.textContent = todo.title;
    deleteBtn.textContent = "削除";
    deleteBtn.classList.add("btn", "btn-secondary");
    todoDelete.appendChild(deleteBtn);

    todoItem.appendChild(todoId);
    todoItem.appendChild(todoTitle);
    todoItem.appendChild(todoDelete);
    todoLists.appendChild(todoItem);
  });
};