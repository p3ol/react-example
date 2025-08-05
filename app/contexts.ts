import { createContext, MouseEvent } from 'react';

export interface AuthContextType {
  login: (e?: MouseEvent) => void;
  setConsentGiven: (value: boolean) => void;
  connecting: boolean;
  connected: boolean;
  premium: boolean;
  consentGiven: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  login: () => {},
  setConsentGiven: () => {},
  connecting: false,
  connected: false,
  premium: false,
  consentGiven: false,
});
