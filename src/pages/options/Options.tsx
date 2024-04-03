import React from 'react';
import '@pages/options/Options.css';

const Options: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClick = () => {
    const config = {
      mode: 'fixed_servers',
      rules: {
        singleProxy: {
          scheme: 'http',
          host: '127.0.0.1',
          port: 7900,
        },
        bypassList: ['<local>'],
      },
    };
    chrome.runtime.sendMessage({ proxy: config });
  };
  return (
    <div className="container">
      Options---
      {/* <Button onClick={handleClick}>测试中</Button> */}
    </div>
  );
};

export default Options;
