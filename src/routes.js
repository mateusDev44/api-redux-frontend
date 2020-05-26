import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Homepages from './pages/homePages';
import Listajogadores from './pages/listajogadores';
import Infojogador from './pages/infojogador';
import FormJogador from './pages/formjogador';

class Routes extends React.Component{

    render(){

return(

<BrowserRouter>

<Switch>

<Route  path='/' exact component={Homepages}  />
<Route path='/jogadores' exact component={Listajogadores}/>
<Route path= '/jogadores/novo' exact component={FormJogador}></Route>
<Route exact path="/jogadores/editar/:id" component={FormJogador}/>
<Route path='/jogadores/:id' exact component={Infojogador}/>
</Switch>


</BrowserRouter>

);


    }


}


export default Routes;