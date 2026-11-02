import { createI18n } from "vue-i18n";

const messages = {
  en: {
    message: {
      hello: "Hello World",
    },
  },
  kh: {
    message: {
      hello: "សួស្តី​ពិភពលោក",
    },
  },
};

const i18n = createI18n({
  locale: "kh",
  fallbackLocale: "en",
  messages,
});

export default i18n;
