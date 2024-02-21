import React, { useState, useEffect } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import axios from 'axios'; // Importa Axios para realizar solicitudes HTTP


import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// parent Card

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

// Compact Card
function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround
        //boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        {/* antes de param.value puedes poner cualquier texto para que aparezca la información*/}
         <span>{param.value}</span> 
        <span>Último trimestre</span>
      </div>
    </motion.div>
  );
}

// Expanded Card
const ExpandedCard = ({ param, setExpanded }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/cards/graphics');
        setChartData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Verificar si chartData es null antes de hacer la solicitud
    if (chartData === null) {
      fetchData();
    }
  }, []); // Cambiar a [chartData]

  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        {/* Verificar si chartData y chartData.options existen antes de renderizar el gráfico */}
        {chartData && chartData.options && (
          <Chart options={chartData.options} series={param.series} type="area" />
        )}
      </div>
      <span>Último trimestre</span>
    </motion.div>
  );
}


export default Card;
