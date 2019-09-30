import { flattenMessages } from '../flattenMessages';
import errorText from './errorText.js';
import uiText from './uiText';

export default {
  ...flattenMessages(uiText),
  ...flattenMessages(errorText),
};