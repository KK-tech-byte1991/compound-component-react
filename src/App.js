import React, { useState } from 'react';
import './style.css';
import Tab from './Tab';

export default function App() {
  const [current, setCurrent] = useState(0);
  const handleChange = (newTab) => {
    setCurrent(newTab);
  };
  return (
    <div>
      <Tab currentTab={current} onChange={handleChange}>
        <Tab.HeaderComponent>
          <Tab.Item label="Tab1" index={0} />
          <Tab.Item label="Tab2" index={1} />
          <Tab.Item label="Tab3" index={2} />
          <Tab.Item label="Tab4" index={3} />
          <Tab.Item label="Tab5" index={4} />
        </Tab.HeaderComponent>
        <Tab.ContentContainer>
          <Tab.Content index={0}>
            <h1>Hi I am Content 1</h1>
          </Tab.Content>
          <Tab.Content index={1}>
            <h1>Hi I am Content 2</h1>
          </Tab.Content>
          <Tab.Content index={2}>
            <h1>Hi I am Content 3</h1>
          </Tab.Content>
          <Tab.Content index={3}>
            <h1>Hi I am Content 4</h1>
          </Tab.Content>
          <Tab.Content index={4}>
            <h1>Hi I am Content 5</h1>
          </Tab.Content>
        </Tab.ContentContainer>
      </Tab>
    </div>
  );
}
