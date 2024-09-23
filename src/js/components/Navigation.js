import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class Navigation extends LitWithoutShadowDom {
  static properties = {
    brandName: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('brandName')) {
      throw new Error(`Atribut "brandName" harus diterapkan pada elemen ${this.localName}`);
    }
  }

  render() {
    return html`
      <nav class="navbar">
        <section class="container">
          <a href="/" class="navbar-brand fw-bold text-uppercase fs-4">${this.brandName}</a>
          <section class="d-flex">
            <off-canvas class="ms-auto mb-2 mb-md-0"></off-canvas>
          </section>
        </section>
      </nav>
    `;
  }
}

customElements.define('nav-bar', Navigation);
