import { css, html, LitElement } from 'lit';

class JumbotronSkeleton extends LitElement {
  static styles = css`
    :host {
      display: flex;
      border: 1px solid #ccc;
      margin: 0 1rem;
      margin-bottom: 2rem;
      animation: pulse 1.5s infinite;
    }

    .jumbotron-header {
      width: 40%;
      height: 350px;
      background-color: #e0e0e0;
    }

    .jumbotron-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 1rem;
    }

    .jumbotron-body__title,
    .jumbotron-body__description,
    .jumbotron-body__date {
      background-color: #e0e0e0;
      border-radius: 4px;
    }

    .jumbotron-body__title {
      height: 24px;
      width: 60%;
      margin-bottom: 0.5rem;
    }

    .jumbotron-body__description {
      height: 20px;
    }

    .jumbotron-body__date {
      height: 16px;
      width: 40%;
      margin-top: 0.5rem;
    }

    @keyframes pulse {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }

    @media (max-width: 768px) {
      .jumbotron-header {
        flex: 1;
        height: 200px;
      }
    }
  `;

  render() {
    return html`
      <section class="jumbotron-header"></section>
      <section class="jumbotron-body">
        <section class="jumbotron-body__title"></section>
        <section class="jumbotron-body__description" style="width: 100%"></section>
        <section class="jumbotron-body__description" style="width: 95%"></section>
        <section class="jumbotron-body__date"></section>
      </section>
    `;
  }
}

customElements.define('jumbotron-skeleton', JumbotronSkeleton);
