import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const history = useHistory();

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout logic, such as clearing access token from local storage or state
    // Redirect to the login page
    history.push('/LoginPage.js');
  };

  // Fetch user data on component mount or whenever necessary

  return (
    <div>
      <h2>Welcome to the Dashboard!</h2>
      {userData ? (
        <div>
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
          {/* Display other user information as needed */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Dashboard;
