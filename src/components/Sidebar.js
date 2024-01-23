import React, { useState, useContext, useEffect } from 'react'
import AuthContext  from '../context/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { AiFillPieChart } from 'react-icons/ai'
import { SiFuturelearn } from 'react-icons/si'
import { IoIosLogIn , IoIosLogOut} from "react-icons/io";
import { CgProfile } from 'react-icons/cg'
import Logo from './Logo'
import Letterslogo from './Letterslogo'
import HamburgerButton from './HamburgerMenuButton/HamburgerButton'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";


const Sidebar = () => {
  const [open, setOpen] = useState(true)
  const [mobileMenu, setMobileMenu] = useState(false)
  const location = useLocation();
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, logoutUser, authTokens} = useContext(AuthContext);
  const [userType, setUserType] = useState('');


    let [profile, setProfile] = useState([])

    const getProfile = async () => {
      if (!user || !authTokens.access) {
        // Limpia los datos del perfil si el usuario no está autenticado
        handleUserProfile(null);
        return;
      }

      try {
        let response = await fetch('http://localhost:8000/get_profile/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + String(authTokens.access),
          },
        });

        if (response.status === 200) {
          let data = await response.json();
          console.log(data);

          // Refactorización para evitar código duplicado
          handleUserProfile(data);
        } else if (response.status === 401) {
          // Manejar la lógica de desconexión o redirección a la página de inicio de sesión
          logoutUser();
        } else {
          console.error('Error al obtener el perfil:', response.statusText);
        }
      } catch (error) {
        console.error('Error en la solicitud de perfil:', error);
      }
    };

    useEffect(() => {
      getProfile();
    }, [user]);
  
  const handleUserProfile = (data) => {
    if (data) {
      const userType = data.user_type;
      setUserType(userType);
      console.log('Tipo de usuario:', userType);
    } else {
      // Limpia userType si data es null
      setUserType(null);
      console.log('El usuario ha cerrado sesión');
    }
  };
  
  let Menus = [
    { title: 'Dashboard', path: '/dashboard', src: <AiFillPieChart /> },

  ];

  if (user) {
    Menus.push({ title: 'Profile', path: '/profile', src: <CgProfile /> });
  }

  if (userType === 'SUBDIRECTOR') {
    Menus.push({ title: 'Vista Subdirector', path: '/subdirector', src: <SiFuturelearn /> });
    Menus.push({ title: 'Vista Gerente', path: '/gerente', src: <SiFuturelearn /> });
    Menus.push({ title: 'Vista Supervisor', path: '/supervisor', src: <SiFuturelearn /> });
  } else if (userType === 'GERENTE') {
    Menus.push({ title: 'Vista Gerente', path: '/gerente', src: <SiFuturelearn /> });
    Menus.push({ title: 'Vista Supervisor', path: '/supervisor', src: <SiFuturelearn /> });
  } else if (userType === 'SUPERVISOR') {
    Menus.push({ title: 'Vista Supervisor', path: '/supervisor', src: <SiFuturelearn /> });
  }

  // Agrega el elemento de iniciar/cerrar sesión al final

  Menus.push({ title: user ? 'Cerrar sesión' : 'Iniciar sesión', path: '/login', src: user ? <IoIosLogOut  /> : <IoIosLogIn /> , gap: 'true' });

  // y así sucesivamente para los diferentes tipos de usuario
  return (
    <>
      <div
        className={`${
          open ? 'w-60' : 'w-fit'
        } hidden sm:block relative h-screen duration-300 bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800`}
      >
        <BsArrowLeftCircle
          className={`${
            !open && 'rotate-180'
          } absolute text-3xl bg-white fill-slate-800  rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
          onClick={() => setOpen(!open)}
        />
        <Link to='/'>
          <div className={`flex ${open && 'gap-x-4'} items-center transition-transform transform hover:scale-110`}>
            <Logo className='pl-2' />
            {open && (
              /* <span className='text-xl font-medium whitespace-nowrap dark:text-white'>
                Goal Quest
              </span> */
              <Letterslogo/>
            )}
          </div>
        </Link>

        <ul className='pt-6'>
          
          {Menus.map((menu, index) => (
            <Link to={menu.path} key={index}>
              <li
                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? 'mt-9' : 'mt-2'} ${
                  location.pathname === menu.path &&
                  'bg-gray-200 dark:bg-gray-700'
                }`}
                onClick={(e) => {
                  if (menu.title === 'Cerrar sesión') {
                    /* logoutUser(); */
                    e.preventDefault();
                    onOpen();
                  }
                }}
              >
                <span className='text-2xl'>{menu.src}</span>
                <span
                  className={`${
                    !open && 'hidden'
                  } origin-left duration-300 hover:block`}
                >
                  {menu.title}
                  
                </span>
                
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {/* Mobile Menu */}
      <div className="pt-3">
        <HamburgerButton
          setMobileMenu={setMobileMenu}
          mobileMenu={mobileMenu}
        />
      </div>
      <div className="sm:hidden">
        <div
          className={`${
            mobileMenu ? 'flex' : 'hidden'
          } absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 dark:text-white  bg-gray-50 dark:bg-slate-800 drop-shadow md rounded-xl`}
        >
          {Menus.map((menu, index) => (
            <Link
              to={menu.path}
              key={index}
              onClick={() => setMobileMenu(false)}
              
            > 
              <span
                className={` ${
                  location.pathname === menu.path &&
                  'bg-gray-200 dark:bg-gray-700'
                } p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700`}
                onClick={(e) => {
                  if (menu.title === 'Cerrar sesión') {
                    e.preventDefault();
                    onOpen();
                  }
                }}
                
              >
                {menu.title}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">¿Realmente deseas cerrar sesión?</ModalHeader>
              <ModalBody>
                <p>Al cerrar sesión, se te redirigirá a la página de inicio de sesión.</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                <Button color="primary" onPress={() => {
                  logoutUser();
                  onClose();
                }}>
                  Cerrar sesión
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
export default Sidebar
