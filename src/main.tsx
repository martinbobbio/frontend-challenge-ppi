// React
import React from 'react';
import ReactDOM from 'react-dom/client';
// Components
import Router from './Router.tsx';
import { ThemeWrapper, SWRWrapper } from '@/wrappers';
// Styles
import GlobalStyles from './GlobalStyles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeWrapper>
    <SWRWrapper>
      <GlobalStyles />
      <React.StrictMode>
        <Router />
      </React.StrictMode>
    </SWRWrapper>
  </ThemeWrapper>
);
