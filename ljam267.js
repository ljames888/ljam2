	  let currentTab = "";
      function showHome() {
         if (currentTab != "Home") {
            currentTab = "Home";
            showNoTabs();
            document.getElementById("Home").style.backgroundColor = "lightGrey";
            document.getElementById("SectionA").style.display = "inline";
         }
      }

      function showNews() {
         if (currentTab != "News") {
            currentTab = "News";
            showNoTabs();
            document.getElementById("News").style.backgroundColor = "lightGrey";
            document.getElementById("SectionB").style.display = "inline";
			
         }
      }

      function showDisplays() {
         if (currentTab != "Displays") {
            currentTab = "Displays";
            showNoTabs();
			searchFunction();
            document.getElementById("Displays").style.backgroundColor = "lightGrey";
            document.getElementById("SectionC").style.display = "inline";
         }
      }

	  function showGuestBook() {
         if (currentTab != "GuestBook") {
            currentTab = "GuestBook";
            showNoTabs();
            document.getElementById("GuestBook").style.backgroundColor = "lightGrey";
            document.getElementById("SectionD").style.display = "inline";
         }
      }


      function showShop() {
         if (currentTab != "Shop") {
            currentTab = "Shop";
            showNoTabs();
			searchFunctiond();
            document.getElementById("Shop").style.backgroundColor = "lightGrey";
            document.getElementById("SectionE").style.display = "inline";
			
         }
      }
	  
	   function showRegister() {
         if (currentTab != "Register") {
            currentTab = "Register";
            showNoTabs();
            document.getElementById("Register").style.backgroundColor = "lightGrey";
            document.getElementById("SectionF").style.display = "inline";
			
         }
      }
	  
      function showNoTabs() {
         document.getElementById("Home").style.backgroundColor = "transparent";
         document.getElementById("News").style.backgroundColor = "transparent";
         document.getElementById("Displays").style.backgroundColor = "transparent";
	     document.getElementById("GuestBook").style.backgroundColor = "transparent";
		 document.getElementById("Shop").style.backgroundColor = "transparent";
		 document.getElementById("Register").style.backgroundColor = "transparent";
         document.getElementById("SectionA").style.display = "none";
         document.getElementById("SectionB").style.display = "none";
         document.getElementById("SectionC").style.display = "none";
		 document.getElementById("SectionD").style.display = "none";
		 document.getElementById("SectionE").style.display = "none";
		 document.getElementById("SectionF").style.display = "none";
      }
     window.onload = function() {
         showHome();
		

		 
      }
    

function getNewsFunc() {
   const uri = "http://redsox.uoa.auckland.ac.nz/ms/MuseumService.svc/news";
   const xhr = new XMLHttpRequest();
   xhr.open("GET", uri, true);
   xhr.setRequestHeader('Accept', 'application/json');
   xhr.onload = () => {
	   const resp = JSON.parse(xhr.responseText);
       showNewsFunc(resp);
   }
   
   xhr.send(null);
}
getNewsFunc();

function showNewsFunc(news) {
   let tableContent = "<tr><td></td><td></td></tr>\n";
   let odd = true;
   const addRecord = (record) => {
      tableContent += odd ? "<tr>" : "<tr>";
      odd = !odd;
      tableContent += "<td>" + "<a href=" + record.enclosureField.urlField + "><img class = padding src =" + record.enclosureField.urlField + "></a>" + "<td><h2>" + record.titleField +"<br><p>" + record.pubDateField + "</p></h2><hr><p class =p2>"+ record.descriptionField + "</p></td>";
  }
   news.forEach(addRecord)
   document.getElementById("showTab").innerHTML = tableContent;

}



function getDisplayFunc(uri) {
   const xhr = new XMLHttpRequest();
   xhr.open("GET", uri, true);
   xhr.setRequestHeader('Accept', 'application/json');
   xhr.onload = () => {
	   const respa = JSON.parse(xhr.responseText);
       showDisplayFunc(respa);
   }
   
   xhr.send(null);

}


function showDisplayFunc(displays) {
   let displayTable = "<tr><td></td><td></td></tr>\n";
   let odd = true;
   const addRecord = (record) => {
      displayTable += odd ? "<tr>" : "<tr>";
      odd = !odd;
      displayTable +=  "<td><h2>" + record.Title + "</h2><br>" + "<a href=" + "http://redsox.uoa.auckland.ac.nz/ms/MuseumService.svc/itemimg?id=" + record.ItemId + ">" + "<img src =" + "http://redsox.uoa.auckland.ac.nz/ms/MuseumService.svc/itemimg?id=" + record.ItemId + "></a>" + "<p class = normal><br>" + record.Description   + "<br><br></p>" + "</a><br><hr>\n";
  }
   displays.forEach(addRecord)
   document.getElementById("showDisp").innerHTML = displayTable;

}


function searchFunction() {
  const input = document.getElementById('myInput');
  const uri = "http://redsox.uoa.auckland.ac.nz/ms/MuseumService.svc/search?term=" + input.value;
  getDisplayFunc(uri);
  
 }
 
 
 
 
 
 
 
 
function post(){
	const xhr = new XMLHttpRequest();
	const uri= "http://redsox.uoa.auckland.ac.nz/ms/MuseumService.svc/comment?name=" + document.getElementById("inputName").value;
	xhr.open('POST', uri, true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onload = function () { 
	const htmlIframe = document.getElementById("refreshBuffer");
	htmlIframe.src = htmlIframe.src;
	// clears input fields with blank fields once values have been submitted
	document.getElementById('inputName').value='';
	document.getElementById('inputComment').value='';
	
   }
   const comment = document.getElementById("inputComment").value;
   xhr.send(JSON.stringify(comment));
}


function getShopFunc(uri) {
   const xhr = new XMLHttpRequest();
   xhr.open("GET", uri, true);
   xhr.setRequestHeader('Accept', 'application/json');
   xhr.onload = () => {
	   const respa = JSON.parse(xhr.responseText);
       showShopFunc(respa);
   }
   
   xhr.send(null);

}


function showShopFunc(displays) {
   let displayTable = "<tr><td></td><td></td></tr>\n";
   let odd = true;
   const addRecord = (record) => {
      displayTable += odd ? "<tr>" : "<tr>";
      odd = !odd;
      displayTable += "<td><br>" + "<img src=" + "http://redsox.uoa.auckland.ac.nz/ms/MuseumService.svc/shopimg?id=" + record.ItemId + "><td><h2>" + record.Title +"</h2></td><td><td><P>" + record.Description + "</P></td></td><td>" + "<a href = http://redsox.uoa.auckland.ac.nz/mss/Service.svc/buy?id=" + record.ItemId + ">&#128722;</a>"}
   displays.forEach(addRecord)
   document.getElementById("showTable").innerHTML = displayTable;

}


function searchFunctiond() {
	
  const aa = document.getElementById('word');
  const uri = "http://redsox.uoa.auckland.ac.nz/ms/MuseumService.svc/shop?term=" + aa.value;
  getShopFunc(uri);
  
 }











function postit(){
	const xhr = new XMLHttpRequest();
	const uri= "http://redsox.uoa.auckland.ac.nz/ms/MuseumService.svc/comment?name=" + document.getElementById("inputName").value;
	xhr.open('POST', uri, true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onload = function () { 
	const htmlIframe = document.getElementById("refreshBuffer");
	htmlIframe.src = htmlIframe.src;
	// clears input fields with blank fields once values have been submitted
	document.getElementById('inputName').value='';
	document.getElementById('inputComment').value='';
	
   }
   const comment = document.getElementById("inputComment").value;
   xhr.send(JSON.stringify(comment));
}















