import produceData from '../mockData/produce.json';

const POPULATE = 'produce/POPULATE';

//action function
export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData
    }
}

const produceReducer = (state = {}, action) => {
    switch (action.type) {
        case POPULATE:
            const obj = {};
            action.produce.forEach(produce => {
                obj[produce.id] = produce;
            })
            return obj
        default:
            return state;
    }
}

export default produceReducer;
