import React from "react";
import { BrowserRouter,Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header />
        <main>
          <Route path="/product/:id" component={ProductScreen} exact />
          <Route path="/" component={HomeScreen} exact />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
