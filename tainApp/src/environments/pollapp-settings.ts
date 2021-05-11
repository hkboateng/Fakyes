import * as DEV_ENV from './environment';
export const SERVER_API_URL = !DEV_ENV.environment.production ? "http://localhost:8080" :"http://localhost:3000";

export const BASE_URL = SERVER_API_URL + "/election-service/election/v1"
