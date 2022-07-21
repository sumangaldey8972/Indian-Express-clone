import Carousel from 'react-bootstrap/Carousel';
import style from './Carousel2.module.css'
export const CarouselAd = () => {

    return (
        <div className={style.right}>
            <div>
                <div className={style.logo}>
                    <img
                        src="https://indianexpress.com/wp-content/themes/indianexpress/microsites/brand/fb-covid-sos/images/HER-SOS-2022-Logo.png"
                        alt=""
                    />
                </div>
                <br />
                <Carousel
                    fade
                    controls={false}
                    indicators={false}
                >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.indianexpress.com/2022/06/dhamrad-1200.jpg?resize=450%2C250&w=300"
                            alt="First slide"
                        />
                        <p className={style.sliderCaption}>
                            In this Gujarat district, 'smart' anganwadis are boosting child healthcare post Covid
                        </p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.indianexpress.com/2022/06/IMG-20220618-WA0128.jpg?resize=450%2C250&w=300"
                            alt="Second slide"
                        />
                        <p className={style.sliderCaption}>
                            Backed by self-help groups, women in Bharuch learn to stand on their feet
                        </p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.indianexpress.com/2022/07/masks-1200.jpg?resize=450%2C250&w=300"
                            alt="Third slide"
                        />
                        <p className={style.sliderCaption}>
                            How Bihar’s artists rode out the Covid crisis with tech & tradition
                        </p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.indianexpress.com/2022/07/rahel-final-sos-1200-1.jpeg?resize=450%2C250&w=300"
                            alt="Fourth slide"
                        />
                        <p className={style.sliderCaption}>
                        In post-pandemic world, homegrown saree brands weave stories on social media
                        </p>
                    </Carousel.Item>
                </Carousel>
                <div>
                    <div className={style.readMore}>Read More Stories</div>
                </div>
            </div>
        </div>
    )
}