import { html } from 'lit';
import LitWithoutShadowDom from './../base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class Register extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <section class="col-12 col-md-6 col-lg-4">
        <h2 class="text-center">${msg('Register')}</h2>

        <form id="registerForm" novalidate>
          <section class="mb-3">
            <label for="validationCustomRecordName" class="form-label">${msg('Name')}</label>
            <input-with-validation
              type="text"
              inputId="validationCustomRecordName"
              invalidFeedbackMessage=${msg('required')}
              required
            ></input-with-validation>
          </section>

          <section class="mb-3">
            <label for="validationCustomEmail" class="form-label">${msg('Email')}</label>
            <input-with-validation
              type="email"
              inputId="validationCustomEmail"
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
            <button type="submit">${msg('Register')}</button>
          </section>
        </form>

        <section id="loginLink" class="mt-4 text-center">
          ${msg('Already have an account?')} <a href="/auth/login.html">${msg('Login')}</a>
        </section>

        <section class="mt-4 d-flex justify-content-center">
          <locale-picker></locale-picker>
        </section>
      </section>
    `;
  }
}

customElements.define('register-page', Register);
