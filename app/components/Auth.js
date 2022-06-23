import React, { useCallback, useState } from 'react';

import { AuthContext } from '../contexts';

export default ({ children }) => {
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);

  const login = async e => {
    e?.preventDefault();

    if (connecting) {
      return;
    }

    setConnecting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));

    window.testUser = { logged: true, premium: true };
    setConnecting(false);
    setConnected(true);
  };

  const getContext = useCallback(() => ({
    login,
    connecting,
    connected,
  }), [connecting, connected]);

  return (
    <AuthContext.Provider value={getContext()} children={children} />
  );
};
