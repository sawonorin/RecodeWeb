import { SMITE_USER } from "../constants";

export const localUserState = () => {
  return JSON.parse(localStorage.getItem(SMITE_USER));
};

export const removeItemFromLocalStorage = () => {
  return localStorage.removeItem(SMITE_USER);
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
