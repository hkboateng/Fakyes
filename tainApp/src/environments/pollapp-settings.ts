import * as DEV_ENV from './environment';
export const SERVER_API_URL = !DEV_ENV.environment ? "http://localhost:3000" :"http://localhost:3000";
