import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import HowItWorks from './Components/Home/HowItWorks/HowItWorks'

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route exact path='/howitworks' component={HowItWorks} /> */}
        {/* <Route path='/courses' component={CoursesOffered} />
        <Route path='/plans' component={OurPlans} />
        <Route path='/about' component={AboutUs} />
        <Route path='/login' component={login} /> */}
        <Redirect to='/' />
      </Switch>
    </>
  );
}

export default App;