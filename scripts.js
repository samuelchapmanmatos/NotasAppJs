

function saveTask(e) {
	let tasks = JSON.parse(localStorage.getItem('tasks'));
    // crea un nuevo objeto `Date`
  var today = new Date();
   
  // obtener la fecha y la hora
  var now = today.toLocaleString();
  let title = document.getElementById('titleNota').value;
  let description = document.getElementById('description').value;
  if(title!="" && description!=""){
  console.log(description);

  let task = {
    title,
    description
  };

  if(localStorage.getItem('tasks') === null) {    
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

    $("#titleNota").val("");
  $("#description").val("");
  document.getElementById('description').innerHTML="";
  document.getElementById('titleNota').innerHTML="";

  getTasks();
  document.getElementById('formTask').reset();
  e.preventDefault();
}

}

function deleteTask(e) {
  let title = document.getElementById('titleNota').value;
  console.log(title);
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for(let i = 0; i < tasks.length; i++) {
    if(tasks[i].title == title) {
      tasks.splice(i, 1);
      
    }
  }
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
  $("#titleNota").val("");
  $("#description").val("");
  document.getElementById('description').innerHTML="";
  document.getElementById('titleNota').innerHTML="";
  getTasks();
  document.getElementById('formTask').reset();
  e.preventDefault();
}

function limpiarFormulario(e) { 
  $("#titleNota").val("");
  $("#description").val("");
  document.getElementById('description').innerHTML="";
  document.getElementById('titleNota').innerHTML="";
  getTasks();
  document.getElementById('formTask').reset();
  e.preventDefault();
}

function getTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');  
  if (tasks.length<=10) {
  	tasksView.innerHTML = ``;
  	for(let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;
    tasks[i].id=i;
   tasksView.innerHTML += `<li class="nav-item" style="margin-right: 0rem;">
      <a class="nav-link text-secondary" name="ventana" onclick="mostrarNota('${title}')" id="archivo${i}" aria-current="page" href="#">${title}</a>
    </li>`;
  }
  }
  
}



function mostrarNota(title){
   let tasks = JSON.parse(localStorage.getItem('tasks'));
      for(let i = 0; i < tasks.length; i++) {
        if(tasks[i].title === title) {
          $("#titleNota").val(tasks[i].title);
          document.getElementById('titleNota').innerHTML=tasks[i].title;
          document.getElementById('description').innerHTML=tasks[i].description;
        }
      }
  console.log(title);
}

function clearData(){
	let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');  
  if (tasks.length<=10) {
  	tasksView.innerHTML = ``;
  	for(let i = 10; i > tasks.length; i--) {
    let title = tasks[i].title;
    let description = tasks[i].description;

    deleteTask(title);
   

  }
  }else {
  	localStorage.clear();


  }
}

clearData();
      