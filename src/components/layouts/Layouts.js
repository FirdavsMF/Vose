import React from 'react'

export default function Layouts() {
    return (
        <>
            <div className="page-content">
                {/* <!-- INNER PAGE BANNER --> */}
                <div className="mt-bnr-inr overlay-wraper bg-parallax bg-top-center" data-stellar-background-ratio="0.5" style={{ backgroundImage: 'url(images/banner/5.jpg)' }}>
                    <div className="overlay-main bg-black opacity-07"></div>
                    <div className="container">
                        <div className="mt-bnr-inr-entry">
                            <div className="banner-title-outer">
                                <div className="banner-title-name">
                                    <h2 className="m-b0">ЖИЛОЙ КОМПЛЕКС «83»</h2>
                                </div>
                            </div>
                            {/* <!-- BREADCRUMB ROW --> */}

                            <div>
                                <ul className="mt-breadcrumb breadcrumb-style-2">
                                    <li><a href="#">Главная</a></li>
                                    <li>ЖИЛОЙ КОМПЛЕКС «83»</li>
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
                        <div className="project-detail-outer">
                            <div className="m-b0">
                                <div className="row">
                                    <div className="col-md-4 col-sm-4">
                                        <div className="project-detail-pic m-b30">
                                            <div className="mt-media">
                                                <img src="images/projects/portrait/1.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4">
                                        <div className="project-detail-pic m-b30">
                                            <div className="mt-media">
                                                <img src="images/projects/portrait/2.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4">
                                        <div className="project-detail-pic m-b30">
                                            <div className="mt-media">
                                                <img src="images/projects/portrait/3.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="m-b30">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="product-block">
                                            <div className="row">
                                                <div className="col-md-12 m-b10">
                                                    <h4 className="text-uppercase font-weight-600 m-b10">ДАТА</h4>
                                                    <p>Февраль 2020</p>
                                                </div>
                                                <div className="col-md-12 m-b10">
                                                    <h4 className="text-uppercase font-weight-600 m-b10">ЛОКАЦИЯ</h4>
                                                    <p>Республика Таджикистан, г. Душанбе, 83 мкр</p>
                                                </div>
                                                <div className="col-md-12 m-b10">
                                                    <h4 className="text-uppercase font-weight-600 m-b10">ТИП ЗДАНИЯ</h4>
                                                    <p>жилой комплекс</p>
                                                </div>
                                                <div className="col-md-12 m-b10">
                                                    <h4 className="text-uppercase font-weight-600 m-b10">СРОК</h4>
                                                    <p>2019 - 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="mt-box">
                                            <div className="mt-thum-bx mt-img-overlay1 mt-img-effect yt-thum-box">
                                                <img src="http://i3.ytimg.com/vi/s3A7AK1K2hc/maxresdefault.jpg" alt="" />
                                                <a href="https://www.youtube.com/watch?v=dMWNKijA-Y4" className="mfp-video play-now">
                                                    <i className="icon fa fa-play"></i>
                                                    <span className="ripple"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="project-detail-containt">
                                <div className="bg-white text-black">
                                    <h3 className="font-weight-600">Создание устойчивого будущего за счет возведения прочных зданий, достойной архитектуры и разумного дизайна</h3>
                                    <p> Архитектор не олицетворяет ни дионисийского, ни аполлинического состояния: здесь мощный акт воли, воля, двигающая горы, опьянение сильной волей, которое требует художественного выражения. Самые влиятельные люди всегда вдохновляли архитекторов; на архитектора всегда влияла сила.</p>
                                    <p>ЖК «83» - это современный подход к строительству, идеальное решение для тех, кто хочет жить в экологически-чистом районе с развитой инфраструктурой и удобной транспортной развязкой.  Объект располагается вдали от шумных центральных улиц: по улице Асадулло Гуломова, района Сино, города Душанбе.
                                        В 16-ти этажном комплексе мы предусмотрели всё для вашего удобства, а именно: <br />
                                        ✅Автостоянка<br />
                                        ✅Существующие здания и сооружения<br />
                                        ✅Существующий строящийся детский садик<br />
                                        ✅Детская игровая площадка<br />
                                        ✅Площадка для отдыха жителей<br />
                                        ✅ТП (тепловой пункт)<br />
                                        Эти и другие преимущества подарят вам самые приятные моменты жизни!<br />
                                    </p>


                                    <div className="m-b0">
                                        <div className="mt-divider divider-1px  bg-black"><i className="icon-dot c-square"></i></div>
                                    </div>
                                    <ul className="social-icons social-square social-darkest m-b0">
                                        <li><a href="#" className="fa fa-facebook"></a></li>
                                        <li><a href="#" className="fa fa-twitter"></a></li>
                                        <li><a href="#" className="fa fa-linkedin"></a></li>
                                        <li><a href="#" className="fa fa-rss"></a></li>
                                        <li><a href="#" className="fa fa-youtube"></a></li>
                                        <li><a href="#" className="fa fa-instagram"></a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <!-- SECTION CONTEN/T END  --> */}

                {/* <!-- Similar projects START --> */}
                <div className="section-full p-t80 p-b30 bg-dark bg-repeat square_shape2 bg-moving" style={{ backgroundImage: 'url(images/background/bg-6.png)' }}>
                    <div className="container">
                        {/* <!-- TITLE START --> */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-center">
                                <div className="mt-separator">
                                    <h2 className="text-white text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Similar</span> projects</h2>
                                </div>
                            </div>
                        </div>
                        {/* <!-- TITLE END --> */}
                    </div>
                    <div className="section-content container-fluid">

                        <div className="similar-carousel-outer">
                            <div className="owl-carousel similar-projects owl-btn-vertical-center">
                                {/* <!-- C/OLUMNS 1 --> */}
                                <div className="item mt-box">
                                    <div className="mt-img-effect mt-img-overlay7">
                                        <img src="images/layouts/1.jpg" alt="" />
                                    </div>
                                    <div className="mt-info p-a30">
                                        <h4 className="m-b20 m-t0"><a href="#">Delivering architecture, planning, and design.</a></h4>
                                        <p>Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim</p>
                                        <a href="#" className="site-button btn-effect">Read More</a>
                                    </div>
                                </div>
                                {/* <!-- COLUMNS 2 --> */}
                                <div className="item mt-box">
                                    <div className="mt-img-effect mt-img-overlay7">
                                        <img src="images/layouts/2.jpg" alt="" />
                                    </div>
                                    <div className="mt-info p-a30">
                                        <h4 className="m-b20 m-t0"><a href="#">Capitalizing on the unique qualities of each place.</a></h4>
                                        <p>Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim</p>
                                        <a href="#" className="site-button btn-effect">Read More</a>
                                    </div>
                                </div>
                                {/* <!-- COLUMNS 3 --> */}
                                <div className="item mt-box">
                                    <div className="mt-img-effect mt-img-overlay7">
                                        <img src="images/layouts/3.jpg" alt="" />
                                    </div>
                                    <div className="mt-info p-a30">
                                        <h4 className="m-b20 m-t0"><a href="#">Delivering architecture, planning, and design.</a></h4>
                                        <p>Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim</p>
                                        <a href="#" className="site-button btn-effect">Read More</a>
                                    </div>
                                </div>
                                {/* <!-- COLUMNS 4 --> */}
                                <div className="item mt-box">
                                    <div className="mt-img-effect mt-img-overlay7">
                                        <img src="images/layouts/4.jpg" alt="" />
                                    </div>
                                    <div className="mt-info  p-a30">
                                        <h4 className="m-b20 m-t0"><a href="#">Improving quality of life with an integrated unified.</a></h4>
                                        <p>Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim</p>
                                        <a href="#" className="site-button btn-effect">Read More</a>
                                    </div>
                                </div>
                                {/* <!-- COLUMNS 5 --> */}
                                <div className="item mt-box">
                                    <div className="mt-img-effect mt-img-overlay7">
                                        <img src="images/layouts/5.jpg" alt="" />
                                    </div>
                                    <div className="mt-info p-a30">
                                        <h4 className="m-b20 m-t0"><a href="#">Unique solutions for your home through.</a></h4>
                                        <p>Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim</p>
                                        <a href="#" className="site-button btn-effect">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="hilite-title text-left p-l50 text-uppercase hilite-dark">
                        <strong>projects</strong>
                    </div>
                </div>
                {/* <!-- Similar projects END --> */}

            </div>
        </>
    )
}
