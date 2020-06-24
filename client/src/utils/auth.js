export const isAuthenticated = () => {
  const storeString = localStorage.getItem('@IntraAPI');
  if (storeString) {
    const store = JSON.parse(storeString);

    if (store.token) {
      return true;
    } else {
      return false;
    }

  } else {
    return false;
  }
};

export const getToken = () => {
  const storeString = localStorage.getItem('@IntraAPI');

  if (storeString){

    const store = JSON.parse(storeString);
    
    if (store.token) return `Bearer ${store.token}` ;
  
  }

  return null;
}

export const logout = () => {
  localStorage.removeItem('@IntraAPI');
};

export default isAuthenticated;