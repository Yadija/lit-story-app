import { html } from 'lit';
import LitWithoutShadowDom from './../base/LitWithoutShadowDom';

class Register extends LitWithoutShadowDom {
  render() {
    return html`
      <section class="col-12 col-md-6 col-lg-4">
        <h2 class="text-center">Registrasi</h2>

        <form id="registerForm" novalidate>
          <section class="mb-3">
            <label for="validationCustomRecordName" class="form-label">Nama</label>
            <input-with-validation
              type="text"
              inputId="validationCustomRecordName"
              invalidFeedbackMessage="required"
              required
            ></input-with-validation>
          </section>

          <section class="mb-3">
            <label for="validationCustomEmail" class="form-label">Email</label>
            <input-with-validation
              type="email"
              inputId="validationCustomEmail"
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
            <button type="submit">Register</button>
          </section>
        </form>

        <section id="loginLink" class="mt-4 text-center">
          Already have an account? <a href="/auth/login.html">Login</a>
        </section>

        <section class="mt-4 d-flex justify-content-center">
          <locale-picker></locale-picker>
        </section>
      </section>
    `;
  }
}

customElements.define('register-page', Register);
