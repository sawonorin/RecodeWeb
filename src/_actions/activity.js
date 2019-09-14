import { appConstants } from "../_constants/app.constants";

export const addLog = (title) => (
    {
        type: appConstants.ADD_LOG, title
    }
);