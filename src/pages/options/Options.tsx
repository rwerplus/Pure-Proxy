import React, { useState } from 'react';
import '@pages/options/Options.css';
import { pacScriptData } from '@pages/options/helper/generatePac';
import { Button, Tab, Tabs, TabsExpander } from '@blueprintjs/core';
import '@/assets/style/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

function EmberPanel() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClick = type => {
    if (type) {
      chrome.runtime.sendMessage({ type: 'clear', message: null }).then(r => console.log(r));
      return;
    }
    const config = {
      mode: 'pac_script',
      pacScript: {
        data: pacScriptData,
      },
    };
    chrome.runtime.sendMessage({ proxy: config }).then(r => console.log(r));
  };

  return (
    <div>
      <Button icon="refresh" onClick={handleClick}>
        测试
      </Button>
      <Button icon="refresh" onClick={() => handleClick('clear')}>
        清除代理
      </Button>
    </div>
  );
}

function ReactPanel() {
  return null;
}

const Options: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState('rx');
  function handleTabChange(value) {
    setSelectedTabId(value);
    console.info('🥀 ~ file:Options line:34 -----', value);
  }

  return (
    <div className="container">
      Options---
      <Tabs
        id="TabsExample"
        onChange={handleTabChange}
        selectedTabId={selectedTabId}
        vertical={true}
        large={true}
        renderActiveTabPanelOnly={true}>
        <Tab id="mb" icon={'settings'} title="Ember" panel={<EmberPanel />} panelClassName="ember-panel" />
        <Tab id="rx" title="React" panel={<ReactPanel />} />
        <TabsExpander />
        <input className="bp5-input" type="text" placeholder="Search..." />
      </Tabs>
    </div>
  );
};

export default Options;
