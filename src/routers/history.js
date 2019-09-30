import { createHashHistory } from 'history';

const history = createHashHistory();

history.open = (url) => {
  window.open(`${window.location.origin}#${url}`);
}

export default history;