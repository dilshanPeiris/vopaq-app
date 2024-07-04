'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';

import inquiryStyles from './styles/inqury-section.module.css'

import ContactForm from './contact-form';
import ContactFormStyles from './styles/contact-form.module.css';

import { Button, ButtonGroup } from "@nextui-org/button";


export default function InqurySection() {

    return (

        <section className={inquiryStyles.inqurySection}>
            <div className={inquiryStyles.overlay}>
                <div className={`container ${inquiryStyles.inquiryMainContainer} ${inquiryStyles.container}`}>
                    <div className="row">
                        <div className={`col-xxl-12 col-lg-12 col-md-12 col-sm-12 col-12 ${inquiryStyles.subContainer}`}>
                            <div className={`col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-6 ${inquiryStyles.subContainerLeft}`}>
                                <div className={inquiryStyles.subContainerTitleInformationCard}>
                                    <div className={inquiryStyles.subContainerSubTitleText}>
                                        Write us
                                    </div>
                                    <div className={inquiryStyles.subContainerTitleText}>
                                        Get in Touch
                                    </div>
                                </div>
                                <div className={inquiryStyles.subContainerInformationCard}>
                                    <div className={inquiryStyles.subContainerDescription}>
                                        Don’t be Shy. Give us a call or drop us line.
                                        Let’s make some magic together.
                                    </div>

                                    <div className={inquiryStyles.caseStudyButtons}>
                                        <Button className={inquiryStyles.buttonOne}>
                                            Contact Us
                                        </Button>

                                        <Button className={inquiryStyles.buttonTwo}>
                                            About Us
                                        </Button>
                                    </div>
                                </div>


                            </div>
                            <div className={`col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 ${inquiryStyles.subContainerRight}`}>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
}