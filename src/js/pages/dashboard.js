import CheckUserAuth from './auth/check-user-auth';

const Dashboard = {
  async init() {
    CheckUserAuth.checkLoginState();

    await this._fetchInitialData();
  },

  async _fetchInitialData() {
    const response = await fetch('/data/DATA.json');
    const responseJSON = await response.json();
    this._stories = responseJSON.listStory;

    this.renderStoryCards(this._stories);
  },

  renderStoryCards(listStory = null) {
    if (typeof listStory !== 'object') {
      throw new Error(`Parameter listStory must be an object. Current value: ${listStory}`);
    }
    if (!Array.isArray(listStory)) {
      throw new Error(`Parameter listStory must be an array. Current value: ${listStory}`);
    }

    const main = document.querySelector('main');
    main.innerHTML = '';

    if (listStory.length <= 0) {
      main.innerHTML = this._templateEmptyBodyCard();
      return;
    }

    main.innerHTML += `
    <jumbotron-card
      image="${listStory[0].photoUrl}"
      name="${listStory[0].name}"
      description="${listStory[0].description}"
      createdAt="${listStory[0].createdAt}"
    ></jumbotron-card>
    `;

    // Make stories section
    const storiesBody = document.createElement('section');
    storiesBody.setAttribute('id', 'stories');
    main.appendChild(storiesBody);

    // Loop through each story and generate HTML
    listStory.forEach((item, idx) => {
      if (idx === 0) return;
      storiesBody.innerHTML += this._templateBodyCard(idx, listStory[idx]);
    });
  },

  // Method to generate body card template
  _templateBodyCard(index, storyData) {
    return `
      <story-item 
        class="card"
        image="${storyData.photoUrl}"
        name="${storyData.name}"
        description="${storyData.description}"
        createdAt="${storyData.createdAt}"
      ></story-item>
    `;
  },

  _templateEmptyBodyCard() {
    return `
      <div class="text-center"><h2>Tidak ada list cerita</h2></div>
    `;
  },
};

export default Dashboard;
