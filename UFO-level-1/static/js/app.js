// from data.js
var tableData = data;

// YOUR CODE HERE!

////Data displaying 
//Using D3 to select the table body
var tbody = d3.select("tbody");

console.log(tableData);

//append one table row `tr` for each sighting report object
data.forEach(function(sighting){
    
    console.log(sighting)
   
    // Appending one table row `tr` to the table body
    var row = tbody.append("tr");
    
    //Using `Object.entries` to console.log each sighting
    Object.entries(sighting).forEach(function([key, value]){
       
        console.log(key,value);
        
        // Appending a cell to the row for each value
        var cell = row.append("td");

        cell.text(value);
    });
});


/////Filtering through data
// Selecting the button 
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// creating event handlers
button.on("click", runEnter);
form.on("submit",runEnter);

//Complete the even handler function for the form
function runEnter() {
    
    // Prevent the page from refreshing
    d3.event.preventDefault();
   
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
   
    // getting the value property of the input element
    var inputValue = inputElement.property("value");
    
    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    
    console.log(filteredData);

    // Set the span tag in the tbody element to the text
    // that was entered in the form
    d3.select("tbody>span").text(inputValue); 

    //append one table row `tr` for each sighting report object
    filteredData.forEach(function(sighting){
    
    console.log(sighting)


    // Appending one table row `tr` to the table body
    var row = tbody.append("tr");
    
    //Using `Object.entries` to console.log each sighting
    Object.entries(sighting).forEach(function([key, value]){
       
        console.log(key,value);
        
        // Appending a cell to the row for each value
        var cell = row.append("td");

        cell.text(value);
    });
});
};