import * as types from "./actionTypes";
import axios from "axios";

export const saveuser=(payload)=>(dispatch)=>{
    dispatch({type:types.SAVE_USER_REQUEST});
    return axios.post("https://floating-crag-24295.herokuapp.com/game",payload)
    .then((res)=>{
        return dispatch({
        type:types.SAVE_USER_SUCCESS,
        payload:res.data,
        })
    })
     .catch((err)=> dispatch({type:types.SAVE_USER_FAILURE}));
};

export const getAllUser=(payload)=>(dispatch)=>{
    dispatch({type:types.ALL_USER_REQUEST})
    return axios.get("https://floating-crag-24295.herokuapp.com/game")
    .then((res)=>{
         console.log(res.data,"hi")
        return dispatch({
            type:types.ALL_USER_SUCCESS,
            payload:res.data,
        });
    })
    .catch((err)=> dispatch({type:types.ALL_USER_FAILURE}))
};

export const getWord=(payload)=>(dispatch)=>{
    dispatch({type:types.GET_QUESTION_REQUEST});
    return axios.get("https://api.api-ninjas.com/v1/randomword")
    .then((res)=>{
        return dispatch({
            type:types.GET_QUESTION_SUCCESS,
            payload:res.data.word,
        });
    })
    .catch((err)=> dispatch({type:types.GET_QUESTION_FAILURE}))
};

export const ScoreUpdate=(payload)=>(dispatch)=>{
    dispatch({
        type:types.SCORE_SAVE_SUCCESS,
        payload,
    });
};

