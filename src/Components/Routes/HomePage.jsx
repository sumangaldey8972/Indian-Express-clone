import { Heading, Text, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react"
import Advertisement from "./AdvertisementCarousel"
import style from "./Homepage.module.css";
import axios from "axios"


// let headlineApi = "https://newsapi.org/v2/top-headlines?country=us"
// let apiKey = "9307defbbd894900a298bfe0d30f73eb"
export const HomePage = () => {

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false)
    const [city, setCity] = useState(["kolkata"]);

    const handleCityChange = (e) => {
        setCity(e.target.value)
    }

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

            <div className={style.city_news_main_div} >
                <div className={style.city_news_div} >
                    <Heading fontSize="26px" > {city ? city : "Kolkata"} News <i style={{ color: "red", fontSize: "20px", fontWeight: "bold" }} class="fa-solid fa-chevron-right"></i> </Heading>

                    <Select width="20%" outline="none" border="1px solid black" borderColor="black" onChange={(e) => handleCityChange(e)}  colorScheme="blackAlpha" borderRadius="none">
                        <option value='Kolkata'>Kolkata</option>
                        <option value='Mumbai'>Mumbai</option>
                        <option value='Pune'>Pune</option>
                        <option value='Delhi'>Delhi</option>
                        <option value='Chandigarh'>Chandigarh</option>
                        <option value='Ahemedabad'>Ahemedabad</option>
                        <option value='Lucknow'>Lucknow</option>
                        <option value='Hydrabad'>Hydrabad</option>
                        <option value='Bangalore'>Bangalore</option>
                    </Select>
                </div>

                <div>
                    <div>
                        
                    </div>

                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}