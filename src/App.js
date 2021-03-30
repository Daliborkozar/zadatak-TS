import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./containers/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <main>
          
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route path="/" exact>
              <HomePage/>
            </Route>
         
        </main>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
