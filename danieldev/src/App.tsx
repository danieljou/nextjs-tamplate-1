import Cryoto from "./Cryoto";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login";
import Nav from "./Nav";
import SectionLangind1 from "./SectionLangind1";

function App() {
  return (
    <>

    <Nav></Nav>
      <Header />

      <div className="my-5"></div>
      <Cryoto />
      
      <div className="my-5"></div>
      <Login></Login>
      <SectionLangind1 />
      <Footer />
    </>
  );
}

export default App;
