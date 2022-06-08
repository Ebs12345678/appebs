import React from 'react';
import expertimg from '../icon/expert.png';
import supportimg from '../icon/support.png';
import servicesimg from '../icon/services.png';

export const Boxservices = () => {
  return (
    <div className="container">
      <div className="row">
        <div className='col-md-3'>
          <div className='fst-sec'>
            <img className='expert-img' src={expertimg} />
            {/* <div className='img-sec-blk'>
              <img className='expert-img' src={serimg} />
            </div> */}
            <div className='expertcnt'>
              <h4 className="expert-cnt"> EXPERT </h4>
              <div className='expert-custm'>CUSTOMER SERVICE</div>

            </div>
          </div>

        </div>
        <div className='col-md-3'>
        <div className='fst-sec'>
            <img className='expert-img' src={supportimg} />
            {/* <div className='img-sec-blk'>
              <img className='expert-img' src={serimg} />
            </div> */}
            <div className='expertcnt'>
              <h4 className="expert-cnt"> SUPPORT </h4>
              <div className='expert-custm'>CUSTOMER SERVICE</div>

            </div>
          </div>
        </div>
        <div className='col-md-3'>
        <div className='fst-sec'>
            <img className='expert-img' src={servicesimg} />
            {/* <div className='img-sec-blk'>
              <img className='expert-img' src={serimg} />
            </div> */}
            <div className='expertcnt'>
              <h4 className="expert-cnt"> EXPERT </h4>
              <div className='expert-custm'>CUSTOMER SERVICE</div>

            </div>
          </div>
        </div>
        <div className='col-md-3'>
        <div className='fst-sec'>
            <img className='expert-img' src={servicesimg} />
            {/* <div className='img-sec-blk'>
              <img className='expert-img' src={serimg} />
            </div> */}
            <div className='expertcnt'>
              <h4 className="expert-cnt"> EXPERT </h4>
              <div className='expert-custm'>CUSTOMER SERVICE</div>

            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
