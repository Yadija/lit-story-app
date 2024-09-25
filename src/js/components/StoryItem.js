import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { html } from 'lit';
import { showFormattedDate } from '../utils';

class StoryItem extends LitWithoutShadowDom {
  static get properties() {
    return {
      image: { type: String },
      name: { type: String },
      description: { type: String },
      createdAt: { type: String },
    };
  }

  constructor(image, name, description, createdAt) {
    super();
    this.image = image;
    this.name = name;
    this.description = description;
    this.createdAt = createdAt;
  }

  render() {
    return html`
      <img src="${this.image}" class="card-img-top" alt="${this.name}" />
      <section class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <p class="card-text">${this.description}</p>
        <p class="card-text">
          <small class="text-muted">${showFormattedDate(this.createdAt)}</small>
        </p>
      </section>
    `;
  }
}

customElements.define('story-item', StoryItem);
