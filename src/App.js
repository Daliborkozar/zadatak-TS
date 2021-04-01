import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./containers/HomePage";
import CategoryPage from "./containers/CategoryPage";
import SingleMealPage from "./containers/SingleMealPage";


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <main>
          <Route path="/meal/:id">
            <SingleMealPage />
          </Route>
          <Route path="/category/:cat">
            <CategoryPage />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </main>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
