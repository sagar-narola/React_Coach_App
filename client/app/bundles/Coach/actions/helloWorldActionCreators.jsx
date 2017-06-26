/* eslint-disable import/prefer-default-export */

import { LOGIN_UPDATE } from '../constants/helloWorldConstants';

export const updateAuthenticate_token = (data) => ({
  type: LOGIN_UPDATE,
  data,
});
