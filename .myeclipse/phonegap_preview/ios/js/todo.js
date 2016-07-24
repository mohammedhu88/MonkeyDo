function getArray()
{
	var toDoList = new Array;                        //Create An Array
	var taskStr =localStorage.getItem('toDoList');     //get the task from input using LocalStorage
	if(taskStr !== null)                             //if the data is NOT empty --null-- 
         {
		     toDoList = JSON.parse(taskStr);
         }
	return toDoList; 	
}

function addTask()
{
	var task = document.getElementById("taskName").value;      //create a variable to hold value of input
	var array = getArray();                                    //create a variable to hold our array 
	array.push(task);                                          //pushing the task into the array
	localStorage.setItem('toDoList', JSON.stringify(array));         //store the task LocalStorage saving to the array
    show(); 
    
    return false;
}
function removeTask()
{
	var id= this.getAttribute(id);                             // specific id for the clicked button
	var array = getArray();                                    //create array
	array.splice(id, 1) ;                                      //splicing the task we want to remove
	localStorage.setItem('toDoList', JSON.stringify(array))    //saving new/edited array to localStorage
	show();                                                    //show the latest list
	return false;
}
function show()
{
	var array = getArray();                     //create variable to hold array
	var htmlFormat = "<ul>";                    //add unordered list 
	
	for (var i=0; i < array.length; i++)       //a for loop to display the array
		{
		     htmlFormat += "<li>" + array[i] + "<button class='remove'id='"+i+"'>X</button></li>";   //create a button tag using class and unique id
		}
	htmlFormat += "</ul>";
	document.getElementById('taskList').innerHTML = htmlFormat;              //show the document 
            
	var buttons = document.getElementsByClassName('remove');                 //create array for all buttons 
	for(var j=0; j < buttons.length; j++)                                  // add an eventListiner for when every button is clicked
	{
		buttons[j].addEventListener('click', removeTask );
	}
}

document.getElementById('add').addEventListener('click', addTask);
show();