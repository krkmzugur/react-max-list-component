import React, { useState } from 'react';
import TabButton from './TabButton';
import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    //...props kullanarak Section bileşenine ek özellikler geçebilirsiniz. Bu, bileşeni daha esnek hale getirir ve istediğiniz herhangi bir id, style, veya başka bir özel özellik eklemenize olanak tanır.
    <Section id="examples" title="Examples" className="oneClass">
      <Tabs
        buttons={
          <>
            <menu>
              <TabButton
                isSelected={selectedTopic === 'components'}
                onSelect={() => handleSelect('components')}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={selectedTopic === 'jsx'}
                onSelect={() => handleSelect('jsx')}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={selectedTopic === 'props'}
                onSelect={() => handleSelect('props')}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={selectedTopic === 'state'}
                onSelect={() => handleSelect('state')}
              >
                State
              </TabButton>
            </menu>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}

export default Examples;
