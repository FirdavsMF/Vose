import React from 'react'
import { Link } from 'react-router-dom'

export default function Objects() {
    return (
        <>
            <div className="page-content">
                {/* <!-- INNER PAGE BANNER --> */}
                <div className="mt-bnr-inr overlay-wraper bg-parallax bg-top-center" data-stellar-background-ratio="0.5" style={{ backgroundImage: 'url(images/banner/2.jpg)' }}>
                    <div className="overlay-main bg-black opacity-07"></div>
                    <div className="container">
                        <div className="mt-bnr-inr-entry">
                            <div className="banner-title-outer">
                                <div className="banner-title-name">
                                    <h2 className="m-b0">Always dedicated and devoted</h2>
                                </div>
                            </div>
                            {/* <!-- BREADCRUMB ROW --> */}

                            <div>
                                <ul className="mt-breadcrumb breadcrumb-style-2">
                                    <li><a href="#">Home</a></li>
                                    <li>Project Grid</li>
                                </ul>
                            </div>

                            {/* <!-- BREADCRUMB ROW END --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- INNER PAGE BANNER END --> */}

                {/* <!-- SECTION CONTENT START --> */}
                <div className="section-full p-tb80 inner-page-padding">
                    <div className="container">
                        {/* <!-- PAGINATION START --> */}
                        <div className="filter-wrap p-b30 text-center">
                            <ul className="filter-navigation inline-navigation masonry-filter link-style  text-uppercase">
                                <li className="active"><a data-filter="*" href="#" data-hover="All">All</a></li>
                                <li><a data-filter=".cat-1" href="#" data-hover="Construction">Construction</a></li>
                                <li><a data-filter=".cat-2" href="#" data-hover="Renovation">Renovation</a></li>
                                <li><a data-filter=".cat-3" href="#" data-hover="Outdoor">Outdoor</a></li>
                                <li><a data-filter=".cat-4" href="#" data-hover="Interiors">Interiors </a></li>
                                <li><a data-filter=".cat-5" href="#" data-hover="Consulting">Consulting</a></li>
                            </ul>
                        </div>
                        {/* <!-- PAGINATION END --> */}

                        {/* <!-- GALLERY CONT/ENT START --> */}
                        <div className="portfolio-wrap mfp-gallery work-grid row clearfix">
                            {/* <!-- COLUMNS 1 --> */}
                            <div className="masonry-item cat-1  col-md-4 col-sm-6 m-b30">
                                <div className="image-effect-two hover-shadow">
                                    <img src="images/projects/portrait/pic1.jpg" alt="" />
                                    <div className="figcaption">
                                        <h4 className="mt-tilte">ЖИЛОЙ КОМПЛЕКС «83»</h4>
                                        <p>We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are.</p>
                                        <a href="/test" className="read-more site-button btn-effect">ПОБРОБНЕЕ</a>
                                        <a className="mfp-link" href="images/projects/portrait/pic4.jpg">
                                            <i className="fa fa-arrows-alt"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- COLUMNS 2 --> */}
                            <div className="masonry-item cat-2 col-md-4 col-sm-6 m-b30">

                                <div className="image-effect-two hover-shadow">
                                    <img src="images/projects/portrait/pic2.jpg" alt="" />
                                    <div className="figcaption">
                                        <h4 className="mt-tilte">Central City Building</h4>
                                        <p>We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are.</p>
                                        <a href="#" className="read-more site-button btn-effect">Read More</a>
                                        <a className="mfp-link" href="images/projects/portrait/pic9.jpg">
                                            <i className="fa fa-arrows-alt"></i>
                                        </a>
                                    </div>
                                </div>

                            </div>
                            {/* <!-- COLUMNS 3 --> */}
                            <div className="masonry-item cat-3 col-md-4 col-sm-6 m-b30">

                                <div className="image-effect-two hover-shadow">
                                    <img src="images/projects/portrait/pic3.jpg" alt="" />
                                    <div className="figcaption">
                                        <h4 className="mt-tilte">Nathan Brooke House</h4>
                                        <p>We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are.</p>
                                        <a href="#" className="read-more site-button btn-effect">Read More</a>
                                        <a className="mfp-link" href="images/projects/portrait/pic6.jpg">
                                            <i className="fa fa-arrows-alt"></i>
                                        </a>
                                    </div>
                                </div>

                            </div>
                            {/* <!-- COLUMNS 4 --> */}
                            <div className="masonry-item cat-4 col-md-4 col-sm-6 m-b30">

                                <div className="image-effect-two hover-shadow">
                                    <img src="images/projects/portrait/pic4.jpg" alt="" />
                                    <div className="figcaption">
                                        <h4 className="mt-tilte">Metropolitan Museum.</h4>
                                        <p>We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are.</p>
                                        <a href="#" className="read-more site-button btn-effect">Read More</a>
                                        <a className="mfp-link" href="images/projects/portrait/pic5.jpg">
                                            <i className="fa fa-arrows-alt"></i>
                                        </a>
                                    </div>
                                </div>

                            </div>
                            {/* <!-- COLUMNS 5 --> */}
                            <div className="masonry-item cat-5 col-md-4 col-sm-6 m-b30">
                                <div className="image-effect-two hover-shadow">
                                    <img src="images/projects/portrait/pic5.jpg" alt="" />
                                    <div className="figcaption">
                                        <h4 className="mt-tilte">Art Family Residence</h4>
                                        <p>We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are.</p>
                                        <a href="#" className="read-more site-button btn-effect">Read More</a>
                                        <a className="mfp-link" href="images/projects/portrait/pic7.jpg">
                                            <i className="fa fa-arrows-alt"></i>
                                        </a>
                                    </div>
                                </div>

                            </div>
                            {/* <!-- COLUMNS 6 --> */}
                            <div className="masonry-item cat-4 col-md-4 col-sm-6 m-b30">
                                <div className="image-effect-two hover-shadow">
                                    <img src="images/projects/portrait/pic6.jpg" alt="" />
                                    <div className="figcaption">
                                        <h4 className="mt-tilte">Office Partition Walls</h4>
                                        <p>We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are.</p>
                                        <a href="#" className="read-more site-button btn-effect">Read More</a>
                                        <a className="mfp-link" href="images/projects/portrait/pic8.jpg">
                                            <i className="fa fa-arrows-alt"></i>
                                        </a>
                                    </div>
                                </div>

                            </div>
                            {/* <!-- COLUMNS 7 --> */}
                            <div className="masonry-item cat-3 col-md-4 col-sm-6 m-b30">
                                <div className="image-effect-two hover-shadow">
                                    <img src="images/projects/portrait/pic7.jpg" alt="" />
                                    <div className="figcaption">
                                        <h4 className="mt-tilte">Glass Office Screen</h4>
                                        <p>We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are.</p>
                                        <a href="#" className="read-more site-button btn-effect">Read More</a>
                                        <a className="mfp-link" href="images/projects/portrait/pic11.jpg">
                                            <i className="fa fa-arrows-alt"></i>
                                        </a>
                                    </div>
                                </div>

                            </div>
                            {/* <!-- COLUMNS 8 --> */}
                            <div className="masonry-item cat-2 col-md-4 col-sm-6 m-b30">
                                <div className="image-effect-two hover-shadow">
                                    <img src="images/projects/portrait/pic8.jpg" alt="" />
                                    <div className="figcaption">
                                        <h4 className="mt-tilte">State Hermitage Museum</h4>
                                        <p>We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are.</p>
                                        <a href="#" className="read-more site-button btn-effect">Read More</a>
                                        <a className="mfp-link" href="images/projects/portrait/pic12.jpg">
                                            <i className="fa fa-arrows-alt"></i>
                                        </a>
                                    </div>
                                </div>

                            </div>
                            {/* <!-- COLUMNS 9 --> */}
                            <div className="masonry-item cat-1 col-md-4 col-sm-6 m-b30">
                                <div className="image-effect-two hover-shadow">
                                    <img src="images/projects/portrait/pic9.jpg" alt="" />
                                    <div className="figcaption">
                                        <h4 className="mt-tilte">Central Florida University</h4>
                                        <p>We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are.</p>
                                        <a href="#" className="read-more site-button btn-effect">Read More</a>
                                        <a className="mfp-link" href="images/projects/portrait/pic11.jpg">
                                            <i className="fa fa-arrows-alt"></i>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* <!-- GALLERY CONTENT END --> */}

                        {/* <div className="m-t50 text-center">
                            <a href="#" className="site-button btn-effect">Load More</a>
                        </div> */}
                    </div>


                </div>
                {/* <!-- SECTION CONTENT END  --> */}

            </div>
        </>
    )
}
