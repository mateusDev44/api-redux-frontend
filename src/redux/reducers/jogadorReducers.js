import * as ACTION_TYPES_JOGADORES from '../actions/actionstypes/jogadoresactiontypes';

const estadoInicial = {

dados: [],
error: null,
loading: false


}


export default (state = estadoInicial, action) => {
    switch (action.type) {
        case ACTION_TYPES_JOGADORES.LISTA_JOGADORES_BEGIN:
            return {
                ...state,
                loading: true,
                error: false
            };
        case ACTION_TYPES_JOGADORES.LISTA_JOGADORES_SUCESS:
            
        console.log('action: ', action)
        return {
                ...state,
                loading: false,
                dados: action.payload.jogadores
            };
        case ACTION_TYPES_JOGADORES.FALHA_BUSCA:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                dados: []
            };
        case ACTION_TYPES_JOGADORES.SUCESSO_BUSCAR_JOGADOR:
            return {
                ...state,
                loading: false,
                jogador: action.payload.jogador
            }
        case ACTION_TYPES_JOGADORES.FALHA_BUSCAR_JOGADOR:
            return {
                ...state,
                loading: false,
                jogador: {},
                error: action.payload.error
            }
        default:
            return state;
    }
}


