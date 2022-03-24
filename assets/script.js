let today = moment();
//wrapped time in number() to display as int.
let hourNow = Number(moment().format("H"));
let rowArray = $("div.row");
// displays current day and time
$("#currentDay").text(today.format("MMM Do, YYYY hh:mm a"));

// for loop that controls color change of time blocks
//wrapped var in number() to display as int
for (let index = 0; index < rowArray.length; index++) {
  console.log(rowArray[index]);
  let currentHour = Number(rowArray[index].id)
  console.log(currentHour);

  //condition that controls color of time block
  if (currentHour === hourNow) {
    rowArray[index].children[1].classList.add("present")
    
  } else if (currentHour > hourNow) {
    rowArray[index].children[1].classList.add("future")
     
  } else if (currentHour < hourNow){
    rowArray[index].children[1].classList.add("past");
     
  } 


 }

// this logic controls setting and getting data from local storage

$(".saveBtn").on("click", function () {
  let text = $(this).siblings(".description").val().trim()
  let time = $(this).parent().attr("id")
  localStorage.setItem(time, text)
})

$(timeBlock9).val(localStorage.getItem("9"));
$(timeBlock10).val(localStorage.getItem("10"));
$(timeBlock11).val(localStorage.getItem("11"));
$(timeBlock12).val(localStorage.getItem("12"));
$(timeBlock13).val(localStorage.getItem("13"));
$(timeBlock14).val(localStorage.getItem("14"));
$(timeBlock15).val(localStorage.getItem("15"));
$(timeBlock16).val(localStorage.getItem("16"));
$(timeBlock17).val(localStorage.getItem("17"));






