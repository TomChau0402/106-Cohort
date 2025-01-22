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

    //display the data recieved from server
    displayTask(taskToSave);
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

    //hook events
    $("#btnSave").click(saveTask);
}

window.onload = init;
//Variable Scope