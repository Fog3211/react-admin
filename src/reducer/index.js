import {
    combineReducers
} from 'redux';

const responsive = {
    data: {
        isMobile: false
    }
}
const auth = {
    data: {
        auth: 'guest'
    }
}
const responsiveReducer = (state = responsive, action) => {
    // 不能直接更改state，否则react会认为state没有改变导致视图不能更新
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'responsive':
            {
                const cW = action.width;
                newState.data.isMobile = (cW <= 768);
                return newState;
            }
        default:
            return state;
    }
}
const authReducer = (state = auth, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'auth':
            {
                const auth = action.auth;
                newState.data.auth = auth;
                return newState;
            }
        default:
            return state;
    }
}
const allReducers = {
    responsive: responsiveReducer,
    auth: authReducer
}
const rootReducer = combineReducers(allReducers);
export default rootReducer;