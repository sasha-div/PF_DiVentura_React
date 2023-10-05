import React from 'react'
import { Container } from 'react-bootstrap';
import FormularioSuscripcion from '../FormularioSuscripcion/FormularioSuscripcion';

const Conocenos = () => {
    return (
        <div>
            <div><img className='my-3' src="https://i.ibb.co/2KjVZsf/pexels-cottonbro-studio-4836371-1.webp" alt="banner-conócenos" width="100%" /></div>
            <Container>
                <h1 className='d-flex justify-content-center my-5'>¡Bienvenid@s a 64 Bits!</h1>
                <section>
                    <p>En esta tiendita online no solo vendemos videojuegos, sino que vivimos la emoción de los mundos virtuales. Fundada por un equipo de apasionados jugadores, nuestra tienda nació de la necesidad de ofrecer más que solo productos; buscamos ser el destino definitivo para los amantes de los videojuegos.</p>

                    <p>Nos enorgullece no solo ofrecer una amplia gama de títulos para todas las plataformas, sino también brindar una experiencia de compra excepcional. Desde los últimos lanzamientos hasta joyas ocultas, curamos cuidadosamente nuestro catálogo para asegurarnos de que encuentres el juego perfecto que se adapte a tu estilo.</p>

                    <p>En Bit64, entendemos que los videojuegos son más que simples entretenimientos; son portales a mundos llenos de imaginación y desafíos. Nuestro equipo está comprometido a proporcionarte no solo productos de alta calidad, sino también un servicio al cliente excepcional.</p>

                    <p>Únete a nosotros en esta emocionante travesía a través de los universos digitales. Explora, juega y descubre la diferencia de una tienda creada por jugadores para jugadores. ¡Bienvenido a nuestra comunidad!</p>
                </section>

                <h2 className='mt-5'>Suscríbete para recibir actualizaciones</h2>
                <section>
                    <p>Mantente al tanto de nuestras últimas noticias y novedades suscribiéndote a nuestro boletín informativo.</p>
                    <FormularioSuscripcion />
                </section>

            </Container>


        </div>
    )
}

export default Conocenos;