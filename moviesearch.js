var movieName = document.getElementById("moviename");
var searchBtn = document.getElementById("search-btn");
var content = document.getElementById("moviecontainer");


searchBtn.addEventListener("click",function(){
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        content.innerHTML=`<h1 style="font-size: 100px;text-align: center;margin: auto;color: blue">It's Movie Time...!</h1>`
    
        if(xhttp.readyState==4){
            content.innerHTML = "";
            
            var movielist = JSON.parse(this.responseText); 
            if(movielist.Response == "True"){  
                movielist.Search.map((item,i)=>{
                    content.innerHTML +=`
                    <div class="imagecontainer">
                    <img src="${item.Poster}" style="border-bottom-right-radius:10px;border-bottom-left-radius:10px;border-top-right-radius:10px" alt="MoviePoster">
                    <p><b>Title</b>: ${item.Title}</p>
                    <p><b>Year</b>: ${item.Year}</p>
                    <p><b>Type</b>: ${item.Type}</p>
                    </div>`;
            })}
            else{
                content.innerHTML = `<img style="width:600px;margin:auto;" src="https://static.vecteezy.com/system/resources/previews/021/844/396/original/error-404-page-not-found-funny-little-man-chibi-sits-thoughtfully-next-to-a-broken-wire-illustration-for-design-design-vector.jpg"/>`
            }
        }
    }
 
    xhttp.open("GET",`https://www.omdbapi.com/?apikey=45f0782a&s=${movieName.value}`,true);
    xhttp.send();
})