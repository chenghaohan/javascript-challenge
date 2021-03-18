
var tableData = data;

var tbody = d3.select("tbody");

var filters = {};


// Original table contains all data to be built when webpage reload
buildTable(tableData);

// run functions when a change is made to the filter class (this applies to full filtersection)
d3.selectAll(".filter").on("change", function(){

    // Save the element, value, and id of the filter that was changed
    var elementValue = d3.select(this).select("input").property("value");
    var filterId = d3.select(this).select("input").attr("id");
  
    // If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object
    if (elementValue) {
      filters[filterId] = elementValue;
    }
    else {
      delete filters[filterId];
    }
    //pass dataset to filteredData to use below function
    let filteredData = tableData;
  
    // Loop through each filter and save row only if match data meet filters and pass them to "filteredData"
    Object.entries(filters).forEach(([key, value]) => {
      filteredData = filteredData.filter(row => row[key] === value);
    });
  
    // rebuild the table once filters above are set 
    buildTable(filteredData)

});


function buildTable(data) {
//empty html table if data exist
  tbody.html("");
//loop through datafile and update all data item to the table
  data.forEach((dataRow) => {  
    var row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
      cell.text(val);
    });
  });
}