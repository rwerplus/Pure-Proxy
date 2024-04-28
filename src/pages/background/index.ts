import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';
import 'webextension-polyfill';
import { logger } from '@src/shared/Logger';
import { StorageType } from '@src/shared/storages/base';

reloadOnUpdate('pages/background');

/**
 * Extension reloading is necessary because the browser automatically caches the css.
 * If you do not use the css of the content script, please delete it.
 */
reloadOnUpdate('pages/content/style.scss');

logger.info('background loaded');

// 监听来自弹出页面的消息，以便动态更新代理设置
chrome.runtime.onMessage.addListener(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function (request, sender, sendResponse) {
    console.info('background loaded', StorageType.Local);
    if (request.type === 'clear') {
      clearProxy();
    } else {
      console.info('🥀 ~ file:index line:34 -----', request);
      setTemporaryProxy('127.0.0.1', '15732');
      // if (request.proxy) {
      //   chrome.proxy.settings.set({ value: request.proxy, scope: 'regular' }, function () {});
      // }
    }
  },
);

// 监听代理错误
chrome.proxy.onProxyError.addListener(function (error) {
  console.error(`Proxy error: ${error.details}`);
});

// 监听代理配置变化
chrome.proxy.settings.onChange.addListener(function (details) {
  console.log('Proxy settings changed', details);
});

// 获取当前的代理配置
chrome.proxy.settings.get({ incognito: false }, function (config) {
  console.log('Current proxy configuration', config);
});

// 临时更改代理配置
function setTemporaryProxy(proxyHost: string, proxyPort: string) {
  const config = {
    mode: 'fixed_servers',
    rules: {
      singleProxy: {
        scheme: 'http',
        host: proxyHost,
        port: parseInt(proxyPort),
      },
    },
  };
  chrome.proxy.settings.set({ value: config, scope: 'regular' }, function () {
    console.log('Current proxy set to:', proxyHost + ':' + proxyPort);
  });
}

// 清除代理设置并恢复为系统代理
function clearProxy() {
  chrome.proxy.settings.clear({ scope: 'regular' }, function () {
    console.log('Proxy settings cleared, back to system proxy.');
  });
}

// 示例：设置临时代理
// setTemporaryProxy("代理服务器地址", "代理服务器端口");

// 示例：清除代理设置
// clearProxy();
