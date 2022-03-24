let today = moment();
let hourNow = Number(moment().format("H"));
// let hourNow = 13;
$("#currentDay").text(today.format("MMM Do, YYYY hh:mm a"));
let rowArray = $("div.row")



for (let index = 0; index < rowArray.length; index++) {
  console.log(rowArray[index]);
  let currentHour = Number(rowArray[index].id)
  console.log(currentHour);

  
  if (currentHour === hourNow) {
    rowArray[index].children[1].classList.add("present")
    console.log("present");
  } else if (currentHour > hourNow) {
    rowArray[index].children[1].classList.add("future")
     console.log("future");
  } else if (currentHour < hourNow){
    rowArray[index].children[1].classList.add("past");
     console.log("past");
  } 


 }



$(".saveBtn").on("click", function () {
  let text = $(this).siblings(".description").val().trim()
  let time = $(this).parent().attr("id")
  // $(event.target).sibling(1).val()
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






