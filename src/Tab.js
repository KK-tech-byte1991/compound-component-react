import { createContext, useContext } from 'react';
import React from 'react';
import './Tab.css';

const TabContext = createContext();
export default function Tab({ currentTab, onChange, children }) {
  return (
    <div className="tab">
      <TabContext.Provider value={{ currentTab, onChange }}>
        {children}
      </TabContext.Provider>
    </div>
  );
}

Tab.HeaderComponent = ({ children }) => {
  return <div className="headerComponent">{children}</div>;
};

Tab.Item = ({ label, index, children }) => {
  const { currentTab, onChange } = useContext(TabContext);
  const handleClick = () => {
    onChange(index);
  };
  return (
    <div
      onClick={handleClick}
      className={`item ${currentTab === index ? 'active' : null}`}
    >
      {label}
    </div>
  );
};

Tab.ContentContainer = ({ children }) => {
  return <div className="contentContainer">{children}</div>;
};

Tab.Content = ({ index, children }) => {
  const { currentTab } = useContext(TabContext);
  return currentTab === index ? <>{children}</> : null;
};
