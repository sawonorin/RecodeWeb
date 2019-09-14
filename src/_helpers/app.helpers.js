import moment from "moment/moment";
import { appConstants } from "../_constants";
import axios from "axios";
import { store } from '../_store';
import { history } from '../_helpers';

export const appHelpers = {
    formatDate: d => {
        if (!d)
            return '';
        return moment(d.split("T")[0]).format("MMM DD, YYYY");
    },
    formatDateSpecific: (d, format) => {
        return moment(d).format(format || "MMM DD, YYYY");
    },
    getActiveUser: function () {
        let __usr__ = localStorage.getItem(appConstants.APP_USER_KEY);
        return __usr__ ? JSON.parse(__usr__) : false;
    },
    getRequest: function (url) {
        const { user } = store.getState();
        let combinedHeader = { "Content-Type": "application/json", AppName: appConstants.APP_ID };
        if (user) {
            combinedHeader.Authorization = `Bearer ${user.access_token}`;
            combinedHeader.Location = user.Location;
        }
        let config = { headers: combinedHeader };
        return axios
            .get(url, config)
            .then(function (res) {
                return appHelpers.promiseResponse(res.data);
            })
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    // console.log(error.response.data);
                    // console.log(error.response.status);
                    // console.log(error.response.headers);
                    let msg = error.response.data;
                    if (error.response.status === 500) {
                        msg = "Oops, something went wrong";
                    } else if (error.response.status === 404) {
                        msg = "Resource not found";
                    } else if (error.response.status === 401) {
                        msg = appConstants.APP_USER_SESSION_EXPIRED_MESSAGE;
                        setTimeout(() => {
                            history.push('/login');
                        }, 3000)
                    }
                    return appHelpers.promiseResponse(msg, appConstants.ERROR_RESPONSE);
                    // return {statTs: appConstants.REQUEST_FAILURE, data: error.response.data};

                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    // console.log(error.request);
                    // return {status: appConstants.REQUEST_FAILURE, data: error.request};
                    const errorMessage = error.request.status === 0 ? appConstants.APP_INTERNET_CONNECTION_MESSAGE : error.request;

                    return appHelpers.promiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    // console.log('Error', error.message);
                    // return {status: appConstants.REQUEST_FAILURE, data: error.message};
                    return appHelpers.promiseResponse(error.message, appConstants.ERROR_RESPONSE);
                }
            });
    },
    postRequest: function (url, payload, addedHeader = null) {
        const { user } = store.getState();
        let combinedHeader = { "Content-Type": "application/json", AppName: appConstants.APP_ID };
        
        if (user) {
            combinedHeader.Authorization = `Bearer ${user.access_token}`;
            combinedHeader.Location = user.Location;
        }
        if(addedHeader) {
            combinedHeader = {...combinedHeader, ...addedHeader}
        }

        let config = { headers: combinedHeader };

        return axios.post(url, payload, config)
            .then(res => {
                return appHelpers.promiseResponse(res.data);
            }).catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    // console.log(error.response.data);
                    // console.log(error.response.status);
                    // console.log(error.response.headers);
                    let msg = error.response.data;
                    if (error.response.status === 500) {
                        msg = "Oops, something went wrong";
                    } else if (error.response.status === 404) {
                        msg = "Resource not found";
                    } else if (error.response.status === 401) {
                        msg = appConstants.APP_USER_SESSION_EXPIRED_MESSAGE;
                        setTimeout(() => {
                            history.push('/login');
                        }, 3000)
                    }
                    return appHelpers.promiseResponse(msg, appConstants.ERROR_RESPONSE);
                    // return {statTs: appConstants.REQUEST_FAILURE, data: error.response.data};

                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    // console.log(error.request);
                    // return {status: appConstants.REQUEST_FAILURE, data: error.request};
                    const errorMessage = error.request.status === 0 ? appConstants.APP_INTERNET_CONNECTION_MESSAGE : error.request;

                    return appHelpers.promiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    // console.log('Error', error.message);
                    // return {status: appConstants.REQUEST_FAILURE, data: error.message};
                    return appHelpers.promiseResponse(error.message, appConstants.ERROR_RESPONSE);
                }
            });
    },
    postFormDataRequest: function (url, formData, addedHeader = null) {
        const { user } = store.getState();
        let combinedHeader = { "Content-Type": "multipart/form-data", AppName: appConstants.APP_ID };
        
        if (user) {
            combinedHeader.Authorization = `Bearer ${user.access_token}`;
            combinedHeader.Location = user.Location;
        }
        if(addedHeader) {
            combinedHeader = {...combinedHeader, ...addedHeader}
        }

        let config = { headers: combinedHeader };

        return axios.post(url, formData, config)
            .then(res => {
                return appHelpers.promiseResponse(res.data);
            }).catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    // console.log(error.response.data);
                    // console.log(error.response.status);
                    // console.log(error.response.headers);
                    let msg = error.response.data;
                    if (error.response.status === 500) {
                        msg = "Oops, something went wrong";
                    } else if (error.response.status === 404) {
                        msg = "Resource not found";
                    } else if (error.response.status === 401) {
                        msg = appConstants.APP_USER_SESSION_EXPIRED_MESSAGE;
                        setTimeout(() => {
                            history.push('/login');
                        }, 3000)
                    }
                    return appHelpers.promiseResponse(msg, appConstants.ERROR_RESPONSE);
                    // return {statTs: appConstants.REQUEST_FAILURE, data: error.response.data};

                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    // console.log(error.request);
                    // return {status: appConstants.REQUEST_FAILURE, data: error.request};
                    const errorMessage = error.request.status === 0 ? appConstants.APP_INTERNET_CONNECTION_MESSAGE : error.request;

                    return appHelpers.promiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    // console.log('Error', error.message);
                    // return {status: appConstants.REQUEST_FAILURE, data: error.message};
                    return appHelpers.promiseResponse(error.message, appConstants.ERROR_RESPONSE);
                }
            });
    },
    formatPromiseResponse: function (res, resType) {
        let responseType = (resType === undefined) ? appConstants.SUCCESS_RESPONSE : resType;
        return { status: responseType, response: res };
    },
    promiseResponse: function (res, resType) {
        let responseType =
            resType === undefined ? appConstants.SUCCESS_RESPONSE : resType;
        return { status: responseType, response: res };
    },
    interpretErrorResponse(error) {
        let errorMessage = "";
        if (error.response === undefined) {
            errorMessage = "Please check your internet connectivity!";
        } else {
            errorMessage = error.response.data
                ? error.response.data
                : "Unable to handle request";
        }
        if (typeof errorMessage === "string") {
            return errorMessage;
        } else {
            return "Something went wrong!";
        }
    },
    numberWithCommas: x => {
        x = x.toFixed(2);
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    },
    numberWithCommasOnly: x => {
        if (x === 0) return "0";
        if (!x) return "";
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    },
    interpretRole: function (activeUser) {
        if (activeUser.userRole === appConstants.ROLES.ADMIN) {
            if (activeUser.AirlineCode === null) {
                return appConstants.ROLES.ADMIN;
            } else {
                return appConstants.ROLES.AIRLINE;
            }
        }
        else if (activeUser.userRole === appConstants.ROLES.VGG_SUPERADMIN) {
            return appConstants.ROLES.VGG_SUPERADMIN
        }
        else if (activeUser.userRole === appConstants.ROLES.VGG_ADMIN) {
            return appConstants.ROLES.VGG_ADMIN
        }
        else if (activeUser.userRole === appConstants.ROLES.VGG_USER) {
            return appConstants.ROLES.VGG_USER
        } else if (activeUser.userRole === appConstants.ROLES.SUPERVISOR) {
            return appConstants.ROLES.SUPERVISOR
        } else if (activeUser.userRole === appConstants.ROLES.CREDIT_CONTROL) {
            return appConstants.ROLES.CREDIT_CONTROL
        } else if (activeUser.userRole === appConstants.ROLES.ACCOUNTS) {
            return appConstants.ROLES.ACCOUNTS
        } else if (activeUser.userRole === appConstants.ROLES.AUDIT) {
            return appConstants.ROLES.AUDIT
        } else if (activeUser.userRole === appConstants.ROLES.EXECUTIVE_USER) {
            return appConstants.ROLES.EXECUTIVE_USER
        }
        else if (activeUser.userRole === appConstants.ROLES.STAFF) {
            if (activeUser.AirlineCode !== null) {
                return appConstants.ROLES.AIRLINE;
            } else if (activeUser.AirportCode !== null) {
                return appConstants.ROLES.AIRPORT_STAFF;
            } else {
                return appConstants.ROLES.STAFF;
            }
        } else {
            return activeUser.userRole;
        }
    },
    checkPageAuthorization: function (role, page) {
        switch (role) {
            case appConstants.ROLES.SUPER_ADMIN:
                return 1;
            case appConstants.ROLES.ADMIN:
                return appConstants.ROLES_PAGES.ADMIN.indexOf(page);
            case appConstants.ROLES.AIRLINE:
                return appConstants.ROLES_PAGES.AIRLINE.indexOf(page);
            case appConstants.ROLES.STAFF:
                return appConstants.ROLES_PAGES.STAFF.indexOf(page);
            case appConstants.ROLES.AIRPORT_STAFF:
                return appConstants.ROLES_PAGES.AIRPORT_STAFF.indexOf(page);
            case appConstants.ROLES.AIRPORT_MANAGER:
                return appConstants.ROLES_PAGES.AIRPORT_MANAGER.indexOf(page);
            case appConstants.ROLES.VGG_SUPERADMIN:
                return appConstants.ROLES_PAGES.VGG_SUPERADMIN.indexOf(page);
            case appConstants.ROLES.SUPERVISOR:
                return appConstants.ROLES_PAGES.SUPERVISOR.indexOf(page);
            case appConstants.ROLES.CREDIT_CONTROL:
                return appConstants.ROLES_PAGES.CREDIT_CONTROL.indexOf(page);
            case appConstants.ROLES.ACCOUNTS:
                return appConstants.ROLES_PAGES.ACCOUNTS.indexOf(page);
            case appConstants.ROLES.AUDIT:
                return appConstants.ROLES_PAGES.AUDIT.indexOf(page);
            case appConstants.ROLES.EXECUTIVE_USER:
                return appConstants.ROLES_PAGES.EXECUTIVE_USER.indexOf(page);
            case appConstants.ROLES.VGG_ADMIN:
                return 1;
            case appConstants.ROLES.VGG_USER:
                return appConstants.ROLES_PAGES.VGG_USER.indexOf(page);
            default:
                return -1;
        }
    },
    isAuthorised: function () {
        const { user } = store.getState();
        const { AppRole } = user;
        const queryString = window.location.href.split('/');
        const page_url = queryString.slice(-1)[0];
        if (AppRole) {
            return (this.checkPageAuthorization(AppRole, page_url) > -1)
        } else {
            return false;
        }
    },
    routeExist: function () {
        const queryString = window.location.href.split('/');
        const page_url = queryString.slice(-1)[0];
        return appConstants.ALL_PAGES.indexOf(page_url);
    },
    interpretEntityTypeId: id => {
        let entity;
        switch (id) {
            case 1:
                entity = 'Billable Passenger Settings'; break;
            case 2:
                entity = 'Create Passenger'; break;
            case 3:
                entity = 'Create Passengers'; break;
            default:
                entity = 'Unknown';
        }
        return entity;
    },
    removeCharacters: (str) => {
        let invalidCharacter = new RegExp('=N=');
        if (str.match(invalidCharacter)) {
            return str.replace(invalidCharacter, "\u20A6")
        }
        return str
    },
    downloadFile: function (fileUrl, fileName) {
        // get file extension
        let fileExtension = fileUrl.split(".").pop();

        let xhr = new XMLHttpRequest();
        xhr.open("GET", fileUrl);
        xhr.responseType = "blob";

        let that = this;
        xhr.onload = function () {
            that.saveFile(this.response, fileExtension, fileName)
        };
        xhr.send();
    },
    saveFile: (blob, fileExtension, fileName) => {
        let anchor = document.createElement("a");
        document.body.appendChild(anchor);
        anchor.style = 'display: none';

        let url = window.URL.createObjectURL(blob);
        anchor.href = url;
        anchor.download = `${fileName}.${fileExtension}`;
        anchor.click();
        window.URL.revokeObjectURL(url);
    },
    generateRandomCharacters: () => {
        let chars = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
        return chars.substr(Math.floor(Math.random() * 26), 1);
    },
    getRandomNumber: (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    },
    // TODO: Use this for attaching access token to all requests
    setSession: access_token => {
        if ( access_token )
        {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
        }
        else
        {
            delete axios.defaults.headers.common['Authorization'];
        }
    }
};
