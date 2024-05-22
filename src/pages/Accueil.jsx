import React, { useState, useEffect } from 'react';
import './Accueil.css';
import cars from '../assets/data/cars.json';

const Accueil = () => {
    const [latestCars, setLatestCars] = useState([]);

    useEffect(() => {
        // Trier les voitures par date d'arrivée (du plus récent au plus ancien)
        const sortedCars = [...cars].sort((a, b) => new Date(b.arrivalDate) - new Date(a.arrivalDate));
        // Sélectionner les 5 dernières voitures
        const latestFiveCars = sortedCars.slice(0, 5);
        setLatestCars(latestFiveCars);
    }, []);

    return (
        <div className="Accueil">
            <div className="accueil-top">
                <h2>SITE AUTOMOBILE <span>N°1 EN FRANCE</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati illum non magnam officiis pariatur iure doloremque adipisci minus similique animi dolore incidunt id maxime deleniti cum blanditiis, et repudiandae debitis tenetur recusandae quaerat eveniet perspiciatis odio. Beatae perferendis explicabo, eaque quos nobis non ratione et! Est, placeat laboriosam sequi, libero pariatur laudantium omnis aliquid reprehenderit tenetur fuga consequatur nihil, dicta officia dolore? Consectetur laborum exercitationem repudiandae excepturi, tempore quidem, nihil ut totam fugit deleniti quod asperiores necessitatibus atque tenetur facilis cum tempora doloremque alias blanditiis porro itaque sapiente labore? Ad optio quo alias, quis natus ratione totam! Minus, totam. Ipsa?</p>
            </div>
            <div className="accueil-news">
                <h2>NOUVEAUTÉS</h2>
                <ul>
                    {latestCars.map((car) => (
                        <li key={car.id}>
                            <img src={car.photo} alt={`${car.make} ${car.model}`} />
                            <div>
                                {car.make} {car.model} ({car.year}) - ${car.price} - Arrivée: {car.arrivalDate}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Accueil;
