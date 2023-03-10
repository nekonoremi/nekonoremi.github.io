let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ocha.png') {
      myImage.setAttribute('src', 'images/run.gif');
    } else {
      myImage.setAttribute('src', 'images/ocha.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
 
function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = '第一次做网站，不知道干嘛，喝个茶先   By——' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '第一次做网站，不知道干嘛，喝个茶先   By——' + storedName;
  }

  function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = '第一次做网站，不知道干嘛，喝个茶先   By——' + myName;
    }
  }

  myButton.onclick = function() {
    setUserName();
 }
 

  