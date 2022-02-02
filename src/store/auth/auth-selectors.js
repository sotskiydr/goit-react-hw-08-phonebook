const getIsLoggedIn = state => state.auth.isLoggedIn;
const getError = state => state.auth.error;

const getUsername = state => state.auth.user.name;

const getRefreshingStatus = state => state.auth.refreshing;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getRefreshingStatus,
  getError,
};
export default authSelectors;
