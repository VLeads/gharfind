import Home from "./pages/Home/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SearchPage from "./pages/SearchPage/SearchPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DetailsPage from "./pages/DetailsPage/DetailsPage";
import Auth from "./Components/Auth";
import Host from "./Components/Host";

// To use router, we need switch
function App() {
  return (
    //BEM
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>

          <Route path="/auth">
            <Auth />
          </Route>

          <Route path="/details">
            <DetailsPage />
          </Route>

          <Route path="/host">
            <Host />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>

      {/* Work flow of app */}
      {/* Home */}
      {/* Header */}

      {/* Banner */}
      {/* Search dates */}

      {/* Cards */}

      {/* Footer */}

      {/* SearchPage */}
      {/* Header */}
      {/* ... */}
    </div>
  );
}

export default App;
