import { createContext, useContext, useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const IS_AUTH = 'IS_AUTH';
const ACCESS_TOKEN = 'ACCESS_TOKEN';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem(IS_AUTH));
  const [accessToken, setAccessToken] = useState(localStorage.getItem(ACCESS_TOKEN));
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.hash.substring(1));
  const accessTokenParam = searchParams.get('access_token');

  const getRedirectUrl = () => {
    if (window.location.hostname === 'localhost') {
      return 'http://localhost:3000';
    } else {
      return 'https://hbes.ecloudapp.cloud/';
    }
  }

  const login = useCallback(() => {
    setIsLoading(true);
    
    if (accessToken) {
      setIsAuthenticated(true);
      setIsLoading(false);
    } else if (!accessTokenParam) {
      // window.location =
      //   'https://login-ech.auth.us-east-1.amazoncognito.com/login?client_id=2ot0m819qsr7b61q0lff6k0g1n&response_type=token&scope=openid&redirect_uri=https://klc.cec.ecloudapp.cloud/';

      window.location = `https://devhbes.auth.us-east-2.amazoncognito.com/login?client_id=75ohe7ossges61b7uk0t94nhf2&response_type=token&scope=openid&redirect_uri=${getRedirectUrl()}`
      } else {
        setAccessToken(accessTokenParam);
        setIsLoading(false);
    }
  });

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    setProfileData(null);
    localStorage.removeItem(IS_AUTH);
    localStorage.removeItem(ACCESS_TOKEN);

    window.location = `https://devhbes.auth.us-east-2.amazoncognito.com/logout?client_id=75ohe7ossges61b7uk0t94nhf2&logout_uri=${getRedirectUrl()}`
  });

  const value = useMemo(
    () => ({
      login,
      logout,
      isAuthenticated,
      accessToken,
      isLoading
    }),
    [login, logout, isAuthenticated, accessToken, isLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthContextProvider.propTypes = {
  children: PropTypes.object
};

export function useAuthContext() {
  return useContext(AuthContext);
}
