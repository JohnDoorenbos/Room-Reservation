/*The following are various objects that will be used through the application*/
ListOfCells = function(){ //Contains Cell-type objects. 
    this.lst = []
    this.find = function(i,j){
	return this.lst[(i-1)*96 + (j-1)] //24 is the number of columns (may eventually get larger)
    }
    this.append = function(cell){
	this.lst.unshift(cell)
    }
}


ListOfTableCells = function(){ //Contains td-type objects
    this.lst = []
    this.find = function(i,j){
	return this.lst[(i-1)*96 + (j-1)] //24 is the number of columns (may eventually get larger)
    }
    this.append = function(cell){
	this.lst.unshift(cell)
    }
}



Cell = function(i,j){
    this.row = i
    this.col = j
    this.nextCell = function(){
	return lstOfCells.find(this.row, this.col + 1)
    }

}

DateClass = function(selectedDate){
    this.date = getDate()
    if(selectedDate != undefined){
	this.date = date
    }

    this.setDate = function(newDate){
	this.date = newDate //this may be an unnecessary function
    }
    this.getDate = function(){
	return this.date
    }
}


/*
 *The following are various functions used throughought the application
 */
getDate = function(newDate){

    if( newDate != undefined){
	var today = newDate
	var mm = today.getMonth()+1
    }
    
    else{
	var today = new Date()
	var mm = today.getMonth()+1 //January is 0!
    }
    var dd = today.getDate()
    
    
    
    var yyyy = today.getFullYear()
    
    if(dd<10) {
	dd='0'+dd
    } 
    
    if(mm<10) {
	mm='0'+mm
    } 
    
    return today = yyyy+'-'+mm+'-'+dd
}

/*
 *The following are onclick functions
 */

nextWeek = function(){
    console.log("This kitten doesn't do anything yet!")
    if(selectedDate != undefined){
	dateDecomp = selectedDate.split("-")
	newDate = new Date(dateDecomp[0],dateDecomp[1]-1, Number(dateDecomp[2])+7) //Make own object?
	selectedDate = getDate(newDate)
    }
    console.log("after")
    clearTable()
    setDatesOfGrid()
    conflictsByRoom(startTimes,endTimes)
}


/*The following are many variables that will be used throughout the application*/


//var apiKey = "AIzaSyC83HTjOQGAIOlIUO4uhqHGSoWHdY1zieY"
var scopes = "https://www.googleapis.com/auth/calendar"
var apiKey = "AIzaSyBqSG3IjmORp5YtLbC3uH-vknUuY0cmsjE"
var clientId = "757845678130.apps.googleusercontent.com"

var idDictionary = {"Olin 102" : 'luther.edu_32d3jjc84gn5u25i4jji0c8d6o@group.calendar.google.com', "Valders 206" : 'luther.edu_quvl61clrh2gn04kpr49mcg7d8@group.calendar.google.com'}

var roomList = ["Olin 102", "Valders 206"] //for some reason I think this may be useful....

var selectedRoom = "Valders 206"
var selectedDate = undefined

var startTimes = []
var endTimes = []
//Although we will be able to synch up room names with the names that we choose for the keys of our JS object, is may be difficult to get them to line up in real life.



//The following globals are for the accessing various elements in the grid made with drawTableForRoom

var lstOfCells = new ListOfCells()
var lstOfTableCells = new ListOfTableCells()
var lstOfTableRows = []
var lstOfTableRowHeaders = []

setLists = function(){
    lstOfCells = new ListOfCells()
    lstOfTableCells = new ListOfTableCells()
    lstOfTableRows = []
}
var defaultStartDate = "k"
