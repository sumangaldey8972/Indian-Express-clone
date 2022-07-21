import style from "../Routes/CityCss/City.module.css"
import { Heading, Text } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { AuthContext } from "../Context/Context"
import {useNavigate} from "react-router-dom"
export const CityNews = () => {
    const [loading, setLoading] = useState(false)

    const [news, setNews] = useState([]);
    const [latest, setLatest] = useState([]);
    const navigate = useNavigate()
    const {auth, handleOnclick} = useContext(AuthContext)
    if (!auth){
        navigate("/subscribe")
    }

    useEffect(() => {
        setLoading(true)
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apikey=9307defbbd894900a298bfe0d30f73eb")
            .then((res) => {
                // console.log(res.data.articles)
                setNews(res.data.articles)
                setLoading(true)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }, [])

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

    return (
        <div>

            <div className={style.topimg_div} >
                <img src="https://tpc.googlesyndication.com/simgad/15666092391135923576" alt="" />
            </div>

            <div className={style.headline_div} >
                <div>
                    <img style={{ width: "775px", height: "263px", margin: "10px" }} src="https://images.indianexpress.com/2022/07/Presidential-poll-results-live-1200.jpg?w=475" alt="" />
                </div>

                <div className={style.top_leftdiv} >
                    <div style={{ padding: "10px" }} >
                        <Heading fontSize="32px" >Droupadi Murmu set to become first tribal woman President of India</Heading>
                    </div>

                    <div style={{ padding: "10px" }}>
                        <p>After the first round of counting in which the votes of the MPs from both the Houses were counted, NDA candidate Droupadi Murmu bagged 540 votes of the 748, while Opposition candidate Yashwant Sinha got 208 votes, announced Rajya Sabha Secretary General PC Mody who is the returning officer for the presidential poll. Follow live updates here.</p>
                    </div>
                </div>
            </div>

            <div className={style.top_news_container} >
                <div className={style.top_news_left_div} >
                    <Heading fontSize="26px" p="1rem" >Delhi LG returns Kejriwal's proposal to attend Singapore summit, CM writes to MEA for clearance</Heading>
                    <img style={{ widht: "410px", height: "228px" }} src="https://images.indianexpress.com/2022/07/kejriwal-LG-1.jpg?w=430" alt="" />
                    <Text>
                        The LG has rejected Kejriwal's travel proposal since "it is a conference of mayors and won't be befitting for a chief minister to attend it," official sources said.
                    </Text>
                </div>
                <div className={style.top_news_right_div} >
                    <Heading fontSize="17px" > TOP NEWS STORIES <i style={{ color: "red" }} class="fa-solid fa-chevron-right"></i> </Heading>
                    <div>
                        {
                            news.map((el) => (
                                <div>
                                    <img src={el.image} alt="" />
                                    <p onClick={handleOnclick} className={style.topnews_title} > {el.title} </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className={style.latest_news_container}>
                <div>
                    {
                        latest.map((el) => (
                            <p onClick={handleOnclick} className={style.latest_news_description} > {el.title} </p>
                        ))
                    }
                </div>
                <div className={style.lates_left_div} >
                    <Heading fontSize="17px" > LATEST NEWS <i style={{ color: "red" }} class="fa-solid fa-chevron-right"></i> </Heading>
                    <div>
                        {
                            latest.map((el) => (
                                <p onClick={handleOnclick} className={style.topnews_title} > {el.title} </p>
                            ))
                        }
                    </div>
                </div>
            </div>



        </div>
    )
}