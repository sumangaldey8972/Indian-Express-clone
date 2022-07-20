import Carousel from 'react-bootstrap/Carousel';

function Advertisement() {
    return (
        <Carousel>
            <Carousel.Item>
                <img class="d-block w-100" src="https://secure-ds.serving-sys.com/resources/PROD/asset/144375/IMAGE/20220715/English_Shikhar__728x90_15july22_72299664054966338.jpg" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img class="d-block w-100" src="https://secure-ds.serving-sys.com/resources/PROD/asset/144375/IMAGE/20220715/English_Rohit-Time-Spent-2022---728x90_100_15july22_72299613590149518.jpg" alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img style={{width:"50%"}} class="d-block w-100" src="https://secure-ds.serving-sys.com/resources/PROD/asset/144375/IMAGE/20220715/English_Bumrah_728x90_72299519369304824.jpg" alt="Third slide" />
            </Carousel.Item>
        </Carousel>
    );
}

export default Advertisement;
