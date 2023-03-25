import Router from './Router';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
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

function App() {
  return (
    <main>
      <Router routes={appRoutes}>
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={AboutPage} />
      </Router>
    </main>
  );
}

export default App
