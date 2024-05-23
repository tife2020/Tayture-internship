import AuthInputs from './components/AuthInputs.jsx';
import AuthInputs2 from './components/AuthInputs2.jsx';
import Header from './components/Header.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>

        <h2 >Styled with styled-component</h2>
        <AuthInputs />
        <h2 >Styled with CSS Modules</h2>
        <AuthInputs2 />
      </main>
    </>
  );
}
