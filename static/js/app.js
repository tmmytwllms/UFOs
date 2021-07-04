// import the data from data.js
const tableData = data;

// reference HTML table using d3
var tbody = d3.select("tbody");

// create function to add data to a table
function buildTable(data){
    // clear the current data from the table
    tbody.html("");}

    // create a forEach loop to loop through the data array
    data.forEach((dataRow)=>{
        // add row to body as table row
        let row = tbody.append("tr");
        //loop through each object in the data set
        Object.values(dataRow).forEach((val)=>{
            // add each object to it's row in table data
            let cell = row.append("td");
            // add the values of the key:value pair for each object to the cell
            cell.text(val);
        });
    });