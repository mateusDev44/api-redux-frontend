import React from 'react';
import { connect } from 'react-redux';
import TopBar from '../topBar';
import { detalhesJogador } from '../../redux/actions/jogadoresactions';

function mapStateToProps(store) {
    return {
        error: store.jogador.error,
        jogador: store.jogador.jogador,
        loading: store.jogador.loading,
        store
    }
}



class Infojogador extends React.Component{

    async componentDidMount() {
        await this.props.dispatch(detalhesJogador(this.props.match.params.id));
        console.log(this.props)
    }




render(){

console.log(this.props);

    const { jogador, loading, error } = this.props;
 
    if (loading || !jogador) return <div>Carregando...</div>;

    if (error) {
        if (error.request.status === 404) {
            return <div>Jogador não encontrado...</div>
        }
        return <div>Erro na requisição</div>
    }
    console.log('jogador: ', jogador)
   

 
 return (

    <div>

        <TopBar />
        
        <h1>Dados do jogador</h1>

        <div className='container'  style={{marginLeft: '15px'}} > 
        <div className="row">
            <div className="col-3">


            </div>
            <div className='col-9'>
            
            
    <ul class="list-group">
    
  <div>Nome</div>
  <li class="list-group-item">{jogador.name}</li>
  <div>Nacionalidade</div>
  <li class="list-group-item">{jogador.country}</li>
  <div>Clube atual</div>
  <li class="list-group-item">{jogador.team_name}</li>
  <div>Pais do clube</div>
  <li class="list-group-item">{jogador.team_country}</li>
  <div>Nascimento</div>
  <li class="list-group-item">{jogador.nascimento}</li>
  <div>Biografia</div>
  <li class="list-group-item">{jogador.bio}</li>
</ul>
                

            </div>



        </div>
        
        
        </div>

    </div>


 );
 

}

   
}


export default connect(mapStateToProps)(Infojogador);