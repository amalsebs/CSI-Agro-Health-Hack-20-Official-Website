var publicSpreadsheetUrlAnnc = 'https://spreadsheets.google.com/feeds/cells/1-K2EbTA4L1ROZVH7XvmMHzxurOlX9OabcQGQIkFKPMQ/1/public/full?alt=json';

var anncList = document.getElementById("hackannounce");

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    
    var anncItems = JSON.parse(this.responseText);
    var counter = 7;
    
    while(counter < anncItems.feed.entry.length){
      anncList.innerHTML += "<h2>" + anncItems.feed.entry[counter].content.$t + "</h2>";
      var date1 = anncItems.feed.entry[counter-3].content.$t;
      //console.log(date1);
      date1 = date1.slice(3,5);
      //console.log(date1);
      var time1 = anncItems.feed.entry[counter-3].content.$t;
      time1 = time1.slice(11,16);
      //console.log(time1);
      var date1time1 = date1 + " November at " + time1;
      anncList.innerHTML += "<p>" + date1time1 + "</p>";
      anncList.innerHTML += "<hr>";
      counter+=4;
    }
    //console.log(anncItems.feed.entry);
  }
};
xmlhttp.open("GET", publicSpreadsheetUrlAnnc, true);
xmlhttp.send();