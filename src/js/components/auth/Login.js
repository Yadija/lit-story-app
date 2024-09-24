import { html } from 'lit';
import LitWithoutShadowDom from './../base/LitWithoutShadowDom';

class Login extends LitWithoutShadowDom {
  render() {
    return html`
      <section class="col-12 col-md-6 col-lg-4">
        <h2 class="text-center">Login</h2>

        <form id="loginForm" novalidate>
          <section class="mb-3">
            <label for="validationCustomRecordEmail" class="form-label">Email</label>
            <input-with-validation
              type="text"
              inputId="validationCustomRecordEmail"
              invalidFeedbackMessage="required"
              required
            ></input-with-validation>
          </section>

          <section class="mb-3">
            <label for="validationCustomPassword" class="form-label">Password</label>
            <input-password-with-validation
              inputId="validationCustomPassword"
              invalidFeedbackMessage="required"
              required
            ></input-password-with-validation>
          </section>

          <section class="col-12 text-end">
            <button type="submit">Login</button>
          </section>
        </form>

        <section id="registerLink" class="mt-4 text-center">
          Don't have an account? <a href="/auth/register.html">Register</a>
        </section>

        <section class="mt-4 d-flex justify-content-center">
          <locale-picker></locale-picker>
        </section>
      </section>
    `;
  }
}

customElements.define('login-page', Login);
