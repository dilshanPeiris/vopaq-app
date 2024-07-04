'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';

import caseStudiesStyles from './styles/case-studies-section.module.css'

import { Button, ButtonGroup } from "@nextui-org/button";

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


export default function CaseStudies() {



    return (

        <section className={caseStudiesStyles.sectionCaseStudy}>
            <div className={`container ${caseStudiesStyles.caseStudiesMainContainer} ${caseStudiesStyles.container}`}>
                <div className="row">
                    <div className={caseStudiesStyles.sectionTitle}>
                        <div>
                            case studies
                        </div>
                    </div>
                    <div className={`col-xxl-12 col-lg-12 col-md-12 col-sm-12 col-12 ${caseStudiesStyles.subContainer}`}>
                        <div className={`col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 ${caseStudiesStyles.subContainerLeft}`}>
                            <div className={caseStudiesStyles.subContainerContent}>
                                <div className={caseStudiesStyles.subContainerTitleText}>
                                    Real Success Stories
                                </div>
                                <div className={caseStudiesStyles.subContainerDescription}>
                                    At Vopaq Consultancy, we are dedicated to revolutionizing the business process outsourcing (BPO) landscape. Headquartered in Australia with operational staff situated in Sri Lanka.
                                </div>
                            </div>

                            <div className={caseStudiesStyles.caseStudyButtons}>

                                <Button className={caseStudiesStyles.buttonOne}>
                                    View Case Studies
                                </Button>

                            </div>

                        </div>
                        <div className={`col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12  ${caseStudiesStyles.subContainerRight}`}>
                            <div className={`col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12  ${caseStudiesStyles.caseStudyCardOne}`}>

                                <div className={caseStudiesStyles.caseStudyCardContent}>

                                    <div className={caseStudiesStyles.caseStudyCardIntroduction}>
                                        {/* <img src={case01} /> */}
                                        <div className={caseStudiesStyles.CaseStudyTitle}>
                                            Tech Innovators Inc
                                        </div>
                                        <div className={caseStudiesStyles.CaseStudyDescription}>
                                            Explore how we partnered with Tech Innovators Inc.
                                        </div>

                                        <div className={caseStudiesStyles.caseStudyCardButton}>

                                            <Button className={caseStudiesStyles.caseStudyButtonOne}>
                                                View Case Study
                                            </Button>

                                        </div>


                                    </div>

                                    <div className={caseStudiesStyles.caseStudyRating}>
                                        <div className={caseStudiesStyles.caseStudyReviewerProfileImage}>

                                        </div>
                                        <div className={caseStudiesStyles.caseStudyRatingAndReviewDetails}>
                                            <div className={caseStudiesStyles.caseStudyRatingValue}>
                                                <Stack spacing={1}>
                                                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                                </Stack>
                                            </div>
                                            <div className={caseStudiesStyles.caseStudyReviewDetails}>
                                                "Rapid expansion—unmatched achievement."
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={`col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12  ${caseStudiesStyles.caseStudyCardTwo}`}>
                                <div className={caseStudiesStyles.caseStudyCardContent}>

                                    <div className={caseStudiesStyles.caseStudyCardIntroduction}>
                                        {/* <img src={case01} /> */}
                                        <div className={caseStudiesStyles.CaseStudyTitle}>
                                            Global Bank Ltd
                                        </div>
                                        <div className={caseStudiesStyles.CaseStudyDescription}>
                                            Discover the success journey of Global Bank Ltd.
                                        </div>

                                        <div className={caseStudiesStyles.caseStudyCardButton}>

                                            <Button className={caseStudiesStyles.caseStudyButtonOne}>
                                                View Case Study
                                            </Button>

                                        </div>


                                    </div>

                                    <div className={caseStudiesStyles.caseStudyRating}>
                                        <div className={caseStudiesStyles.caseStudyReviewerProfileImage}>

                                        </div>
                                        <div className={caseStudiesStyles.caseStudyRatingAndReviewDetails}>
                                            <div className={caseStudiesStyles.caseStudyRatingValue}>
                                                <Stack spacing={1}>
                                                    <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                                                </Stack>
                                            </div>
                                            <div className={caseStudiesStyles.caseStudyReviewDetails}>
                                                "Transformative collaboration that reshaped our path."
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    );
}