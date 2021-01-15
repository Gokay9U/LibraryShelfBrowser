var btn = document.getElementById("btn");
var count = 0;     
btn.addEventListener("click", function() {
    if(count!=0){
        delPrev();
    }
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','http://openlibrary.org/search.json?q='+document.getElementById("input").value);
    ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData);
    renderHTML(ourData);
    bookSpec(ourData);
    }
    ourRequest.send();
});

function renderHTML(data){
    for(var i=0; i<10;i++)
    {
        if(0 == data.numFound){
            alert("NOTHING HAS BEEN FOUND");
            break;
        }
        var cover = ""+data.docs[i].cover_i;
        document.getElementById("Book"+i).innerHTML+="<h4 id="+"title"+i+">"+data.docs[i].title+"</h4>"+data.docs[i].author_name+"<img "+"src="+"https://covers.openlibrary.org/b/id/"+cover+"-M.jpg"+">";
        if(cover == "undefined"){
            document.getElementById("Book"+i).innerHTML+="<img src="+"nocover.jpg"+">"
        }
    }     
        count++;
}
var book0 = document.getElementById("Book0");
var book1 = document.getElementById("Book1");
var book2 = document.getElementById("Book2");
var book3 = document.getElementById("Book3");
var book4 = document.getElementById("Book4");
var book5 = document.getElementById("Book5");
var book6 = document.getElementById("Book6");
var book7 = document.getElementById("Book7");
var book8 = document.getElementById("Book8");
var book9 = document.getElementById("Book9");

