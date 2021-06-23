import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './services/firebase'
import './styles/global.scss';

// O método render é executado somente uma vez e ele é responsável por renderizar algum elemento dentror do HTML. Neste caso, o elemento ID=root
// O arquivo .App é importado acima e também é uma função. Ela está localizada no arquivo App.tsx
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

