import { alertConstants, appConstants } from '../_constants';
import { commonService } from '../_services';
import { alertActions } from '../_actions';
// import userHomepage from '../_helpers/user-homepage';
import { appHelpers, history } from '../_helpers';
function getDashboardData(payload) {
    return dispatch => {
        dispatch(alertActions.startRequest());
        return commonService.getDashboardData(payload)
            .then(response => {
                if (response.status === appConstants.SUCCESS_RESPONSE) {
                    const { StartDate, EndDate } = payload;
                    const data = response.response;
                    dispatch(success({ StartDate, EndDate, data }));
                    dispatch(alertActions.stopRequest());
                    dispatch(alertActions.clear());
                } else {
                    dispatch(failure(response.response));
                    dispatch(alertActions.stopRequest());
                }
            },
                error => {
                    let errorMessage = (error.response.data) ? error.response.data : 'Unable to handle request';
                    dispatch(failure(errorMessage));
                    dispatch(alertActions.stopRequest());
                }
            );
    };
    function success(data) { return { type: appConstants.ADD_DASHBOARD, data } }
    function failure(message) { return { type: alertConstants.ERROR, message } }
}
function postSignOut() {
    return dispatch => {
        dispatch(success({}));
        function success(user) {
            return { type: appConstants.SIGN_OUT, user }
        }
    }
}
function postSignIn(payload) {
    return dispatch => {
        dispatch(alertActions.startRequest());
        return commonService.postSignIn(payload)
            .then(response => {
                if (response.status === appConstants.SUCCESS_RESPONSE) {
                    let user = response.response;
                    user.AppRole = appHelpers.interpretRole(user);
                    dispatch(success(user));
                    dispatch(alertActions.stopRequest());
                    dispatch(alertActions.clear());
                    //redirect user
                    if (user.AppRole === appConstants.ROLES.VGG_SUPERADMIN || user.AppRole === appConstants.ROLES.VGG_USER) {
                        history.push('/reports-landing');
                    } else {
                        history.push('/landing');
                    }
                    // userHomepage(response.response); //redirect user to homepage
                } else {
                    dispatch(failure(response.response));
                    dispatch(alertActions.stopRequest());
                }
            },
                error => {
                    let errorMessage = (error.response.data) ? error.response.data : 'Unable to handle request';
                    dispatch(failure(errorMessage));
                    dispatch(alertActions.stopRequest());
                }
            );
    };
    function success(user) { return { type: appConstants.SIGN_IN_SUCCESS, user } }
    function failure(message) { return { type: alertConstants.ERROR, message } }
}
function getAllAirlines() {
    return dispatch => {
        return commonService.getAllAirlines()
            .then(response => {
                if (response.status === appConstants.SUCCESS_RESPONSE) {
                    dispatch(success(response.response));
                    // dispatch(alertActions.stopRequest());
                } else if (response.status === appConstants.ERROR_RESPONSE) {
                    dispatch(failure(response));
                    // dispatch(alertActions.stopRequest());
                }
            },
                error => {
                    let errorMessage = (error.response.data) ? error.response.data : 'Unable to handle request';
                    dispatch(failure(errorMessage));
                }
            );
    };

    function success(airlines) { return { type: appConstants.AIRLINES_SUCCESS, airlines } }
    function failure(message) { return { type: alertConstants.ERROR, message } }
}
function getAllAirports() {
    return dispatch => {
        return commonService.getAllAirports()
            .then(response => {
                if (response.status === appConstants.SUCCESS_RESPONSE) {
                    dispatch(success(response.response));
                    // dispatch(alertActions.stopRequest());
                } else if (response.status === appConstants.ERROR_RESPONSE) {
                    dispatch(failure(response));
                    // dispatch(alertActions.stopRequest());
                }
            },
                error => {
                    let errorMessage = (error.response.data) ? error.response.data : 'Unable to handle request';
                    dispatch(failure(errorMessage));
                }
            );
    };

    function success(airports) { return { type: appConstants.AIRPORTS_SUCCESS, airports } }
    function failure(message) { return { type: alertConstants.ERROR, message } }
}

function getAzmanPayment() {
    return dispatch => {
        return commonService.getAzmanPayment()
            .then(response => {
                dispatch(success(response))
            },
                error => {
                    let errorMessage = (error.response.data) ? error.response.data : 'Unable to handle request';
                    dispatch(failure(errorMessage));
                })
        // .then(response => {
        //         if(response.status === appConstants.SUCCESS_RESPONSE) {
        //             dispatch(success(response.response));
        //             // dispatch(alertActions.stopRequest());
        //         }else if(response.status === appConstants.ERROR_RESPONSE){
        //             dispatch(failure(response));
        //             // dispatch(alertActions.stopRequest());
        //         }
        //     },
        //     error => {
        //         let errorMessage = (error.response.data) ? error.response.data : 'Unable to handle request';
        //         dispatch(failure(errorMessage));
        //     }
        // );
    };

    function success(azman) { return { type: appConstants.AZMAN_PAYMENT_SUCCESS, azman } }
    function failure(message) { return { type: alertConstants.ERROR, message } }

}

function getAllUsers() {
    return dispatch => {
        const payload = { OrgId: appConstants.FAAN_ORG_ID };
        return commonService.getUsersByOrganization(payload)
            .then(response => {
                if (response.status === appConstants.SUCCESS_RESPONSE) {
                    dispatch(success(response.response));
                } else if (response.status === appConstants.ERROR_RESPONSE) {
                    dispatch(failure(response));
                }
            },
                error => {
                    let errorMessage = (error.response.data) ? error.response.data : 'Unable to handle request';
                    dispatch(failure(errorMessage));
                }
            );
    };

    function success(users) { return { type: appConstants.ALL_USERS_SUCCESS, users } }
    function failure(message) { return { type: alertConstants.ERROR, message } }

}

function getAirlinePayments() {
    return dispatch => {
        return commonService.getAirlinePayment()
            .then(response => {
                dispatch(success(response))
            },
                error => {
                    let errorMessage = (error.response.data) ? error.response.data : 'Unable to handle request';
                    dispatch(failure(errorMessage));
                })
    };

    function success(airlines) { return { type: appConstants.AIRLINE_PAYMENT_SUCCESS, airlines } }
    function failure(message) { return { type: alertConstants.ERROR, message } }

}

function getEntityTypes() {
    return dispatch => {
        return commonService.searchAppEntityTypes(appConstants.MAKER_CHECKER_APP_ID)
            .then(
                response => {
                    if(response.status === appConstants.SUCCESS_RESPONSE) {
                        dispatch(success(response.response.Results));
                    }
                    else if(response.status === appConstants.ERROR_RESPONSE){
                        dispatch(failure(response.response));
                    }
                },
                error => {
                    let errorMessage = appHelpers.interpretErrorResponse(error);
                    dispatch(failure(errorMessage));
                }
            );
    };

    function success(entities) { return { type: appConstants.GET_ENTITIES, entities } }
    function failure(message) { return { type: alertConstants.ERROR, message } }
}

export const commonActions = {
    getAllUsers,
    getAllAirports,
    getAllAirlines,
    postSignIn,
    postSignOut,
    getDashboardData,
    getAirlinePayments,
    getAzmanPayment,
    getEntityTypes
};
