import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class About extends LitWithoutShadowDom {
  render() {
    return html`
      <section class="row justify-content-center">
        <h2 class="text-center">About</h2>

        <section class="col-md-6">
          <p class="pt-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero temporibus facilis sit
            aliquid magni. Nihil necessitatibus quae totam saepe temporibus commodi autem fugit,
            reprehenderit vitae veritatis officiis laudantium obcaecati earum sint voluptates
            voluptatibus optio! Et eos commodi similique alias quas saepe, cum nemo, expedita in
            quia nisi soluta dignissimos. Unde sed nobis, dolorem excepturi molestias, illo tempore
            voluptatum nesciunt soluta sequi pariatur eaque dolores, nemo alias recusandae? Incidunt
            aliquam quidem quisquam harum vero, quasi velit fugiat laudantium nihil aperiam quae?
          </p>

          <p class="pt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum numquam quis doloremque
            aperiam officia aliquid corrupti quos cum iste recusandae. Labore distinctio
            praesentium, dolor eligendi laboriosam aliquid architecto adipisci numquam
            necessitatibus et incidunt ab quos fugiat assumenda sit earum neque culpa inventore?
            Sequi tenetur quis vitae quas ab asperiores non.
          </p>
        </section>
      </section>
    `;
  }
}

customElements.define('about-profile', About);
