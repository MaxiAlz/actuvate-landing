import React from "react";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { APP_TEXT } from "../constants/appTexts";
import { TbClockBitcoin, TbHeartBitcoin } from "react-icons/tb";
import {
  MdCalendarMonth,
  MdCheck,
  MdLightbulbOutline,
  MdPeopleAlt,
} from "react-icons/md";
import Link from "next/link";
import { GiTicket } from "react-icons/gi";
import { IoMdGlobe } from "react-icons/io";

const ProducersPage = () => {
  return (
    <main>
      <HearoSection />
      <StatsSection />
      <Features />
      <Benefits />
      <ContactUs />
    </main>
  );
};

export default ProducersPage;

const HearoSection = () => {
  return (
    <section
      className="dark:bg-boxdark-2 h-full  dark:bg-gray-900 relative p-5  bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      <div className="absolute inset-0  bg-black bg-opacity-90"></div>
      <div className=" relative z-10 flex justify-evenly items-center p-10">
        <div className="">
          <div className="flex items-center justify-start gap-3 mb-2">
            <BsFillRocketTakeoffFill size={40} className="text-primary" />
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-400">
              ¡Hola Productor!
            </h2>
          </div>
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl xl:text-6xl ">
            Gracias por crear experiencias
          </h1>
          <p className="max-w-2xl  font-light text-gray-500  md:text-lg lg:text-xl dark:text-gray-400">
            Queremos ser lideres en la creacion de herramientas digitales para
            eventos y productores. Pensamos mucho en vos, accede a todas las
            herramientas y beneficios de trabajar con nosotros.
          </p>
          <p className="font-bold text-primary mt-2 text-xl">
            ¡Crea, trabaja y disfruta!
          </p>
          <Link href="#contacto">
            <button className="px-6 py-3 flex items-center mt-4 bg-black text-primary-900 font-semibold rounded-lg shadow-md hover:bg-primary  border-gray-300 border border-gray">
              Quiero mi cuenta de organizador
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </Link>
        </div>

        <div className="w-96 hidden md:block">
          <img
            // src="https://images.pexels.com/photos/8973480/pexels-photo-8973480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            src="/images/cohete-espacial-despegando--solo-icono.png"
            alt="Hero Image"
          />
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    {
      name: "Eventos Publicados",
      value: "150+",
      icon: <MdCalendarMonth size={50} />,
    },
    {
      name: "Usuarios Activos",
      value: "10,000+",
      icon: <MdPeopleAlt size={50} />,
    },
    {
      name: "E-Tickets Otorgados",
      value: "50,000+",
      icon: <GiTicket size={50} />,
    },
    {
      name: "Provincias Activas",
      value: "23",
      icon: <IoMdGlobe size={50} />,
    },
  ];

  return (
    <section className="w-full my-20 bg-gray-100  ">
      <div className="px-4 md:px-6">
        <h2 className="text-center my-12 text-4xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
          Nuestras Estadísticas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div className="flex flex-col items-center ">
              {stat.icon}
              <h3 className="text-3xl font-bold text-primary">{stat.value}</h3>
              <p className="text-xl text-muted-foreground text-center ">
                {stat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const Features = () => {
  const features = [
    "Planificación personalizada para todo tipo de eventos",
    "Gestión de invitados y RSVP",
    "Selección de proveedores confiables",
    "Coordinación el día del evento",
    "Soporte 24/7",
    "Herramientas de presupuesto y seguimiento de gastos",
  ];

  return (
    <section id="caracteristicas" className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-4xl text-center mb-12">
          Características principales
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="dark:bg-boxdark p-4 shadow-md rounded-lg"
            >
              <section className="grid grid-cols-4 gap-4">
                <div className="col-span-1 flex items-center justify-center">
                  <MdCheck
                    className="h-6 w-6 text-primary dark:text-primary-light mr-2"
                    size={60}
                  />
                </div>
                <div className="col-span-3">
                  <h5 className="text-xl font-bold text-gray-900 dark:text-white">
                    {feature}
                  </h5>
                </div>
              </section>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    {
      title: "Ahorra tiempo",
      description: "Organiza tu evento en minutos, no en días.",
      icon: TbClockBitcoin,
    },
    {
      title: "Reduce el estrés",
      description: "Deja que nosotros nos encarguemos de los detalles.",
      icon: TbHeartBitcoin,
    },
    {
      title: "Impresiona a tus invitados",
      description: "Crea experiencias memorables que tus invitados adorarán.",
      icon: MdLightbulbOutline,
    },
  ];

  return (
    <section id="beneficios" className="py-16  ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-4xl text-center mb-12">
          Beneficios para ti
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <benefit.icon className="h-12 w-12 mx-auto mb-4 text-primary dark:text-primary-light" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactUs = () => {
  return (
    <section
      id="contacto"
      className="py-16 bg-gray-50 dark:bg-gray-900 relative"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      <div className="absolute inset-0  bg-black bg-opacity-90"></div>
      <div className="relative z-10 container mx-auto px-4 grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
            Estamos para lo que necesites
          </h2>
          <div className="m-5">
            <p className="py-2">
              si quieres solicitar una cuenta de organizador escribe "Solicitar
              cuenta" en el asunto
            </p>
            <p className="py-2">Estamos para cubrir cualquiera de tus dudas</p>
            <p className="py-2">contactate por wsp aqui</p>
            <p className="py-2">Soporte 24/7</p>
          </div>
        </div>

        <form className=" w-full p-5">
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
            Contactanos
          </h2>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 dark:text-gray-300 mb-2"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              // value={formData.name}
              // onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary  bg-black "
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              // value={formData.email}
              // onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary  bg-black "
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="asunt"
              className="block text-gray-700 dark:text-gray-300 mb-2"
            >
              Asunto
            </label>
            <input
              type="asunt"
              id="asunt"
              name="asunt"
              // value={formData.email}
              // onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary  bg-black "
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 dark:text-gray-300 mb-2"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              // value={formData.message}
              // onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary  bg-black "
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};
