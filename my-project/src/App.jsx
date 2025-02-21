import 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <MainContent/>
      <Footer />
    </div>
  );
};

export default App;
