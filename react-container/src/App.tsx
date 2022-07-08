import * as React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Container } from './components/Container';
import { load } from 'web-component-load';

/**
 * Declaring custom element type
 *
 * Typescript will throw an error if custom element is not defined
 * in the global interface.
 */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'angular-component': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

function App() {
  React.useEffect(() => {
    load('http://localhost:4200');
  }, []);

  return (
    <div className="App">
      <Container>
        <angular-component />
      </Container>
    </div>
  );
}

export default App;
