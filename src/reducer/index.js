const responsive = {
    data: {
        isMobile: false
    }
}

const reducer = (state = responsive, action) => {
    // 不能直接更改state，否则react会认为state没有改变导致视图不能更新
    let newState = Object.assign({}, state);  
    switch (action.type) {
        case 'responsive':
            {
                const cW = action.width;
                newState.data.isMobile = (cW <= 992);
                return newState;
            }
        default:
            return state;
    }
}
export default reducer