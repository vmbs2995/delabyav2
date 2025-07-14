'use client';

import { useState } from 'react';
import Background from '../components/Background';

const AuthPage = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false); // Tipado explícito para TypeScript
  const [isLoading, setIsLoading] = useState<boolean>(true); // Este estado no se usa en el código actual, pero se mantiene.
  const [rolSeleccionado, setRolSeleccionado] = useState<string>(''); // Estado para el rol seleccionado

  // Estados para los campos del formulario de registro (componentes controlados)
  const [nombre, setNombre] = useState<string>('');
  const [apellidoPaterno, setApellidoPaterno] = useState<string>('');
  const [apellidoMaterno, setApellidoMaterno] = useState<string>('');
  const [emailRegistro, setEmailRegistro] = useState<string>('');
  const [passwordRegistro, setPasswordRegistro] = useState<string>('');
  const [confirmPasswordRegistro, setConfirmPasswordRegistro] = useState<string>('');
  const [carnet, setCarnet] = useState<string>('');
  const [codigoSaga, setCodigoSaga] = useState<string>('');
  const [carrera, setCarrera] = useState<string>('');
  const [semestre, setSemestre] = useState<string>('');

  // Estados para el formulario de login
  const [emailLogin, setEmailLogin] = useState<string>('');
  const [passwordLogin, setPasswordLogin] = useState<string>('');
  const [mensajeLogin, setMensajeLogin] = useState<string>(''); // Mensajes para el formulario de login/recuperación

  // Función para manejar el cambio del rol en el formulario de registro
  const handleRolChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRolSeleccionado(event.target.value);
    // Resetear campos específicos si el rol cambia para evitar datos inconsistentes
    setCarnet('');
    setCodigoSaga('');
    setCarrera('');
    setSemestre('');
  };

  // Función para manejar el envío del formulario de registro (ejemplo)
  const handleSubmitRegistro = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      emailRegistro,
      rolSeleccionado,
      carnet,
      ...(rolSeleccionado === 'estudiante' && { codigoSaga, carrera, semestre })
    });
    // Aquí iría la lógica real para enviar los datos de registro
    // En un entorno real, usarías un modal o notificación en lugar de alert()
    alert('Registro simulado. Revisa la consola para los datos.');
  };

  // Función para manejar el envío del formulario de login (ejemplo)
  const handleSubmitLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí iría la lógica real de inicio de sesión
    // Simulación de un usuario registrado
    if (emailLogin === 'usuario@example.com' && passwordLogin === 'password123') {
      setMensajeLogin('Inicio de sesión exitoso.');
      // Redirigir o manejar la sesión del usuario
    } else {
      setMensajeLogin('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };

  // Función para solicitar la contraseña de 6 dígitos
  const handleRequestPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Evita que el botón envíe el formulario si está dentro de uno
    if (emailLogin) {
      // Simulación de verificación de usuario registrado
      if (emailLogin === 'usuario@example.com' || emailLogin === 'docente@example.com') { // Simula correos registrados
        console.log(`Solicitando contraseña de 6 dígitos para: ${emailLogin}`);
        // Lógica real para enviar la contraseña al correo (API call)
        setMensajeLogin('Se ha enviado una contraseña de 6 dígitos a su correo electrónico.');
        // Opcional: Limpiar el campo de email o redirigir después de un tiempo
        // setTimeout(() => { setEmailLogin(''); setMensajeLogin(''); }, 3000);
      } else {
        setMensajeLogin('Correo no registrado.');
      }
    } else {
      setMensajeLogin('Por favor, ingrese su correo electrónico.');
    }
  };

  return (
    <Background>
      {/* Contenedor principal: min-h-screen para adaptarse a la altura de la pantalla */}
      {/* Reducido py-5 a py-3 para menos espacio vertical general */}
      <div className="min-h-screen flex flex-col items-center justify-center px-5 py-3 flex-grow">
        {/* Título DELABYA */}
        {/* Reducido mb-5 a mb-3 para acercar el título a las tarjetas */}
        <h1 className="text-5xl md:text-6xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 mb-3 tracking-widest animate-pulse drop-shadow-lg">
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
            {/* Cambiado p-8 a p-6 para reducir el padding general de la tarjeta */}
            {/* Cambiado pb-1 a pb-6 para asegurar un padding inferior adecuado */}
            <div className="backface-hidden p-6 rounded-2xl bg-[#0f172a] shadow-xl flex flex-col justify-between pb-6">
              <div>
                {/* Reducido mb-1 a mb-0 para acercar el logo/título al formulario */}
                <div className="text-left flex items-center gap-4 mb-0">
                  <img
                    src="/logo-emi.png"
                    alt="Icono Login"
                    className="w-40 h-40 filter drop-shadow-[5px_5px_5px_rgba(234,179,8,0.6)]"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-yellow-400">
                      Inicia sesión
                    </h2>
                    <p className="text-sm text-gray-400 mt-1">
                      Accede a tu cuenta
                    </p>
                  </div>
                </div>

                {/* Formulario de Login */}
                <form
                  className="space-y-4 text-base mt-4" // Añadido mt-4 para separar el formulario del logo/título
                  onSubmit={handleSubmitLogin}
                  id="loginForm" // ID para asociar el botón de submit
                >
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white border border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    value={emailLogin}
                    onChange={(e) => setEmailLogin(e.target.value)}
                    required
                  />

                  <input
                    type="password"
                    placeholder="Contraseña"
                    className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white border border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    value={passwordLogin}
                    onChange={(e) => setPasswordLogin(e.target.value)}
                    required
                  />

                  {mensajeLogin && ( // Mostrar mensajes de login/recuperación
                    <p className={`text-sm ${mensajeLogin.includes('exitoso') || mensajeLogin.includes('enviado') ? 'text-green-400' : 'text-red-400'} text-center`}>
                      {mensajeLogin}
                    </p>
                  )}

                  {/* Botón para solicitar contraseña de 6 dígitos */}
                  <button
                    type="button" // Importante: type="button" para no enviar el formulario de login
                    onClick={handleRequestPassword}
                    className="w-full bg-transparent text-yellow-400 border border-yellow-400 py-2 rounded-md hover:bg-yellow-400 hover:text-[#0f172a] transition"
                  >
                    Solicitar contraseña
                  </button>
                </form>
              </div>
              {/* Botones de Login - Reducido mt-6 a mt-4 para menos espacio entre inputs y botones */}
              <div className="flex flex-col space-y-4 text-base mt-4">
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-[#0f172a] font-semibold py-2 rounded-md hover:bg-yellow-300 transition"
                  form="loginForm" // Asocia el botón al formulario de login
                >
                  Iniciar sesión
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsFlipped(true);
                    setMensajeLogin(''); // Limpiar mensajes al cambiar de vista
                  }}
                  className="w-full text-yellow-300 underline text-sm mt-2"
                >
                  ¿No tienes cuenta? Regístrate
                </button>
              </div>
            </div>

            {/* Registro - Se adapta a su contenido. */}
            {/* Cambiado p-8 a p-6 para reducir el padding general de la tarjeta */}
            {/* Cambiado pb-1 a pb-6 para asegurar un padding inferior adecuado */}
            <div className="rotate-y-180 backface-hidden p-6 rounded-2xl bg-[#0f172a] shadow-xl absolute top-0 left-0 w-full h-full flex flex-col pb-6">
              {/* Reducido mb- a mb-0 para acercar el logo/título al formulario */}
              <div className="text-left flex items-center gap-4 mb-0">
                <img
                  src="/logo-emi.png"
                  alt="Icono Registro"
                  className="w-40 h-40 filter drop-shadow-[5px_5px_5px_rgba(234,179,8,0.6)]"
                />
                <div>
                  <h2 className="text-2xl font-bold text-yellow-400">
                    Crear cuenta
                  </h2>
                  <p className="text-sm text-gray-400 mt-1">
                    Regístrate fácilmente
                  </p>
                </div>
              </div>
              {/* FORMULARIO CON SCROLL: flex-grow y overflow-y-auto */}
              {/* `space-y-4` para 16px entre inputs */}
              {/* Ajustado maxHeight para reflejar los nuevos paddings y márgenes */}
              <form
                className="space-y-4 text-base overflow-y-auto pr-2 flex-grow mt-4" // Añadido mt-4 para separar el formulario del logo/título
                style={{ maxHeight: 'calc(100% - 300px)' }} // Ajustado el valor para optimizar el espacio
                onSubmit={handleSubmitRegistro} // Agregado para manejar el envío del formulario
                id="registroForm" // ID para asociar el botón de submit
              >
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white border border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Apellido Paterno"
                  className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white border border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  value={apellidoPaterno}
                  onChange={(e) => setApellidoPaterno(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Apellido Materno"
                  className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white border border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  value={apellidoMaterno}
                  onChange={(e) => setApellidoMaterno(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Correo Electrónico"
                  className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white border border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  value={emailRegistro}
                  onChange={(e) => setEmailRegistro(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white border border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  value={passwordRegistro}
                  onChange={(e) => setPasswordRegistro(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Confirmar Contraseña"
                  className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white border border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  value={confirmPasswordRegistro}
                  onChange={(e) => setConfirmPasswordRegistro(e.target.value)}
                />

                {/* SELECT DE ROL - CORREGIDO */}
                <select
                  className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white border border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  value={rolSeleccionado} // Controlado por el estado
                  onChange={handleRolChange} // Manejador de cambio
                >
                  <option value="" disabled>
                    Seleccione un rol
                  </option>
                  <option value="docente">Docente</option>
                  <option value="estudiante">Estudiante</option>
                </select>

                {/* CAMPOS CONDICIONALES BASADOS EN EL ROL */}
                {rolSeleccionado === 'docente' && (
                  <input
                    type="text"
                    placeholder="Carnet"
                    className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white border border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    value={carnet}
                    onChange={(e) => setCarnet(e.target.value)}
                  />
                )}

                {rolSeleccionado === 'estudiante' && (
                  <>
                    <input
                      type="text"
                      placeholder="Carnet"
                      className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white border border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      value={carnet}
                      onChange={(e) => setCarnet(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Código SAGA"
                      className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white border border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      value={codigoSaga}
                      onChange={(e) => setCodigoSaga(e.target.value)}
                    />
                    <select
                      className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white border border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      value={carrera}
                      onChange={(e) => setCarrera(e.target.value)}
                    >
                      <option value="" disabled>
                        Seleccione una carrera
                      </option>
                      <option value="sistemas">Ingeniería de Sistemas</option>
                      <option value="telecomunicaciones">Ingeniería de Telecomunicaciones</option>
                      <option value="mecatronica">Ingeniería Mecatrónica</option>
                      <option value="electronicos">Ingeniería en Sistemas Electrónicos</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Semestre"
                      className="w-full px-4 py-2 rounded-md bg-[#1e293b] text-white border border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      value={semestre}
                      onChange={(e) => setSemestre(e.target.value)}
                    />
                  </>
                )}
              </form>
              {/* Botones de Registro y "Ya tienes cuenta" - Reducido mt-6 a mt-4 */}
              <div className="flex flex-col space-y-4 text-base mt-4">
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-[#0f172a] font-semibold py-2 rounded-md hover:bg-yellow-300 transition"
                  form="registroForm" // Asocia el botón al formulario
                >
                  Registrarse
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsFlipped(false);
                    setMensajeLogin(''); // Limpiar mensajes al cambiar de vista
                  }}
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
