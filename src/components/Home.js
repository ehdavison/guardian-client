import React from 'react';
import {useState} from 'react';
import AccountSettings from './AccountSettings';
import Tasks from './Tasks'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import {signOut} from '../api/auth'

const Home = (props) => {
    const [settingsPage, setSettingsPage] = useState(false)
    const [tasksPage, setTasksPage] = useState(false)

    const onSignOut = () => {
        signOut(props.userToken)
        .then(props.setLoggedIn(false))
        .catch((err) => {
        console.log(err)
        })
    }

    const goHome = () => {
        setSettingsPage(false)
        setTasksPage(false)
    }

    const goSettings = () => {
        setTasksPage(false)
        setSettingsPage(true)
    }

    const goTasks = () => {
        setTasksPage(true)
        setSettingsPage(false)
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand onClick={() => goHome()}>Growth</Navbar.Brand>
                <Nav className="mr-auto">
                    <NavDropdown title="Account" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Stats</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => goSettings()}>Account Settings</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => onSignOut()}>Log Out</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link onClick={() => goTasks()}>Tasks</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                </Nav>
            </Navbar>
            {!settingsPage && !tasksPage && (
                <div>
                    <h1>HOMEPAGE</h1>
                    <p>This is the homepage</p>
                </div>
            )}

            {settingsPage && (
                <div>
                    <AccountSettings userToken={props.userToken}></AccountSettings>
                </div>
            )}

            {tasksPage && (
                <div>
                    <Tasks userToken={props.userToken}></Tasks>
                </div>
            )}

            


        </div>
    );
};

export default Home;