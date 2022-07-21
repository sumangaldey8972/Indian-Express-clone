import React from "react"
import { Flex, Tooltip, Spacer, Wrap, WrapItem, Text } from "@chakra-ui/react"

let date = new Date();
let cday = date.getDay();
let cdate = date.getDate();
let month = date.getMonth();
let cyear = date.getFullYear();

let day = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];

for (let i = 0; i < day.length; i++) {
    if (i == (+cdate)) {
        cday = day[i - 1];
    }
}


let arr = ["January", "February", "March", "April", "May", "Jun", "July", "August",
    "September", "October", "November", "December"];
for (let i = 0; i < arr.length; i++) {
    if (i == (+month)) {
        month = arr[i];
    }
}

// document.getElementById('date').append(cdate+"th"+ " " + month + " " + " " + cyear);

let currentDate = (`${cdate}th, ${month}, ${cyear} `)
// console.log(currentDate)

export const MainLogo = () => {
    return (

        <div>
            <div className="top_div" >
                <div className="div_multilanguage" >
                    <Flex>
                        <li>
                            <Tooltip label="ENGLISH" >
                                ENGLISH
                            </Tooltip>
                        </li>
                        <Spacer />
                        <li>
                            <Tooltip label="ENGLISH" >
                                தமிழ்
                            </Tooltip>
                        </li>
                        <Spacer />
                        <li>
                            <Tooltip label="ENGLISH" >
                                বাংলা
                            </Tooltip>
                        </li>
                        <Spacer />
                        <li>
                            <Tooltip label="ENGLISH" >
                                മലയാളം
                            </Tooltip>
                        </li>
                        <Spacer />
                        <li>
                            <Tooltip label="ENGLISH" >
                                हिंदी
                            </Tooltip>
                        </li>
                        <Spacer />
                        <li>
                            <Tooltip label="ENGLISH" >
                                मराठी
                            </Tooltip>
                        </li>
                    </Flex>
                </div>
            </div>

            <div className="logo_and_follow_sec" >
                <div className="Followus_div" >
                    <Text fontSize="13px" p=".50rem" >Follow us:</Text>
                    <Wrap>
                        <WrapItem>
                            <a href="https://www.facebook.com/indianexpress" target="/" >
                                <img className="follow_icon" src="https://indianexpress.com/wp-content/themes/indianexpress/images/fb-followus.svg" alt="" />
                            </a>
                        </WrapItem>
                        <WrapItem>
                            <a href="https://www.facebook.com/indianexpress" target="/" >
                                <img className="follow_icon" src="https://indianexpress.com/wp-content/themes/indianexpress/images/twitter-followus.svg" alt="" />
                            </a>
                        </WrapItem>
                    </Wrap>
                </div>

                <div className="mainLogo_div" >
                    <div>
                        <img className="mainlogo" src="https://indianexpress.com/wp-content/themes/indianexpress/images/indian-express-logo-n.svg" alt="Indian Express Logo" />
                    </div>

                    <div className="date_div" >
                        <Text> {currentDate}  </Text>
                    </div>

                </div>

            </div>


        </div>


    )
}

// logo complete 