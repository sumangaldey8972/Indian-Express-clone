import { Heading, Text, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react"
import Advertisement from "./AdvertisementCarousel"
import style from "./Homepage.module.css";
import axios from "axios"
import { CarouselAd } from "./carousel2";



// let headlineApi = "https://newsapi.org/v2/top-headlines?country=us"
// let apiKey = "9307defbbd894900a298bfe0d30f73eb"
export const HomePage = () => {

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false)
    // const [city, setCity] = useState([]);
    const [latest, setLatest] = useState([]);

    useEffect(() => {
        axios.get("http://api.mediastack.com/v1/news?access_key=23aed4c16b72c739a2b563ba00ccec24&countries=in")
            .then((res) => {
                console.log(res.data.data)
                setLatest(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const handleCityChange = (e) => {
        setCity(e.target.value)
    }
    // console.log(city)

    useEffect(() => {
        setLoading(true)
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apikey=9307defbbd894900a298bfe0d30f73eb")
            .then((res) => {
                console.log(res.data.articles)
                setNews(res.data.articles)
                setLoading(true)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }, [])

    /// first task is city wise news maping

    return (
        <div>
            <div><Advertisement /></div>
            <div className={style.top_news_container} >
                <div className={style.top_news_left_div} >
                    <Heading fontSize="26px" p="1rem" >Alt News' Zubair walks out of Tihar jail after SC grants him bail</Heading>
                    <img style={{ widht: "410px", height: "228px" }} src="https://images.indianexpress.com/2013/01/WhatsApp-Image-2022-07-20-at-9.28.11-PM.jpeg?w=430" alt="" />
                    <Text>
                        The top court had granted Zubair interim bail in six cases filed against him across Uttar Pradesh for alleged hate speech. In its order, the apex court stated that there was no justification in keeping Zubair in continued custody.
                    </Text>
                </div>
                <div className={style.top_news_right_div} >
                    <Heading fontSize="17px" > TOP NEWS STORIES <i style={{ color: "red" }} class="fa-solid fa-chevron-right"></i> </Heading>
                    <div>
                        {
                            news.map((el) => (
                                <p className={style.topnews_title} > {el.title} </p>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* {city news} */}
            <div>
                <div className={style.city_news_main_div} >
                    <div className={style.city_news_div} >
                        <Heading fontSize="26px" > {city} News <i style={{ color: "red", fontSize: "20px", fontWeight: "bold" }} class="fa-solid fa-chevron-right"></i> </Heading>

                        <Select placeholder="News" width="20%" outline="none" border="1px solid black" borderColor="black" onChange={(e) => handleCityChange(e)} colorScheme="blackAlpha" borderRadius="none">
                            <option value='kolkata'>Kolkata</option>
                            <option value='mumbai'>Mumbai</option>
                            <option value='pune'>Pune</option>
                            <option value='delhi'>Delhi</option>
                            <option value='chandigarh'>Chandigarh</option>
                            <option value='ahemedabad'>Ahemedabad</option>
                            <option value='lucknow'>Lucknow</option>
                            <option value='hydrabad'>Hydrabad</option>
                            <option value='bangalore'>Bangalore</option>
                        </Select>
                    </div>

                    <div>
                        <div>
                            {/* {
                                city.map((el) => (
                                    <p className={style.topnews_title} key={el.id} > {el.title} </p>
                                ))
                            } */}
                        </div>

                        <div>

                        </div>
                    </div>

                </div>
            </div>

            <div style={{ position: "relative", top: "-500px", left: "1150px" }} >
                <CarouselAd />
            </div>



            <div className={style.latest_news_container}>
                <div>
                    {
                        latest.map((el) => (
                            <p className={style.latest_news_description} > {el.description} </p>
                        ))
                    }
                </div>
                <div className={style.lates_left_div} >
                    <Heading fontSize="17px" > LATEST NEWS <i style={{ color: "red" }} class="fa-solid fa-chevron-right"></i> </Heading>
                    <div>
                        {
                            latest.map((el) => (
                                <p className={style.topnews_title} > {el.title} </p>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}