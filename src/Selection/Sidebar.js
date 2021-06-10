import React from 'react'


 function Sidebar () {
      return (
        <page-wraper>
           <header className="site-header header-style-1 header-dark-1">
             <div className="top-bar bg-primary text-black ">
                <div className="container">
                    <div className="row">
                        <div className="mt-topbar-left clearfix">
                            <ul className="list-unstyled e-p-bx pull-right">
                                <li><i className="fa fa-envelope"></i> 7xthemehelp@gmail.com</li>
                                <li><i className="fa fa-phone"></i>(075) 123-7654</li>
                                <li><i className="fa fa-clock-o"></i>Sun-Sat 9.45 am</li>
                            </ul>
                        </div>
                        <div className="mt-topbar-right clearfix">
                            <div className="appint-btn"><a href="#" className="site-button">Make an Appointment</a></div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="sticky-header main-bar-wraper">
                <div className="main-bar">
                    <div className="container">
                        <div className="logo-header">
                            <div className="logo-header-inner logo-header-one">
                                <a href="index.html">
                                    <img src="images/icon/logo_vose.svg" alt="" />
                                </a>
                            </div>
                        </div>
                        {/* <!-- NAV Toggle Button --> */}
                        <button data-target=".header-nav" data-toggle="collapse" type="button"
                            className="navbar-toggle collapsed">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        {/* <!-- ETRA Nav --> */}
                        <div className="extra-nav">
                            <div className="extra-cell">
                                <a href="#search">
                                    <i className="fa fa-search"></i>
                                </a>
                            </div>
                            <div className="extra-cell">
                                <a href="#" className="contact-slide-show"><i
                                        className="fa fa-angle-left arrow-animation"></i></a>
                            </div>
                        </div>
                        {/* <!-- ETRA Nav --> */}
{/* 
                        <!-- Contact Nav --> */}
                        <div className="contact-slide-hide " style="background-image:url(images/background/bg-5.png)">
                            <div className="contact-nav">
                                <a href="javascript:void(0)" className="contact_close">&times;</a>
                                <div className="contact-nav-form p-a30">
                                    <div className="contact-info   m-b30">

                                        <div className="mt-icon-box-wraper center p-b30">
                                            <div className="icon-xs m-b20 scale-in-center"><i className="fa fa-phone"></i></div>
                                            <div className="icon-content">
                                                <h5 className="m-t0 font-weight-500">Phone number</h5>
                                                <p>(075) 123-7654</p>
                                            </div>
                                        </div>

                                        <div className="mt-icon-box-wraper center p-b30">
                                            <div className="icon-xs m-b20 scale-in-center"><i className="fa fa-envelope"></i>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="m-t0 font-weight-500">Email address</h5>
                                                <p>7xthemehelp@gmail.com</p>
                                            </div>
                                        </div>

                                        <div className="mt-icon-box-wraper center p-b30">
                                            <div className="icon-xs m-b20 scale-in-center"><i className="fa fa-map-marker"></i>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="m-t0 font-weight-500">Address info</h5>
                                                <p>201 Liverpool Street, Suite 721, London</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="full-social-bg">
                                        <ul>
                                            <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#" className="google"><i className="fa fa-google"></i></a></li>
                                            <li><a href="#" className="instagram"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="#" className="tumblr"><i className="fa fa-tumblr"></i></a></li>
                                            <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#" className="youtube"><i className="fa fa-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="text-center">
                                        <h4 className="font-weight-600">&copy; 2019 7xtheme</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- SITE Search --> */}
                        <div id="search">
                            <span className="close"></span>
                            <form role="search" id="searchform" action="/search" method="get" className="radius-xl">
                                <div className="input-group">
                                    <input value="" name="q" type="search" placeholder="Type to search" />
                                    <span className="input-group-btn"><button type="button" className="search-btn"><i
                                                className="fa fa-search arrow-animation"></i></button></span>
                                </div>
                            </form>
                        </div>
                        {/* <!-- MAIN Vav --> */}
                        <div className="header-nav navbar-collapse collapse  nav-dark">
                            <ul className=" nav navbar-nav">
                                <li className="active">
                                    <a href="javascript:;">Главная</a>
                                    <ul className="sub-menu">

                                        <li>
                                            <a href="index.html">Home-1</a>
                                        </li>
                                        <li>
                                            <a href="index-2.html">Home-2</a>
                                        </li>
                                        <li>
                                            <a href="index-3.html">Home-3 boxed style</a>
                                        </li>
                                        <li>
                                            <a href="index-4.html">Home-4</a>
                                        </li>

                                    </ul>
                                </li>

                                <li>
                                    <a href="about-1.html">О нас</a>
                                </li>
                                <li>
                                    <a href="services.html">Объекты</a>
                                </li>
                                <li>
                                    <a href="javascript:;">В продаже</a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="javascript:;">Blog</a>
                                            <ul className="sub-menu has-child">
                                                <li><a href="blog-grid.html">Blog Grid</a></li>
                                                <li><a href="blog-listing.html">Blog Listing</a></li>
                                                <li><a href="blog-masonry.html">Blog Masonry</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="faq.html">FAQ</a>
                                        </li>
                                        <li>
                                            <a href="error-404.html">Error 404</a>
                                        </li>
                                        <li>
                                            <a href="contact-1.html">Contact us</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript:;">Акции</a>
                                    <ul className="sub-menu">
                                        <li><a href="post-image.html">Post Image</a></li>
                                        <li><a href="post-gallery.html">Post Gallery</a></li>
                                        <li><a href="post-video.html">Post Video</a></li>
                                        <li><a href="post-right-sidebar.html">Post Right Sidebar</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </header>
        </page-wraper>
      );
    }


export default Sidebar