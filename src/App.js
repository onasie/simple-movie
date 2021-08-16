import './App.css';

//router
import { Route, Switch } from 'react-router-dom';

//components
import Layout from './hoc/Layout';

//containers
import ListBuilder from './containers/ListBuilder/ListBuilder';
import DetailBuilder from './containers/DetailBuilder/DetailBuilder';
import MyListBuilder from './containers/MyListBuilder/MyListBuilder';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={ListBuilder} />
        <Route path="/movie-detail" exact component={DetailBuilder} />
        <Route path="/my-movie-list" exact component={MyListBuilder} />
        <Route render={() => <h1>Page Not Found</h1>} />
      </Switch>
    </Layout>
  );
}

export default App;