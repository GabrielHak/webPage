import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter backgroundColor='light' className='text-center text-lg-left'>

      <div className='text-center p-3' style={{ backgroundColor: 'rgb(0,0,0)', color: 'rgb(255,255,255)'}}>
        <MDBContainer className='p-4'>
          <MDBRow>
            <MDBCol lg='6' md='6' sm='12' className='mb-4 mb-md-0'>
              <a href='https://www.linkedin.com/in/roberto-gabriel-hak-6988b71a2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BfvSQSyZBRyKbJlHQ3JzBFA%3D%3D'
                className='text-white-50'
                target='blank'>
                    LinkedIn
              </a>
            </MDBCol>
            <MDBCol lg='6' md='6' sm='12' className='mb-4 mb-md-0'>
              <a href='https://github.com/GabrielHak' className='text-white-50' target='blank'>
                    GitHub
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

    </MDBFooter>
  );
}