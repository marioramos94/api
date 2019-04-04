
const axios= require ('axios')


const usuarios = require('./data/usuarios')


const arrayuploader = (arr)=>{
  let id =1  
  arr.map((elm)=>{
       
       uploader (elm,id)    
       id = id +1
       

    })
}
const uploader=(obj,id)=>{
    let url="localhost:9200/escuela/usuario/"
    url =`${url}${id}`
    axios({
      method: 'put',
      url: url,
      data: obj
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
     
}


arrayuploader(usuarios)

