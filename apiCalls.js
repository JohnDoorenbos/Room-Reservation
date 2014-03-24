//This folder contains all functions that require loading the api to get information
  //Should just contain makeApiCallForRoom and makeApiCallForDate

makeApiCallForRoom = function(){
    gapi.client.load('calendar', 'v3', function(){
	var request = gapi.client.calendar.events.list({
	    //eventually the calender id will have to be chosen based on which calender someone wants to display.
	    // 'calendarId' : 'luther.edu_quvl61clrh2gn04kpr49mcg7d8@group.calendar.google.com'})
		'calendarId' : idDictionary[selectedRoom]})
	
	request.execute(function(resp) {
	    var startTimes = []
	    var endTimes = []
	    
	    for(var i=0;i<resp.items.length;i++){
		console.log(resp)
		startTimes.push(resp.items[i].start.dateTime)
		endTimes.push(resp.items[i].end.dateTime)
		//console.log(resp.items[i])
		console.log("Start time: " + resp.items[i].start.dateTime)
		console.log("End time: " + resp.items[i].end.dateTime)
		console.log("")
		//Make some call to a function that will create our table of dates vs time (room constant)
	    }
	})
    })
    
}
    
makeApiCallForDate = function(){
    var selectedDate = "2014-03-20"
    var counter = 0 //used to rememdy asynchronous problems.
    var eventList = []
    for( var key in idDictionary) {
	console.log(key)
	
	
	gapi.client.load('calendar', 'v3', function() { //function isn't called until we get information back. (function() is the callback function)
	    var request = gapi.client.calendar.events.list({
		'calendarId' : idDictionary[roomList[counter]]}) //note remember dictionaries are unordered, so you can't call the 'ith" element of the dictionary
	    console.log(request)
	    counter += 1 //could events come in at the "same" time?
	    request.execute(function(resp) {
		//	if resp.items[x].start.dateTime = 
		var dateArray = []
		for(var i=0;i<resp.items.length;i++){
		    dateArray = resp.items[i].start.dateTime.split("T")
		    date = dateArray[0]
		    console.log(date)
		    
		    if(date == selectedDate) {
			eventList.push(resp.items[i])
			console.log(resp.items[i].summary + "This one works: " + date)
		    }
		}
	    })
	})	
    }
}

//have one call initiate the next (if blah.next)

//make a list maybe a couple of global variables, state information. shared objects.
//output: Room
//        Starttime
//        EndTime
//        line break
/*
What am I thinking right now?The keyboard is loud. I have a parallel arrays of start times and endtimes, perhaps we could create our own event object and have those times stored in that, and then keep a list of events. Either way, we have a method of storing the times that a room is busy. Now, in order to display that we'll have to create a quick method that will display our table of dates vs times. should this table display only a week? we'll see, but probably. In order to make this display, we'll probs want a function that builds us a table with no values and then add them in after. that will be big. JQUERY will be good for that. 
Things to do:


-Drop down menu that will let user select which room they wish to select
-function that takes users choice and collects data from corresponding calendar
  -Date vs Time (room constant)
  -Room vs Time (date constant) 
-Function that makes a table (JQUERY)
-Function that fills in table? Perhaps creation of table and busy slots should be dne at the same time.



Big Obstacle to overcome now: How to display information? 




*/
