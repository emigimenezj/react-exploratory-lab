import './App.css'

function App() {

  return (
    <div className='page'>
      <header>
        <form className='form'>
          <input placeholder='Avengers, Star Wars, The Matrix...'></input>
          <button type='submit'>Buscar</button>
        </form>
      </header>
      
      <main>
        Acá van a estar los resultados.
      </main>
    </div>
  );
}

export default App
