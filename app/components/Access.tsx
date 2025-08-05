import type { ComponentPropsWithoutRef } from 'react';
import { AccessContext } from '@poool/react-access';

import { useAuth } from '../hooks';

const Access = ({ children }: ComponentPropsWithoutRef<any>) => {
  const { consentGiven } = useAuth();

  return (
    <AccessContext
      appId="155PF-L7Q6Q-EB2GG-04TF8"
      config={{
        debug: true,
        cookies_enabled: consentGiven,
        custom_segment: 'react',
      }}
      withAudit={true}
    >
      { children }
    </AccessContext>
  );
};

export default Access;
