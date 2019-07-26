import React, { ReactElement } from 'react';
import TabNav from './components/TabNav';
import Header from './components/Header';
import AppRouter from './components/AppRouter';

export default function App(): ReactElement {
  return (
    <main>
      <Header />
      <TabNav />
      <AppRouter />
    </main>
  );
}
