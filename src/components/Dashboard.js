// src/components/Dashboard.js
// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Navbar, Card, Spinner } from 'react-bootstrap';
import axios from 'axios';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data when component mounts
    const fetchUser = async () => {
      try {
        const res = await axios.get('/api/auth/me', {
          headers: { 'x-auth-token': localStorage.getItem('token') }
        });
        setUser(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand>Task Manager</Navbar.Brand>
          <div className="d-flex align-items-center">
            {user && <Navbar.Text className="mx-3">Welcome, {user.username}</Navbar.Text>}
            <Button variant="outline-light" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </Container>
      </Navbar>

      <Container>
        <Card>
          <Card.Body>
            <h2 className="text-center">Welcome to your Dashboard</h2>
            <div className="text-center mt-4">
              <p>Start managing your tasks by creating your first task!</p>
              <Button variant="primary">Create Task</Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Dashboard;
