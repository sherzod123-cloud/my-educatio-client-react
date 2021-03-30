import { useEffect, useState} from 'react' 
import {Container, Row, Col, Label, Button} from 'reactstrap'
import {} from  'bootstrap/dist/css/bootstrap.min.css'
import {AvForm, AvInput, AvGroup, AvFeedback} from 'availity-reactstrap-validation'
import axios from 'axios'
import { Redirect, useHistory } from 'react-router'

 
function AuthSignIn(){

    const [data, setData] = useState({username: '', password: ''});

    const [error, setError] = useState(""); 

    const [isLog, setIsLog]=useState(false);

    const history=useHistory();

      function handleSubmit(event){
        event.preventDefault();
        try{
            axios.post("http://localhost:8081/api/auth/signin", data).then(res=>{
         localStorage.setItem("token", res.data.token);
               setIsLog(true);
               history.push("/admin/home");
               document.location.reload();
            })
        }catch(e){
            alert(e);
            setError(e);
        } 
    }
    useEffect(()=>{
        isLogin();
    },[isLog])
    
    return(
        <Container>
            <Row className="mt-4">
                <Col md={{size: 6, offset: 2}} className="border">
                    <h3 className="text-center">Login</h3>
                    <p className="text-center text-danger">{error}</p>
                    <AvForm onValidSubmit={event=>handleSubmit(event)}>
                        <AvGroup>
                            <Label htmlFor="username">Username: </Label>
                            <AvInput
                            type="text"
                            name="username"
                            id="username"
                            required
                            placeholder="Enter username"
                            onChange={event=>setData({...data, username: event.target.value})}/>
                         <AvFeedback>Username is should not be null</AvFeedback>
                        </AvGroup>
                        {data.username}
                        <AvGroup>
                            <Label htmlFor="password">Password: </Label>
                            <AvInput
                            type="password"
                            name="password"
                            id="password"
                            required
                            placeholder="Enter password"
                            onChange={event=>setData({...data, password: event.target.value})}/>
                         <AvFeedback>Password is should not be null</AvFeedback>
                        </AvGroup>
                        {data.password}
                         <Button type="reset" color={'danger'} className={"float-right"}>Reset</Button>
                        <Button type={"submit"} color={'primary'} className={"float-right mr-3"}>Login</Button>
                    </AvForm>
                    {/* {localStorage.getItem("token")? <Redirect to="/admin/teacher"/>: ""} */}
                </Col>
            </Row> 
        </Container>
    )
 }       
    const isLogin=()=>{
        return localStorage.getItem("token") ? <Redirect to="/admin/teacher"/> : ""
    }

export default AuthSignIn;