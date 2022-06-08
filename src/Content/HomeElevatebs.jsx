import React from 'react';
import chosusimg from '../images/whychooseus.jpg';

export const HomeElevatebs = () => {
  return (
    <div>
      <div className='row hm-chos-blk'>
          <div className='col-md-6'>
          <h4 className='hm-chos-tlt'>Why Will You Choose</h4>
          <level className='hm-chos-subtxt'>Our Company ?</level>
          <p className='hm-chos-txt'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but also the leap into 
          electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing 
          Lorem Ipsum passages, and more recently with desktop publishing software like 
          Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          </div>
          <div className='col-md-6 hmchosusimgblk'>
              <img className='hmchosusimg' src={chosusimg} />

          </div>
      </div>
      

    </div>
  )
}
