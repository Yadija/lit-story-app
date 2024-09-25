import Config from './config';

const ApiEndpoint = {
  REGISTER: `${Config.BASE_URL}/register`,
  LOGIN: `${Config.BASE_URL}/login`,

  // Stories
  GET_ALL_STORIES: `${Config.BASE_URL}/stories`,
  ADD_NEW_STORY: `${Config.BASE_URL}/stories`,
};

export default ApiEndpoint;
