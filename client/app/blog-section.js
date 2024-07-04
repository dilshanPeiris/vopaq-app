'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button, ButtonGroup } from "@nextui-org/button";

// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';

import blogStyles from './styles/blog-section.module.css';

export default function Blog() {

    return (
        <section className={blogStyles.sectionBlog}>
            <div className={`container ${blogStyles.mainContainer} ${blogStyles.container}`}>
                <div className="row">
                    <div className={blogStyles.sectionTitle}>
                        <div>
                            Latest Blogs
                        </div>
                    </div>
                    <div className={`col-xxl-12vcol-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ${blogStyles.subContainer}`}>
                        <div className={`col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 ${blogStyles.subContainerLeft}`}>
                            <div className={blogStyles.subContainerContent}>
                                <div className={blogStyles.subContainerTitleText}>
                                    Real Success Stories
                                </div>
                                <div className={blogStyles.subContainerDescription}>
                                    At Vopaq Consultancy, we are dedicated to revolutionizing the business process outsourcing (BPO) landscape. Headquartered in Australia with operational staff situated in Sri Lanka.
                                </div>
                            </div>

                            <div className={blogStyles.blogButtons}>
                                <Button className={blogStyles.buttonOne}>
                                    View All Blogs
                                </Button>
                            </div>
                        </div>
                        <div className={`col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 ${blogStyles.subContainerRight}`}>
                            <div className={blogStyles.sliderContent}>

                                <div className={`col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 ${blogStyles.blogCard}`}>
                                    <div className={blogStyles.blogThumbnail}>
                                        {/* image */}
                                        <div className={blogStyles.blogPublishDate}>
                                            <div className={blogStyles.blogDay}>
                                                1
                                            </div>
                                            <div className={blogStyles.blogMonth}>
                                                Nov
                                            </div>

                                        </div>
                                    </div>
                                    <div className={blogStyles.blogCategory}>
                                        Research & development
                                    </div>
                                    <div className={blogStyles.blogTitle}>
                                        Tech Innovators Launch Cutting-Edge AI R&D Center
                                    </div>
                                    <div className={blogStyles.blogDescription}>
                                        Explore the intricacies of strategic planning and discover how it can
                                        transform your business landscape.
                                    </div>

                                    <div className={blogStyles.blogCardButton}>

                                        <Button className={blogStyles.blogButtonOne}>
                                            Read Article
                                        </Button>

                                    </div>

                                </div>

                                <div className={`col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-6  ${blogStyles.blogCard}`}>
                                    <div className={blogStyles.blogThumbnail}>
                                        {/* image */}
                                        <div className={blogStyles.blogPublishDate}>
                                            <div className={blogStyles.blogDay}>
                                                1
                                            </div>
                                            <div className={blogStyles.blogMonth}>
                                                Nov
                                            </div>

                                        </div>
                                    </div>
                                    <div className={blogStyles.blogCategory}>
                                        Research & development
                                    </div>
                                    <div className={blogStyles.blogTitle}>
                                        FinTech Solutions Invests in Blockchain R&D Center
                                    </div>
                                    <div className={blogStyles.blogDescription}>
                                        Explore the intricacies of strategic planning and discover how it can
                                        transform your business landscape.
                                    </div>

                                    <div className={blogStyles.blogCardButton}>

                                        <Button className={blogStyles.blogButtonOne}>
                                            Read Article
                                        </Button>

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