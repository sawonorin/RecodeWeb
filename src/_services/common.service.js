import { appConstants } from '../_constants';
import { appHelpers, authHeader } from '../_helpers';
import { store } from '../_store';


const AirportLocation = {}

export const commonService = {
    getLatestToken,
    getFlightPassengers,
    getAllAirlines,
    getAllAirports,
    getAirlinesFlightNumbers,
    getFlights,
    downloadFlights,
    downloadFlightPassengers,
    postSignIn,
    getUsersByOrganization,
    getAllThreshold,
    getAirlinesThreshold,
    approvePendingThreshold,
    editPendingThreshold,
    setThreshold,
    getCurrentPsc,
    getAllPsc,
    getAllUnprocessedPendingPsc,
    savePsc,
    editPsc,
    approvePsc,
    getNotificationType,
    searchNotificationEmail,
    editNotification,
    getNotificationEmail,
    addEmailNotification,
    getDashboardData,
    getAirlinePayment,
    getSettlements,
    downloadSettlements,
    fetchDashboardSummaryCard,
    fetchTokenUtilizationByAirline,
    searchTokenActivity,
    fetchTokenUtilizationByAirport,
    getMyReconciliation,
    getOtherReconciliation,
    processReconciliation,
    updateReconciliation,
    addReconciliation,
    searchTokenUtilized,
    searchBillableVsTotalPassengers,
    downloadBillableVsTotalPassengers,
    downloadTokenUtilization,
    fetchLatestTokensPurchase,
    getAllAirlinePayment,
    searchAirlinePayment,
    downloadAirlinePayment,
    getAuditModules,
    searchAudits,
    getAuditActions,
    searchTimeline,
    getWalletMovementData,
    getAirportLocation,
    saveDataEntry,
    getDataEntry,
    processDataEntry,
    searchTransitPassenger,
    downloadTransitPassenger,
    airlineRouteApproval,
    saveAirlineRoute,
    searchPendingAirlineRoute,
    searchAirlineRoute,
    searchAirlineWalletReport,
    downloadAirlineWalletReport,
    savePdm,
    searchPdm,
    getBillablePassengers,
    saveBillablePassengers,
    searchAppEntityTypes,
    createMakerChecker,
    searchMakerChecker,
    approveMakerChecker,
    rejectMakerChecker,
    getStatementOfAccount,
    downloadStatementOfAccount,
    downloadPdm
};
function getUsersByOrganization(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/User/Search`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function postSignIn(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Account/Login`, payload)
        .then(res => {
            const { error } = res.response;
            if (!error) {
                return res;
            } else {
                return appHelpers.formatPromiseResponse(error, appConstants.ERROR_RESPONSE);
            }
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function getAllAirlines() {
    // return appHelpers.getRequest(`${appConstants.PAS_URL}/api/airline/search?IsLocal=${true}`, authHeader())
    return appHelpers.getRequest(`${appConstants.PAS_URL}/api/Airline/GetAllPscAirline`)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function getAllAirports() {
    // return appHelpers.getRequest(`${appConstants.PAS_URL}/api/airport/search?countryCode=NG`)
    return appHelpers.getRequest(`${appConstants.PAS_URL}/api/Airport/GetAllPscAirport`)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function getAirportLocation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(AirportLocation);
        }, 2000)
    })
}
function getAirlinesFlightNumbers(airlineId) {
    let payload = { From: 0, PageSize: 1000, Parameter: { AirlineId: airlineId } };
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Flight/search`, payload, authHeader())
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}
function getFlights(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Manifest/SearchPSCManifests?from=${payload.From}&size=${payload.Size}`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}
function downloadFlights(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Manifest/DownloadPSCManifests`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}
function downloadFlightPassengers(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Manifest/DownloadPSCPassengers`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}
function getAirlinePayment(payload) {
    return appHelpers.getRequest(`${appConstants.PAS_URL}/api/Payment/GetPSCPayments?airlineId=${payload.AirlineId}&from={payload.from}&size={payload.PageSize}`)
        .then(res => {
            // console.log('res', res);
            return res;

        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        )
    // return new Promise((resolve, reject)=>{
    //     setTimeout(()=>{
    //         resolve(testData);
    //     }, 4000)
    //
    // });
}

function getAllAirlinePayment(payload) {
    return appHelpers.getRequest(`${appConstants.PAS_URL}/api/Payment/GetAllPSCPayments?from={payload.from}&size={payload.PageSize}`)
        .then(res => {
            return res;

        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        )
}

function searchAirlinePayment(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Payment/SearchPSCPayments`, payload)
        .then(res => {
            return res;

        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        )
}

function downloadAirlinePayment(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Payment/DownloadPSCPayments`, payload)
        .then(res => {
            return res;

        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        )
}
function getFlightPassengers(payload) {
    return appHelpers.getRequest(`${appConstants.PAS_URL}/api/Manifest/GetPSCPassengers?manifestId=${payload.manifestId}&from=${payload.From}&size=${payload.Size}`)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function getDashboardData(payload) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data_ = {
                summary: {
                    billablePax: 240000, totalBillableAmount: 12500000000000, tokensPurchased: 40000, unUtilizedToken: 300000, totalFlights: 600000
                }
            };
            resolve(appHelpers.promiseResponse(data_));
        }, 2000)
    })
    /*return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Flight/search?showdetails=true`, payload, authHeader())
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );*/
}

