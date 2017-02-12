const { createBrowserHistory }  = window.History;
import { Router, Route, IndexRoute } from 'inferno-router';

const store = require('../store/store.jsx');
const About = require('../components/about.jsx');
const Container = require('../components/container.jsx');

const browserHistory = createBrowserHistory();

const routes = (
        <Router history={ browserHistory }>
                <Route path="/" component={ Container } store={store} />
                <Route path="/about/:id/" component={ About } store={store} />
        </Router>
);

Inferno.render(routes, document.getElementById('root'));
