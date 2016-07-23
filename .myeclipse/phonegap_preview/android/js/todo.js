function getarray()
{
	var toDoList = new Array;                        //Create An Array
	var taskStr =localStorage.getItem(toDoList);     //get the task from input using LocalStorage
	if(taskStr !== null)                             //if the data is NOT empty --null-- 
         {
		toDoList = JSON.parse(taskStr);
         }
	return toDOList; 	
}

function addtask()
{
	var task = document.getElementById("taskname").value;      //create a variable to hold value of input
	var array = getArray();                                    //create a variable to hold our array 
	array.push(task);                                          //pushing the task into the array
	localStorage.setItem(array, JSON.stringify(task));         //store the task LocalStorage saving to the array
    show(); 
    return false;
}

function show()
{
	var array = getArray();                     //create variable to hold array
	var htmlFormat = "<ul>";                    //add unordered list 
	
	for (var i=0 ; i < array.length; i++)       //a for loop to display the array
		{
		htmlFomat += "<il>" + array[i] + "</il>";
		}
	htmlFormat += "</ul>"
	document.getElementById(array).innerHTML = htmlFormat;              //show the document 
}

document.getElementById('add').addEventListener('click', addtask);
show();