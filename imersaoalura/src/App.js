import './App.css';
import 'font-awesome/css/font-awesome.min.css';

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;