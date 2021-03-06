var counter = 0;


window.onload = function() {
  loadModules();
  initializeLMS();
};

window.onunload = function() {
  finishLMS();
}

function loadModules(){
  //Set iFrame Source
  document.getElementById('moduleViewer').src = "../" + mKey[counter].url;

  //Set title
  document.title = mKey[counter].title;

  //Set Module Name
  document.getElementById("module_name").innerHTML = mKey[counter].title;
}

function previous(){
  if(counter>0)
  {
    counter--;
    loadModules();
  }
}

function next(){
  if(counter<mKey.length-1)
  {
    counter++;
    loadModules();
  }
}

function exit(){
  finishLMS();
  alert("Bye!");
}