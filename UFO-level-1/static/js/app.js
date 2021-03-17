
var tableData = data;

//test raw data
console.log(tableData);

// get table references
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");

// Build the table when the page loads
buildTable(tableData);

// Create click filter data handler
button.on("click", function () {

  var inputDate = d3.select("#datetime")
  var date = inputDate.property("value");
  let filteredData = tableData;

  if (date) {
    // filter to show only date that equals to input date
    filteredData = filteredData.filter(row => row.datetime === date);
  }
  // run build table function when received filter data
  buildTable(filteredData);
});


function buildTable(data) {
  //empty html table if data exist
  tbody.html("");
  //loop through datafile and update all data item to the table
  data.forEach((dataRow) => {
    var row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
        cell.text(val)}
    );
  });
}



