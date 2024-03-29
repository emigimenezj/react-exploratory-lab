import { lazy, Suspense } from 'react';

import Router from './Router';
import SearchPage from './pages/Search';
import { Route } from './Route';


const appRoutes = [
  {
    path: '/search/:query',
    Component: SearchPage
  },
  {
    path: '/emi',
    Component: () => <h1>You was totally PWNED by Emi! :v</h1>
  },
];

const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={appRoutes}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App
