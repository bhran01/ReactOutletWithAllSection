import React from 'react'
import { Nav } from 'react-bootstrap'

export default function Navbar() {
    return (
        <>
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/register">Register</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}
