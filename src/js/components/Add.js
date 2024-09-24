import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class Add extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <h2 class="mb-3">${msg('Add New Story')}</h2>

      <form class="row g-3" id="addStoryForm" novalidate>
        <section class="col-12">
          <textarea-with-validation
            inputId="validationCustomDescription"
            invalidFeedbackMessage=${msg('required')}
            required
          ></textarea-with-validation>
        </section>

        <section class="col-12">
          <input-image-with-preview
            inputId="validationCustomEvidence"
            invalidFeedbackMessage=${msg('required')}
            required
          ></input-image-with-preview>
        </section>

        <section class="col-12 text-end">
          <button type="submit">${msg('Add')}</button>
        </section>
      </form>
    `;
  }
}

customElements.define('add-story', Add);
