# AD Sensor Dashboard Frontend
This is the frontend react web app for the sensor dashboard.\
The web app is hosted at [https://ad-sensor-dash.herokuapp.com](https://ad-sensor-dash.herokuapp.com).
Git Repository for backend: [https://github.com/devAdhiraj/sensor-dash-backend](https://github.com/devAdhiraj/sensor-dash-backend)\
Git repository for device code: [https://github.com/devAdhiraj/Sensor-dash-device-code](https://github.com/devAdhiraj/Sensor-dash-device-code)\

### Progressive Wep App
The web app is optimized and uses a service-worker, which enables it to be downloaded on android devices. 

### Visualization
The frontend uses APIs to fetch and query data.
The frontend uses the [Recharts](https://recharts.org/en-US/) library to create graphs to visualize the data.

### Admin Page
The admin page uses a login form which is authenticated using a custom login API. The login API returns a JWT token which is stored in an HTTP Only cookie to persist the session. The JWT and the cookie stay valid for 40 mins after issue time.

Once logged in, the admin page provides access to add and delete data entries. The token will also be used when the user makes add/delete requests to verify the user has access to perform these actions.

<img src="https://user-images.githubusercontent.com/75645547/148710626-fd7c7246-1f30-4402-a506-fbcdbf1a68b6.png" height="300">

<img src="https://user-images.githubusercontent.com/75645547/148710641-5051d05e-303b-40cc-b919-c254fc99bc72.png" height="300">

<img src="https://user-images.githubusercontent.com/75645547/148710652-b78dd63c-5f61-48f4-8dc0-ef7b0c2e4b4b.png" height="300">

