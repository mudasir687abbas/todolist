var AddTask = document.getElementById("AddTask");
var AddText = document.getElementById("UserTask");
GetData();
//Function for Adding AddTask
function ShowTask(){
   AddTask.innerHTML += `<div class="Task">
      <div class="OperationBox">
       <span><i class="fa fa-pencil-square size colorU" aria-hidden="true"id="update"></i></span>
        <span ><i class="fa fa-window-close size colorD" aria-hidden="true" id="delete"></i></span>
       
       </div>
        <p>${AddText.value}</p>
        <h5 class="date">${GetCurrentDate()}</h5>
      </div>`;
      AddText.value="";
      SaveData();
      
}
//Date function
function GetCurrentDate(){
  let date = new Date();
  return date.toDateString();
}
//Save Data into localStorage
function SaveData(){
  window.localStorage.setItem("todoTasks",JSON.stringify(AddTask.innerHTML));
}

//GetData fron Local Storage
function GetData(){
var data = window.localStorage.getItem("todoTasks");
AddTask.innerHTML = JSON.parse(data);
}

//Remove and Update Data
 let Tasks = document.body;
Tasks.addEventListener("click",(e)=>{
  if(e.target.id == "AddButton"){
    ShowTask();
  }else if(e.target.id == "delete"){
     e.target.parentNode.parentNode.parentNode.remove();
     SaveData();
     GetData();
    }else if(e.target.id == "update"){
  let update = e.target.parentNode.parentNode.parentNode.getElementsByTagName("p")[0];
   update.classList.add("rewrite");
      let AddBox = document.getElementById("AddBox");
      AddBox.innerHTML = '<i class="fa fa-pencil PencilButton" aria-hidden="true"  id="rewrite" ></i>';
       AddText.value = update.innerText;
       SaveData();
       GetData();
       
      }else if(e.target.id == "rewrite"){
      let paratags = document.querySelectorAll("p");
      for(item in paratags){
        if(paratags[item].classList == "rewrite"){
          paratags[item].innerText = AddText.value;
          paratags[item].classList.remove("rewrite");
          SaveData();
          GetData();
           AddBox.innerHTML = ' <i class="fa fa-plus-circle addButton" aria-hidden="true"  id="AddButton"></i>'
           AddText.value = "";
          
        }
      }
      }
});

