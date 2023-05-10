import { useReducer } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const initialState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

function reducer(state, action) {
  const { type, payload } = action;

  if (type === 'INTERCHANGE_LANGUAGES') {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage: payload
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: payload
    }
  }

  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      fromText: payload
    }
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      result: payload
    }
  }

  return state;
}

function App() {


  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Google Translate</h1>
    </div>
  );
}

export default App;
