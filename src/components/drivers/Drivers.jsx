import React, { useEffect, useState } from 'react';
import { getDrivers } from '../../services/apiService';
import './drivers.scss';

const Drivers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [drivers, setDrivers] = useState([]);
  const [tableHeaders, setTableHeaders] = useState(null);

  useEffect(() => {
    const initData = async () => {
      const driversData = await getDrivers();
      if (!!driversData) {
        setTableHeaders(Object.keys(driversData[0]));
        setDrivers(driversData);
      }
      setIsLoading(false);
    };
    initData();
  }, []);

  const renderTableHeaders = () =>
    tableHeaders.map((header) => (
      <th key={header} style={{ textTransform: 'capitalize' }} scope="col">
        {header}
      </th>
    ));

  const renderTableBody = () =>
    drivers.map((purchase) => (
      <tr key={purchase}>
        {tableHeaders.map((header, index) =>
          index === 0 ? (
            <th scope="row" key={index + purchase[header]}>
              {purchase[header]}
            </th>
          ) : (
            <td key={index + purchase[header]}>{purchase[header]}</td>
          ),
        )}
      </tr>
    ));

  return isLoading ? (
    'Cargando...'
  ) : !drivers.length ? (
    'Aún no hay conductores cargados.'
  ) : (
    <div>
      <h2>Listado de conductores</h2>
      <hr />
      <table className="table">
        <thead className="thead-light">
          <tr>{renderTableHeaders()}</tr>
        </thead>
        <tbody>{renderTableBody()}</tbody>
      </table>
    </div>
  );
};

export default Drivers;
