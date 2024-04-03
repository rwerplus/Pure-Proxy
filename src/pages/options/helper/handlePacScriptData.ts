export const fetchAndProcessGFWList = gfwListUrl => {
  fetch(gfwListUrl)
    .then(response => response.text())
    .then(base64Data => {
      const decodedData = atob(base64Data);
      const rules = decodedData.split('\n');

      const validUrls = rules
        .filter(line => line && !line.startsWith('!') && !line.startsWith('['))
        .map(line => {
          if (line.startsWith('@@')) {
            // 处理白名单规则，移除前缀
            return 'WhiteList: ' + line.slice(2);
          } else if (line.startsWith('||')) {
            // 匹配域名及其所有子域名，移除前缀
            return 'Domain: ' + line.slice(2);
          } else if (line.startsWith('|')) {
            // 精确匹配规则的开始
            return 'StartsWith: ' + line.slice(1);
          } else if (line.endsWith('|')) {
            // 精确匹配规则的结束
            return 'EndsWith: ' + line.slice(0, -1);
          } else if (line.includes('^')) {
            // 特殊字符^通常表示分隔符，这里简化处理
            return 'Contains: ' + line.replace(/\^/g, '');
          } else {
            // 其他情况，默认为URL中包含指定内容即匹配
            return 'Contains: ' + line;
          }
        });

      // 示例：展示转换后的部分规则
      console.log(validUrls.slice(0, 20));
    })
    .catch(error => console.error('Error fetching or decoding GFWList:', error));
};
