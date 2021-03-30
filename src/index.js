import ReactDom from 'react-dom'
import AppAdmin from './admin/adminPanel/AppAdmin'
import {BrowserRouter as Router, Switch} from 'react-router-dom'



ReactDom.render(
  <Router>
    <Switch>
      <AppAdmin/>
    </Switch>
     
  </Router>
  
  ,document.getElementById("root")
);