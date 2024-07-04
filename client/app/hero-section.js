'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, ButtonGroup } from "@nextui-org/button";

import heroStyles from './styles/hero-section.module.css'


export default function HeroSection() {



    return (
        <section>
            <div className={`container ${heroStyles.mainContainer} ${heroStyles.container}`}>
                <div className="row">
                    <div className={`col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex ${heroStyles.row}`}>
                        <div className={`col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-6 ${heroStyles.subContainerLeft}`}>
                            <div className={heroStyles.titleText}>
                                <div className={heroStyles.titleTextPartOne}>
                                    Lorem Ipsum,
                                </div>
                                <div className={heroStyles.titleTextPartTwo}>
                                    Pellentesque
                                    Suspit.
                                </div>

                                <div className={heroStyles.heroDescription}>

                                    <div className={heroStyles.heroDescriptionText}>
                                        Steer your future with our cutting-edge consulting services, where today's innovations shape the leadership strategies driving your business to the forefront of tomorrow.
                                    </div>
                                </div>

                                <div className={heroStyles.heroButtons}>

                                    <Button className={heroStyles.buttonOne}>
                                        Our Services
                                    </Button>

                                    <Button className={heroStyles.buttonTwo}>
                                        Our Services
                                    </Button>
                                </div>

                            </div>





                        </div>
                        <div className={`col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-6 ${heroStyles.subContainerRight}`}>
                            {/* <Image
                    src= "/hero-1.png"
                    alt="Descriptive text for screen readers"
                    width={500}
                    height={300}
                    layout="responsive"
                /> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}