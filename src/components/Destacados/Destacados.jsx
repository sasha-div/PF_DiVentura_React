import { Container } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel';

import React from 'react'

const Destacados = () => {
    return (
        <Container className="mb-5">
            <h1 className='d-flex justify-content-center my-5'>Destacados</h1>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img src="https://i.ibb.co/J5B1gh3/poster-starfield.jpg" width="100%" alt="prueba" text="First slide" />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img src="https://i.ibb.co/HTs3zZv/poster-horizon-FW.jpg" width="100%" alt="prueba" text="Second slide" />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img src="https://i.ibb.co/2jj7VDy/poster-Zelda-TOTK.jpg" width="100%" alt="prueba" text="Second slide" />
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Destacados;