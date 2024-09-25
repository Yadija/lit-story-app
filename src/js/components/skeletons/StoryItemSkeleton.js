import LitWithoutShadowDom from '../base/LitWithoutShadowDom';
import { html } from 'lit';

class StoryItemSkeleton extends LitWithoutShadowDom {
  static get properties() {
    return {};
  }

  render() {
    return html`
      <section class="card-img-top skeleton"></section>
      <section class="card-body">
        <section class="card-title skeleton"></section>
        <section class="card-text skeleton"></section>
        <section
          class="card-text skeleton"
          style="width: 80%; height: 12px; margin-top: 2rem"
        ></section>
      </section>
    `;
  }
}

customElements.define('story-item-skeleton', StoryItemSkeleton);
