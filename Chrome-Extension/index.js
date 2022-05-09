const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")

// Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener('click', function () {
    // Push the value from the inputEl into the myLeads array
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]

// Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
    // Add the item to the listItems variable instead of the ulEl.innerHTML
    listItems += "<li>" + myLeads[i] + "</li>"
}
// Render the listItems inside the unordered list using ulEl.innerHTML
ulEl.innerHTML = listItems