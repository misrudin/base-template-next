import { configEnv } from '@libraries/config';

import { callAPI } from './fetcher';

export const callAPISSRFetcher = (paramsRequests) => {
  const hostApi: string = configEnv.restApiUrlSsr;

  const params = {
    ...paramsRequests,
    hostApi,
  };

  return callAPI(params);
};
