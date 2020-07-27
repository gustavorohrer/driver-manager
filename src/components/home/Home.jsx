import React from 'react';

const Home = () => (
  <div>
    <h2>Exercise Instructions</h2>
    <hr />
    <p>
      Escribir en la tecnologia de frontend preferida (ej.: React, React Native / Redux, Angular,
      etc) una app que permita el alta de conductores para una aplicación estilo Uber consignando
      datos como nombre, edad, telefono, email, patente, modelo y año.
    </p>
    <p>
      <b>Consideraciones:</b> Se presupone que la aplicación se comunica con el backend mediante una
      API REST, la cual, a efectos de este challenge podrá mockearse o hacer que devuelvan
      respuestas "dummy": El contrato será: POST https://viapool.com/driver
    </p>
    <p>
      - Si bien el endpoint estará mockeado, el código deberá quedar listo para reemplazar
      fácilmente ese mock por una API real, aunque no se pide tener en consideración aspectos como
      CORS, auth tokens, etc... Lo que se quiere aquí evaluar es la integración de la UI con una API
      REST.
    </p>
    <p>
      - El diseño de la UI queda a elección del desarrollador, pero debería proveer una experiencia
      de usuario razonable.
    </p>
    <p>
      - Se espera que, a pesar de ser un coding challenge, el código tenga el mismo nivel que un
      código productivo: esto incluye (aunque no está limitado a): buenas prácticas, naming
      conventions, uso de frameworks / librerías usuales, tests, documentación de las funciones en
      el código etc.
    </p>
    <p>
      El proyecto es simple. Sólo esperamos un repo Git como resultado del proyecto. Cualquier duda
      o consulta estamos a disposición.
    </p>
  </div>
);

export default Home;
