import React from 'react'

export default function OurObjects() {
    return (
        <>
            <div className="section-full p-t80 p-b50 bg-gray">
                <div className="container">
                    {/* TITLE START */}
                    <div className="section-head">
                        <div className="mt-separator-outer separator-center">
                            <div className="mt-separator">
                                <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Наши</span> объекты</h2>
                            </div>
                        </div>
                    </div>
                    {/* TITLE END */}
                    {/* PAGINATION START */}
                    <div className="filter-wrap p-b30 text-center">
                        <ul className="filter-navigation inline-navigation masonry-filter link-style  text-uppercase">
                            <li className="active"><a data-filter="*" href="#" data-hover="Все">Все</a></li>
                            <li><a data-filter=".cat-1" href="#" data-hover="Строятся">Строятся</a></li>
                            <li><a data-filter=".cat-2" href="#" data-hover="Реализованные">Реализованные</a></li>
                            <li><a data-filter=".cat-3" href="#" data-hover="В партнёрстве">В партнёрстве</a></li>
                        </ul>
                    </div>
                    {/* PAGINATION END */}
                    {/* GALLERY CONTENT START */}
                    <div className="portfolio-wrap mfp-gallery work-grid row clearfix">
                        {/* COLUMNS 1 */}
                        <div className="masonry-item cat-1  col-md-4 col-sm-6 m-b30">
                            <div className="image-effect-two hover-shadow">
                                <img src="images/projects/portrait/pic1.jpg" alt="" />
                                <div className="figcaption">
                                    <h4 className="mt-tilte">Строительство стиля жизни</h4>
                                    <p>Мы так заняты тем, что нас ждет впереди, что не тратим время на то, чтобы
              наслаждаться тем, где мы находимся.</p>
                                    <a href="#" className="read-more site-button btn-effect">ПОДРОБНЕЕ</a>
                                    <a className="mfp-link" href="images/projects/portrait/pic4.jpg">
                                        <i className="fa fa-arrows-alt" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* COLUMNS 2 */}
                        <div className="masonry-item cat-2 col-md-4 col-sm-6 m-b30">
                            <div className="image-effect-two hover-shadow">
                                <img src="images/projects/portrait/pic2.jpg" alt="" />
                                <div className="figcaption">
                                    <h4 className="mt-tilte">Центральное городское здание</h4>
                                    <p>Мы так заняты тем, что нас ждет впереди, что не тратим время на то, чтобы
              наслаждаться тем, где мы находимся.</p>
                                    <a href="#" className="read-more site-button btn-effect">ПОДРОБНЕЕ</a>
                                    <a className="mfp-link" href="images/projects/portrait/pic9.jpg">
                                        <i className="fa fa-arrows-alt" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* COLUMNS 3 */}
                        <div className="masonry-item cat-3 col-md-4 col-sm-6 m-b30">
                            <div className="image-effect-two hover-shadow">
                                <img src="images/projects/portrait/pic3.jpg" alt="" />
                                <div className="figcaption">
                                    <h4 className="mt-tilte">Натан Брук Хаус</h4>
                                    <p>Мы так заняты тем, что нас ждет впереди, что не тратим время на то, чтобы
              наслаждаться тем, где мы находимся.</p>
                                    <a href="#" className="read-more site-button btn-effect">ПОДРОБНЕЕ</a>
                                    <a className="mfp-link" href="images/projects/portrait/pic6.jpg">
                                        <i className="fa fa-arrows-alt" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* COLUMNS 4 */}
                        <div className="masonry-item cat-4 col-md-4 col-sm-6 m-b30">
                            <div className="image-effect-two hover-shadow">
                                <img src="images/projects/portrait/pic4.jpg" alt="" />
                                <div className="figcaption">
                                    <h4 className="mt-tilte">Metropolitan Museum.</h4>
                                    <p>Мы так заняты тем, что нас ждет впереди, что не тратим время на то, чтобы
              наслаждаться тем, где мы находимся.</p>
                                    <a href="#" className="read-more site-button btn-effect">ПОДРОБНЕЕ</a>
                                    <a className="mfp-link" href="images/projects/portrait/pic5.jpg">
                                        <i className="fa fa-arrows-alt" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* COLUMNS 5 */}
                        <div className="masonry-item cat-5 col-md-4 col-sm-6 m-b30">
                            <div className="image-effect-two hover-shadow">
                                <img src="images/projects/portrait/pic5.jpg" alt="" />
                                <div className="figcaption">
                                    <h4 className="mt-tilte">Семейная резиденция Art</h4>
                                    <p>Мы так заняты тем, что нас ждет впереди, что не тратим время на то, чтобы
              наслаждаться тем, где мы находимся.</p>
                                    <a href="#" className="read-more site-button btn-effect">ПОДРОБНЕЕ</a>
                                    <a className="mfp-link" href="images/projects/portrait/pic7.jpg">
                                        <i className="fa fa-arrows-alt" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* COLUMNS 6 */}
                        <div className="masonry-item cat-4 col-md-4 col-sm-6 m-b30">
                            <div className="image-effect-two hover-shadow">
                                <img src="images/projects/portrait/pic6.jpg" alt="" />
                                <div className="figcaption">
                                    <h4 className="mt-tilte">Офисные перегородки</h4>
                                    <p>Мы так заняты тем, что нас ждет впереди, что не тратим время на то, чтобы
              наслаждаться тем, где мы находимся.</p>
                                    <a href="#" className="read-more site-button btn-effect">ПОДРОБНЕЕ</a>
                                    <a className="mfp-link" href="images/projects/portrait/pic8.jpg">
                                        <i className="fa fa-arrows-alt" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* GALLERY CONTENT END */}
                    <div className="m-t50 text-center">
                        <a href="#" className="site-button btn-effect">Подробнее</a>
                    </div>
                </div>
            </div>
        </>
    )
}
