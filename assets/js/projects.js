var publicSpreadsheetUrlProj = 'https://spreadsheets.google.com/feeds/cells/1TIVeDozZs-8O8YXm_5gooGEH9Qs0PvHsqJA8ILxMA_4/1/public/full?alt=json';

var projList = document.getElementById("projectsinhack");

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    
    var projItems = JSON.parse(this.responseText);
    var counter = 5;
    
    while(counter < projItems.feed.entry.length){
      projList.innerHTML += "<h3>" + projItems.feed.entry[++counter].content.$t + " - Team " + projItems.feed.entry[++counter].content.$t + "</h3>";
      projList.innerHTML += "<h5>" + projItems.feed.entry[++counter +1].content.$t + "</h5>";
      projList.innerHTML += '<a href="' + projItems.feed.entry[++counter -1].content.$t + '" target="_blank">View Project</a>';
      projList.innerHTML += "<hr>";
      ++counter;
    }
    
    console.log(projItems.feed.entry);
  }
};
xmlhttp.open("GET", publicSpreadsheetUrlProj, true);
xmlhttp.send();