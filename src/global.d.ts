import en from "./services/i18n/messages/en.json";

type Messages = typeof en;

declare global {
  interface IntlMessages extends Messages {}
  interface IntlFormats extends Formats {}
}
