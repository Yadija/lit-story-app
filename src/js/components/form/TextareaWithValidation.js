import { html, nothing } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class TextareaWithValidation extends LitWithoutShadowDom {
  static properties = {
    value: { type: String, reflect: true },
    rows: { type: Number, reflect: true },
    inputId: { type: String, reflect: true },

    validFeedbackMessage: { type: String, reflect: true },
    invalidFeedbackMessage: { type: String, reflect: true },

    required: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this.rows = 6;
    this.required = false;
  }

  render() {
    return html`
      <textarea
        id=${this.inputId || nothing}
        class="form-control"
        rows=${this.rows || nothing}
        value=${this.value || nothing}
        ?required=${this.required}
        @input=${this._handleInput.bind(this)}
      ></textarea>

      ${this._validFeedbackTemplate()}
      <section class="invalid-feedback" ?hidden=${this.isValid()}>
        ${this.invalidFeedbackMessage}
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
}

customElements.define('textarea-with-validation', TextareaWithValidation);
