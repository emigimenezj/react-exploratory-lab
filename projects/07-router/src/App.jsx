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
        }
      ]} />
    </main>
  );
}

export default App
