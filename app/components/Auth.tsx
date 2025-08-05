import {
  type ComponentPropsWithoutRef,
  type MouseEvent,
  useCallback,
  useState,
} from 'react';

import { type AuthContextType, AuthContext } from '../contexts';

const Auth = ({ children }: ComponentPropsWithoutRef<any>) => {
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);
  const [premium, setPremium] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  const login = useCallback(async (e?: MouseEvent) => {
    e?.preventDefault();

    if (connecting) {
      return;
    }

    setConnecting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));

    setConnecting(false);
    setConnected(true);
    setPremium(true);
  }, [connecting]);

  const getContext = useCallback<() => AuthContextType>(() => ({
    login,
    connecting,
    connected,
    premium,
    consentGiven,
    setConsentGiven,
  }), [login, setConsentGiven, connecting, connected, premium, consentGiven]);

  return (
    <AuthContext.Provider value={getContext()}>
      { children }
    </AuthContext.Provider>
  );
};

export default Auth;
