// Add your code here

function submitData(userName,userEmail)
{
  
  let DataSend={
    name:userName,
    email:userEmail
  }
  
  let DataObject={
    
    method: "POST", 
     headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
    },
      body: JSON.stringify(DataSend)
   }
  
  return fetch('http://localhost:3000/users',DataObject)
  .then(function(response) {
    return response.json();
     })
   .then(function(object) {
     const body = document.getElementsByTagName('body');  
     var p = document.createElement('p');
      p.innerHTML = object.id;
      body[0].appendChild(p);          
       console.log(object.id);
      })
    .catch(function(error) {
      alert("Bad things! Ragnarők!");
       const body = document.getElementsByTagName('body');  
       var p = document.createElement('p');
       p.innerHTML = error.message;
       body[0].appendChild(p);                    
         console.log(error.message);
        });
 
}
  submitData('Marwa','m@gmail.com')
   submitData('sondos','s@gmail.com')