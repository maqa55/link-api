import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import MyRouter from './routes/MyRouter';

function App() {
  return (
    <>
    <Header/>
      <MyRouter/>
      <Footer/>
    </>
  );
}

export default App;
