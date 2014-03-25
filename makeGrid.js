/* This file contains (for now) the function that will be used to create the table that
   displays what time are reserved */

genObject = function(i){
    this.num = i
}

timeToCellNumber = function(time){ //This function depends on how much time each column represents
    timeDecomp = time.split(":") //decomposes the time string into the hour and minutes
    var cellNumber = 0
    console.log((timeDecomp[0]-6)*2)

    cellNumber += (timeDecomp[0]-6)*2 
    if(timeDecomp[1] == 00){cellNumber--}
    return cellNumber
}





drawTableForRoom = function() {//may require a parameter addition
    
    
    var grid = document.getElementById("grid")
    //console.log(grid)
    for( var i = 7; i>=1;i--){
	
	//console.log(grid)
	//grid.style.border = "1px solid black"
	//grid.style.borderSpacing = "0px"
	//I wonder what happens if I use a for loop to create all 20 or so time columns, and for each one I associate a an object thing
	tr = grid.insertRow()
	for( var j = 24; j>=1; j--){ //note: 24 is the number of half an hour time slot there are. 
	    td = tr.insertCell()
	    //object = new genObject(x)
	    
	    //td.style.borderSpacing = "0px"
	    //td.style.border = "1px solid black"
	    
	    //td.ob = object

	    cell = new Cell(i,j)
	    
	    lstOfCells.append(cell) //appends to cell list
	    
	    td.cell = cell
	    
	    td.onmouseover = function(){console.log(this.cell.row, this.cell.col)} //for testing
	    var label = document.createTextNode("Cell!")
	    

	    td.appendChild(label) 
	    
	    lstOfTableCells.append(td) //appends to table cell list
	    //console.log(lstOfTableCells)
	}    	
    }
}

conflictsByRoom = function(){
    var startTimeAndDate =  "2014-03-22T10:30:00-05:00"
    var endTimeAndDate = "2014-03-20T14:30:00-05:00"
    
    var startTimeLst = startTimeAndDate.split("T")
    var endTimeLst = endTimeAndDate.split("T")

    var startDate = startTimeLst[0]
    var startTime = startTimeLst[1].split("-")[0].slice(0,5) //dependent on the format of time variable

    var endDate = endTimeLst[0]
    var endTime = endTimeLst[1].split("-")[0].slice(0,5) //dependent on the format of time variable
    
    var startCellNumber = timeToCellNumber(startTime)
    var endCellNumber = timeToCellNumber(endTime)
    

    var rowForDate = 1 //eventually I will have a method that determines the row from the given date.
    for(var i = startCellNumber; i<endCellNumber; i++){
	
	
	lstOfTableCells.find(rowForDate,i).style.backgroundColor = "red"
    }
    
    //var startCell = lstOfTableCells[startCellNumber]




}




/*testing = function(){
    div = document.getElementById("display")
    button = document.createElement("button")
    button.onclick = function(){console.log(}
}
*/
function tableCreate(){
    var body = document.body,
        tbl  = document.createElement('table');
    tbl.style.width='100%';
    tbl.style.border = "1px solid black";

    for(var i = 0; i < 3; i++){
        var tr = tbl.insertRow();
        for(var j = 0; j < 2; j++){
            if(i==2 && j==1){
                    break
            } else {
                var td = tr.insertCell();
                td.appendChild(document.createTextNode('hello!'))
                if(i==1&&j==1){
                    td.setAttribute('rowSpan','2');
                }
            }
        }
   }
    body.appendChild(tbl);
}


/* Things to learn from the above function
   td = tr.insertCell()
   tr = tbl.insertRow()
   break only break the current loop.
   td.appendChild(document.createTextNode("BLAH")
*/
