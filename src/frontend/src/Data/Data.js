// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
//import img1 from "../imgs/img1.png";
import robot from "../imgs/robot.svg";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Panel",
  },
  // {
  //   icon: UilClipboardAlt,
  //   heading: "Orders",
  // },
  // {
  //   icon: UilUsersAlt,
  //   heading: "Customers",
  // },
  // {
  //   icon: UilPackage,
  //   heading: 'Products'
  // },
  {
    icon: UilChart,
    heading: 'Estadísticas'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Calidad",
    color: {
      backGround: "linear-gradient(180deg, #3498db, #2980b9)", //Aquí se cambia el COLOR de fondo
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 93.4,
    value: "93",
    png: UilClipboardAlt,
    //png: UilUsdSquare,
    series: [
      {
        name: "México",
        data: [78, 80, 28, 51, 80, 67, 98],
      },
      {
        name: "Guadalajara",
        data: [92, 87, 40, 89, 75, 56, 78],
      }
    ],
  },
  {
    title: "Adherencia",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    //Aquí se cambia el valor de la ruedita de la gráfica
    barValue: 87.2,
    //Aquí se cambia el valor que aparece en cada carta :3 
    value: "87",
    png: UilClipboardAlt,
    //png: UilMoneyWithdrawal,
    series: [
      {
        name: "México",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
      {
        name: "Guadalajara",
        data: [92, 87, 40, 89, 75, 56, 78],
      },
    ],
  },
  {
    title: "AHT",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 93,
    value: "327 s",
    png: UilClipboardAlt,
    series: [
      {
        name: "México",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
      {
        name: "Guadalajara",
        data: [92, 87, 40, 89, 75, 56, 78],
    },
    ],
  },
];

//AQUI PONEMOS EL MENSAJE DEL ROBOT :3 
export const UpdatesData = [
  {
    img: robot,
    mensaje: "Si tienes alguna duda o sugerencia sobre éste Dashboard, escribenos y el equipo de Robotics te ayudará.",
  },
  
];
// Recent Update Card Data
/*export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
*/

/*
export const UpdatesData = [
  {
    img: robot,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  
];
*/
