import Footer from "./components/Footer";
import Header from "./components/Header";
import Orders from "./components/Orders";
import ProtoTypes from "./components/ProtoTypes";
import AppStateProvider from "./providers/AppStateProvider";

function App() {
  return (
    <AppStateProvider>
      <Header />
      <div className='container'>
        <ProtoTypes />
        <Orders />
        <Footer />
      </div>
    </AppStateProvider>
  );
}

export default App;
