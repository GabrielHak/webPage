import React from 'react';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';

export default function Contact(){
    return (
        <div className='text-center my-5' style={{minHeight:'100vh'}} id='contact'>
            <h1>Contact me</h1>

            <MDBCard className='my-5'>
                <MDBCardHeader>Email</MDBCardHeader>
                <MDBCardBody>
                    <MDBCardTitle>robertohak270997@gmail.com</MDBCardTitle>
                    <MDBCardText></MDBCardText>
                    <MDBBtn href='#contact' className='bg-dark'>Send me a email</MDBBtn>
                </MDBCardBody>
            </MDBCard>

            <MDBCard className='my-5'>
                <MDBCardHeader>WhatsApp</MDBCardHeader>
                <MDBCardBody>
                    <MDBCardTitle>0351 157722667</MDBCardTitle>
                    <MDBCardText></MDBCardText>
                    <MDBBtn href='#contact' className='bg-dark'>Send me a text</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
}
