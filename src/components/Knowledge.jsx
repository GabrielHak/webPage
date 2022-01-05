import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { MDBCard, MDBCardBody, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';

export default function knowledge() {
    return (
        <main class="my-5" style={{minHeight:'100vh'}}>
          <MDBContainer className='mb-3'>
            <MDBRow>
              <MDBRow className='mb-3'>
                <MDBCol sm='12' md='6' lg='4' className='col-example mb-3'>
                    <MDBCard style={{ width: '18rem' }}>
                    <MDBCardImage src='https://www.masterseosem.com/images/etiquetas-html.webp' alt='Sunset Over the Sea' position='top' />
                    <MDBCardBody>
                        <MDBCardText>
                            HTML
                        </MDBCardText>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol sm='12' md='6' lg='4' className='col-example mb-3'>
                <MDBCard style={{ width: '18rem' }}>
                    <MDBCardImage src='https://bellcodess.com/images/css.png' alt='Sunset Over the Sea' position='top' />
                    <MDBCardBody>
                    <MDBCardText>
                        CSS
                    </MDBCardText>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol sm='12' md='6' lg='4' className='col-example mb-3'>
                    <MDBCard style={{ width: '18rem' }}>
                    <MDBCardImage src='https://conceptodefinicion.de/wp-content/uploads/2017/10/Javascript2.jpg' alt='Sunset Over the Sea' position='top' />
                    <MDBCardBody>
                    <MDBCardText>
                        JavaScript
                    </MDBCardText>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>

              </MDBRow>

              <MDBRow className='mb-3'>

                <MDBCol sm='12' md='6' lg='4' className='col-example mb-3'>
                    <MDBCard style={{ width: '18rem' }}>
                    <MDBCardImage src='https://cardbiss.com/wp-content/uploads/2021/10/Core-Java-Training.jpg' alt='Sunset Over the Sea' position='top' />
                    <MDBCardBody>
                    <MDBCardText>
                        Java for desktop and mobile apps
                    </MDBCardText>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol sm='12' md='6' lg='4' className='col-example mb-3'>
                    <MDBCard style={{ width: '18rem' }}>
                    <MDBCardImage src='https://victorroblesweb.es/wp-content/uploads/2019/06/image-course-intro-react.png' alt='Sunset Over the Sea' position='top' />
                    <MDBCardBody>
                        <MDBCardText>
                            React and coming soon React Native
                        </MDBCardText>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol sm='12' md='6' lg='4' className='col-example mb-3'>
                    <MDBCard style={{ width: '18rem' }}>
                        <MDBCardImage src='https://lookimg.com/images/2019/05/14/Wz6Ut.png' alt='Sunset Over the Sea' position='top' />
                        <MDBCardBody>
                            <MDBCardText>
                                MDBootstrap
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

              </MDBRow>
            </MDBRow>
          </MDBContainer>
        </main>
    );
  }