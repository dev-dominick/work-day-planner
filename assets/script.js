let today = moment();
$("")





$("#currentDay").text(today.format("MMM Do, YYYY hh:mm a"));


$(".saveBtn").on("click", function () {
  let text = $(".past").text().val()
  console.log(text);

  localStorage.setItem("toDo", JSON.stringify({text}))
})







// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar


// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// TODO SET UP COLORS FOR TIME BLOCKS

// WHEN I click into a timeblock
// THEN I can enter an event

//ADDED AREATEXT


// WHEN I click the save button for that timeblock
// TODO  THEN the text for that event is saved in local storage


// WHEN I refresh the page
// TODO THEN the saved events persist
