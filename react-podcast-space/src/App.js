import React, { lazy, Suspense } from 'react';
import DataProvider from '././data/dataProvider.js';
import './App.css';

const Header = lazy(() => import('./components/page/header.js'));
const Content = lazy(() => import('./components/page/content.js'));

class App extends React.Component {
  render() {
    return (
      <div className="app" data-testid="app">
        <DataProvider>
          <div className="header-wrapper">
            <Suspense fallback={<div className="spinner">Loading Header</div>}>
              <Header />
            </Suspense>
          </div>
          <div className="content-wrapper">
            <Suspense fallback={<div className="spinner">Loading Content</div>}>
              <Content />
            </Suspense>
          </div>
        </DataProvider>
      </div>
    );
  }
}

export default App;
