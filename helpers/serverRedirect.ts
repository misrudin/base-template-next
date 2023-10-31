import { ServerResponse } from 'http';

import Router from 'next/router';

const serverRedirect = (res: ServerResponse, location: string) => {
  if (res) {
    res.writeHead(307, { Location: location });
    res.end();
  } else Router.push(location);
};

export default serverRedirect;
