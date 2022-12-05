import React from "react";
import Layout from "./components/Layout/Layout";
import { FirstSection } from "./pages/index";

function App() {
  return (
    <div className="App" style={{maxWidth: '1920px', margin: 'auto', background: "#010101"}}>
      <Layout>
        <FirstSection/>
      </Layout>
    </div>
  );
}

export default App;
