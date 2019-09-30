import languageAction from "./constants";

export const SwitchLanguage = (lang) => ({
  type: languageAction.SWITCH_LANGUAGE,
  lang
})