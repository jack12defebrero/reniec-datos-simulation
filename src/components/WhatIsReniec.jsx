import React from 'react';

const WhatIsReniec = () => {
  return (
    <div className="surface-0 text-center">
      <div className="mb-3 font-bold text-3xl">
        <span className="text-900">RENIEC: </span>
        <span className="text-blue-600">Garantizando tu Identidad</span>
      </div>
      <div className="text-700 mb-6">Nuestro compromiso con la identidad y el registro civil en Perú.</div>
      <div className="grid">
        <div className="col-12 md:col-4 mb-4 px-5">
          <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
            <i className="pi pi-id-card text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">Identificación Nacional</div>
          <span className="text-700 line-height-3">Emisión y validación del DNI como documento oficial de identidad en Perú.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
          <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
            <i className="pi pi-lock text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">Seguridad en tu Identidad</div>
          <span className="text-700 line-height-3">Protección de datos personales con sistemas de seguridad avanzados y encriptación.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
          <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
            <i className="pi pi-check-circle text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">Acceso Rápido</div>
          <span className="text-700 line-height-3">Trámites ágiles y fáciles para obtener tu DNI y otros registros civiles.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
          <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
            <i className="pi pi-globe text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">Cobertura Nacional</div>
          <span className="text-700 line-height-3">Presencia en todo el país para garantizar servicios de registro civil y DNI.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
          <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
            <i className="pi pi-github text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">Portal Digital</div>
          <span className="text-700 line-height-3">Accede a trámites y servicios en línea a través de nuestra plataforma oficial.</span>
        </div>
        <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
          <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
            <i className="pi pi-shield text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">Confianza y Transparencia</div>
          <span className="text-700 line-height-3">Cientos de miles de peruanos confían en nuestros servicios y en la protección de su identidad.</span>
        </div>
      </div>
    </div>
  );
};

export default WhatIsReniec;
