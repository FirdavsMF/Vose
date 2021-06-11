import React from 'react'

function footers() {
    return (

        <footer className="site-footer footer-large  footer-dark	footer-wide">
            <div className="container call-to-action-wrap bg-no-repeat bg-center" style={{ backgroundImage: 'url(images/background/bg-site.png)' }}>
                <div className="p-a30 bg-primary ">
                    <div className="row">
                        <div className="col-md-8 col-sm-8">
                            <div className="call-to-action-left text-black">
                                <h4 className="text-uppercase m-b10 m-t0">Успейте приобрести по выгодной цене</h4>
                                <span>Напишите свой номер телефона и руководитель отдела продаж вам позвонит»
            </span>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="call-to-action-right">
                                <div className="widget_newsletter">
                                    <div className="newsletter-bx">
                                        <form role="search" method="post">
                                            <div className="input-group">
                                                <input name="news-letter" className="form-control" placeholder="Поле для ввода номера" type="text" />
                                                <span className="input-group-btn">
                                                    <button type="submit" className="site-button"><i className="fa fa-paper-plane-o" /></button>
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* FOOTER BLOCKES START */}
            <div className="footer-top overlay-wraper">
                <div className="overlay-main" />
                <div className="container">
                    <div className="row">
                        {/* ABOUT COMPANY */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="widget widget_about">
                                {/*<h4 class="widget-title">About Company</h4>*/}
                                <div className="logo-footer clearfix p-b15">
                                    <a href="index.html"><img src="images/icon/logo_vose.svg" alt="" /></a>
                                </div>
                                <p className="max-w400">Мы каждый день выбираем из сотни поставщиков и исполнителей лучших,
              чтобы дать максимально возможное качественные жилые комплексы</p>
                                <ul className="social-icons  mt-social-links">
                                    <li><a href="javascript:void(0);" className="fa fa-google" /></li>
                                    <li><a href="javascript:void(0);" className="fa fa-rss" /></li>
                                    <li><a href="javascript:void(0);" className="fa fa-facebook" /></li>
                                    <li><a href="javascript:void(0);" className="fa fa-twitter" /></li>
                                    <li><a href="javascript:void(0);" className="fa fa-linkedin" /></li>
                                </ul>
                            </div>
                        </div>
                        {/* RESENT POST */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="widget widget_address_outer">
                                <h4 className="widget-title">Наши контакты</h4>
                                <ul className="widget_address">
                                    <li>Адрес жк</li>
                                    <li>vose@gmail.com</li>
                                    <li>(+298) 012-3456-789</li>
                                    <li>(+298) 146-6543-480</li>
                                </ul>
                            </div>
                        </div>
                        {/* USEFUL LINKS */}
                        <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                            <div className="widget widget_services inline-links">
                                <h4 className="widget-title">Useful links</h4>
                                <ul>
                                    <li><a href="about-1.html">Карьера</a></li>
                                    <li><a href="project-grid.html">Сотрудничество</a></li>
                                    <li><a href="blog-grid.html">ЧЗВ</a></li>
                                    <li><a href="contact-1.html">Связаться с нами</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* TAGS */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="widget recent-posts-entry-date">
                                <h4 className="widget-title">Последние акции</h4>
                                <div className="widget-post-bx">
                                    <div className="bdr-light-blue widget-post clearfix  bdr-b-1 m-b10 p-b10">
                                        <div className="mt-post-date text-center text-uppercase text-white p-tb5">
                                            <strong className="p-date">24</strong>
                                            <span className="p-month">April</span>
                                            <span className="p-year">2019</span>
                                        </div>
                                        <div className="mt-post-info">
                                            <div className="mt-post-header">
                                                <h6 className="post-title"><a href="blog-single.html">На этих балках мы
                        строим мечты.</a></h6>
                                            </div>
                                            <div className="mt-post-meta">
                                                <ul>
                                                    <li className="post-author"><i className="fa fa-user" />By Admin</li>
                                                    <li className="post-comment"><i className="fa fa-comments" /> 28</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bdr-light-blue widget-post clearfix  bdr-b-1 m-b10 p-b10">
                                        <div className="mt-post-date text-center text-uppercase text-white p-tb5">
                                            <strong className="p-date">30</strong>
                                            <span className="p-month">May</span>
                                            <span className="p-year">2019</span>
                                        </div>
                                        <div className="mt-post-info">
                                            <div className="mt-post-header">
                                                <h6 className="post-title"><a href="blog-single.html">Мы будем сенсацией для
                        вас в следующем ремонте</a></h6>
                                            </div>
                                            <div className="mt-post-meta">
                                                <ul>
                                                    <li className="post-author"><i className="fa fa-user" />By Admin</li>
                                                    <li className="post-comment"><i className="fa fa-comments" /> 29</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* NEWSLETTER */}
                    </div>
                </div>
            </div>
            {/* FOOTER COPYRIGHT */}
            <div className="footer-bottom overlay-wraper">
                <div className="overlay-main" />
                <div className="container">
                    <div className="row">
                        <div className="mt-footer-bot-center">
                            <span className="copyrights-text">© 2021 Vose Construcion.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
export default footers