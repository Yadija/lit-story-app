import { html } from 'lit';
import { allLocales } from '../../../generated/locale-codes';
import { updateWhenLocaleChanges } from '@lit/localize';
import { getLocale, localeNames, setLocaleFromUrl } from '../../localization.js';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class LocalePicker extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    const localeImages = {
      en: '/images/locales/en.svg',
      id: '/images/locales/id.svg',
      ja: '/images/locales/ja.svg',
      ko: '/images/locales/ko.svg',
    };

    return html`
      <section class="dropup">
        <button
          class="btn btn-secondary dropdown-toggle d-flex align-items-center gap-1"
          role="button"
          id="Dropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src=${localeImages[getLocale()]}
            alt="${localeNames[getLocale()]}"
            style="width: 20px; height: 20px; vertical-align: middle;"
            class="rounded-circle"
          />
          ${localeNames[getLocale()]}
        </button>

        <section class="dropdown-menu" aria-labelledby="Dropdown">
          ${allLocales.map((locale) => {
            const imageUrl = localeImages[locale];
            return html`
              <button
                class="dropdown-item"
                type="button"
                @click=${this._localeChanged}
                value=${locale}
              >
                <img
                  src=${imageUrl}
                  alt="${localeNames[locale]}"
                  style="width: 20px; height: 20px; vertical-align: middle;"
                  class="rounded-circle border"
                />
                ${localeNames[locale]}
              </button>
            `;
          })}
        </section>
      </section>
    `;
  }

  _localeChanged(event) {
    const newLocale = event.target.value;

    if (newLocale !== getLocale()) {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', newLocale);

      window.history.pushState(null, '', url.toString());
      setLocaleFromUrl();
    }
  }
}

customElements.define('locale-picker', LocalePicker);
