import React from 'react'

export default function About() {
    return (
        <>
            <div className="page-content">

                {/* <!-- INNER PAGE BANNER --> */}
                <div className="mt-bnr-inr overlay-wraper bg-parallax bg-top-center" data-stellar-background-ratio="0.5"
                    style={{ backgroundImage: 'url(images/banner/1.jpg)' }}>
                    <div className="overlay-main bg-black opacity-07"></div>
                    <div className="container">
                        <div className="mt-bnr-inr-entry">
                            <div className="banner-title-outer">
                                <div className="banner-title-name">
                                    <h2 className="m-b0">СОЗДАНИЕ КАЧЕСТВЕННОГО ГОРОДСКОГО ОБРАЗА ЖИЗНИ, СОЗДАНИЕ БОЛЕЕ СИЛЬНЫХ
                                        СООБЩЕСТВ.</h2>
                                </div>
                            </div>
                            {/* <!-- BREADCRUMB ROW --> */}

                            <div>
                                <ul className="mt-breadcrumb breadcrumb-style-2">
                                    <li><a href="#">Home</a></li>
                                    <li>О КОМПАНИИ</li>
                                </ul>
                            </div>

                            {/* <!-- BREADCRUMB ROW END --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- INNER PAGE BANN/ER END --> */}

                {/* <!-- ABOUT COMPANY SECTION START --> */}

                {/* <!-- ABOUT COMPANY SEC/TION END --> */}

                {/* <!-- OUR SPECIALLIZATION START --> */}
                <div className="section-full p-tb80 bg-white bg-repeat square_shape2 inner-page-padding"
                    style={{ backgroundImage: 'url(images/background/ptn-1.png)' }}>

                    <div className="container">

                        {/* <!-- TITLE START --> */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-left">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span
                                        className="font-weight-300 text-primary">НАША</span> СПЕЦИАЛИЗАЦИЯ
                                    </h2>
                                </div>
                            </div>
                        </div>
                        {/* <!-- TITLE END --> */}

                        {/* <!-- IMAGE CAROUSEL START --> */}
                        <div className="section-content">
                            <div className="row">
                                <div className="col-md-3 col-sm-6">

                                    <div className="mt-icon-box-wraper m-b30">
                                        <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                                            <span className="icon-count-number">1</span>
                                            <div className="icon-md inline-icon m-b15 text-primary scale-in-center">
                                                <span className="icon-cell"><img src="images/icon/crane-1.png" alt="" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="mt-tilte m-b25">Строительство</h4>
                                                <p>Мы занимаемся воздвижением жилых комплексов
                                                    вот уже более 5 лет и за это время реализовали (N) проектов.</p>
                                                {/* <a href="#" className="site-button-link" data-hover="ПОДРОБНЕЕ">ПОДРОБНЕЕ
                                                    <i className="fa fa-angle-right arrow-animation"></i></a> */}
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-md-3 col-sm-6">

                                    <div className="mt-icon-box-wraper m-b30">
                                        <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                                            <span className="icon-count-number">2</span>
                                            <div className="icon-md inline-icon m-b15 text-primary scale-in-center">
                                                <span className="icon-cell"><img src="images/icon/renovation.png" alt="" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="mt-tilte m-b25">Ремонт под ключ</h4>
                                                <p>Мы помогаем с реализацией дизайна, который вы задумали и при этом
                                                    поможем сэкономить, ведь у нас есть база проверенных поставщиков</p>
                                                {/* <a href="#" className="site-button-link" data-hover="ПОДРОБНЕЕ">ПОДРОБНЕЕ <i
                                                    className="fa fa-angle-right arrow-animation"></i></a> */}
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-md-3 col-sm-6">

                                    <div className="mt-icon-box-wraper m-b30">
                                        <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                                            <span className="icon-count-number">3</span>
                                            <div className="icon-md inline-icon m-b15 text-primary scale-in-center">
                                                <span className="icon-cell"><img src="images/icon/toolbox.png" alt="" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="mt-tilte m-b25">Частичный ремонт</h4>
                                                <p>Мы можем помочь вам с частичным ремонтом, куда входит электромонтаж,
                                                    проведение канализации и «черновая» отделка </p>
                                                {/* <a href="#" className="site-button-link" data-hover="ПОДРОБНЕЕ">ПОДРОБНЕЕ <i
                                                    className="fa fa-angle-right arrow-animation"></i></a> */}
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-md-3 col-sm-6">

                                    <div className="mt-icon-box-wraper m-b30">
                                        <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                                            <span className="icon-count-number">4</span>
                                            <div className="icon-md inline-icon m-b15 text-primary scale-in-center">
                                                <span className="icon-cell"><img src="images/icon/compass.png" alt="" /></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="mt-tilte m-b25">Строительство и обслуживание</h4>
                                                <p>Мы можем взять на себя возведение вашего ЖК от самого начального
                                                    этапа до полной сдачи проекта</p>
                                                {/* <a href="#" className="site-button-link" data-hover="ПОДРОБНЕЕ">ПОДРОБНЕЕ <i
                                                    className="fa fa-angle-right arrow-animation"></i></a> */}
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                {/* <!-- OUR SPECIALLIZATION END --> */}

                {/* <!-- OUR TEAM START --> */}
                <div className="section-full p-t80 p-b50 bg-white inner-page-padding">
                    <div className="container">

                        {/* <!-- TITLE START --> */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-left">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span
                                        className="font-weight-300 text-primary">Наша</span> Команда</h2>
                                </div>
                            </div>
                        </div>
                        {/* <!-- TITLE END --> */}

                        {/* <!-- IMAGE Team START --> */}
                        <div className="section-content">
                            <div className="row">

                                <div className="col-md-4 col-sm-6 col-xs-6 col-xs-100pc m-b30   ">

                                    <div className="our-team-1 hover-animation-1">
                                        <div className="profile-image scale-in-center"><img src="images/team-img/mzf.jpg"
                                            alt="" /></div>
                                        <div className="figcaption">
                                            <h4>Музаффар юнусзода</h4>
                                            <h5>Designer / архитектор</h5>
                                            <p>Что еще хуже, что у каждого своя цена, или что цена всегда такая низкая</p>
                                            {/* <div className="icons">
                                                <a href="#"><i className="fa fa-facebook"></i></a>
                                                <a href="#"> <i className="fa fa-twitter"></i></a>
                                                <a href="#"> <i className="fa fa-instagram"></i></a>
                                                <a href="#"><i className="fa fa-rss"></i></a>
                                                <a href="#"> <i className="fa fa-youtube"></i></a>
                                                <a href="#"> <i className="fa fa-linkedin"></i></a>
                                            </div> */}
                                        </div>

                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-6 col-xs-6 col-xs-100pc m-b30   ">
                                    <div className="our-team-1 hover-animation-1">
                                        <div className="profile-image scale-in-center"><img src="images/team-img/fdf.jpg"
                                            alt="" /></div>
                                        <div className="figcaption">
                                            <h4>Фирдавс Намозов</h4>
                                            <h5>Раиси шуьбаи маркетинг</h5>
                                            <p>Что еще хуже, что у каждого своя цена, или что цена всегда такая низкая</p>
                                            {/* <div className="icons">
                                                <a href="#"><i className="fa fa-facebook"></i></a>
                                                <a href="#"> <i className="fa fa-twitter"></i></a>
                                                <a href="#"> <i className="fa fa-instagram"></i></a>
                                                <a href="#"><i className="fa fa-rss"></i></a>
                                                <a href="#"> <i className="fa fa-youtube"></i></a>
                                                <a href="#"> <i className="fa fa-linkedin"></i></a>
                                            </div> */}
                                        </div>

                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-6 col-xs-6 col-xs-100pc m-b30   ">
                                    <div className="our-team-1 hover-animation-1">
                                        <div className="profile-image scale-in-center"><img src="images/team-img/ganijun.jpg"
                                            alt="" /></div>
                                        <div className="figcaption">
                                            <h4>Гани Ганиев</h4>
                                            <h5>Раиси шуьбаи фуруш</h5>
                                            <p>Что еще хуже, что у каждого своя цена, или что цена всегда такая низкая</p>
                                            {/* <div className="icons">
                                                <a href="#"><i className="fa fa-facebook"></i></a>
                                                <a href="#"> <i className="fa fa-twitter"></i></a>
                                                <a href="#"> <i className="fa fa-instagram"></i></a>
                                                <a href="#"><i className="fa fa-rss"></i></a>
                                                <a href="#"> <i className="fa fa-youtube"></i></a>
                                                <a href="#"> <i className="fa fa-linkedin"></i></a>
                                            </div> */}
                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>
                {/* <!-- OUR TEAM END -/-> */}

                {/* <!-- OUR STORY SECTION START --> */}
                <div className="section-full p-t80 p-b80 bg-dark bg-repeat square_shape2 inner-page-padding"
                    style={{ backgroundImage: 'url(images/background/bg-6.png)' }}>
                    <div className="container">
                        {/* <!-- TITLE START --> */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-left">
                                <div className="mt-separator text-white">
                                    <h2 className="text-uppercase sep-line-one "><span
                                        className="font-weight-300 text-primary">в </span> процессе</h2>
                                </div>
                            </div>
                        </div>
                        {/* <!-- TITLE END --> */}

                        <div className="section-content our-story">

                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src="images/gallery/portrait/pic4.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover"
                                        style={{ backgroundImage: 'url(images/background/line.png)' }}>
                                        <h4 className="text-uppercase m-b20">2021-22</h4>
                                        <h4 className="m-b20">Eisenhower Memoria</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                            unknown printer took a galley of type and scrambled it to make a type specimen
                                            book. remaining essentially unchanged. </p>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src="images/gallery/portrait/pic7.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover"
                                        style={{ backgroundImage: 'url(images/background/line.png)' }}>
                                        <h4 className="text-uppercase m-b20">2021-22</h4>
                                        <h4 className="m-b20">Спортивный центр Таджикистана</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                            unknown printer took a galley of type and scrambled it to make a type specimen
                                            book. remaining essentially unchanged. </p>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src="images/gallery/portrait/pic6.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover"
                                        style={{ backgroundImage: 'url(images/background/line.png)' }}>
                                        <h4 className="text-uppercase m-b20">2019-21</h4>
                                        <h4 className="m-b20">Парк Рудаки</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                            unknown printer took a galley of type and scrambled it to make a type specimen
                                            book. remaining essentially unchanged. </p>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src="images/gallery/portrait/pic5.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover"
                                        style={{ backgroundImage: 'url(images/background/line.png)' }}>
                                        <h4 className="text-uppercase m-b20">2021-29</h4>
                                        <h4 className="m-b20">Расширение музея</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                            unknown printer took a galley of type and scrambled it to make a type specimen
                                            book. remaining essentially unchanged. </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>


                </div>
                {/* <!-- OUR STORY SECTION END --> */}

            </div>
        </>
    )
}
