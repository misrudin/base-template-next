import { configEnv } from '@libraries/config';

import { callAPI } from './fetcher';

export const callAPIContent = (paramsRequests) => {
  const hostApi: string = configEnv.restApiUrlCsr;

  const params = {
    ...paramsRequests,
    hostApi,
  };

  return callAPI(params);
};
