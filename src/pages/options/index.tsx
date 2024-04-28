import { createRoot } from 'react-dom/client';
import '@pages/options/index.scss';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';
import '@assets/style/theme.css';
import OptionsLayout from './layout/OptionsLayout';
import '@fontsource/roboto/500.css';

refreshOnUpdate('pages/options');
function init() {
  const appContainer = document.querySelector('#app-container');
  if (!appContainer) {
    throw new Error('Can not find #app-container');
  }
  const root = createRoot(appContainer);
  root.render(<OptionsLayout />);
}

init();
