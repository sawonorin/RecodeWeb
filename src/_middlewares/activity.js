import {alertConstants, appConstants} from "../_constants";
import {addLog} from "../_actions/activity";
 import {alertActions} from "../_actions";
 // import {appHelpers} from "../_helpers";
// import {authActions} from "../_actions";

const activityMiddleware = ({ getState, dispatch }) => (next) => (action) => {
    if((action.type !== appConstants.ADD_LOG) && (action.type !== alertConstants.CLEAR) && (action.type !== alertConstants.ERROR) && (action.type !== alertConstants.SUCCESS) ){
        let lastActivity = getState().activity;
        if(lastActivity){
            let now = new Date().getTime();
            let lastSeen = getState().activity.lastSeen;
            let seconds = (now - lastSeen) / 1000;
            if(seconds > appConstants.INACTIVITY_EXPIRATION_LIMIT){
                dispatch(alertActions.error('Your session has expired!'));
                /*Open the sign in page*/
                // appHelpers.setSessionErrorMessage(appConstants.AVI_USER_SESSION_EXPIRED_MESSAGE);
                window.location.assign('/login');
            }else{
                next(action);
            }
        }else{
            next(action);
        }
        dispatch(addLog(action.type));
    }else{
        next(action);

    }
};

export default activityMiddleware;
