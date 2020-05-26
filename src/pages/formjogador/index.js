import React from 'react';
import { connect } from 'react-redux';


import TopBar from '../topBar';
import { Field, reduxForm } from 'redux-form';
import {gravarJogador, detalhesJogador, cleanPlayer} from '../../redux/actions/jogadoresactions';



class FormJogador extends React.Component {


    componentDidMount() {
        if (this.props.match.params.id) {
            this.title = "Editar Jogador";
            this.props.dispatch(detalhesJogador(this.props.match.params.id));
        } else {
            this.props.dispatch(cleanPlayer());
        }
    }




submit(dados, gravarJogador){

    gravarJogador(gravarJogador(dados));


}

    render() {

        
        const {handleSubmit} = this.props;
        

        return (

            <div> 
            <TopBar />

            <div className='container'>

                
                <div className="row">
                    <div className="col-3">


                    </div>
                    <div className='col-9'>
                        <h1>Novo jogador</h1>

                        <form onSubmit={handleSubmit((fields) => this.submit(fields, gravarJogador))} >

                            <label>Nome</label>
                            <Field component="input" name="name" type="text" className="form-control" placeholder="Nome do Jogador"/>
                            <label>Nacionalidade</label>
                            <Field component="input" name="country" type="text" className="form-control" placeholder="Nacionalidade do Jogador"/>
                            <label>Nascimento</label>
                            <Field component="input" name="nascimento" type="text" className="form-control" placeholder="Nacionalidade do Jogador"/>
                            <label>Time Atual</label>
                            <Field component="input" name="team_name" type="text" className="form-control" placeholder="Nacionalidade do Jogador"/>
                            <label>Pais do clube</label>
                            <Field component="input" name="team_country" type="text" className="form-control" placeholder="Nacionalidade do Jogador"/>
                            <label>Biografia</label>
                            <Field component="textarea" name="bio" type="text" className="form-control" placeholder="Biografia do Jogador"/>

                            <button type="submit" className="btn btn-success" >Salvar Jogador</button>
                            
                            

                    </form>
                </div>


                    </div>

                </div>
                
            </div>

        );

    }



}


FormJogador = reduxForm({

    form: "jogador",
    enableReinitialize: true

})(FormJogador)


FormJogador = connect(state => ({

initialValues: state.jogador.jogador 
    
  }), { load: detalhesJogador })(FormJogador);
  


export default FormJogador;