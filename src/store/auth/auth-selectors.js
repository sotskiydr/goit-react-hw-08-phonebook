const getIsLoggedIn = state => state.auth.isLoggedIn;
const getErrorLog = state => state.auth.errorLog;
const getErrorReg = state => state.auth.errorReg;

const getUsername = state => state.auth.user.name;

const getRefreshingStatus = state => state.auth.refreshing;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getRefreshingStatus,
  getErrorLog,
  getErrorReg,
};
export default authSelectors;
