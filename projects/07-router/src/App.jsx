import Router from './Router';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import SearchPage from './pages/Search';

function App() {
  return (
    <main>
      <Router routes={[
        {
    path: '/search/:query',
    Component: SearchPage
        },
        {
          path: '/emi',
          Component: () => <h1>You was totally PWNED by Emi! :v</h1>
        },
      ]} />
    </main>
  );
}

export default App
