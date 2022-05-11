let myLeads = `["www.awesome-link-1.com"]` // converted to string as localStorage can store strings only

// 1. Turn the myLeads string into an array
// 2. Push a new value to the array
// 3. Turn the array into a string again
// 4. Console.log the string using typeof to verify that it's a string

myLeads = JSON.parse(myLeads)
myLeads.push("www.epiclink.com")
myLeads = JSON.stringify(myLeads)
console.log(typeof(myLeads))

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

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