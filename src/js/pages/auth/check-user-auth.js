import Utils from '../../utils/utils';
import Config from '../../config/config';

const CheckUserAuth = {
  excludeRedirectPage: ['login.html', 'register.html'],

  checkLoginState() {
    const userToken = Utils.getUserToken(Config.USER_TOKEN_KEY);
    const isUserSignedIn = Boolean(userToken);
    const isUserOnAuthPage = this._isUserOnAuthPage(this.excludeRedirectPage);

    if (isUserSignedIn && isUserOnAuthPage) {
      window.location.href = '/';
    }

    if (!isUserSignedIn && !isUserOnAuthPage) {
      window.location.href = '/auth/login.html';
    }
  },

  _isUserOnAuthPage(pages) {
    return pages.some((item) => window.location.pathname.endsWith(item));
  },
};

export default CheckUserAuth;
