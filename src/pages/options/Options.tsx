import React from 'react';
import '@pages/options/Options.css';
import { Button } from 'tdesign-react';
import { pacScriptData } from '@pages/options/helper/generatePac';

const Options: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClick = () => {
    const config = {
      mode: 'pac_script',
      pacScript: {
        data: pacScriptData,
      },
    };
    chrome.runtime.sendMessage({ proxy: config });
  };
  return (
    <div className="container">
      Options---
      <Button onClick={handleClick}>测试中</Button>
    </div>
  );
};

export default Options;
