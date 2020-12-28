import './App.css';
import ImageFetch from './containers/ImageFetch';
import ImageDetails from './containers/ImageDetails';
import {BrowserRouter, Switch, Route} from 'react-router-dom' ;

function App() {
  return (
    <div className="App">
    <BrowserRouter>

      <Route path="/" exact component={ImageFetch} />
      <Route path="/:id" exact component={ImageDetails} />

    </BrowserRouter> 
    </div>
  );
}

export default App;
