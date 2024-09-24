import { html, nothing } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class InputPasswordWithValidation extends LitWithoutShadowDom {
  static properties = {
    value: { type: String, reflect: true },
    inputId: { type: String, reflect: true },

    validFeedbackMessage: { type: String, reflect: true },
    invalidFeedbackMessage: { type: String, reflect: true },

    required: { type: Boolean, reflect: true },

    showPassword: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this.required = false;
    this.showPassword = false; // Initialize to false to hide password by default
  }

  render() {
    return html`
      <section class="input-group">
        <input
          id=${this.inputId || nothing}
          class="form-control"
          type=${this.showPassword ? 'text' : 'password'}
          value=${this.value || nothing}
          ?required=${this.required}
          @input=${this._handleInput.bind(this)}
        />
        <button
          type="button"
          class="btn btn-outline-secondary rounded-end"
          @click=${this._togglePasswordVisibility.bind(this)}
        >
          <i class="${this.showPassword ? 'bi-eye-slash' : 'bi-eye'}"></i>
        </button>

        ${this._validFeedbackTemplate()}
        <section class="invalid-feedback">${this.invalidFeedbackMessage}</section>
      </section>
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

  _togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}

customElements.define('input-password-with-validation', InputPasswordWithValidation);
