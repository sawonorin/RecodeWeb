import { appConstants } from '../_constants';
import { appHelpers } from '../_helpers';

export const authService = {
    login,
    logout
};

function login(username, password) {
    let payload = JSON.stringify({ UserName: username, Password: password });
    return appHelpers.postRequest(appConstants.PAS_URL + '/api/Account/Login', payload)
        .then(res => {
            let user = res.data;
            // login successful if there's a jwt token in the response
            if (user && user.access_token) {
                user.AviRole = appHelpers.interpretRole(user);
                // store user details and token in local storage to keep user logged in between page refreshes
                localStorage.setItem(appConstants.AVI_USER_KEY, JSON.stringify(user));
            }
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    appHelpers.destroySession();
}
