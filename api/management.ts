import express from 'express';
import axios, { AxiosRequestConfig } from 'axios';

const app = express();

app.use(express.json());

const clientId = process.env.AUTH0_CLIENT_ID;
const clientSecret = process.env.AUTH0_CLIENT_SECRET;

app.post('/', async (req, res, next) => {
  const {
    body: { email },
  } = req;
  const options: AxiosRequestConfig = {
    method: 'POST',
    url: 'https://kuhrtcodes.us.auth0.com/oauth/token',
    headers: { 'content-type': 'application/json' },
    data: {
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
      audience: 'https://kuhrtcodes.us.auth0.com/api/v2/',
    },
  };

  try {
    const {
      data: { access_token, token_type },
    } = await axios.request(options);

    const {
      data: [{ app_metadata: appMetaData }],
    } = await axios.get(
      `https://kuhrtcodes.us.auth0.com/api/v2/users?q=email:"${email}"&search_engine=v3`,
      {
        headers: {
          Authorization: `${token_type} ${access_token}`,
        },
      }
    );

    res.json(appMetaData);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

export default {
  path: '/api/management',
  handler: app,
};
