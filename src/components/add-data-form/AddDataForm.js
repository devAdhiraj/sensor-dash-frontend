import React, {useState, useContext} from "react"; 
import {Form, Button, Toast, ToastContainer} from "react-bootstrap";
import DataContext from "../store/DataContext";
import classes from "./AddDataForm.module.css"

const AddDataForm = ({token}) => {
    const [temperature, setTemperature] = useState("");
    const [humidity, setHumidity] = useState("");
    const [light, setLight] = useState("");
    const [show, setShow] = useState(false);
    const context = useContext(DataContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            fetch("/api/sensors/add", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "token": token
                },
                body: JSON.stringify({
                    temp: temperature,
                    humid: humidity,
                    light: light
                })
            })
            context.update_data();
            setShow(true);
            setTemperature("")
            setHumidity("")
            setLight("")
        } catch(err){
            console.log(err);
        }
    }

    return (
        <section className={classes.formWrapper}>
                    <ToastContainer className="p-3" position={"bottom-start"}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide position="bottom-start">
            <Toast.Header>
                Data added successfully.
            </Toast.Header>
        </Toast>
        </ToastContainer>
        <h1>Add Data</h1>
        <Form >
            <Form.Group  className={classes.wrapper}>
                <Form.Label htmlFor="temperature">
                Temperature:
                <Form.Control name="temperature" type="number" value={temperature} 
                onChange={(e) => setTemperature(e.target.value)} />
                </Form.Label>
                <Form.Label htmlFor="humidity">
                Humidity:
                <Form.Control name="humidity" type="number" value={humidity} 
                onChange={(e) => setHumidity(e.target.value)} />
                </Form.Label>
                <Form.Label htmlFor="light">
                Light:
                <Form.Control name="light" type="number" value={light} 
                onChange={(e) => setLight(e.target.value)} />
                </Form.Label>

                <Button type="submit" onClick={handleSubmit}>
                Add
                </Button>
            </Form.Group>
        </Form>
        </section>
    )
}

export default AddDataForm;
