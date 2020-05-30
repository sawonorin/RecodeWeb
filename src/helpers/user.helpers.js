import { SMITE_USER } from "../constants";
import { getItemFromLocalStorage } from "./app.helpers";

export const getUserDetails = () => {
  let loggedInUser = getItemFromLocalStorage(SMITE_USER);
  return loggedInUser.user
};

export const checkIfUserHasPermission = (permissionArray, Singlepermission) => {
  try {
    let permissionExists = permissionArray.find((permission) => {
      return permission.id === `${Singlepermission}`;
    });
    if (permissionExists) {
      return true;
    }
    return false;
  } catch (error) {}
};

export const getUserPermissions = () => {
  let user = JSON.parse(localStorage.getItem(SMITE_USER));
  if (user) {
    return user.authInfo.authPermissions;
  } else {
    return [];
  }
};
