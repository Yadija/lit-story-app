import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class Add extends LitWithoutShadowDom {
  render() {
    return html`
      <h2 class="mb-3">Add New Story</h2>

      <form class="row g-3" id="addStoryForm" novalidate>
        <section class="col-12">
          <textarea-with-validation
            inputId="validationCustomDescription"
            invalidFeedbackMessage="Required!"
            required
          ></textarea-with-validation>
        </section>

        <section class="col-12">
          <input-image-with-preview
            inputId="validationCustomEvidence"
            invalidFeedbackMessage="Required!"
            required
          ></input-image-with-preview>
        </section>

        <section class="col-12 text-end">
          <button type="submit">Add</button>
        </section>
      </form>
    `;
  }
}

customElements.define('add-story', Add);
