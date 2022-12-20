import * as types from "./actionTypes";

const initalState={
    isLoading:false,
    isError:false,
    score:0,
    level:"",
    words:"",
    users:[],
};

export const reducer=(state=initalState,{type,payload})=>{
    switch(type){
        case types.ALL_USER_REQUEST:
            return {
                ...state,
                isLoading:true,
                isError:false,
            };

            case types.ALL_USER_SUCCESS:
                return {
                    ...state,
                    users:payload,
                    isLoading:false,
                    isError:false,
                };
            
            case types.ALL_USER_FAILURE:
                return {
                    ...state,
                    isLoading:false,
                    isError:true,
                };

            case types.GET_QUESTION_REQUEST:
                return {
                    ...state,
                    isLoading:true,
                    isError:false,
                };

            case types.GET_QUESTION_SUCCESS:
                return {
                    ...state,
                    words:payload,
                    isLoading:false,
                    isError:false,
                };

            case types.GET_QUESTION_FAILURE:
                return {
                    ...state,
                    isLoading:false,
                    isError:true,
                };

            case types.SCORE_SAVE_SUCCESS:
                return {
                    ...state,
                    score:payload,
                    isLoading:false,
                    isError:false,
                };

            default:
                return state;
    }
}