import React, { useState, useEffect } from "react";
import "./Cards.css";
import Card from "../Card/Card";


const Cards = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Realizar la solicitud al endpoint
        const response = await fetch('/api/cards/data');
        // Convertir la respuesta a JSON
        const data = await response.json();
        // Actualizar el estado con los datos recibidos del servidor
        setCardsData(data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []); // El segundo argumento del useEffect es un array vacío para que se ejecute solo una vez al montar el componente

  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
              series2={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};


export default Cards;