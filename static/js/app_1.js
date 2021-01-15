//import data from data.js
const tableData = data;

//reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data){
// First, clear out any existing data
    tbody.html("");
    
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row    
    data.forEach((datarow)=>{
        // Append a row to the table body
        let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
        Object.values(datarow).forEach((val)=>{
            let cell = row.append("td");
            cell.text(val);
        })

    });
}

//create function for filtering and updating data
function handleClick(){
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    // Check to see if a date was entered and filter the
    // data using that date.
    let filteredData = tableData;
    if(date){
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value

        filteredData = filteredData.filter(row=>row.datetime === date);
    }
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);    
}

//Initiate filtering on click of filter button
d3.selectAll("#filter-btn").on("click",handleClick);

//Show the initial original table
buildTable(tableData);