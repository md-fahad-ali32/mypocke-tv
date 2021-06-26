import React from "react";
import {
  /*BrowserRouter as Router,
  Switch,
  Route,
  useParams,*/
  Link,
  withRouter,
} from "react-router-dom";
import Player from './Player';


class Play extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title:null,
      link:null,
      isLoaded:false,
      error:null,
      catagory:[],
   
   
     };

  }
  
  changeChannel = () => {
    //this.setState({color: "blue"});
    
      fetch("https://tvback24.herokuapp.com/channel/"+this.props.match.params.title)
      .then(res => res.json())
      .then((result) => {
      
        this.setState({
          title:result.title,
          link:result.file,
          group:result['params']['group-title'],
          poster:result['params']['tvg-logo'],
      //    isLoaded:true
        })
        
        
      fetch("https://tvback24.herokuapp.com/g/"+this.state.group)
      .then(res => res.json())
      .then((result) => {
      
        this.setState({
          catagory:result,
           isLoaded:true
        })
        //alert(this.state.catagory)
        },(error) => {
    //     alert(error) 
        })
      
        
        
        },(error) => {
    //     alert(error) 
        })
      

  }

 

Toggle=()=>{
  // console.log(this.props)
   
   //console.log(this.props.history.push(this.props.history.location.pathname))
   //console.log(this.props['history']['location']['pathname'].split('/')[2])
    this.setState({
      title:this.props['history']['location']['pathname'].split('/')[2]
    })
   // console.log(this.state.link)
    ///this.changeChannel()
    setTimeout(this.changeChannel,1); 
}
  
 
componentDidMount(){
  this.changeChannel()
  console.log(document.querySelector('div.video-js'))

}
 render(){
   
   const { error, isLoaded,catagory,} = this.state;

  //console.log(error)
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
 
    return(
  
      <div>

 
<Player
link={this.state.link}
poster={this.state.poster}
/>
      
      
<div className="grid-container">
{catagory.map((data,key) => 
  <div id={`ch${key}`} className="card grey lighten-5 container py-4 bg-white rounded">
   <div className="control" id={`ch${key}`}>
      <span onClick={this.Toggle}><Link onClick={this.Toggle} to={data.title}>
        <div className="image">
         <img className="responsive" src={data.params?.['tvg-logo']} alt={data.title}/>
        </div>
         <br/>
         <div className="text">
         <p style={{marginLeft:'-10px'}}>{data.title}</p>
        </div>
        </Link></span>
    </div>
   </div>
  )}
 </div> 
 
 
   
   </div>
      )
    }

   
 } 
  
}
export default withRouter(Play);
  