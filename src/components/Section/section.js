import React from 'react'

function Sections() {
    return (
        <section>
            <div className="section-full p-t30 p-b80 bg-white inner-page-padding">
                <div className="container">
                    <div className="section-content ">
                        <div className="row">
                            <div className="col-md-5 col-sm-6">
                                <div className="m-about ">
                                    <div className="owl-carousel about-us-carousel">
                                        {/* COLUMNS 1 */}
                                        <div className="item">
                                            <div className="ow-img">
                                                <a href="javascript:void(0);"><img src="images/gallery/portrait/pic4.jpg" alt="" /></a>
                                            </div>
                                        </div>
                                        {/* COLUMNS 2 */}
                                        <div className="item">
                                            <div className="ow-img">
                                                <a href="javascript:void(0);"><img src="images/gallery/portrait/pic5.jpg" alt="" /></a>
                                            </div>
                                        </div>
                                        {/* COLUMNS 3 */}
                                        <div className="item">
                                            <div className="owl-img">
                                                <a href="javascript:void(0);"><img src="images/gallery/portrait/pic6.jpg" alt="" /></a>
                                            </div>
                                        </div>
                                        {/* COLUMNS 4 */}
                                        <div className="item">
                                            <div className="ow-img">
                                                <a href="javascript:void(0);"><img src="images/gallery/portrait/pic7.jpg" alt="" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 col-sm-6">
                                <div className="m-about-containt text-black p-t80">
                                    <div className="m-about-years bg-moving" style={{ backgroundImage: 'url(images/background/line.png)' }}>
                                        <span className="text-primary large-title">5</span>
                                        <span className="large-title-info">лет успешный проектов</span>
                                    </div>
                                    <h3 className="font-weight-600">Повышение качества жизни за счет комплексного - единого
              подхода к работе.</h3>
                                    <p>Мы каждый день выбираем из сотни поставщиков и исполнителей лучших, чтобы дать
                                    максимально возможное качественные жилые комплексы, которые будут служить вам на
                                    долгосрочной основе. Именно таким мы и видим нашу миссию.
            </p>
                                    <div className="author-info p-t20">
                                        {/* <div class="author-signature">
                                      <img src="images/Signature+Black.png" alt="Signature" width="150" />
                                  </div> */}
                                        <div className="author-name">
                                            <h4 className="m-t0">Vose Construction</h4>
                                            {/* <p>Architecture &amp; Founder</p> */}
                                        </div>
                                        <a href="javascript:void(0);" className="site-button btn-effect m-b15"><span>Подробнее</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Sections