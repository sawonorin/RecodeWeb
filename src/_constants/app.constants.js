
export const appConstants = {
    APP_USER_KEY: 'psc-user',
    APP_USER_SESSION_EXPIRED: 'avi-user-session-expired',
    APP_USER_SESSION_ERROR: 'avi-user-session-error',
    APP_USER_SESSION_UNAUTHORISED_ERROR_MESSAGE: 'You do not have the permission to access page!',
    APP_USER_SESSION_UNAUTHORISED_ERROR_MESSAGE_2: 'You have not been provision to access this system',
    APP_USER_SESSION_EXPIRED_MESSAGE: 'Your session has expired!',
    APP_USER_SESSION_AUTHENTICATION_REQUIRED_MESSAGE: 'You need to signin to access page!',
    APP_INTERNET_CONNECTION_MESSAGE: 'Please Check your internet connectivity',
    APP_ID: 'PSC Web',
    // APP_ID : 'Avicollect Web',
    INACTIVITY_EXPIRATION_LIMIT: 3600,

    //API URLS
    // PAS_URL: (process.env.NODE_ENV === 'development')? 'https://passerelle.test.vggdev.com' : window.env.passerelleUrl,
    PAS_URL: (process.env.NODE_ENV === 'development') ? 'https://passerelle.test.vggdev.com' : window.env.passerelleUrl,
    // NCAA_ORG_ID: (process.env.NODE_ENV === 'development') ? 2003 : window.env.ncaaOrgId,
    FAAN_ORG_ID: (process.env.NODE_ENV === 'development') ? 1003 : window.env.faanOrgId,
    FORGOT_PASSWORD_URL: (process.env.NODE_ENV === 'development') ? 'https://usermanager.test.vggdev.com/Account/ForgotPassword' : window.env.forgotPasswordUrl,
    MAKER_CHECKER_APP_ID: (process.env.NODE_ENV === 'development') ? 7 : window.env.makerCheckerAppId,

    //Action Types
    ADD_LOG: 'add_log',
    OPEN_MODAL: 'open_modal',
    CLOSE_MODAL: 'close_modal',
    CLEAR_MODAL: 'clear_modal',
    //API Status
    API_REQUEST_START: 'API_REQUEST_START',
    API_REQUEST_FULL_PAGE_START: 'API_REQUEST_FULL_PAGE_START',
    API_REQUEST_FINISH: 'API_REQUEST_FINISH',
    REQUEST_SUCCESS: 'REQUEST_SUCCESS',
    REQUEST_FAILURE: 'REQUEST_FAILURE',
    GET_REQUEST: 'get',
    POST_REQUEST: 'post',

    NOTIFY_SUCCESS: 'success',
    NOTIFY_ERROR: 'error',
    NOTIFY_INFO: 'info',
    NOTIFY_INVALID: 'in',
    NOTIFY_WARNING: 'warning',
    NOTIFY_DANGER: 'danger',

    SUCCESS_RESPONSE: 1,
    ERROR_RESPONSE: 2,

    /*user Roles*/
    ROLES: {
        SUPER_ADMIN: "Super Admin",
        STAFF: "Staff",
        ADMIN: "Admin",
        AIRLINE: "Airline",
        AIRPORT_MANAGER: "Airport Manager",
        AIRPORT_STAFF: "Airport Staff",
        VGG_SUPERADMIN: "VGG SuperAdmin",
        VGG_ADMIN: "VGG Admin",
        VGG_USER: "VGG User",
        SUPERVISOR: "Supervisor",
        CREDIT_CONTROL: "Credit Control",
        ACCOUNTS: "Accounts",
        AUDIT: "Audit",
        EXECUTIVE_USER: "Executive"
    },

    ALL_PAGES: ['pscSettings', 'emailSettings', 'settings', 'dashboard', 'audits', 'reconciliation', 'landing', 'reports-Landing', 'passenger-data', 'airline-payment', 'psc-settlement', 'psc-utilization', 'billable-passengers', 'wallet-report', 'dataEntry', 'PDM', 'billablePscSettings', 'statement-of-account'],
    ROLES_PAGES: {
        SUPER_ADMIN: ['dashboard','passenger-data', 'airline-payment', 'psc-settlement', 'psc-utilization', 'billable-passengers', 'audits',  'reports-Landing','wallet-report', 'emailSettings', 'settings', 'billablePscSettings' ],
        ADMIN: [ 'emailSettings', 'settings'],
        STAFF: ['wallet-report', 'audits', 'reconciliation', 'landing', 'passenger-data', 'airline-payment', 'psc-settlement', 'psc-utilization', 'billable-passengers',  'PDM', 'statement-of-account'],
        AIRLINE: [ 'statement-of-account', 'wallet-report', 'landing', 'passenger-data', 'airline-payment', 'psc-settlement', 'psc-utilization', 'billable-passengers'],
        AIRPORT_MANAGER: ['dashboard', 'transit-passenger-report', 'settings', 'emailSettings', 'wallet-report', 'landing', 'passenger-data', 'airline-payment', 'psc-settlement', 'psc-utilization', 'reconciliation', 'billable-passengers', 'PDM', 'statement-of-account'],
        AIRPORT_STAFF: ['wallet-report', 'audits', 'reconciliation', 'landing', 'passenger-data', 'airline-payment', 'psc-settlement', 'psc-utilization', 'billable-passengers',  'PDM', 'statement-of-account'],
        VGG_ADMIN: ['*'],
        VGG_SUPERADMIN: ['transit-passenger-report', 'wallet-report', 'psc-utilization', 'billable-passengers', 'reports-landing'],
        VGG_USER: [ 'dashboard','passenger-data', 'airline-payment', 'psc-settlement', 'audits', 'wallet-report', 'psc-utilization', 'billable-passengers', 'reports-landing',  'statement-of-account'],
        SUPERVISOR: ['settings', 'passenger-data', 'airline-payment', 'psc-settlement'],
        CREDIT_CONTROL: ['airline-payment', 'psc-settlement', 'statement-of-account'],
        ACCOUNTS: ['airline-payment'],
        AUDIT: [ 'psc-settlement', 'statement-of-account', 'audits'],
        EXECUTIVE_USER: ['dashboard']
    },
    PAGES_INDEX: [
        { name: 'timeline', index: 0 }, { name: 'search', index: 30 }, { name: 'manifest', index: 30 },
        { name: 'iata', index: 7 }, { name: 'invoice', index: 8 }, { name: 'tsc', index: 9 }, { name: 'ftp-credentials', index: 10 },
        { name: 'reports', index: 11 }, { name: 'proforma', index: 12 }, { name: 'payment-reconciliation', index: 13 },
        { name: 'unmatched-payments', index: 13 }, { name: 'unmatched-domestic-payment', index: 13 }, { name: 'pdm-report', index: 50 },
        { name: 'workflow', index: 77 }, { name: 'iata-validation', index: 107 }, { name: 'pdm-data-entry', index: 50 },
        { name: 'billed-per-airport', index: 20 },
    ],
    //actions
    ALL_USERS_SUCCESS: 'GET_ALL_USERS_SUCCESS',
    USERS_SUCCESS: 'GET_USERS_SUCCESS',
    AIRLINES_SUCCESS: 'GET_AIRLINES_SUCCESS',
    AIRPORTS_SUCCESS: 'GET_AIRPORTS_SUCCESS',
    AIRLINE_PAYMENT_SUCCESS: 'GET_AIRLINE_PAYMENT_SUCCESS',
    AZMAN_PAYMENT_SUCCESS: 'GET_AZMAN_PAYMENT_SUCCESS',
    SIGN_IN_SUCCESS: 'POST_SIGN_IN_SUCCESS',
    SIGN_OUT: 'SIGN_OUT',
    ADD_DASHBOARD: 'ADD_DASHBOARD',

    /*Colors*/
    PRIMARY_COLOR: '#4caf50',
    INFO_COLOR: '#00acc1',
    WARNING_COLOR: '#fb8c00',
    MUTED_COLOR: '#3b3b3b',
    DANGER_COLOR: '#f44336',

    AIRLINE_ROUTE_PENDING: 0,
    AIRLINE_ROUTE_APPROVE: 1,
    AIRLINE_ROUTE_REJECT: 2,

    PDF_DOWNLOAD_TYPE: 1,
    EXCEL_DOWNLOAD_TYPE: 0,

    APP_ENTITIES: {
        CREATE_PASSENGERS : "CreatePassengers",
        BILLABLE_PASSENGER_SETTINGS: "BillablePassengerSetting"
    },
    MAKER_CHECKER_STATUS: {
        PENDING: 0,
        APPROVED: 1,
        REJECTED: 2
    },
    GET_ENTITIES: 'GET_ENTITIES',
};