function getLatestToken() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let airlines = ['Aero Air', 'Medview', 'Air Peace', 'Arik', 'Azman', 'Dana', 'Overland'];
            let amounts = [250000, 100000, 200000, 5000, 30000, 800000, 40000000];
            let response = [];
            for (let i = 0; i < 7; i++) {
                let amount = amounts[Math.floor(Math.random() * 6) + 1];
                response.push(
                    {
                        id: i + 1,
                        airlineName: airlines[Math.floor(Math.random() * 6) + 1],
                        amount: amount,
                        numberOfTokens: amount / 1000
                    }
                )
            }
            resolve(appHelpers.promiseResponse(response));
        }, 2000)
    })
}

function getAirlinesThreshold(airportCode, from, size) {
    airportCode = (airportCode === "-1") ? "" : airportCode;

    return appHelpers.getRequest(`${appConstants.PAS_URL}/api/AirlineWalletThreshold/GetAllAirlineWalletThreshold?AirlineId=&AirportCode=${airportCode}&From=${from}&Size=${size}`)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}


//
// function getAirlinesThreshold(from, size) {
//     //     return appHelpers.getRequest(`http://psc-api.test.vggdev.com/api/AirlineWalletThreshold/GetAllPendingAirlineWalletThreshold?From=${from}&Size=${size}`, authHeader())
//     return appHelpers.getRequest(`http://psc-api.test.vggdev.com/api/AirlineWalletThreshold/GetAllAirlineWalletThreshold`, authHeader()
//         .then(res => {
//             return res;
//         }).catch(
//             error => {
//                 let errorMessage = appHelpers.interpretErrorResponse(error);
//                 return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
//             }
//         );
// }

function getAllThreshold(airlineId, airportCode, status, from, size) {
    airportCode = (airportCode === "-1") ? "" : airportCode;
    airlineId = (airlineId === "-1") ? "" : airlineId;
    status = (status === "-1") ? "" : status;
    return appHelpers.getRequest(`${appConstants.PAS_URL}/api/AirlineWalletThreshold/GetAllPendingAirlineWalletThreshold?AirlineId=${airlineId}&AirportCode=${airportCode}&Status=${status}&From=${from}&Size=${size}`)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}
