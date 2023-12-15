import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'; // Import the global CSS file

import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import GradeReportPage from './components/GradeReportPage';
import MissingGradeFormPage from './components/MissingGradeFormPage';
import InstructorContactPage from './components/InstructorContactPage';
import HelpSupportPage from './components/HelpSupportPage';


function App() {
  return (
    <Router>
      <div>
        {/* Navbar/sidebar */}
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/grade-report" component={GradeReportPage} />
          <Route path="/missing-grade-form" component={MissingGradeFormPage} />
          <Route path="/instructor-contact" component={InstructorContactPage} />
          <Route path="/help-support" component={HelpSupportPage} />
        </Switch>
        {/* Footer */}
      </div>
    </Router>
  );
}

export default App;