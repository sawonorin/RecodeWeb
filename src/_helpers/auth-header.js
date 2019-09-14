import { appConstants } from '../_constants';

export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('avi-user'));

    if (user && user.access_token) {
        return { 'Content-Type': 'application/json', 'AppName' : appConstants.APP_ID, 'Authorization': `Bearer ${user.access_token}` };
    } else {
        return null;
    }
}

export function authFileHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('avi-user'));
    if (user && user.access_token) {
        return { 'Content-Type': 'multipart/form-data', 'AppName' : appConstants.APP_ID, 'Authorization': `Bearer ${user.access_token}` };
    } else {
        return null;
    }
}
