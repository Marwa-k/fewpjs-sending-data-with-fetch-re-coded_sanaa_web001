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
  
  return fetch('http://localhost:3000/users',DataObject)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
  })
  .catch(function(error) {
    alert("Bad things! error");
    console.log(error.message);
  });
}
