import { combineReducers } from 'redux';

import { alert } from './alert.reducer';
import { activity } from './activity.reducer';
// import { airlines } from './airline.reducer';
import { requesting } from './requesting.reducer';
import { user } from './user.reducer';
import {alertConstants} from "../_constants"

const appReducers = combineReducers({
    user,
    // users,
    alert,
    // modal,
    activity,
    // api,
    // airlines,
    requesting,
    // airlinesPayments,
    // azmanPayment,
    // dashboard,
    // airports,
    // entityTypes
});

const rootReducer = (state, action) => {
    if (action.type === alertConstants.RESET_APP) {
        state = undefined;
    }
    return appReducers(state, action);
};
export default rootReducer;
