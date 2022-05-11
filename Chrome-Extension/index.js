let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

// 1. Save a key-value pair in localStorage
// localStorage.setItem("myName", "Aritra Barik")

// 2. Refresh the page. Get the value and log it to the console
let name = localStorage.getItem("myName")
console.log(name)

// 3. Clear localStorage
// localStorage.clear()

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings



// Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener('click', function () {
    // Push the value from the inputEl into the myLeads array
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
    myLeads.push(inputEl.value)
    
    // Clear out the input field
    inputEl.value = ""

    // Call the renderLeads() function
    renderLeads()
})

function renderLeads() {
    // Wrap the code below in a renderLeads() function
    // Create a variable, listItems, to hold all the HTML for the list items
    // Assign it to an empty string to begin with
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // Add the item to the listItems variable instead of the ulEl.innerHTML
        // Wrap the lead in an anchor tag (<a>) inside the <li>
        // Can you make the link open in a new tab?
        
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    
    // Render the listItems inside the unordered list using ulEl.innerHTML
    ulEl.innerHTML = listItems
}