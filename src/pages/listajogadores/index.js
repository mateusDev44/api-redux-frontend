import React from 'react';
import TopBar from '../topBar';
import { connect } from 'react-redux';
import { listarjogadores, excluirJogador } from '../../redux/actions/jogadoresactions';
import './listajogadores.css';
import { Link } from 'react-router-dom';


class Listajogadores extends React.Component {


    componentDidMount() {

        this.props.dispatch(listarjogadores())


    }


    deletePlayer(id) {
        this.props.dispatch(excluirJogador(id));
    }



    render() {

            console.log(this.props)
      

        const { error, loading, jogadores } = this.props;

        

        if(loading){

    return <div>Carregando</div>


        }


        if(error){

            return <div>Erro na requisição</div>


        }


        return (

           
            <div> 
                
            
            <TopBar />
            
                
                <div className= 'container' >
                <div className="row">
                    <div className="col-3"> 
                    
                    </div>
                    <div className='col-9'>

                        <h1>Lista de Jogadores</h1>
                            
                        <div>

                        <Link to="/jogadores/novo" className="btn btn-dark">Criar um novo jogador</Link>


                        </div>
                            
                            Quantidade de jogadores: {jogadores.length}


                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Nacionalidade</th>
                                    <th scope="col">Clube</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    jogadores.map( (jogador) => (

                                          <tr key={jogador.id}>
                                          <td>{jogador.name}</td>
                                          <td>{jogador.country}</td> 
                                          <td>{jogador.team_name} - {jogador.team_country}</td>
                                           <td>
                                               <Link className="btn btn-primary" to={{pathname: '/jogadores/' + jogador.id}}>Detalhes</Link>
         
                                           <Link className="btn btn-success" to={{ pathname: `/jogadores/editar/${jogador.id}` }} >Editar</Link>
                                           <Link className="btn btn-danger"  onClick={ () => this.deletePlayer(jogador.id)} >Excluir</Link>
                                            </td> 
                                        </tr>

                                    ))

                                }
                            </tbody>
                        </table>


                    </div>



                </div>

            
            
            </div>
            
            
        </div>

        );



    }



}

function mapStateProps(store) {

    return {
        error: store.jogador.error,
        jogadores: store.jogador.dados,
        loading: store.jogador.loading,
        store


    }



}

export default connect(mapStateProps)(Listajogadores);