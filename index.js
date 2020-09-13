// Add your code here

function submitData(userName,userEmail)
{
  
  let DataSend={
    name:"marwa",
    email:"m@gmail.com"
  }
  
  let DataObject={
    
     headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
    },
      body: JSON.stringify(DataSend)
   }
  
  return fetch('',DataObject)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
  })
}
