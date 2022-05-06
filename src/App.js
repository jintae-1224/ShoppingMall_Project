import Footer from "./components/Footer";
import Header from "./components/Header";
import Orders from "./components/Orders";
import ProtoTypes from "./components/ProtoTypes";

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <ProtoTypes />
        <Orders />
        <Footer />
      </div>
    </>
  );
}

export default App;
