import style from "./Footer.module.css"

export const Footer = () => {
    return (
        <div className={style.footer_maincontainer} >
            <div className={style.upperDiv} >
                <h2 style={{ marginLeft: "14rem", marginBottom: "1rem", marginTop: "1rem", textTransform: "uppercase", fontWeight: "bold" }}>TOP CATEGORIES</h2>
                <div style={{ display: "flex" }} >
                    <ul>
                        <li>Explained News</li>
                        <li>Delhi News</li>
                        <li> Health News </li>
                    </ul>

                    <ul>
                        <li>Ploitical Pulse</li>
                        <li>Pune News</li>
                        <li> India News </li>
                    </ul>

                    <ul>
                        <li>Latest Opinion</li>
                        <li>Bangalore News</li>
                        <li> Sports News </li>
                    </ul>

                    <ul>
                        <li>Mumbai News</li>
                        <li>Bollywood News</li>
                        <li> Lifestyle News </li>
                    </ul>
                </div>
            </div>

            <div >
                <h2 style={{ marginLeft: "14rem", marginBottom: "1rem", marginTop: "1rem", textTransform: "uppercase", fontWeight: "bold" }} >TRENDING NEWS</h2>
                <div className={style.SecondDiv} >
                    <ul>
                        <li>Horoscope</li>
                        <li>Dance Classes for Kids</li>
                        <li>Buy All-Access Pass</li>
                        <li>Sri Lanka Crisis Live News Updates</li>
                    </ul>

                    <ul>
                        <li>India News</li>
                        <li>Entertainment News</li>
                        <li> Subscribe to the India Express </li>
                        <li> RK/RKAY movie Review </li>
                    </ul>

                    <ul>
                        <li>Arts and Craft Classes for Kids</li>
                        <li>UPSC News </li>
                        <li> Buy Digital Premium </li>
                        <li> CBSC 12th Results 2022 </li>
                    </ul>

                    <ul>
                        <li> Fitness Classes for Kids </li>
                        <li>IPL 2022 News</li>
                        <li> 'Cut Off, Lakshadweep Sees Protests ' </li>
                        <li> Delhi Wheather </li>
                    </ul>
                </div>
            </div>


            <div >
                <h2 style={{ marginLeft: "14rem", marginBottom: "1rem", marginTop: "1rem", textTransform: "uppercase", fontWeight: "bold" }}>LATEST SOTIES</h2>
                <div className={style.thirdDiv} >
                    <ul>
                        <li>CBSE 12th Result 2022: Country topper from Bulandshahr wants to study History at Delhi University</li>
                        <li>Airtel to be at forefront of bringing 5G connectivity to India: Sunil Mittal</li>

                    </ul>

                    <ul>
                        <li>CBSE 10th Results 2022: Sharp increase in students scoring 90% and above</li>
                        <li>World Brain Day: Cricketer Robin Uthappa on mental struggles and Karnataka’s initiatives to promote brain health</li>
                    </ul>

                    <ul>
                        <li>FD interest rate rising: Should you choose long-term or short-term FD?</li>
                        <li>Amazon Prime Day: ‘Prime has disproved the myth that Indian customers will not pay for convenience’ </li>
                    </ul>

                    <ul>
                        <li> Sawan 2022: Expert shares essential tips for fasting</li>
                        <li>Shamshera movie review: This Ranbir Kapoor film is big, bad, loud and messy</li>
                    </ul>
                </div>
            </div>


            <div className={style.bottomFooterContainer} >
                <div className={style.bottomleftdiv} >
                    <div>
                        <div>
                            <h2 style={{ marginBottom: "1rem", marginTop: "1rem", textTransform: "uppercase", fontWeight: "bold" }} >Follow us</h2>
                            <div className={style.socialMediaicons} >
                                <img style={{ width: "32px", height: "32px" }} src="https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-facebook.svg" alt="" />
                                <img style={{ width: "32px", height: "32px" }} src="https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-twitter.svg" alt="" />
                                <img style={{ width: "32px", height: "32px" }} src="https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-linkedin.svg" alt="" />
                                <img style={{ width: "32px", height: "32px" }} src="https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-instagram.svg" alt="" />
                            </div>
                        </div>

                        <div>
                            <h2 style={{ marginBottom: "1rem", marginTop: "1rem", textTransform: "uppercase", fontWeight: "bold" }}>download apps</h2>
                            <div className={style.socialMediaicons} >
                                <img style={{ width: "32px", height: "32px" }} src="https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-android.svg" alt="" />
                                <img style={{ width: "32px", height: "32px" }} src="https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-apple.svg" alt="" />
                            </div>
                        </div>

                        <div>
                            <div>
                                <img style={{ width: "120px", height: "18px" }} src="https://indianexpress.com/wp-content/themes/indianexpress/images/newsguard-logo-w.svg" alt="" />
                            </div>
                            <div style={{ display: "flex" }} >
                                <ul>
                                    <li>
                                        <img src="https://indianexpress.com/wp-content/themes/indianexpress/images/newsguard-check.svg" alt="" />
                                    </li>
                                </ul>
                                <ul>
                                    <li>  The Indian Express website has been rated GREEN for its credibility and trustworthiness by Newsguard, a global service that rates news sources for their journalistic standards.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.middiv} >
                    <h2 style={{ marginBottom: "1rem", marginTop: "1rem", textTransform: "uppercase", fontWeight: "bold" }} >express group</h2>
                    <div>
                        <ul>
                            <li>The Indian Express</li>
                            <li>The Financial Express</li>
                            <li>Loksatta</li>
                            <li>Janasatta</li>
                            <li>The ExpressGroup</li>
                            <li>Newsletters</li>
                            <li>Ramanath Goenka Excellence in journalism Awards</li>
                            <li>Light House Journalism</li>
                        </ul>

                        <ul>
                            <li>ieTamil.com</li>
                            <li>ieBangla.com</li>
                            <li>isMalyalayam.com</li>
                            <li>inUth</li>
                            <li>MyinsuranceClub</li>
                            <li>26/11 Stories</li>
                            <li>Online Classes for kids</li>
                            <li>Compare Term Insurance</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2 style={{ marginBottom: "1rem", marginTop: "1rem", textTransform: "uppercase", fontWeight: "bold" }} >Quick links</h2>
                    <div>
                        <ul>
                            <li>T&C</li>
                            <li>Privacy Policiy</li>
                            <li>Advertise with Us</li>
                            <li>Brand Solutions</li>
                            <li>Contact Us</li>
                            <li>Subscribe</li>
                            <li>Statutory provisions on reporting(sexual Offence)</li>
                            <li>This website follows the DNPA's code of conduct</li>
                            <li>CSR</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={style.copyrightdiv} >
                <div>
                    <p>Copyright © 2022 The Indian Express [P] Ltd. All Rights Reserved </p>
                </div>
                <div>
                    <img src="https://indianexpress.com/wp-content/themes/indianexpress/images/vip-powered-logo.png" alt="" />
                </div>
            </div>
        </div>
    )
}