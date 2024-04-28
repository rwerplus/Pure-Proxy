import React from 'react';
import '@pages/options/Options.scss';
// import { pacScriptData } from '@pages/options/helper/generatePac';
import '@/assets/style/normalize.scss';

// function EmberPanel() {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const handleClick = type => {
//     if (type) {
//       chrome.runtime.sendMessage({ type: 'clear', message: null }).then(r => console.log(r));
//       return;
//     }
//     const config = {
//       mode: 'pac_script',
//       pacScript: {
//         data: pacScriptData,
//       },
//     };
//     chrome.runtime.sendMessage({ proxy: config }).then(r => console.log(r));
//   };
//
//   return (
//     <div>
//       <button onClick={handleClick}>测试</button>
//       <button onClick={() => handleClick('clear')}>清除代理</button>
//     </div>
//   );
// }
//
// function ReactPanel() {
//   return null;
// }

const Options: React.FC = () => {
  // const [selectedTabId, setSelectedTabId] = useState('rx');
  // function handleTabChange(value) {
  //   setSelectedTabId(value);
  //   console.info('🥀 ~ file:Options line:34 -----', value);
  // }

  return <div className="container">Options---</div>;
};

export default Options;
