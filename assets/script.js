let today = moment();
$("")





$("#currentDay").text(today.format("MMM Do, YYYY hh:mm a"));


$(".saveBtn").on("click", function () {
  let text = $(this).siblings(".description").val().trim()
  let time = $(this).parent().attr("id")
  // $(event.target).sibling(1).val()
  localStorage.setItem(time, text)
})


localStorage.getItem("9")

//add id to text areas
//select text areas with jquery
//target value with val method
//assign localstorage.getitem to that value
$(timeBlock9).val(localStorage.getItem("9"));


// $("#9 .description").val(localStorage.getItem("9"));
// $("#10 .description").val(localStorage.getItem("9"));
// $("11 .description").val(localStorage.getItem("9"));
// $("#12 .description").val(localStorage.getItem("9"));
// $("#13 .description").val(localStorage.getItem("9"));
// $("#14 .description").val(localStorage.getItem("9"));
// $("#15 .description").val(localStorage.getItem("9"));
// $("#16 .description").val(localStorage.getItem("9"));
// $("#17 .description").val(localStorage.getItem("9"));







if ($(this) === m) {
  
} else {
  
}

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
