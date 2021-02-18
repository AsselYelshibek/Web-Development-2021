//create task
function addNewTask() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("New-Task").value;
    var t = document.createTextNode(inputValue);

    li.appendChild(t);

    if (inputValue === '') {
      alert("No task");
    } 
    else {
      document.getElementById("list-of-tasks").appendChild(li);
    }
    document.getElementById("New-Task").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var v = this.parentElement;
        v.style.display = "none";
      }
    }
}


// Create delete button to each task
var TaskList = document.getElementsByTagName("li");
for (var i = 0; i < TaskList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");

  span.className = "close";
  span.appendChild(txt);
  TaskList[i].appendChild(span);
}

// Delete task
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var v = this.parentElement;
    v.style.display = "none";
  }
}

// check when we click
var listItem = document.querySelector('ul');
listItem.addEventListener('click', function(v) {
  if (v.target.tagName === 'LI') {
    v.target.classList.toggle('checked');
  }
}, false);