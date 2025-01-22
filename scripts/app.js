function saveTask()
{
    console.log('saving task');
    //get values
    const title = $("#txtTitle").val();
    const description = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();
    console.log(title,description,color,date,status,budget);
    //build an object
    let taskToSave = new Task (title,description,color,date,status,budget);
    console.log(taskToSave);
    //save to server
    $.ajax({
        type: "post",
        url:"http://fsdiapi.azurewebsites.net/api/tasks/",
        data:JSON.stringify(taskToSave),
        conentType: "application/json",
        success: function(response) {
        console.log(response);
            
        },
        error: function (error) {
        console.log(error);    
        }
    })
    //display the data recieved from server
    displayTask(taskToSave);
}
function loadTask() {
    $.ajax({
        type: "GET",
        url:"http://fsdiapi.azurewebsites.net/api/tasks",
        success: function (response) {
            console.log(response);
            let data =JSON.parse(response);
            console.log(data);
    },
        error: function (error) {
            console.log(error);
            //console.log only those elements that wer created by you on the server
            for (let i = 0;i < data.lengt;i++) {
               let task = data[i] ;
               if(task.name =="Tom54"){
                displayTask(task);
                console.log(task);
               }
                
            }
                
            }
        })
    }    

function displayTask(task)
{
    let syntax = `<div class='task'>
    <div class='info'>
        <h5>${task.title}</h5>
        <p>${task.description}</p>
    </div>
    <label class='status'>${task.status}</label>
    <div class='date-budget'>
    <label>${task.date}</label>
    <label>${task.budget}</label>
    </div>
    </div>
    `;
    $(".pending-tasks").append(syntax);
}

function testFuction()
{
    $.ajax({
        type: "get",
        url:"http://fsdiapi.azurewebsites.net",
        success: function(response)
        {
            console.log(response);
        },
        error: function(error)
        {
            console.log(error);
        }
        
    });
}

function init(){
    console.log('init');
    //load data
    loadTask()
    //hook events
    $("#btnSave").click(saveTask);
}

window.onload = init;
//Variable Scope