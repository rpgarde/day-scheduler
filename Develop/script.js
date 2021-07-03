// Set the current day 
const today = moment().format("dddd, Do of MMMM") 
$("#currentDay").text("Today is " + today)

const currentHour = moment().format("H")
let planTextArr = []
let pulledPlans = JSON.parse(localStorage.getItem("storedPlans"));
// if there is anything in local storage, update values in planTextArr
if (pulledPlans !== null) {
     planTextArr = pulledPlans;
}
// build timeblocks for standard business hours (9am to 6pm), have data-attr be for hour, have data-history be for past-present-future

for (i=9;i<18;i++){
    // build form
    let rowEl = $('<form>');
    rowEl.attr({'data-hour':i,'id':"row-"+i,'index':i-9})
    rowEl.addClass('row');
    $(".container").append(rowEl);
    //build hour block
    let hourEl = $('<div>')
    hourEl.addClass('hour my-auto col-2 col-md-1')
    let hourText = moment(i,"H").format("hA")
    hourEl.text(hourText)
    rowEl.append(hourEl)
    //build input and style based on time now
    let inputText = $('<input>')
    inputText.attr({'type':'text'})
    inputText.addClass('description col-8 col-md-10')
    inputText.val(pulledPlans[i-9])
    if(currentHour == i){
        inputText.addClass('present')
    }
    else if (currentHour > i){
        inputText.addClass('past')
    }
    else {
        inputText.addClass('future')
    }
    rowEl.append(inputText)
    // build button
    let saveBtn = $('<button>')
    saveBtn.addClass('saveBtn col-2 col-md-1')
    saveBtn.text('💾')
    rowEl.append(saveBtn)
}

// function that saves inputs into local storage as an array
$("button").on("click", function (event) {
    event.preventDefault();
    index = $(this).parent().attr("index");
    storedText = $(this).prev().val()
  
    planTextArr[index] = storedText;
  
    localStorage.setItem("storedPlans", JSON.stringify(planTextArr));
  
  })


