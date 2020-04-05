import {ApiAiClient} from 'api-ai-javascript';
import { createStore, applyMiddleware } from 'redux';


const accessToken = '8aa3a0faf357414e8c98119cac9b2e98';
const client = new ApiAiClient({accessToken})

const ON_MESSAGE = 'ON_MESSSAGE';

export const sendMessage = (text, sender='user') => ({
    type: ON_MESSAGE,
    payload: { text, sender}
});

const messageMiddelware = () => next => action => {
    next(action);

    if(action.type === ON_MESSAGE) {
        const {text} = action.payload;

        client.textRequest(text)
        .then(onSuccess)

        function onSuccess(response){
            const{ queryResult: {fulfillmentText }} = response;
            next(sendMessage(fulfillmentText, 'bot'));

        }
    }
};

const initState = [{text: 'hey'}]

const messageReducer = (state= initState, action) => {
    switch(action.type) {

        case ON_MESSAGE:
            return [...state, action.payload]

        default: 
            return state;
    }
};

export const store = createStore(messageReducer, applyMiddleware(messageMiddelware));