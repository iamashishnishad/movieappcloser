let id;




let movies_div = document.getElementById('movies')

 
    
async function searchMovies(q) {
    ///prepare url
     
    try {
    
    let url = `https://www.omdbapi.com/?s=${q}&apikey=5274bad3`;
   
    let res = await fetch(url);

    let data = await res.json();     ////res.jason

    
    
    // console.log('data:', data);

    return data.Search;

    }catch (error) {
        console.log('error:', error);
    }
}

   function appendMovies(movies){
       movies_div.innerHTML=null;

    if(movies === undefined){
        return false;
    }

    movies.forEach(function (el) {

        let p = document.createElement('p');
      
        p.innerText = el.Title;

        movies_div.append(p);
    });

   }





    async function main() {
        let query = document.getElementById('query').value;

        // console.log(query)
         //whoe returnigna  promse function return ssomethings
        // console.log("x:", x); //searching is returning a promise 
    
      let response = searchMovies(query);
      
      let data = await response;
 

      appendMovies(data);
    
    }
    


    



    // function de(func, delay){

    //   if (id) {
    //       clearTimeout(id);
    //   }

    //   let id =setTimeout(function () {
        
    //          func(); 
    //     }, delay);
         
    // }

   ///settimeout data 

    
   
   
   
   function debounceFunction(func, delay){
    
    if(id){

        clearTimeout(id);
    
    
    }    
    
    id = setTimeout(function() {

        func();

        }, delay);
    
    }