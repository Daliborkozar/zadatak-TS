import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./containers/HomePage";
import CategoryPage from "./containers/CategoryPage";
import SingleMealPage from "./containers/SingleMealPage";
import SearchPage from "./containers/SearchPage";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <main>
          <Switch>
            <Route path="/meal/:id">
              <SingleMealPage />
            </Route>
            <Route path="/mymeals/:username">
              <SingleMealPage />
            </Route>
            <Route path="/category/:cat">
              <CategoryPage />
            </Route>
            <Route path="/search/:recpie">
              <SearchPage />
            </Route>
            <Route path="/" exact>
              <HomePage />
            </Route>
          </Switch>
        </main>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
