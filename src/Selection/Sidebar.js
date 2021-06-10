import React from 'react'


var Sidebar = React.createClass({
    render: function() {
      return (
  
        <div classname="sticky-header main-bar-wraper">
          <div classname="main-bar">
            <div classname="container">
              <div classname="logo-header">
                <div classname="logo-header-inner logo-header-one">
                  <a href="index.html">
                    <img src="images/icon/logo_vose.svg" alt="" />
                  </a>
                </div>
              </div>
              {'{'}/* {/* NAV Toggle Button */} */{'}'}
              <button data-target=".header-nav" data-toggle="collapse" type="button" classname="navbar-toggle collapsed">
                <span classname="sr-only">Toggle navigation</span>
                <span classname="icon-bar" />
                <span classname="icon-bar" />
                <span classname="icon-bar" />
              </button>
              {'{'}/* {/* ETRA Nav */} */{'}'}
              <div classname="extra-nav">
                <div classname="extra-cell">
                  <a href="#search">
                    <i classname="fa fa-search" />
                  </a>
                </div>
                <div classname="extra-cell">
                  <a href="#" classname="contact-slide-show"><i classname="fa fa-angle-left arrow-animation" /></a>
                </div>
              </div>
              {'{'}/* {/* ETRA Nav */}
              {/* Contact Nav */} */{'}'}
              <div classname="contact-slide-hide " style={{backgroundImage: 'url(images/background/bg-5.png)'}}>
                <div classname="contact-nav">
                  <a href="javascript:void(0)" classname="contact_close">×</a>
                  <div classname="contact-nav-form p-a30">
                    <div classname="contact-info   m-b30">
                      <div classname="mt-icon-box-wraper center p-b30">
                        <div classname="icon-xs m-b20 scale-in-center"><i classname="fa fa-phone" /></div>
                        <div classname="icon-content">
                          <h5 classname="m-t0 font-weight-500">Phone number</h5>
                          <p>(075) 123-7654</p>
                        </div>
                      </div>
                      <div classname="mt-icon-box-wraper center p-b30">
                        <div classname="icon-xs m-b20 scale-in-center"><i classname="fa fa-envelope" />
                        </div>
                        <div classname="icon-content">
                          <h5 classname="m-t0 font-weight-500">Email address</h5>
                          <p>7xthemehelp@gmail.com</p>
                        </div>
                      </div>
                      <div classname="mt-icon-box-wraper center p-b30">
                        <div classname="icon-xs m-b20 scale-in-center"><i classname="fa fa-map-marker" />
                        </div>
                        <div classname="icon-content">
                          <h5 classname="m-t0 font-weight-500">Address info</h5>
                          <p>201 Liverpool Street, Suite 721, London</p>
                        </div>
                      </div>
                    </div>
                    <div classname="full-social-bg">
                      <ul>
                        <li><a href="#" classname="facebook"><i classname="fa fa-facebook" /></a></li>
                        <li><a href="#" classname="google"><i classname="fa fa-google" /></a></li>
                        <li><a href="#" classname="instagram"><i classname="fa fa-instagram" /></a></li>
                        <li><a href="#" classname="tumblr"><i classname="fa fa-tumblr" /></a></li>
                        <li><a href="#" classname="twitter"><i classname="fa fa-twitter" /></a></li>
                        <li><a href="#" classname="youtube"><i classname="fa fa-youtube" /></a></li>
                      </ul>
                    </div>
                    <div classname="text-center">
                      <h4 classname="font-weight-600">© 2019 7xtheme</h4>
                    </div>
                  </div>
                </div>
              </div>
              {'{'}/* {/* SITE Search */} */{'}'}
              <div id="search">
                <span classname="close" />
                <form role="search" id="searchform" action="/search" method="get" classname="radius-xl">
                  <div classname="input-group">
                    <input defaultValue name="q" type="search" placeholder="Type to search" />
                    <span classname="input-group-btn"><button type="button" classname="search-btn"><i classname="fa fa-search arrow-animation" /></button></span>
                  </div>
                </form>
              </div>
              {'{'}/* {/* MAIN Vav */} */{'}'}
              <div classname="header-nav navbar-collapse collapse  nav-dark">
                <ul classname=" nav navbar-nav">
                  <li classname="active">
                    <a href="javascript:;">Главная</a>
                    <ul classname="sub-menu">
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
                    <ul classname="sub-menu">
                      <li>
                        <a href="javascript:;">Blog</a>
                        <ul classname="sub-menu has-child">
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
                    <ul classname="sub-menu">
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
      );
    }
  });

export default Sidebar