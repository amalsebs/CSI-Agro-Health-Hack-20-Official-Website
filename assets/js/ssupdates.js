var publicSpreadsheetUrlss = 'https://spreadsheets.google.com/feeds/cells/1ui099mzNajGF1KO_CLH9oWcs4h9prO4uus19W0al2Vs/1/public/full?alt=json';

var updatesList = document.getElementById("ssupdates");

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    
    var updatesItems = JSON.parse(this.responseText);
    var counter = 6;
    
    while(counter < updatesItems.feed.entry.length){
      var injectString = '<div class="col-md-4"><div style="border-style: groove; margin: 5px; padding: 5px; width: 270px">';
      injectString += "<h4>" + updatesItems.feed.entry[++counter].content.$t + " - Team " + updatesItems.feed.entry[++counter].content.$t + "</h4>";
      injectString += "<h6>" + updatesItems.feed.entry[++counter].content.$t + "</h6>";
      var date = updatesItems.feed.entry[counter-3].content.$t;
      //console.log(date);
      date = date.slice(3,5);
      //console.log(date);
      var time = updatesItems.feed.entry[counter-3].content.$t;
      time = time.slice(11,16);
      //console.log(time);
      injectString += '<p style="font-size: 14px">' + date + " February at " + time + "</p>";
      var imgURL = updatesItems.feed.entry[++counter].content.$t;
      //console.log(imgURL);
      imgURL = imgURL.slice(33);
      //console.log(imgURL);
      var imgURLview = "https://drive.google.com/uc?export=view&amp;id=" + imgURL;
      injectString += '<img src="' + imgURLview + '" height= 250px width= 100% style="margin: 5px 5px 5px 0px;"';
      injectString += "</div></div>";
      updatesList.innerHTML += injectString;
      counter+=2;
    }
    
    //console.log(updatesItems.feed.entry);
  }
};
xmlhttp.open("GET", publicSpreadsheetUrlss, true);
xmlhttp.send();