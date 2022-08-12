export const initialState = {
    currentValue : "0",
    operator: null,
    previousValue: null
};

export const handleNumber = (value, state) => {
    if(state.currentValue === "0") {
        return { currentValue: `${value}` }
    }
    return {
        currentValue : `${state.currentValue}${value}`
    }
}

export const handleEqual = (state) => {
    const { currentValue, operator, previousValue } = state;

    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);
    const resetState = {
        operator : null,
        previousValue: null
    }

    if(operator === '/') {
        return {
            currentValue: previous / current,
            ...resetState
        }
    }

    return state;
}

const calculator = (type, value, state) => {
    switch(type) {
        case "number" :
          return handleNumber(value, state);

        case "operator": 
           return {
              operator : value ,
              previousValue : state.currentValue,
              currentValue: '0'
           }
        case "equal":
          return handleEqual(state);

        case 'clear':
          return initialState;

        case 'posneg':
            console.log('posneg')
            return {
                currentValue: `${parseFloat(state.currentValue) * -1}`
            };
        case 'percentage':
            console.log('percentage');
            return {
                currentValue: `${parseFloat(state.currentValue) * 0.01}`
            };
        default:
            return false;    
    }
}

export default calculator;