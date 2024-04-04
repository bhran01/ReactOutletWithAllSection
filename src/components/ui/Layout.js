import { Row ,Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import React from 'react';
import Aside from './Aside';
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      <Header/>
      <main>
        <Row className='h-100'>
          <Col sm={4} className='a_tbdr h-100'><Aside/></Col>
          <Col sm={8} className='a_tbdr h-100'><Outlet/></Col>
        </Row>
      </main>
      <Footer/>
    </>
  )
}
