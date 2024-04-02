import React from 'react';
import '@pages/options/Options.css';
import { Button } from '@components/ui/button';

const Options: React.FC = () => {
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
      <Button onClick={handleClick}></Button>
    </div>
  );
};

export default Options;