function bookSpec(data){
book0.onclick = function () {
    var shelf = parseInt((Math.random() * 1000)+1);
    var myWindow = window.open("", "myWindow");   // Opens a new window 
    var cover =""+data.docs[0].cover_i;
    myWindow.document.write("<img src="+"https://covers.openlibrary.org/b/id/"+cover+"-L.jpg"+">"+"<br>"+"<h2>"+data.docs[0].title+"</h2>"+"<br>"+"<h3>"+data.docs[0].subtitle+"</h3>"+"<br>"+"<h3>Author: "+data.docs[0].author_name+"</h3>"+"<br>"+"<h4>Language: "+data.docs[0].language+"</h4>"+"<br>"+"<h4>ISBN: "+data.docs[0].isbn[0]+"</h4>"+"<br>"+"<h4>Subject: "+data.docs[0].subject+"</h4>"+"<br>"+"<h4>Location in Library (Shelf No): "+shelf+"</h4>"+"<br>"+"<h4>Previev: "+data.docs[0].preview+"</h4>");
}
  book1.onclick = function() {
      var shelf = parseInt((Math.random() * 1000)+1);
    var myWindow = window.open("", "myWindow");   // Opens a new window 
    var cover =""+data.docs[1].cover_i;
    myWindow.document.write("<img src="+"https://covers.openlibrary.org/b/id/"+cover+"-L.jpg"+">"+"<br>"+"<h2>"+data.docs[1].title+"</h2>"+"<br>"+"<h3>"+data.docs[1].subtitle+"</h3>"+"<br>"+"<h3>Author: "+data.docs[1].author_name+"</h3>"+"<br>"+"<h4>Language: "+data.docs[1].language+"</h4>"+"<br>"+"<h4>ISBN: "+data.docs[1].isbn[0]+"</h4>"+"<br>"+"<h4>Subject: "+data.docs[1].subject+"</h4>"+"<br>"+"<h4>Location in Library (Shelf No): "+shelf+"</h4>"+"<br>"+"<h4>Previev: "+data.docs[1].preview+"</h4>");
  }
  book2.onclick = function() {
      var shelf = parseInt((Math.random() * 1000)+1);
    var myWindow = window.open("", "myWindow");   // Opens a new window 
    var cover =""+data.docs[2].cover_i;
    myWindow.document.write("<img src="+"https://covers.openlibrary.org/b/id/"+cover+"-L.jpg"+">"+"<br>"+"<h2>"+data.docs[2].title+"</h2>"+"<br>"+"<h3>"+data.docs[2].subtitle+"</h3>"+"<br>"+"<h3>Author: "+data.docs[2].author_name+"</h3>"+"<br>"+"<h4>Language: "+data.docs[2].language+"</h4>"+"<br>"+"<h4>ISBN: "+data.docs[2].isbn[0]+"</h4>"+"<br>"+"<h4>Subject: "+data.docs[2].subject+"</h4>"+"<br>"+"<h4>Location in Library (Shelf No): "+shelf+"</h4>"+"<br>"+"<h4>Previev: "+data.docs[2].preview+"</h4>");
  }
  book3.onclick = function() {
      var shelf = parseInt((Math.random() * 1000)+1);
    var myWindow = window.open("", "myWindow");   // Opens a new window 
    var cover =""+data.docs[3].cover_i;
    myWindow.document.write("<img src="+"https://covers.openlibrary.org/b/id/"+cover+"-L.jpg"+">"+"<br>"+"<h2>"+data.docs[3].title+"</h2>"+"<br>"+"<h3>"+data.docs[3].subtitle+"</h3>"+"<br>"+"<h3>Author: "+data.docs[3].author_name+"</h3>"+"<br>"+"<h4>Language: "+data.docs[3].language+"</h4>"+"<br>"+"<h4>ISBN: "+data.docs[3].isbn[0]+"</h4>"+"<br>"+"<h4>Subject: "+data.docs[3].subject+"</h4>"+"<br>"+"<h4>Location in Library (Shelf No): "+shelf+"</h4>"+"<br>"+"<h4>Previev: "+data.docs[3].preview+"</h4>");
  }
  book4.onclick = function() {
      var shelf = parseInt((Math.random() * 1000)+1);
    var myWindow = window.open("", "myWindow");   // Opens a new window 
    var cover =""+data.docs[4].cover_i;
    myWindow.document.write("<img src="+"https://covers.openlibrary.org/b/id/"+cover+"-L.jpg"+">"+"<br>"+"<h2>"+data.docs[4].title+"</h2>"+"<br>"+"<h3>"+data.docs[4].subtitle+"</h3>"+"<br>"+"<h3>Author: "+data.docs[4].author_name+"</h3>"+"<br>"+"<h4>Language: "+data.docs[4].language+"</h4>"+"<br>"+"<h4>ISBN: "+data.docs[4].isbn[0]+"</h4>"+"<br>"+"<h4>Subject: "+data.docs[4].subject+"</h4>"+"<br>"+"<h4>Location in Library (Shelf No): "+shelf+"</h4>"+"<br>"+"<h4>Previev: "+data.docs[4].preview+"</h4>");
  }
  book5.onclick = function() {
      var shelf = parseInt((Math.random() * 1000)+1);
    var myWindow = window.open("", "myWindow");   // Opens a new window 
    var cover =""+data.docs[5].cover_i;
    myWindow.document.write("<img src="+"https://covers.openlibrary.org/b/id/"+cover+"-L.jpg"+">"+"<br>"+"<h2>"+data.docs[5].title+"</h2>"+"<br>"+"<h3>"+data.docs[5].subtitle+"</h3>"+"<br>"+"<h3>Author: "+data.docs[5].author_name+"</h3>"+"<br>"+"<h4>Language: "+data.docs[5].language+"</h4>"+"<br>"+"<h4>ISBN: "+data.docs[5].isbn[0]+"</h4>"+"<br>"+"<h4>Subject: "+data.docs[5].subject+"</h4>"+"<br>"+"<h4>Location in Library (Shelf No): "+shelf+"</h4>"+"<br>"+"<h4>Previev: "+data.docs[5].preview+"</h4>");
  }
  book6.onclick = function() {
      var shelf = parseInt((Math.random() * 1000)+1);
    var myWindow = window.open("", "myWindow");   // Opens a new window 
    var cover =""+data.docs[6].cover_i;
    myWindow.document.write("<img src="+"https://covers.openlibrary.org/b/id/"+cover+"-L.jpg"+">"+"<br>"+"<h2>"+data.docs[6].title+"</h2>"+"<br>"+"<h3>"+data.docs[6].subtitle+"</h3>"+"<br>"+"<h3>Author: "+data.docs[6].author_name+"</h3>"+"<br>"+"<h4>Language: "+data.docs[6].language+"</h4>"+"<br>"+"<h4>ISBN: "+data.docs[6].isbn[0]+"</h4>"+"<br>"+"<h4>Subject: "+data.docs[6].subject+"</h4>"+"<br>"+"<h4>Location in Library (Shelf No): "+shelf+"</h4>"+"<br>"+"<h4>Previev: "+data.docs[6].preview+"</h4>");
  }
  book7.onclick = function() {
      var shelf = parseInt((Math.random() * 1000)+1);
    var myWindow = window.open("", "myWindow");   // Opens a new window 
    var cover =""+data.docs[7].cover_i;
    myWindow.document.write("<img src="+"https://covers.openlibrary.org/b/id/"+cover+"-L.jpg"+">"+"<br>"+"<h2>"+data.docs[7].title+"</h2>"+"<br>"+"<h3>"+data.docs[7].subtitle+"</h3>"+"<br>"+"<h3>Author: "+data.docs[7].author_name+"</h3>"+"<br>"+"<h4>Language: "+data.docs[7].language+"</h4>"+"<br>"+"<h4>ISBN: "+data.docs[7].isbn[0]+"</h4>"+"<br>"+"<h4>Subject: "+data.docs[7].subject+"</h4>"+"<br>"+"<h4>Location in Library (Shelf No): "+shelf+"</h4>"+"<br>"+"<h4>Previev: "+data.docs[7].preview+"</h4>");
  }
  book8.onclick = function() {
      var shelf = parseInt((Math.random() * 1000)+1);
    var myWindow = window.open("", "myWindow");   // Opens a new window 
    var cover =""+data.docs[8].cover_i;
    myWindow.document.write("<img src="+"https://covers.openlibrary.org/b/id/"+cover+"-L.jpg"+">"+"<br>"+"<h2>"+data.docs[8].title+"</h2>"+"<br>"+"<h3>"+data.docs[8].subtitle+"</h3>"+"<br>"+"<h3>Author: "+data.docs[8].author_name+"</h3>"+"<br>"+"<h4>Language: "+data.docs[8].language+"</h4>"+"<br>"+"<h4>ISBN: "+data.docs[8].isbn[0]+"</h4>"+"<br>"+"<h4>Subject: "+data.docs[8].subject+"</h4>"+"<br>"+"<h4>Location in Library (Shelf No): "+shelf+"</h4>"+"<br>"+"<h4>Previev: "+data.docs[8].preview+"</h4>");
  }
  book9.onclick = function() {
      var shelf = parseInt((Math.random() * 1000)+1);
    var myWindow = window.open("", "myWindow");   // Opens a new window 
    var cover =""+data.docs[9].cover_i;
    myWindow.document.write("<img src="+"https://covers.openlibrary.org/b/id/"+cover+"-L.jpg"+">"+"<br>"+"<h2>"+data.docs[9].title+"</h2>"+"<br>"+"<h3>"+data.docs[9].subtitle+"</h3>"+"<br>"+"<h3>Author: "+data.docs[9].author_name+"</h3>"+"<br>"+"<h4>Language: "+data.docs[9].language+"</h4>"+"<br>"+"<h4>ISBN: "+data.docs[9].isbn[0]+"</h4>"+"<br>"+"<h4>Subject: "+data.docs[9].subject+"</h4>"+"<br>"+"<h4>Location in Library (Shelf No): "+shelf+"</h4>"+"<br>"+"<h4>Previev: "+data.docs[9].preview+"</h4>");
  }
}
function delPrev(){
    for(var i=0; i<10;i++){ //delete prev search results
    var item = document.getElementById("Book"+i);
    item.innerHTML="";
    }
  }