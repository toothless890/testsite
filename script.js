// How to get a variable out of localStorage
var x = localStorage.getItem('x');
// if no site data exists, initialize it so that a default value exists
x = initKey(x, 0);

// function executes when page has finally loaded
window.onload = function() {
  // changes an html element's data
  document.getElementById('counter').innerHTML = x;
}

// function that increments a counter, called by a button in html side
function inc(){
  x ++;
  // display result on webpage
  document.getElementById('counter').innerHTML = x;
  //Print statement
  console.log(x);

  //write to storage
  localStorage.setItem('x', x);
  
}


// a test button to clear all site data and refresh. 
// Should be stored in a settings menu later and require
// confirmation, but makes life easy for testing
function clearData(){
  localStorage.clear();
  window.location.reload();
}


// provides a key a default value in case no pre-existing site data for it exists
// eg. the counter starts out as null, which would show no number,
// but the desired value on startup is 0
// useage: x = initKey(x, 0);

function initKey(key, defaultValue){
  if (key == null){
    key = defaultValue;
  }
  return key;
}