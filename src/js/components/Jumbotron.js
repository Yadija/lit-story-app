import { css, html, LitElement } from 'lit';
import { showFormattedDate } from '../utils';

class Jumbotron extends LitElement {
  static properties = {
    image: { type: String },
    name: { type: String },
    description: { type: String },
    createdAt: { type: String },
  };

  static styles = css`
    :host {
      display: flex;
      border: 1px solid #3f5d53;
      margin: 0 1rem;
      margin-bottom: 2rem;
    }

    .jumbotron-header {
      width: 40%;
      height: 350px;
    }

    .jumbotron-header img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .jumbotron-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 1rem;
    }

    .jumbotron-body__title {
      font-weight: bold;
      font-size: 1.5rem;
      color: #3f5d53;
    }

    .jumbotron-body__description {
      font-size: 1.2rem;
    }

    .jumbotron-body__date {
      font-size: 1rem;
      color: gray;
    }

    @media (max-width: 768px) {
      .jumbotron-header {
        flex: 1;
        height: 200px;
      }
    }
  `;

  constructor(image, name, description, createdAt) {
    super();
    this.image = image;
    this.name = name;
    this.description = description;
    this.createdAt = createdAt;
  }

  render() {
    return html`
      <section class="jumbotron-header">
        <img src="${this.image}" alt="${this.name}" />
      </section>
      <section class="jumbotron-body">
        <div class="jumbotron-body__title">${this.name}</div>
        <div class="jumbotron-body__description">${this.description}</div>
        <div class="jumbotron-body__date">${showFormattedDate(this.createdAt)}</div>
      </section>
    `;
  }
}

customElements.define('jumbotron-card', Jumbotron);
