import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Navbar';
import Home from './Home';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Blogs from './Blogs';
import BlogItem from './BlogItem';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div>

            <Router>
                <Header />
                <main className="container">
                    <div className="main">
                        <Switch>
                            <Route exact path="/blogs" component={Blogs} />
                            <Route exact path="/blog/:title" component={BlogItem} />
                            <Route exact path="/about-me" component={AboutMe} />
                            <Route exact path="/contact-me" component={ContactMe} />
                            <Route exact path="/" component={Home} />
                        </Switch>
                    </div>
                </main>
            </Router>
        </div>
    )
}

export default App;