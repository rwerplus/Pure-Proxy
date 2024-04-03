export const handleRuleList = (rules: Array<string>) => {
  const ruleMap = new Map();

  rules.forEach(rule => {
    if (rule.startsWith('||')) {
      const domain = rule.slice(2);
      ruleMap.set(domain, 'PROXY blackhole:80');
    }
    // 这里可以添加更多规则的处理逻辑...
  });

  // 生成PAC脚本
  const pacScriptData = `
    function FindProxyForURL(url, host) {
      // 将规则哈希表转换为对象，用于在PAC脚本中查找
      const ruleMap = ${JSON.stringify(Object.fromEntries(ruleMap))};
    
      // 检查当前访问的域名是否在规则哈希表中
      if (ruleMap[host]) {
        return ruleMap[host];
      }
    
      // 如果没有找到匹配的规则，直接连接
      return 'DIRECT';
    }
  `;

  // Chrome扩展API设置代理
  const config = {
    mode: 'pac_script',
    pacScript: {
      data: pacScriptData,
    },
  };

  chrome.proxy.settings.set({ value: config, scope: 'regular' }, function () {
    console.log('Proxy settings updated with efficient data structure.');
  });
};
