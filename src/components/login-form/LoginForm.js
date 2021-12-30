import React, {useState} from "react"; 
import {Form, Button} from "react-bootstrap";
import classes from "./LoginForm.module.css";
import Card from "../UI/Card";

const LoginForm = ({token, handleLogin}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await setError(false);
            await handleLogin(username, password);
            await setPassword("")
            await setUsername("")
        } catch(err){
            console.log(err)
            setError(true);
        }
    }
    const renderFeedback = () => {
        if(error){
            return <p className={classes.feedback}>Incorrect credentials.</p>
        }
    }
    return (
        <Card className={classes.cardWrapper}>
        <section className={classes.formWrapper}>
            <h1>Login</h1><br />
            <Form>
                <Form.Group  className={classes.wrapper}>
                    <Form.Label htmlFor="username">
                    Username:
                    <Form.Control name="username" type="text" isInvalid={error}
                    required value={username} 
                    onChange={(e) => setUsername(e.target.value)} />
                    </Form.Label>
                    <Form.Label htmlFor="password">
                    Password:
                    <Form.Control name="password" type="password" value={password} required isInvalid={error}
                    onChange={(e) => setPassword(e.target.value)} />
                    </Form.Label>
                    {renderFeedback()}
                    <Button variant="success" type="submit" onClick={handleSubmit}>
                    Login
                    </Button>
                </Form.Group>
            </Form>
        </section>
        </Card>
    )
}

export default LoginForm;
