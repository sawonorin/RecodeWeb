import { appConstants } from "../_constants/app.constants";
import {initialState} from "../_store";

export function activity(state=initialState.activity, action) {
    const now = new Date().getTime();
    switch (action.type){
        case appConstants.ADD_LOG:
            return Object.assign({}, state, {title: action.title, lastSeen: now});
        default :
                return state;
    }
}


export default activity;
