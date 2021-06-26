import React from 'react';
import {
  //BrowserRouter as Router,
  Link,
} from "react-router-dom";

class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
    
  }
  
  getUsers() {
    fetch("https://tvback24.herokuapp.com/tv")
      .then(res => res.json())
      .then(
        (result) => {
         // alert(result)
          this.setState({
            isLoaded: true,
            items: result
          });
        },
         (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
        )
}
  
  componentDidMount(){
    this.getUsers();
  }
  
  
  render(){
    const { error, isLoaded, items} = this.state;
   console.log(error)
   if(error){
     return <div>Error: {error.message}</div>;
   }
   else if(!isLoaded){
   return(
      <div>
  <div class="d-flex justify-content-center">
    <div class="spinner-border" style={{width:'3rem', height: '3rem'}} role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
      </div> 
     )
   }else{
  
  return (
  
<div className="grid-container">

  {items.map((data,key) => 
  <div id={`ch${key}`} className="card grey lighten-5 container py-4 bg-white rounded">
   <div className="control" id={`ch${key}`}>
         <Link to={{pathname:`/channel/${data.title}`}} >
         <div className="image">
         <img className="responsive" src={data.params?.['tvg-logo']} alt={data.title}/>
        </div>
         <br/>
         <div className="text">
         <p style={{marginLeft:'-10px'}}>{data.title}</p>
        </div>
         </Link>

    </div>
  
   </div>
  

  )}
  
  </div>

 
  );
    }
  }
}

export default Main;