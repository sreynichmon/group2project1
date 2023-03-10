import React from 'react';
import BreadCrumb from "../components/BreadCrumb";

import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi"
import Container from '../components/Container';

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us "} />
      <BreadCrumb title="Contact Us " />
      <Container class1='contact-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250151.45210774185!2d104.75009928279677!3d11.579330574244747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1678611947258!5m2!1sen!2skh" 
                width="600" 
                height="450" 
                className='border-0 w-100'
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-4'>Contact</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input 
                        type="text" 
                        className='form-control'
                        placeholder='Name'
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        className='form-control'
                        placeholder='Email'
                      />
                    </div>
                    <div>
                      <input 
                        type="tel" 
                        className='form-control'
                        placeholder='Phone Number'
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className='w-100 form-control'
                        cols="30"
                        rows="4"
                        placeholder='Comments'
                      ></textarea>
                    </div>
                    <div>
                    <button type="button" className="btn btn-secondary btn-lg">Send</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title'>Get in touch with us</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineHome className='fs-5' />
                        <address className='mb-0'>
                          Sangkat Phnom Penh Tmey, Phnom Penh City, Cambodia
                        </address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiPhoneCall className='fs-5' />
                        <a href="tel: +855 1234567">
                          +855 1234567
                        </a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineMail className='fs-5' />
                        <a href="mailto: fuyukistore@outlook.com">
                          fuyukistore@outlook.com
                        </a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiInfoCircle className='fs-5' />
                        <p className='mb-0'>Opening Hours: Monday - Friday 09:00AM - 10:00PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default Contact;