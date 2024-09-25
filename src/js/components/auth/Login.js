import { html } from 'lit';
import LitWithoutShadowDom from './../base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class Login extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <section class="col-12 col-md-6 col-lg-4">
        <h2 class="text-center">${msg('Login')}</h2>

        <form id="loginForm" novalidate>
          <section class="mb-3">
            <label for="validationCustomRecordEmail" class="form-label">${msg('Email')}</label>
            <input-with-validation
              type="text"
              inputId="validationCustomRecordEmail"
              invalidFeedbackMessage=${msg('required')}
              required
            ></input-with-validation>
          </section>

          <section class="mb-3">
            <label for="validationCustomPassword" class="form-label">${msg('Password')}</label>
            <input-password-with-validation
              inputId="validationCustomPassword"
              invalidFeedbackMessage=${msg('required')}
              required
            ></input-password-with-validation>
          </section>

          <section class="col-12 text-end">
            <button type="submit">${msg('Login')}</button>
          </section>
        </form>

        <section id="registerLink" class="mt-4 text-center">
          ${msg("Don't have an account?")} <a href="/auth/register.html">${msg('Register')}</a>
        </section>

        <section class="mt-4 d-flex justify-content-center">
          <locale-picker></locale-picker>
        </section>
      </section>
    `;
  }
}

customElements.define('login-page', Login);
