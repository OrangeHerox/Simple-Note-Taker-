var parentDiv = document.getElementById("divParent");
var childDiv = document.getElementById("noteContain");
var addNote = document.getElementById("addNote");
var title = document.getElementById("title");
var note = document.getElementById("note");
var da = document.getElementById("da");
//counters
var count = 0;

addNote.addEventListener("click", AddNote);

function AddNote() {
  //getting text values and creating text nodes
  var textTitle = title.value;
  var textNote = note.value;
  
  if(textTitle != "" && textNote != "") {
  //creating elements
  count++
  var view = document.createElement("button");
  var div = document.createElement("div");
  var div1 = document.createElement("div");
  var header = document.createElement("label");
  var header1 = document.createElement("label");
  var p = document.createElement("p");
  var p1 = document.createElement("p");
  var x = document.createElement("button");
  var op = document.createElement("div");
  var del = document.createElement("button");
  
  del.innerHTML="Delete";
  x.innerHTML = "X";
  color(header);
  color(x);
  color(del);

  header.innerText = textTitle;
  header1.innerText = textTitle;
  p1.innerText = textNote;
  p1.style.marginLeft="5px";
  div1.style.display = "none";
  p.innerText = intro(textNote);
  view.innerHTML = "View Details";
  op.style.visibility = "hidden";
  divSettings(div);
  btnSet(view);

  Appends(p, view, p1, div, header, childDiv, parentDiv, x, div1, header1, del);
  fullV(view, div1, parentDiv, x, op, p1);
  exit(div1, parentDiv, x, op);
  delAll(da,childDiv,div,da);
  
  counter(count,da);
  Delete(del,childDiv,div,da);
  title.value="";
  note.value="";
  } else {
    alert("CANNOT ENTER A BLANK FIELDS!");
  }
}

function counter(el,da) {
  if (el >= 2) {
    da.style.display="block";
  } else {
    da.style.display="none";
  }
}

function delAll(da, parent,child) {
    da.addEventListener("click", function () {
      da.style.display="none";
      parent.innerHTML="";
      child.innerHTML="";
      counter(count=0,da);
    });
  }


  function Delete(del,parent,div,da) {
  del.addEventListener("click",function() {
    parent.removeChild(div);
    count--;
    counter(count,da);
    });
  }

function Appends(p, v, p1, d, h, c, pd, x, d1, h1,del) {
  d1.appendChild(x);
  d1.appendChild(h1)
  d1.appendChild(p1);
  d.appendChild(h);
  d.appendChild(p);
  d.appendChild(v);
  d.appendChild(del); 
  c.appendChild(d);
  pd.appendChild(d1);
}

function exit(d1, pd, x, op) {
  x.addEventListener("click", function() {
    d1.style.display = "none";
    pd.style.pointerEvents = "auto";
    op.style.visibility = "hidden";
  });
}

function fullV(view, d1, d, x, op, p1) {
  view.addEventListener("click", function() {
    d1.style.display = "block";
    d1.style.color = "white";
    d1.style.backgroundColor = "#707793";
    d1.style.position = "absolute";
    d1.style.top = "50%";
    d1.style.left = "50%";
    d1.style.transform = "translate(-50%,-50%)";
    d1.style.padding = "20px";
    d1.style.width = "75%";
    d1.style.height = "30%";
    d1.style.overflow = "auto";
    d1.style.zIndex = "2";
    d1.style.border = "1px solid white";
    d1.style.borderRadius="12px";
    d.style.pointerEvents = "none";

    op.style.visibility = "visible";
    op.style.opacity = "80%";
    op.style.backgroundColor = "grey";
    op.style.position = "absolute";
    op.style.top = "0";
    op.style.left = "0";
    op.style.width = "100%";
    op.style.height = "100%";

    d1.style.pointerEvents = "auto";
    d.appendChild(op);
  });
}

function divSettings(el) {
  el.style.margin = "3px";
  el.style.padding = "3px";
  el.style.border = "1px solid white";
  el.style.borderRadius = "15px";
  el.style.overflow = "hidden";
}

function btnSet(el) {
  el.style.width = "80px";
  el.style.height = "25px";
  el.style.borderRadius = "10px";
  el.style.backgroundColor = "#707793";
  el.style.color = "white"
  el.style.border = "0";
  el.style.marginLeft = "10px";
  el.style.marginRight = "10px";
}

function color(el) {
  el.style.color = "orange";
  el.style.margin = "10px";
  if (el.innerHTML == "X" || el.innerHTML=="Delete") {
    el.style.color = "white";
    el.style.backgroundColor = "red";
    el.style.border = "1px solid white";
    el.style.borderRadius = "100px";
  } 
}

function intro(txt) {
  var string = "";
  var str = "";
  for (let i = 0; i < 6; i++) {
    string = txt.split(' ')[i];
    if (string != undefined) {
      str += string + " ";
    }
  }
  str += "...";
  return str;
}
