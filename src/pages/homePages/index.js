import React from 'react';
import TopBar from '../topBar';
import { Link } from 'react-router-dom';


class Homepages extends React.Component{

render(){

return(

<div>
<TopBar/>

<h1>Home Page</h1>

<br></br>
<br></br>
<br></br>
<br></br>

<div className='container'>

<div className="jumbotron" style={{backgroundColor: 'black'}}>
  <h1 className="display-4"style={{color: 'white'}}>Player Registration</h1>
  <p className="lead"style={{color: 'white'}}>Em Player Registration, você poderar ver informações de varios jogadores de futebol do mundo inteiro, e também pode cadastrar os seus proprios jogadores.</p>
  <hr className="my-4"/>
  <p style={{color: 'white'}}>Clique em Ver lista para visualizar os jogadores ja cadastrados.</p>
  <Link to='/jogadores' className="btn btn-info" style={{color:'white'}}>Ver lista</Link>
</div>

</div>

</div>

);



}



}

export default Homepages;