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
                            src="https://images.indianexpress.com/2022/03/block-sos-1-yashee-1200.jpg?resize=450%2C250&w=300"
                            alt="First slide"
                        />
                        <p className={style.sliderCaption}>
                            Chip off an ancient block: How a Bagru artisan family stamped
                            out Covid blues
                        </p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.indianexpress.com/2022/05/SOS.jpg?resize=450%2C250&w=300"
                            alt="Second slide"
                        />
                        <p className={style.sliderCaption}>
                            How a tribal woman helped her community in a Chhattisgarh
                            village during Covid-19
                        </p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.indianexpress.com/2022/05/Johanna-North.jpg?resize=450%2C250&w=300"
                            alt="Third slide"
                        />
                        <p className={style.sliderCaption}>
                            From Helsinki to Payyanur, with a pandemic-induced detour into
                            vlogging
                        </p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.indianexpress.com/2022/05/Dr-Champaneria-1200.jpeg?resize=450%2C250&w=300"
                            alt="Fourth slide"
                        />
                        <p className={style.sliderCaption}>
                            Meet Dr Bharat Champaneria, bringing healthcare and
                            nutritional awareness to rural Gujarat for over 40 years
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