import * as ACTION_TYPES_JOGADORES from'./actionstypes/jogadoresactiontypes';
import api from '../../dbConnection/api';


export const iniciarBusca = () => {
    return {
        type: ACTION_TYPES_JOGADORES.LISTA_JOGADORES_BEGIN
    }
}

export const sucessoBusca = (jogadores) => {
    return {
        type: ACTION_TYPES_JOGADORES.SUCESSO_BUSCA,
        payload: { jogadores }
    }
}

export const falhaBusca = (error) => {
    return {
        type: ACTION_TYPES_JOGADORES.FALHA_BUSCA,
        payload: { error }
    }
}

export const sucessoBuscaJogador = (jogador) => {
    return {
        type: ACTION_TYPES_JOGADORES.SUCESSO_BUSCAR_JOGADOR,
        payload: { jogador }
    }
}

export const falhaBuscaJogador = (error) => {
    return {
        type: ACTION_TYPES_JOGADORES.FALHA_BUSCAR_JOGADOR,
        payload: { error }
    }
}



export const listarjogadoresBegin = () => {

return{

type: ACTION_TYPES_JOGADORES.LISTA_JOGADORES_BEGIN

}


}


export const listarjogadoresSuccess= (jogadores) => {

return{

type: ACTION_TYPES_JOGADORES.LISTA_JOGADORES_SUCESS,
payload: {jogadores}

}

}

export const listarjogadoresFailure = (error) => {

    return {

        type: ACTION_TYPES_JOGADORES.LISTA_JOGADORES_FAILURE,
        payload:{error}

    }



}


export function listarjogadores(){

return dispatch =>{

dispatch (listarjogadoresBegin())

api.get('/players')
        .then(response => {
            console.log(response);

dispatch(listarjogadoresSuccess(response.data))
        })

        .catch(error => {

                dispatch(listarjogadoresFailure(error))

        })

}


}


export function detalhesJogador(id) {
    return (dispatch) => {
        dispatch(iniciarBusca());
          api.get(`/players/${id}`).then(response => {
              console.log(response)
            dispatch(sucessoBuscaJogador(response.data))
        }).catch(error => {
            dispatch(falhaBuscaJogador(error))
        })
    }
}



export function gravarJogador(dados){

console.log(dados);


api.post('/players', dados)
.then(response => {

    console.log(response)

})

    .catch(error =>{

console.log(error);

    })


}


export function cleanPlayer() {
    return dispatch => {
        dispatch(sucessoBuscaJogador({}));
    }
}
