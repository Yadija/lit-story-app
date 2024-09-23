import { css, html, LitElement } from 'lit';

class Footer extends LitElement {
  static properties = {
    brandName: { type: String, reflect: true },
  };

  static styles = css`
    p {
      text-align: center;
    }
  `;

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
    return html` <p>${this.brandName} &copy; ${new Date().getFullYear()}</p> `;
  }
}

customElements.define('footer-bar', Footer);
