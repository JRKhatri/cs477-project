
//Here we will write java script code for DOM related

window.onload = function(){
    document.getElementById('signinForm').style.display='none';
    document.getElementById("bookList").style.display='none';
    document.getElementById('loginbtn').onclick=(e)=>{
        e.preventDefault();
            document.getElementById('signinForm').style.display='block';
            document.getElementById('signinupbtn').style.display='none';   
        
    }  
    fetchBook()
    
    
    }
    const books = ['book1', 'book2', 'book3']
     function fetchBook() {
        const dis = document.getElementById("bookList");
        document.getElementById("subbtn").onclick= async ()=>{
            // fetch('http://localhost:4000/books')
            // .then(data=>console.log(data))
            // books.forEach(book=>{
            //     dis.innerText=book
            //     console.log(book)
            //     document.getElementById('signinForm').style.display='none';
            //     document.getElementById("bookList").style.display='block';
            // })
                document.getElementById('signinForm').style.display='none';
                document.getElementById("bookList").style.display='block';
           const res = await fetch('http://localhost:3000/books')
           const data = await res.json()
        //    data.forEach(e => {
        //     Object.entries(e=>{
        //                   dis.innerHTML= `<ul> <li>Title: ${e.title}, Author: ${e.author}  </li> </ul>`
                          
        //                })
        //     })
            
        //    });
           data.forEach(ele => {
               Object.entries(ele).forEach(([key, value])=>{
                  dis.innerHTML= `<ul> <li>${key}: ${value} </li> </ul>`
                  console.log(`${key}: ${value}`)
               })
           });
                // .then(response => response.json())
                // .then(json => JSON.stringify(json))
                // .then(data=>{
                //     console.log(data)
                //     let arr = [...data]
                //     arr.forEach(ele=>{
                //         console.log(ele)
                //     })
                // })
                
        }
    }
   
    
