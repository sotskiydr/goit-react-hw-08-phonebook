const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getRefreshingStatus = state => state.auth.refreshing;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getRefreshingStatus,
};
export default authSelectors;
