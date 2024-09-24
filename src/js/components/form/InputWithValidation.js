import { html, nothing } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class InputWithValidation extends LitWithoutShadowDom {
  static properties = {
    type: { type: String, reflect: true },
    value: { type: String, reflect: true },
    inputId: { type: String, reflect: true },

    validFeedbackMessage: { type: String, reflect: true },
    invalidFeedbackMessage: { type: String, reflect: true },

    required: { type: Boolean, reflect: true },
  };

  constructor() {
    super();

    this.type = 'text';
    this.required = false;
  }

  render() {
    return html`
      <input
        id=${this.inputId || nothing}
        class="form-control"
        type=${this.type}
        value=${this.value || nothing}
        ?required=${this.required}
        @input=${this._handleInput.bind(this)}
      />

      ${this._validFeedbackTemplate()}
      <section class="invalid-feedback">${this.invalidFeedbackMessage}</section>
    `;
  }

  _handleInput(event) {
    this.value = event.target.value;
    this.requestUpdate();
  }

  _validFeedbackTemplate() {
    return this.validFeedbackMessage
      ? html`<section class="valid-feedback">${this.validFeedbackMessage}</section>`
      : nothing;
  }

  isValid() {
    return !this.required || (this.value && this.value.trim() !== '');
  }

  updated(changedProperties) {
    if (changedProperties.has('invalidFeedbackMessage') && !this.invalidFeedbackMessage) {
      throw new Error(
        `Attribute "invalidFeedbackMessage" must be applied to element ${this.localName}`,
      );
    }
  }
}

customElements.define('input-with-validation', InputWithValidation);
