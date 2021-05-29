function setUserName() {
    let myHeading = document.querySelector('h1');
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Are you present? ' + myName;
    }
  }

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mindfullness.jpg') {
      myImage.setAttribute('src','images/medidation.jpg');
    } else {
      myImage.setAttribute('src','images/mindfullness.jpg');
    }
}
window.onload = function(){ 

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
myButton.onclick = function() {
    setUserName();
}
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Are you present? ' + storedName;
}

}