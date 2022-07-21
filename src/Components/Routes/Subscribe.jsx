import { Button, Heading, Text } from "@chakra-ui/react"
import style from "./Subscribe.module.css"
export const Subscribe = () => {
    return (
        <div>
            <div className={style.Heading_div} >
                <Heading fontSize="42px" > 3 plans to choose from </Heading>
                <Text> Subscribe to trust and journalism you can bank on </Text>
            </div>

            <div className={style.card_container} >
                <div>
                    <div> <h2>All Access</h2> </div>
                    <div> <p>Digital + E-paper subscription so that you don't miss anything</p> </div>
                    <hr style={{margin:"auto", marginBottom:"30px", marginTop:"15px", width:"90%"}} />
                    <div> <p> Plans starts from </p> </div>
                    <div> <span style={{fontSize:"24px", fontWeight:"700", marginLeft:"100px", marginBottom:"60px"}} >  ₹87 </span> <span>/month</span>  </div>
                    <div> <Button colorScheme="blue" w="80%" ml="25px" > Save up to 78% </Button> </div>
                </div>

                <div>
                    <div> <h2>Digital Only</h2> </div>
                    <div> <p>Get unlimited access to all our journalism online</p> </div>
                    <hr style={{margin:"auto", marginBottom:"30px", marginTop:"15px", width:"90%"}}  />
                    <div> <p> Plans starts from </p> </div>
                    <div> <span style={{fontSize:"24px", fontWeight:"700", marginLeft:"100px"}} >  ₹66 </span> <span>/month</span>  </div>
                    <div> <Button colorScheme="blue" w="80%" ml="25px" > Save up to 66% </Button> </div>
                </div>

                <div>
                    <div> <h2>ePaper Only</h2> </div>
                    <div> <p> Access to just the daily e-replica edition </p> </div>
                    <hr style={{margin:"auto", marginBottom:"30px", marginTop:"15px", width:"90%"}}  />
                    <div> <p> Plans starts from </p> </div>
                    <div> <span style={{fontSize:"24px", fontWeight:"700", marginLeft:"100px"}} >  ₹71 </span> <span>/month</span>  </div>
                    <div> <Button colorScheme="blue" w="80%" ml="25px" > Save up to 64% </Button> </div>
                </div>
            </div>
        </div>
    )
}