//
// function searchThreshold(airlineId,from,size) {
//     return appHelpers.getRequest(`http://psc-api.test.vggdev.com/api/AirlineWalletThreshold/GetAllUnprocessedAirlineWalletThreshold?AirlineId=${airlineId}&From=${from}&Size=${size}`, authHeader())
//         .then(res => {
//             return res;
//         }).catch(
//             error => {
//                 let errorMessage = appHelpers.interpretErrorResponse(error);
//                 return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
//             }
//         );
// }

function editPendingThreshold(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/AirlineWalletThreshold/EditPendingAirlineWalletThreshold`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function approvePendingThreshold(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/AirlineWalletThreshold/Approve`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}
function setThreshold(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/AirlineWalletThreshold/SaveAirlineWalletThreshold`, payload, authHeader())
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function getCurrentPsc() {
    return appHelpers.getRequest(`${appConstants.PAS_URL}/api/PscCharges/Get`)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function getAllPsc(from, size) {
    return appHelpers.getRequest(`${appConstants.PAS_URL}/api/PscCharges/GetAll?From=${from}&Size=${size}`)
        .then(data => {
            return data;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function getAllUnprocessedPendingPsc(from, size) {
    return appHelpers.getRequest(`${appConstants.PAS_URL}/api/PscCharges/GetUnprocessedPendingPscCharges?From=${from}&Size=${size}`)
        .then(data => {
            return data;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function savePsc(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/PscCharges/Save`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function editPsc(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/PscCharges/EditPendingPscCharge`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function approvePsc(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/PscCharges/Approve`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function getNotificationType() {
    return appHelpers.getRequest(`${appConstants.PAS_URL}/api/Notification/NotificationType`)
        .then(data => {
            return data;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function getNotificationEmail(from, size) {
    return appHelpers.getRequest(`${appConstants.PAS_URL}/api/Notification/GetAllNotificationEmail?From=${from}&Size=${size}`)
        //return appHelpers.getRequest(`${appConstants.PAS_URL}/api/Notification/GetNotificationEmails?AirlineId=${airlineId}&AirportCode=${airportCode}&From=${from}&Size=${size}`)
        .then(data => {
            return data;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function editNotification(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Notification/SaveNotification`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function searchNotificationEmail(airlineId, airportCode, from, size) {
    airportCode = (airportCode === "-1") ? "" : airportCode;
    airlineId = (airlineId === "-1") ? "" : airlineId;
    return appHelpers.getRequest(`${appConstants.PAS_URL}/api/Notification/GetNotificationEmails?AirlineId=${airlineId}&AirportCode=${airportCode}&From=${from}&Size=${size}`)
        .then(data => {
            return data;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function addEmailNotification(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Notification/SaveNotification`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function fetchDashboardSummaryCard(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Dashboard/SearchDashboardSummary`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}
function fetchTokenUtilizationByAirline(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Dashboard/SearchTokenUtilizationByAirline`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function searchTokenActivity(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Dashboard/SearchTokenActivityPerMonth`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function fetchTokenUtilizationByAirport(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Dashboard/SearchTokenUtilizationByAirport`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function fetchLatestTokensPurchase(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Dashboard/SearchLatestTokenPurchases`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}
function searchTokenUtilized(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Report/SearchTokenUtilizedByAirlineAndAirport`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function searchTransitPassenger(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/TransitPassenger/SearchTransitPassengers`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function downloadTransitPassenger(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/TransitPassenger/DownloadTransitPassengers`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function searchBillableVsTotalPassengers(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Report/GetTotalVersusBillable`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}
function downloadTokenUtilization(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Report/DownloadTokenUtilizedByAirlineAndAirport`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}
function downloadBillableVsTotalPassengers(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Report/DownloadTotalVersusBillable`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function getSettlements(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Settlement/GetSettlement`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function downloadSettlements(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Settlement/DownloadSettlement`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function getOtherReconciliation(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/PscReconciliation/Search`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function getMyReconciliation(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/PscReconciliation/SearchMyReconciliation`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function processReconciliation(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/PscReconciliation/Process`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function updateReconciliation(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/PscReconciliation/Edit`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function addReconciliation(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/PscReconciliation/Add`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}


function getAuditModules() {
    return appHelpers.getRequest(`${appConstants.PAS_URL}/api/AuditTrail/GetAllModuleActions`)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}
function getAuditActions() {
    return appHelpers.getRequest(`${appConstants.PAS_URL}/api/AuditTrail/GetAllAuditActions`)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function searchAudits(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/AuditTrail/Search`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function searchTimeline(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Report/SearchTxnLog`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}
function getWalletMovementData(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/dashboard/SearchCurrentTokenMovement`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function saveDataEntry(payload) {
    return appHelpers.postFormDataRequest(`${appConstants.PAS_URL}/api/Manifest/PSCSaveDataEntry`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function getDataEntry(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Manifest/PSCSearchManifestPending `, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function processDataEntry(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Manifest/PSCProcessManifestPending`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}


function searchPendingAirlineRoute(payload) {
    // return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Manifest/PSCProcessManifestPending`, payload)
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/AirlineRoute/SearchPendingAirlineRoute`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}
function saveAirlineRoute(payload) {
    // return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Manifest/PSCProcessManifestPending`, payload)
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/AirlineRoute/Save`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}
function airlineRouteApproval(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/AirlineRoute/ApprovePendingAirlineRoute`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}
function searchAirlineRoute(payload) {
    return appHelpers.getRequest(`${appConstants.PAS_URL}/api/AirlineRoute/SearchAirlineRoute?AirlineId=${payload.AirlineId}&From=${payload.From}&Size=${payload.Size}`)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function searchAirlineWalletReport(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Settlement/GetAirlineWallet`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}


function downloadAirlineWalletReport(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Settlement/DownloadAirlineWallet`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function savePdm(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Manifest/SavePdm`, payload)
        // return appHelpers.postRequest(`http://psc-api.test.vggdev.com/api/Manifest/SavePdm`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function searchPdm(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Manifest/SearchPdm`, payload)
        // return appHelpers.postRequest(`http://psc-api.test.vggdev.com/api/Manifest/SearchPdm`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function getBillablePassengers() {
    return appHelpers.getRequest(`${appConstants.PAS_URL}/api/BillablePassenger/GetBillablePassenger`)
        .then(res => {
            return res;
        }).catch(
            error => {

                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function saveBillablePassengers(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/BillablePassenger/AddBillablePassenger`, payload)
        // return appHelpers.postRequest(`http://psc-api.test.vggdev.com/api/BillablePassenger/AddBillablePassenger`, payload)
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function searchAppEntityTypes(AppId) {
    return appHelpers.getRequest(`${appConstants.PAS_URL}/api/RoleEntity/Application?appId=${AppId}`, authHeader())
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function createMakerChecker(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/MakerChecker/CreateMakerChecker`, payload, authHeader())
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}


function searchMakerChecker(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/MakerChecker/SearchMakerChecker`, payload, authHeader())
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function approveMakerChecker(payload) {
    const { user } = store.getState();
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/MakerChecker/ApproveMakerChecker`, payload, { ApprovedBy: user.userId })
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function rejectMakerChecker(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/MakerChecker/RejectMakerChecker`, payload, authHeader())
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function getStatementOfAccount(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Report/GetStatementOfAccount`, payload, authHeader())
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function downloadStatementOfAccount(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Report/DownloadStatementOfAccount`, payload, authHeader())
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}

function downloadPdm(payload) {
    return appHelpers.postRequest(`${appConstants.PAS_URL}/api/Manifest/DownloadPdm`, payload, authHeader())
        .then(res => {
            return res;
        }).catch(
            error => {
                let errorMessage = appHelpers.interpretErrorResponse(error);
                return appHelpers.formatPromiseResponse(errorMessage, appConstants.ERROR_RESPONSE);
            }
        );
}
