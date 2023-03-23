import Router from './Router';
import AboutPage from './pages/About';
import HomePage from './pages/Home';

function App() {
  return (
    <main>
      <Router routes={[
        {
          path: '/',
          Component: HomePage
        },
        {
          path: '/about',
          Component: AboutPage
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
