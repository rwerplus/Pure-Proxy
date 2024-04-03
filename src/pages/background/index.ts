import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';
import 'webextension-polyfill';
import { logger } from '@src/shared/Logger';

reloadOnUpdate('pages/background');

/**
 * Extension reloading is necessary because the browser automatically caches the css.
 * If you do not use the css of the content script, please delete it.
 */
reloadOnUpdate('pages/content/style.scss');

logger.info('background loaded');
// chrome.runtime.onInstalled.addListener(() => {
//   const config = {
//     mode: "fixed_servers",
//     rules: {
//       singleProxy: {
//         scheme: "http",
//         host: "your.proxy.host",
//         port: parseInt("your_proxy_port")
//       },
//       bypassList: ["<local>"]
//     }
//   };
//
//   chrome.proxy.settings.set({value: config, scope: "regular"}, function() {});
// });

// 监听来自弹出页面的消息，以便动态更新代理设置
chrome.runtime.onMessage.addListener(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function (request, sender, sendResponse) {
    console.info('🥀 ~ file:index line:34 -----', request);
    if (request.proxy) {
      chrome.proxy.settings.set({ value: request.proxy, scope: 'regular' }, function () {});
    }
  },
);
