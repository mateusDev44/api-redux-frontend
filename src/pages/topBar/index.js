import React from 'react';
import { Link } from 'react-router-dom';


class Topbar extends React.Component{

render(){
return(


<div> 



<nav className="navbar navbar-dark bg-primary">
  <Link className="navbar-brand" to='/'>Futebol</Link>

  <nav className="navbar navbar-dark bg-primary">
  <form className="form-inline">
    
  <Link to='/' className="btn btn-info"style={{color:'white'}}>Home</Link>
  
  <Link to='/jogadores' className="btn btn-info" style={{color:'white'}}>jogadores</Link> 
</form>
</nav>
</nav>

</div>

);


}



}

export default Topbar;