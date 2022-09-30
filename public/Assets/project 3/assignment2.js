function myFunction() {
  var showHide = document.getElementById("rolandTable");
  if (showHide.style.display === "none") {
    showHide.style.display = "block";
  } else {
    showHide.style.display = "none";
  }
}



function myTable() {
  
  var table = document.createElement('TABLE');
  var myTable = document.getElementById("rolandTable");
  var tableMain = document.createElement('TBODY');

  table.border = 3;
  table.appendChild(tableMain);


  for (var x = 1; x < 16; x++) {
    var tableRow = document.createElement('TR');
    tableMain.appendChild(tableRow);

    for (var y = 1; y < 16; y++) {
      var tableColumn = document.createElement('TD');
      tableColumn.width = 45;
      tableColumn.appendChild(document.createTextNode( x + "," + y));
      tableRow.appendChild(tableColumn);
    }
  }
  myTable.appendChild(table);
}
myTable();

function RJBTable()
{
rn = window.prompt("Input number of rows", 1);
cn = window.prompt("Input number of columns",1);
  
 for(var r=0;r<parseInt(rn,10);r++)
  {
   var x=document.getElementById('bajaTable').insertRow(r);
   for(var c=0;c<parseInt(cn,10);c++)  
    {
     var y=  x.insertCell(c);
     y.innerHTML=""+r+","+c; 
    }
   }
}