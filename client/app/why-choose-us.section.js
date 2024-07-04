'use client';

import { useState } from 'react';
import Link from 'next/link';

// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';

import whyChooseUsStyles from './styles/why-choose-us-section.module.css'

import React, { Component } from "react";
import Slider from "react-slick";


export default function WhyChooseUS() {


    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 19000,
        autoplaySpeed: 0,

        cssEase: "linear",
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        // pauseOnHover: true
    }




    return (
        <section>
            {/* className={whyChooseUsStyles.sectionWhyChooseUS} */}

            <div className={`container ${whyChooseUsStyles.mainContainer} ${whyChooseUsStyles.container}`}>

                <div className="row">
                    <div className={`col-xxl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex p-0 me-1 ${whyChooseUsStyles.subContainer}`}>
                        <div className={`col-xxl-6 col-lg-6 col-md-6 col-sm-6 col-6 ${whyChooseUsStyles.subContainerLeft}`}>
                            <div className={whyChooseUsStyles.subContainerLeftContent}>
                                <div className={whyChooseUsStyles.subContainerLeftTitleText}>
                                    Why Choose Us
                                </div>
                                <div className={whyChooseUsStyles.subContainerLeftDescriptionText}>
                                    We prioritize personalized solutions over generic ones because we recognize the uniqueness of each challenge.
                                </div>
                            </div>
                        </div>

                        <div className={`col-xxl-6 col-lg-6 col-md-6 col-sm-6 col-6 ${whyChooseUsStyles.subContainerRight}`}>
                            <div className={whyChooseUsStyles.subContainerContent}>
                                <div className={whyChooseUsStyles.sectionTitle}>
                                    Why Choose Us?
                                </div>

                                <div className={whyChooseUsStyles.subContainerDescription}>
                                    With years of experience in the BPO industry, Vopaq Consultancy combines deep expertise with innovative strategies to deliver exceptional service.                    </div>
                            </div>

                            <div className={whyChooseUsStyles.featureCards}>
                                <Slider {...settings}>
                                    <div className={whyChooseUsStyles.featureCard}>
                                        <div className={whyChooseUsStyles.featureIcon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                                <path d="M22.5 13V9C22.5 4 20.5 2 15.5 2H9.5C4.5 2 2.5 4 2.5 9V15C2.5 20 4.5 22 9.5 22H13.5" stroke="#19191A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M7.83008 14.49L10.2101 11.4C10.5501 10.96 11.1801 10.88 11.6201 11.22L13.4501 12.66C13.8901 13 14.5201 12.92 14.8601 12.49L17.1701 9.51001" stroke="#19191A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M19.9802 15.8199L20.2602 16.3899C20.4002 16.6699 20.7502 16.9299 21.0602 16.9899L21.4402 17.0499C22.5802 17.2399 22.8502 18.0799 22.0302 18.9099L21.6802 19.2599C21.4502 19.4999 21.3202 19.9599 21.3902 20.2799L21.4402 20.4899C21.7502 21.8699 21.0202 22.3999 19.8202 21.6799L19.5602 21.5299C19.2502 21.3499 18.7502 21.3499 18.4402 21.5299L18.1802 21.6799C16.9702 22.4099 16.2402 21.8699 16.5602 20.4899L16.6102 20.2799C16.6802 19.9599 16.5502 19.4999 16.3202 19.2599L15.9702 18.9099C15.1502 18.0799 15.4202 17.2399 16.5602 17.0499L16.9402 16.9899C17.2402 16.9399 17.6002 16.6699 17.7402 16.3899L18.0202 15.8199C18.5602 14.7299 19.4402 14.7299 19.9802 15.8199Z" stroke="#19191A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <div className={whyChooseUsStyles.featureTitle}>
                                            Expertise and Experience
                                        </div>
                                        <div className={whyChooseUsStyles.featureDescription}>
                                            With years of experience in the BPO industry, Vopaq Consultancy combines deep expertise with innovative strategies to deliver exceptional service.
                                        </div>
                                        <div className={whyChooseUsStyles.featurePoints}>
                                            <div className={whyChooseUsStyles.featurePoint}>
                                                <div className={whyChooseUsStyles.featurePointIcon}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                        <path d="M14.375 8.75C14.375 8.84946 14.3355 8.94484 14.2652 9.01517C14.1948 9.08549 14.0995 9.125 14 9.125H8.875V14.25C8.875 14.3495 8.83549 14.4448 8.76517 14.5152C8.69484 14.5855 8.59946 14.625 8.5 14.625C8.40054 14.625 8.30516 14.5855 8.23484 14.5152C8.16451 14.4448 8.125 14.3495 8.125 14.25V9.125H3C2.90054 9.125 2.80516 9.08549 2.73483 9.01517C2.66451 8.94484 2.625 8.84946 2.625 8.75C2.625 8.65054 2.66451 8.55516 2.73483 8.48484C2.80516 8.41451 2.90054 8.375 3 8.375H8.125V3.25C8.125 3.15054 8.16451 3.05516 8.23484 2.98483C8.30516 2.91451 8.40054 2.875 8.5 2.875C8.59946 2.875 8.69484 2.91451 8.76517 2.98483C8.83549 3.05516 8.875 3.15054 8.875 3.25V8.375H14C14.0995 8.375 14.1948 8.41451 14.2652 8.48484C14.3355 8.55516 14.375 8.65054 14.375 8.75Z" fill="#19191A" />
                                                    </svg>
                                                </div>
                                                <div className={whyChooseUsStyles.featurePointDescription}>
                                                    Comprehensive Industry Knowledge
                                                </div>
                                            </div>

                                            <div className={whyChooseUsStyles.featurePoint}>
                                                <div className={whyChooseUsStyles.featurePointIcon}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                        <path d="M14.375 8.75C14.375 8.84946 14.3355 8.94484 14.2652 9.01517C14.1948 9.08549 14.0995 9.125 14 9.125H8.875V14.25C8.875 14.3495 8.83549 14.4448 8.76517 14.5152C8.69484 14.5855 8.59946 14.625 8.5 14.625C8.40054 14.625 8.30516 14.5855 8.23484 14.5152C8.16451 14.4448 8.125 14.3495 8.125 14.25V9.125H3C2.90054 9.125 2.80516 9.08549 2.73483 9.01517C2.66451 8.94484 2.625 8.84946 2.625 8.75C2.625 8.65054 2.66451 8.55516 2.73483 8.48484C2.80516 8.41451 2.90054 8.375 3 8.375H8.125V3.25C8.125 3.15054 8.16451 3.05516 8.23484 2.98483C8.30516 2.91451 8.40054 2.875 8.5 2.875C8.59946 2.875 8.69484 2.91451 8.76517 2.98483C8.83549 3.05516 8.875 3.15054 8.875 3.25V8.375H14C14.0995 8.375 14.1948 8.41451 14.2652 8.48484C14.3355 8.55516 14.375 8.65054 14.375 8.75Z" fill="#19191A" />
                                                    </svg>
                                                </div>
                                                <div className={whyChooseUsStyles.featurePointDescription}>
                                                    Proven Track Record
                                                </div>
                                            </div>

                                            <div className={whyChooseUsStyles.featurePoint}>
                                                <div className={whyChooseUsStyles.featurePointIcon}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                        <path d="M14.375 8.75C14.375 8.84946 14.3355 8.94484 14.2652 9.01517C14.1948 9.08549 14.0995 9.125 14 9.125H8.875V14.25C8.875 14.3495 8.83549 14.4448 8.76517 14.5152C8.69484 14.5855 8.59946 14.625 8.5 14.625C8.40054 14.625 8.30516 14.5855 8.23484 14.5152C8.16451 14.4448 8.125 14.3495 8.125 14.25V9.125H3C2.90054 9.125 2.80516 9.08549 2.73483 9.01517C2.66451 8.94484 2.625 8.84946 2.625 8.75C2.625 8.65054 2.66451 8.55516 2.73483 8.48484C2.80516 8.41451 2.90054 8.375 3 8.375H8.125V3.25C8.125 3.15054 8.16451 3.05516 8.23484 2.98483C8.30516 2.91451 8.40054 2.875 8.5 2.875C8.59946 2.875 8.69484 2.91451 8.76517 2.98483C8.83549 3.05516 8.875 3.15054 8.875 3.25V8.375H14C14.0995 8.375 14.1948 8.41451 14.2652 8.48484C14.3355 8.55516 14.375 8.65054 14.375 8.75Z" fill="#19191A" />
                                                    </svg>
                                                </div>
                                                <div className={whyChooseUsStyles.featurePointDescription}>
                                                    Continuous Learning and Improvement
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={whyChooseUsStyles.featureCard}>
                                        <div className={whyChooseUsStyles.featureIcon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                <path d="M8.5 11.78C8.5 12.55 9.1 13.18 9.83 13.18H11.33C11.97 13.18 12.49 12.63 12.49 11.96C12.49 11.23 12.17 10.97 11.7 10.8L9.3 9.95996C8.82 9.78996 8.5 9.52996 8.5 8.79996C8.5 8.12996 9.02 7.57996 9.66 7.57996H11.16C11.9 7.58996 12.5 8.20996 12.5 8.97996" stroke="#19191A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M10.5 13.23V13.97" stroke="#19191A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M10.5 6.79004V7.57004" stroke="#19191A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M10.49 18.36C14.9028 18.36 18.48 14.7828 18.48 10.37C18.48 5.95725 14.9028 2.38 10.49 2.38C6.07724 2.38 2.5 5.95725 2.5 10.37C2.5 14.7828 6.07724 18.36 10.49 18.36Z" stroke="#19191A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M13.48 20.26C14.38 21.53 15.85 22.36 17.53 22.36C20.26 22.36 22.48 20.14 22.48 17.41C22.48 15.75 21.66 14.28 20.41 13.38" stroke="#19191A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <div className={whyChooseUsStyles.featureTitle}>
                                            Cost Efficiency
                                        </div>
                                        <div className={whyChooseUsStyles.featureDescription}>
                                            We understand that each business is unique. That’s why we tailor our BPO services to fit your specific requirements.                        </div>
                                        <div className={whyChooseUsStyles.featurePoints}>
                                            <div className={whyChooseUsStyles.featurePoint}>
                                                <div className={whyChooseUsStyles.featurePointIcon}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                        <path d="M14.375 8.75C14.375 8.84946 14.3355 8.94484 14.2652 9.01517C14.1948 9.08549 14.0995 9.125 14 9.125H8.875V14.25C8.875 14.3495 8.83549 14.4448 8.76517 14.5152C8.69484 14.5855 8.59946 14.625 8.5 14.625C8.40054 14.625 8.30516 14.5855 8.23484 14.5152C8.16451 14.4448 8.125 14.3495 8.125 14.25V9.125H3C2.90054 9.125 2.80516 9.08549 2.73483 9.01517C2.66451 8.94484 2.625 8.84946 2.625 8.75C2.625 8.65054 2.66451 8.55516 2.73483 8.48484C2.80516 8.41451 2.90054 8.375 3 8.375H8.125V3.25C8.125 3.15054 8.16451 3.05516 8.23484 2.98483C8.30516 2.91451 8.40054 2.875 8.5 2.875C8.59946 2.875 8.69484 2.91451 8.76517 2.98483C8.83549 3.05516 8.875 3.15054 8.875 3.25V8.375H14C14.0995 8.375 14.1948 8.41451 14.2652 8.48484C14.3355 8.55516 14.375 8.65054 14.375 8.75Z" fill="#19191A" />
                                                    </svg>
                                                </div>
                                                <div className={whyChooseUsStyles.featurePointDescription}>
                                                    Optimized Resource Allocation
                                                </div>
                                            </div>

                                            <div className={whyChooseUsStyles.featurePoint}>
                                                <div className={whyChooseUsStyles.featurePointIcon}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                        <path d="M14.375 8.75C14.375 8.84946 14.3355 8.94484 14.2652 9.01517C14.1948 9.08549 14.0995 9.125 14 9.125H8.875V14.25C8.875 14.3495 8.83549 14.4448 8.76517 14.5152C8.69484 14.5855 8.59946 14.625 8.5 14.625C8.40054 14.625 8.30516 14.5855 8.23484 14.5152C8.16451 14.4448 8.125 14.3495 8.125 14.25V9.125H3C2.90054 9.125 2.80516 9.08549 2.73483 9.01517C2.66451 8.94484 2.625 8.84946 2.625 8.75C2.625 8.65054 2.66451 8.55516 2.73483 8.48484C2.80516 8.41451 2.90054 8.375 3 8.375H8.125V3.25C8.125 3.15054 8.16451 3.05516 8.23484 2.98483C8.30516 2.91451 8.40054 2.875 8.5 2.875C8.59946 2.875 8.69484 2.91451 8.76517 2.98483C8.83549 3.05516 8.875 3.15054 8.875 3.25V8.375H14C14.0995 8.375 14.1948 8.41451 14.2652 8.48484C14.3355 8.55516 14.375 8.65054 14.375 8.75Z" fill="#19191A" />
                                                    </svg>
                                                </div>
                                                <div className={whyChooseUsStyles.featurePointDescription}>
                                                    Scalable Solutions
                                                </div>
                                            </div>

                                            <div className={whyChooseUsStyles.featurePoint}>
                                                <div className={whyChooseUsStyles.featurePointIcon}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                        <path d="M14.375 8.75C14.375 8.84946 14.3355 8.94484 14.2652 9.01517C14.1948 9.08549 14.0995 9.125 14 9.125H8.875V14.25C8.875 14.3495 8.83549 14.4448 8.76517 14.5152C8.69484 14.5855 8.59946 14.625 8.5 14.625C8.40054 14.625 8.30516 14.5855 8.23484 14.5152C8.16451 14.4448 8.125 14.3495 8.125 14.25V9.125H3C2.90054 9.125 2.80516 9.08549 2.73483 9.01517C2.66451 8.94484 2.625 8.84946 2.625 8.75C2.625 8.65054 2.66451 8.55516 2.73483 8.48484C2.80516 8.41451 2.90054 8.375 3 8.375H8.125V3.25C8.125 3.15054 8.16451 3.05516 8.23484 2.98483C8.30516 2.91451 8.40054 2.875 8.5 2.875C8.59946 2.875 8.69484 2.91451 8.76517 2.98483C8.83549 3.05516 8.875 3.15054 8.875 3.25V8.375H14C14.0995 8.375 14.1948 8.41451 14.2652 8.48484C14.3355 8.55516 14.375 8.65054 14.375 8.75Z" fill="#19191A" />
                                                    </svg>
                                                </div>
                                                <div className={whyChooseUsStyles.featurePointDescription}>
                                                    Transparent Pricing
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={whyChooseUsStyles.featureCard}>
                                        <div className={whyChooseUsStyles.featureIcon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                <path d="M10.9901 2.99007L6.00015 4.86007C4.85015 5.29007 3.91016 6.65007 3.91016 7.88007V15.3101C3.91016 16.4901 4.69017 18.0401 5.64017 18.7501L9.94016 21.9601C11.3502 23.0201 13.6701 23.0201 15.0801 21.9601L19.3802 18.7501C20.3302 18.0401 21.1101 16.4901 21.1101 15.3101V7.88007C21.1101 6.65007 20.1701 5.29007 19.0201 4.86007L14.0302 2.99007C13.1802 2.68007 11.8201 2.68007 10.9901 2.99007Z" stroke="#19191A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M12.5 16.26C14.7091 16.26 16.5 14.4691 16.5 12.26C16.5 10.0509 14.7091 8.26001 12.5 8.26001C10.2909 8.26001 8.5 10.0509 8.5 12.26C8.5 14.4691 10.2909 16.26 12.5 16.26Z" stroke="#19191A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M12.75 11.01V11.94C12.75 12.29 12.57 12.62 12.26 12.8L11.5 13.26" stroke="#19191A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <div className={whyChooseUsStyles.featureTitle}>
                                            24/7 Reliable Support
                                        </div>
                                        <div className={whyChooseUsStyles.featureDescription}>
                                            Our operational staff is available around the clock to ensure seamless service delivery.
                                        </div>
                                        <div className={whyChooseUsStyles.featurePoints}>
                                            <div className={whyChooseUsStyles.featurePoint}>
                                                <div className={whyChooseUsStyles.featurePointIcon}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                        <path d="M14.375 8.75C14.375 8.84946 14.3355 8.94484 14.2652 9.01517C14.1948 9.08549 14.0995 9.125 14 9.125H8.875V14.25C8.875 14.3495 8.83549 14.4448 8.76517 14.5152C8.69484 14.5855 8.59946 14.625 8.5 14.625C8.40054 14.625 8.30516 14.5855 8.23484 14.5152C8.16451 14.4448 8.125 14.3495 8.125 14.25V9.125H3C2.90054 9.125 2.80516 9.08549 2.73483 9.01517C2.66451 8.94484 2.625 8.84946 2.625 8.75C2.625 8.65054 2.66451 8.55516 2.73483 8.48484C2.80516 8.41451 2.90054 8.375 3 8.375H8.125V3.25C8.125 3.15054 8.16451 3.05516 8.23484 2.98483C8.30516 2.91451 8.40054 2.875 8.5 2.875C8.59946 2.875 8.69484 2.91451 8.76517 2.98483C8.83549 3.05516 8.875 3.15054 8.875 3.25V8.375H14C14.0995 8.375 14.1948 8.41451 14.2652 8.48484C14.3355 8.55516 14.375 8.65054 14.375 8.75Z" fill="#19191A" />
                                                    </svg>
                                                </div>
                                                <div className={whyChooseUsStyles.featurePointDescription}>
                                                    24/7 Availability
                                                </div>
                                            </div>

                                            <div className={whyChooseUsStyles.featurePoint}>
                                                <div className={whyChooseUsStyles.featurePointIcon}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                        <path d="M14.375 8.75C14.375 8.84946 14.3355 8.94484 14.2652 9.01517C14.1948 9.08549 14.0995 9.125 14 9.125H8.875V14.25C8.875 14.3495 8.83549 14.4448 8.76517 14.5152C8.69484 14.5855 8.59946 14.625 8.5 14.625C8.40054 14.625 8.30516 14.5855 8.23484 14.5152C8.16451 14.4448 8.125 14.3495 8.125 14.25V9.125H3C2.90054 9.125 2.80516 9.08549 2.73483 9.01517C2.66451 8.94484 2.625 8.84946 2.625 8.75C2.625 8.65054 2.66451 8.55516 2.73483 8.48484C2.80516 8.41451 2.90054 8.375 3 8.375H8.125V3.25C8.125 3.15054 8.16451 3.05516 8.23484 2.98483C8.30516 2.91451 8.40054 2.875 8.5 2.875C8.59946 2.875 8.69484 2.91451 8.76517 2.98483C8.83549 3.05516 8.875 3.15054 8.875 3.25V8.375H14C14.0995 8.375 14.1948 8.41451 14.2652 8.48484C14.3355 8.55516 14.375 8.65054 14.375 8.75Z" fill="#19191A" />
                                                    </svg>
                                                </div>
                                                <div className={whyChooseUsStyles.featurePointDescription}>
                                                    Proactive Monitoring
                                                </div>
                                            </div>

                                            <div className={whyChooseUsStyles.featurePoint}>
                                                <div className={whyChooseUsStyles.featurePointIcon}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                        <path d="M14.375 8.75C14.375 8.84946 14.3355 8.94484 14.2652 9.01517C14.1948 9.08549 14.0995 9.125 14 9.125H8.875V14.25C8.875 14.3495 8.83549 14.4448 8.76517 14.5152C8.69484 14.5855 8.59946 14.625 8.5 14.625C8.40054 14.625 8.30516 14.5855 8.23484 14.5152C8.16451 14.4448 8.125 14.3495 8.125 14.25V9.125H3C2.90054 9.125 2.80516 9.08549 2.73483 9.01517C2.66451 8.94484 2.625 8.84946 2.625 8.75C2.625 8.65054 2.66451 8.55516 2.73483 8.48484C2.80516 8.41451 2.90054 8.375 3 8.375H8.125V3.25C8.125 3.15054 8.16451 3.05516 8.23484 2.98483C8.30516 2.91451 8.40054 2.875 8.5 2.875C8.59946 2.875 8.69484 2.91451 8.76517 2.98483C8.83549 3.05516 8.875 3.15054 8.875 3.25V8.375H14C14.0995 8.375 14.1948 8.41451 14.2652 8.48484C14.3355 8.55516 14.375 8.65054 14.375 8.75Z" fill="#19191A" />
                                                    </svg>
                                                </div>
                                                <div className={whyChooseUsStyles.featurePointDescription}>
                                                    Continuous Improvement
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={whyChooseUsStyles.featureCard}>
                                        <div className={whyChooseUsStyles.featureIcon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                <path d="M7.37988 18.2902V16.2202" stroke="#19191A" stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M12.5 18.2901V14.1501" stroke="#19191A" stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M17.6201 18.2901V12.0701" stroke="#19191A" stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M17.6199 5.99023L17.1599 6.53023C14.6099 9.51023 11.1899 11.6202 7.37988 12.5702" stroke="#19191A" stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M14.6899 5.99023H17.6199V8.91023" stroke="#19191A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M9.5 22.1401H15.5C20.5 22.1401 22.5 20.1401 22.5 15.1401V9.14014C22.5 4.14014 20.5 2.14014 15.5 2.14014H9.5C4.5 2.14014 2.5 4.14014 2.5 9.14014V15.1401C2.5 20.1401 4.5 22.1401 9.5 22.1401Z" stroke="#19191A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <div className={whyChooseUsStyles.featureTitle}>
                                            Enhanced Operational Efficiency
                                        </div>
                                        <div className={whyChooseUsStyles.featureDescription}>
                                            By partnering with us, you can streamline your operations and improve efficiency.
                                        </div>
                                        <div className={whyChooseUsStyles.featurePoints}>
                                            <div className={whyChooseUsStyles.featurePoint}>
                                                <div className={whyChooseUsStyles.featurePointIcon}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                        <path d="M14.375 8.75C14.375 8.84946 14.3355 8.94484 14.2652 9.01517C14.1948 9.08549 14.0995 9.125 14 9.125H8.875V14.25C8.875 14.3495 8.83549 14.4448 8.76517 14.5152C8.69484 14.5855 8.59946 14.625 8.5 14.625C8.40054 14.625 8.30516 14.5855 8.23484 14.5152C8.16451 14.4448 8.125 14.3495 8.125 14.25V9.125H3C2.90054 9.125 2.80516 9.08549 2.73483 9.01517C2.66451 8.94484 2.625 8.84946 2.625 8.75C2.625 8.65054 2.66451 8.55516 2.73483 8.48484C2.80516 8.41451 2.90054 8.375 3 8.375H8.125V3.25C8.125 3.15054 8.16451 3.05516 8.23484 2.98483C8.30516 2.91451 8.40054 2.875 8.5 2.875C8.59946 2.875 8.69484 2.91451 8.76517 2.98483C8.83549 3.05516 8.875 3.15054 8.875 3.25V8.375H14C14.0995 8.375 14.1948 8.41451 14.2652 8.48484C14.3355 8.55516 14.375 8.65054 14.375 8.75Z" fill="#19191A" />
                                                    </svg>
                                                </div>
                                                <div className={whyChooseUsStyles.featurePointDescription}>
                                                    Automation Solutions
                                                </div>
                                            </div>

                                            <div className={whyChooseUsStyles.featurePoint}>
                                                <div className={whyChooseUsStyles.featurePointIcon}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                        <path d="M14.375 8.75C14.375 8.84946 14.3355 8.94484 14.2652 9.01517C14.1948 9.08549 14.0995 9.125 14 9.125H8.875V14.25C8.875 14.3495 8.83549 14.4448 8.76517 14.5152C8.69484 14.5855 8.59946 14.625 8.5 14.625C8.40054 14.625 8.30516 14.5855 8.23484 14.5152C8.16451 14.4448 8.125 14.3495 8.125 14.25V9.125H3C2.90054 9.125 2.80516 9.08549 2.73483 9.01517C2.66451 8.94484 2.625 8.84946 2.625 8.75C2.625 8.65054 2.66451 8.55516 2.73483 8.48484C2.80516 8.41451 2.90054 8.375 3 8.375H8.125V3.25C8.125 3.15054 8.16451 3.05516 8.23484 2.98483C8.30516 2.91451 8.40054 2.875 8.5 2.875C8.59946 2.875 8.69484 2.91451 8.76517 2.98483C8.83549 3.05516 8.875 3.15054 8.875 3.25V8.375H14C14.0995 8.375 14.1948 8.41451 14.2652 8.48484C14.3355 8.55516 14.375 8.65054 14.375 8.75Z" fill="#19191A" />
                                                    </svg>
                                                </div>
                                                <div className={whyChooseUsStyles.featurePointDescription}>
                                                    Scalable Solutions
                                                </div>
                                            </div>

                                            <div className={whyChooseUsStyles.featurePoint}>
                                                <div className={whyChooseUsStyles.featurePointIcon}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                        <path d="M14.375 8.75C14.375 8.84946 14.3355 8.94484 14.2652 9.01517C14.1948 9.08549 14.0995 9.125 14 9.125H8.875V14.25C8.875 14.3495 8.83549 14.4448 8.76517 14.5152C8.69484 14.5855 8.59946 14.625 8.5 14.625C8.40054 14.625 8.30516 14.5855 8.23484 14.5152C8.16451 14.4448 8.125 14.3495 8.125 14.25V9.125H3C2.90054 9.125 2.80516 9.08549 2.73483 9.01517C2.66451 8.94484 2.625 8.84946 2.625 8.75C2.625 8.65054 2.66451 8.55516 2.73483 8.48484C2.80516 8.41451 2.90054 8.375 3 8.375H8.125V3.25C8.125 3.15054 8.16451 3.05516 8.23484 2.98483C8.30516 2.91451 8.40054 2.875 8.5 2.875C8.59946 2.875 8.69484 2.91451 8.76517 2.98483C8.83549 3.05516 8.875 3.15054 8.875 3.25V8.375H14C14.0995 8.375 14.1948 8.41451 14.2652 8.48484C14.3355 8.55516 14.375 8.65054 14.375 8.75Z" fill="#19191A" />
                                                    </svg>
                                                </div>
                                                <div className={whyChooseUsStyles.featurePointDescription}>
                                                    Data-Driven Insights
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </section >

    );

}