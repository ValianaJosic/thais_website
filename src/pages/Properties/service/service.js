import axios from 'axios';


axios({
  "method":"POST  ",
  "url":"https://zillowdimashirokovv1.p.rapidapi.com/GetSearchResults.htm",
  "headers":{
  "content-type":"application/x-www-form-urlencoded",
  "x-rapidapi-host":"ZillowdimashirokovV1.p.rapidapi.com",
  "x-rapidapi-key":"445356f5d8msh8d69aea21e1a809p10d900jsnf818d0339fca"
  },"data":{
  "rentzestimate":"true",
  "zws-id":"",
  "citystatezip":"\"\"",
  "address":"\"\""
  }
  })
  .then((response)=>{
    console.log(response)
  })
  .catch((error)=>{
    console.log(error)
  })
  