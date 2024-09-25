import ApiEndpoint from '../config/api-endpoint';
import Instance from '../config/api-instance';

const Stories = {
  async getAllStories() {
    return await Instance({
      method: 'get',
      url: ApiEndpoint.GET_ALL_STORIES,
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
  },

  async addNewStory({ description, photo }) {
    return await Instance({
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      method: 'post',
      url: ApiEndpoint.ADD_NEW_STORY,
      data: {
        description,
        photo,
      },
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
  },
};

export default Stories;
