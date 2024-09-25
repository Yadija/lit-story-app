import Stories from '../network/stories';
import CheckUserAuth from './auth/check-user-auth';

const Add = {
  async init() {
    CheckUserAuth.checkLoginState();

    this._initialListener();
  },

  _initialListener() {
    const addFormStory = document.querySelector('#addStoryForm');
    addFormStory.addEventListener(
      'submit',
      (event) => {
        event.preventDefault();
        event.stopPropagation();

        addFormStory.classList.add('was-validated');
        this._sendPost();
      },
      false,
    );
  },

  async _sendPost() {
    const formData = this._getFormData();

    if (this._validateFormData(formData)) {
      const { data, status } = await Stories.addNewStory(formData);

      if (status === 201) {
        alert(data.message);
        this._goToDashboardPage();
      } else {
        alert(data.message);
      }
    }
  },

  _getFormData() {
    const descriptionInput = document.querySelector('#validationCustomDescription');
    const evidenceInput = document.querySelector('#validationCustomEvidence');

    return {
      photo: evidenceInput.files[0],
      description: descriptionInput.value,
    };
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');
    return formDataFiltered.length === 0;
  },

  _goToDashboardPage() {
    window.location.href = '/';
  },
};

export default Add;
