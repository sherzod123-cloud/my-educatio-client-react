import {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import LayoutAdmin from './navbarAdmin/LayoutAdmin'
import HomeAdmin from './adminPages/HomeAdmin'
import AboutAdmin from './adminPages/AboutAdmin'
import CourseAdmin from './adminPages/CourseAdmin'
import TeacherAdmin from './adminPages/TeacherAdmin'
import AuthSignIn from './authAdmin/AuthSignIn'


const AuthenticatedUser=()=>{
    return(
        <Router>
            <LayoutAdmin>
                <Switch>
                    <Route path={'/admin/home'} exact={true} component={HomeAdmin}/>
                    <Route path={'/admin/teacher'} exact={true} component={TeacherAdmin}/>
                    <Route path={'/admin/course'} exact={true} component={CourseAdmin}/>
                    <Route path={'/admin/about'} exact={true} component={AboutAdmin}/>
                    <Redirect to={"/admin/home"}/>
                </Switch>
            </LayoutAdmin>
            <Route path={"/admin/sign-in"} exact={true} component={AuthSignIn}/>
        </Router>
      )
}

class AppAdmin extends Component{
   constructor(props){
       super(props);
       this.state={
           token: null
       }
   }
    checkTokenForAdmin(){
          var tokenFromServer=localStorage.getItem("token");
            if(tokenFromServer===null){
                this.setState({
                    token: tokenFromServer
                })
            }else{
                this.setState({
                    token: tokenFromServer
                })
            }
    }
    componentWillMount=()=>{
        this.checkTokenForAdmin();
    }
    componentDidUpdate=()=>{
        this.state.token===null? <Redirect to="/admin/sign-in"/>: <Redirect to="/admin/home"/> 
    }
  render(){
      return(
          <>
            {this.state.token===null? <AuthSignIn/> : <AuthenticatedUser/>}
          </>
      )
  }

}
export default AppAdmin
