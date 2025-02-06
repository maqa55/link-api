import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import MyRouter from './routes/MyRouter';
import { Provider } from 'react-redux';
import store from './redux/store'; 

function App() {
  return (
    <>
    <Provider store={store}>
    <Header/>
      <MyRouter/>
      <Footer/>
      </Provider>
    </>
  );
}

export default App;
