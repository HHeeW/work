const redux = require('redux');
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
const combineReducers = redux.combineReducers; //redux가 여러개 있을 경우 사용
//acrions
const ADD_SUBSCRIBER = 'ADD_SUBSCRIBER';
const ADD_VIEWCOUNT = 'ADD_VIEWCOUNT';
const addSubscriber = () =>{
    return {
        type: 'ADD_SUBSCRIBER'
    }
};
const addvViewCount = () =>{
    return {
        type: 'ADD_VIEWCOUNT'
    }
};
//reducers
const initialState = {
    subscribers : 500
};
const viewState = {
    viewCount: 0
}
const reducer = (state=initialState, action) =>{
    switch(action.type){
        case ADD_SUBSCRIBER:
            return{
                ...state,
                subscribers: state.subscribers +1
            };
        default: return state;
    }
};
const viewReducer = (state=viewState, action) =>{
    switch(action.type){
        case ADD_VIEWCOUNT:
            return{
                ...state,
                viewCount: state.viewCount +1
            };
        default: return state;
    }
};
const rootReducer = combineReducers({
    view: viewReducer,
    subscriber : reducer
})
//store
const store = redux.createStore(rootReducer.applyMiddleware(logger))
//subscribe - view - dispatch
store.subscribe(()=>{
    console.log('subscribe ==>>', store.getState())
});
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addvViewCount());
store.dispatch(addvViewCount());
store.dispatch(addvViewCount());
store.dispatch(addvViewCount());

