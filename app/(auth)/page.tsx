'use client';

import { useState } from 'react';
import Background from '../components/Background';

const AuthPage = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Background>
      {/* Contenedor principal: min-h-screen para adaptarse a la altura de la pantalla */}
      <div className="min-h-screen flex flex-col items-center justify-center px-5 py-5 flex-grow">
        {/* Título DELABYA */}
        <h1 className="text-5xl md:text-6xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 mb-5 tracking-widest animate-pulse drop-shadow-lg">
          DELABYA
        </h1>

        {/* Contenedor de las tarjetas: flex-grow para que ocupe el espacio vertical restante */}
        <div className="w-full max-w-xl perspective flex-grow h-full flex items-center justify-center">
          <div
            className={`relative transition-transform duration-700 preserve-3d w-full h-full ${
              isFlipped ? 'rotate-y-180' : ''
            }`}
          >
            {/* Login - Se adapta a su contenido. */}
            {/* Cambiado pb-8 a pb-5 para 20px (aprox 2cm) de padding inferior */}
            <div className="backface-hidden p-8 rounded-2xl bg-[#0f172a] shadow-xl flex flex-col justify-between pb-1"> {/* Cambiado pb-8 a pb-5 */}
              <div>
                {/* Reducido mb-8 a mb-4 para menos espacio entre título y formulario */}
                <div className="text-left flex items-center gap-4 mb-1"> {/* Reducido mb-8 a mb-4 */}
                  <img
                    src="/logo-emi.png"
                    alt="Icono Login"
                    className="w-40 h-40 filter drop-shadow-[5px_5px_5px_rgba(234,179,8,0.6)]" 
                  />
                  <div>
                      <h2 className="text-2xl font-bold text-yellow-400">Inicia sesión</h2>
                      <p className="text-sm text-gray-400 mt-1">Accede a tu cuenta</p>
                  </div>
                </div>      
                {/* `space-y-4` para 16px entre inputs */}
                <form className="space-y-4 text-base"> {/* Cambiado space-y-6 a space-y-4 */}
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white border border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    type="password"
                    placeholder="Contraseña"
                    className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white border border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </form>
              </div>

              {/* Botones de Login - Reducido mt-8 a mt-6 para menos espacio entre inputs y botones */}
              <div className="flex flex-col space-y-4 text-base mt-6"> {/* Reducido mt-8 a mt-6 */}
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-[#0f172a] font-semibold py-2 rounded-md hover:bg-yellow-300 transition"
                >
                  Iniciar sesión
                </button>
                <button
                    type="button"
                    onClick={() => setIsFlipped(true)}
                    className="w-full text-yellow-300 underline text-sm mt-2"
                  >
                    ¿No tienes cuenta? Registrate
                  </button>
              </div>
            </div>

            {/* Registro - Se adapta a su contenido. */}
            {/* Cambiado pb-8 a pb-5 para 20px (aprox 2cm) de padding inferior */}
            <div className="rotate-y-180 backface-hidden p-8 rounded-2xl bg-[#0f172a] shadow-xl absolute top-0 left-0 w-full h-full flex flex-col pb-1"> {/* Cambiado pb-8 a pb-5 */}
              {/* Reducido mb-8 a mb-4 para menos espacio entre título y formulario */}
              <div className="text-left flex items-center gap-4 mb-"> {/* Reducido mb-8 a mb-4 */}
                <img
                  src="/logo-emi.png"
                  alt="Icono Registro"
                  className="w-40 h-40 filter drop-shadow-[5px_5px_5px_rgba(234,179,8,0.6)]"
                />
                <div>
                  <h2 className="text-2xl font-bold text-yellow-400">Crear cuenta</h2>
                  <p className="text-sm text-gray-400 mt-1">Regístrate fácilmente</p>
                </div>
              </div>
              
              {/* FORMULARIO CON SCROLL: flex-grow y overflow-y-auto */}
              {/* `space-y-4` para 16px entre inputs */}
              {/* **MUY IMPORTANTE: REAJUSTA maxHeight con las herramientas de desarrollo** */}
              {/* Ahora las alturas fijas son más pequeñas: Logo(160px) + mb-4(16px) + pb-5(20px) + Botones(~80-100px) = ~276px (aprox 280px) */}
              <form className="space-y-4 text-base overflow-y-auto pr-2 flex-grow" style={{ maxHeight: 'calc(110% - 280px)' }}> {/* Cambiado space-y-6 a space-y-4, AJUSTA maxHeight */}
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white border border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="text"
                  placeholder="Apellido Paterno"
                  className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white border border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="text"
                  placeholder="Apellido Materno"
                  className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white border border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="email"
                  placeholder="Correo Electrónico"
                  className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white border border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white border border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="password"
                  placeholder="Confirmar Contraseña"
                  className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white border border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <select className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white border border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                  <option value="" disabled selected>Seleccione un rol</option>
                  <option value="admin">Administrador</option>
                  <option value="usuario">Usuario</option>
                </select>
              </form>
              
              {/* Botones de Registro y "Ya tienes cuenta" - Reducido mt-8 a mt-6 */}
              <div className="flex flex-col space-y-4 text-base mt-6"> {/* Reducido mt-8 a mt-6 */}
                  <button
                    type="submit"
                    className="w-full bg-yellow-400 text-[#0f172a] font-semibold py-2 rounded-md hover:bg-yellow-300 transition"
                  >
                    Registrarse
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsFlipped(false)}
                    className="w-full text-yellow-300 underline text-sm mt-2"
                  >
                    ¿Ya tienes cuenta? Iniciar sesión
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default AuthPage;