import React, { Fragment } from 'react';

export default function Body() {
    return (
      <Fragment>
        <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://images.idgesg.net/images/article/2021/08/sale_301208_article_image-100900756-large.jpg?auto=webp&quality=85,70')",
        minHeight:'100vh' }}
        >
          <div className='mask' style={{ backgroundColor: 'rgba(50, 50, 50, 0.7)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
                <h1 className='mb-5'>Hey, I'm Gabriel Hak</h1>
                <h4 className='mb-5'>I'm a web developer, learn more about my knowledges below</h4>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }