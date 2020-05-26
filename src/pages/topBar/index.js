import React from 'react';
import { Link } from 'react-router-dom';


class Topbar extends React.Component{

render(){
return(


<div> 


<nav className="navbar navbar-expand-lg navbar-light bg-info">
<Link className="navbar-brand" to='/'style={{fontStyle: "italic"}} ><strong>Futebol</strong></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    <form className="form-inline">
    
    <Link to='/' className="btn btn-info"style={{color:'white', fontStyle: "italic"}}>Home</Link>
    
    <Link to='/jogadores' className="btn btn-info" style={{color:'white', fontStyle: "italic"}}>Jogadores</Link> 
  </form>
    </ul>
  </div>
</nav>

</div>

);


}



}

export default Topbar;