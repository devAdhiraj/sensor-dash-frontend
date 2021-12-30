import React, {useState, useEffect, useContext} from "react";
import DataList from "../components/all-sensor-data/data-list/DataList";
import DataContext from "../components/store/DataContext";
import LoginForm from "../components/login-form/LoginForm";
import AddDataForm from "../components/add-data-form/AddDataForm";
import Graphs from "../components/all-sensor-data/graphs/Graphs";
import LiveData from "../components/live-sensor-data/LiveData";
import DeleteModal from "../components/UI/DeleteModal";
import { Button, Spinner } from "react-bootstrap";
import classes from "./Admin.module.css";

const Admin = () => {
  const [jwt, setJwt] = useState();
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const context = useContext(DataContext);

  useEffect(() => {
    fetchJwt();
    if((!context.data_list.length || context.data_list.length === 0) && context.no_data === false){
      return context.update_data();
    }
  }, [jwt, context]);

  const fetchJwt = async () => {
    try{
      const resp = await fetch("/jwt-cookie");
      const token = await resp.json();
      await setJwt(token);
    } catch(err){
      console.log(err)
    }
    await setLoading(false);
  }

  const handleRemove = (id) => {
    setShowModal(id);
  }

  const deleteData = async() => {
    try{
      await fetch("/api/sensors", {
        method: "DELETE",
        headers: {"token": jwt, "Content-type": "application/json"},
        body: JSON.stringify([showModal])
      });
      context.update_data()
    } catch(err){
      setJwt(false);
    }
    setShowModal(false);
  }

  const login =  async (username, password) => {
    try{
      const resp = await fetch("/api/sensors/admin-login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          "username": username,
          "password": password
        })
      });
      if(resp.status !== 200){
        throw new Error()
      }
      const token = await resp.json();
      await setJwt(token);

    } catch(err){
      throw new Error();
    }
  }
  
  const logout = async () => {
    console.log("logging out")
    try{
      await fetch("/api/sensors/admin-logout", {
        method: "POST",
      });
      await setJwt(false);
    } catch(err){
      console.log(err);
    }
  }

  if(loading){
    return (
      <div className={classes.loading}>
        <Spinner animation="grow" variant="primary" />
      </div>
    );
  }

  if(jwt){
      return (
        <section>
          <DeleteModal show={showModal} onConfirm={deleteData} onCancel={() => setShowModal(false)} />
          <AddDataForm token={jwt} />
          <LiveData />
          <Graphs data={context.graph_data} />
          <DataList data={context.data_list} adminAction={handleRemove} />
          <div>
          <Button className={classes.logoutBtn} variant="success" onClick={logout}>Logout</Button>
          </div>
        </section>
      );
    } else {
      return ( <LoginForm handleLogin={login} />)
    }
};
export default Admin;
