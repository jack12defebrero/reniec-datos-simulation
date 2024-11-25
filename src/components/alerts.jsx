import Swal from 'sweetalert2';

/**
 * Valida si un correo electrónico tiene un formato válido.
 * @param {string} email - Correo electrónico a validar.
 * @returns {boolean} - `true` si es válido, `false` en caso contrario.
 */
export const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  


export const showIntroAlert = () => {
    Swal.fire({
      title: 'Bienvenido al sistema de la RENIEC',
      text: 'Esta plataforma te permite gestionar datos de identificación y acceder a servicios en línea.',
      icon: 'info',
      toast: true,
      position: 'top-end', // Posición en la parte superior derecha
      showConfirmButton: false, // Sin botón de confirmación
      timer: 10000, // Dura 10 segundos
      timerProgressBar: true, // Barra de progreso para cierre automático
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  };

// Alerta de éxito personalizada
export const showSuccessAlert = (title, text) => {
  Swal.fire({
    title: title,
    text: text,
    icon: 'success',
    toast: true, // Esto hace que la alerta sea tipo "toast" (pequeña)
    position: 'top-end', // Coloca la alerta en la parte superior derecha
    showConfirmButton: false, // Oculta el botón de confirmación
    timer: 3000, // Duración de 3 segundos
    timerProgressBar: true, // Muestra la barra de progreso
    showClass: {
      popup: 'animate__animated animate__fadeInDown' // Animación al mostrar
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp' // Animación al ocultar
    }
  });
};

// Alerta de error personalizada
export const showErrorAlert = (title, text) => {
  Swal.fire({
    title: title,
    text: text,
    icon: 'error',
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  });
};
