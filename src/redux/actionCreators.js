
import getTemp from '../API/getTemp'


export function fetchLoading(){
    console.log("dSSĐSS");
    return {
        type:'FETCH_LOADING'
    };
}

export function  fetchSuccess (cityName,temp){
    return {
        type:'FETCH_SUCCESS',
        cityName:cityName,
        temp:temp
    }
}

export function fetchError(){
    return {
        type:'FETCH_ERROR'
    }
}
export  function fetchGetTemp (cityName){

    return dispatch => {
        dispatch(fetchLoading());
        getTemp(cityName)
        .then(temp=> dispatch(fetchSuccess(cityName, temp)))
        .catch(err => dispatch(fetchError()))
    }

}

