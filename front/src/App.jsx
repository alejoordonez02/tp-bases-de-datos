import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import { getPeopleSQL, addPersonSQL, getPeopleNoSQL, addPersonNoSQL } from './api/peopleSQL';
import './App.css';

function App() {
  const [dataSQL, setDataSQL] = useState([]);
  const [dataNoSQL, setDataNoSQL] = useState([]);
  const [newPersonSQL, setNewPersonSQL] = useState({
    nid: '',
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    nationality: ''
  });
  const [newPersonNoSQL, setNewPersonNoSQL] = useState({
    nid: '',
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    nationality: ''
  });

  useEffect(() => {
    const fetchDataSQL = async () => {
      try {
        const result = await getPeopleSQL();
        setDataSQL(result);
      } catch (error) {
        console.error('Error fetching SQL data:', error);
      }
    };
    const fetchDataNoSQL = async () => {
      try {
        const result = await getPeopleNoSQL();
        setDataNoSQL(result);
      } catch (error) {
        console.error('Error fetching NoSQL data:', error);
      }
    };
    fetchDataSQL();
    fetchDataNoSQL();
  }, []);

  const handleInputChangeSQL = (e) => {
    const { name, value } = e.target;
    setNewPersonSQL({ ...newPersonSQL, [name]: value });
  };

  const handleInputChangeNoSQL = (e) => {
    const { name, value } = e.target;
    setNewPersonNoSQL({ ...newPersonNoSQL, [name]: value });
  };

  const handleAddPersonSQL = async () => {
    try {
      const result = await addPersonSQL(newPersonSQL);
      setDataSQL([...dataSQL, result]);
      setNewPersonSQL({
        nid: '',
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        nationality: ''
      });
    } catch (error) {
      console.error('Error adding SQL person:', error);
    }
  };

  const handleAddPersonNoSQL = async () => {
    try {
      const result = await addPersonNoSQL(newPersonNoSQL);
      setDataNoSQL([...dataNoSQL, result]);
      setNewPersonNoSQL({
        nid: '',
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        nationality: ''
      });
    } catch (error) {
      console.error('Error adding NoSQL person:', error);
    }
  };

  const columns = React.useMemo(
    () => [
      {
        Header: 'DNI',
        accessor: 'nid',
      },
      {
        Header: 'Nombre',
        accessor: 'firstName',
      },
      {
        Header: 'Apellido',
        accessor: 'lastName',
      },
      {
        Header: 'Edad',
        accessor: 'age',
      },
      {
        Header: 'Género',
        accessor: 'gender',
      },
      {
        Header: 'Nacionalidad',
        accessor: 'nationality',
      },
    ],
    []
  );

  const tableSQL = useTable({ columns, data: dataSQL });
  const tableNoSQL = useTable({ columns, data: dataNoSQL });

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h2>SQL Data</h2>
          <table {...tableSQL.getTableProps()}>
            <thead>
              {tableSQL.headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()} key={column.id}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...tableSQL.getTableBodyProps()}>
              {tableSQL.rows.map(row => {
                tableSQL.prepareRow(row);
                return (
                  <tr {...row.getRowProps()} key={row.original.nid}>
                    {row.cells.map(cell => (
                      <td {...cell.getCellProps()} key={cell.column.id}>{cell.render('Cell')}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>
            <h2>Agregar Persona SQL</h2>
            <input
              type="text"
              name="nid"
              placeholder="DNI"
              value={newPersonSQL.nid}
              onChange={handleInputChangeSQL}
            />
            <input
              type="text"
              name="firstName"
              placeholder="Nombre"
              value={newPersonSQL.firstName}
              onChange={handleInputChangeSQL}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Apellido"
              value={newPersonSQL.lastName}
              onChange={handleInputChangeSQL}
            />
            <input
              type="number"
              name="age"
              placeholder="Edad"
              value={newPersonSQL.age}
              onChange={handleInputChangeSQL}
            />
            <input
              type="text"
              name="gender"
              placeholder="Género"
              value={newPersonSQL.gender}
              onChange={handleInputChangeSQL}
            />
            <input
              type="text"
              name="nationality"
              placeholder="Nacionalidad"
              value={newPersonSQL.nationality}
              onChange={handleInputChangeSQL}
            />
            <button onClick={handleAddPersonSQL}>Agregar Persona SQL</button>
          </div>
        </div>
        <div>
          <h2>NoSQL Data</h2>
          <table {...tableNoSQL.getTableProps()}>
            <thead>
              {tableNoSQL.headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()} key={column.id}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...tableNoSQL.getTableBodyProps()}>
              {tableNoSQL.rows.map(row => {
                tableNoSQL.prepareRow(row);
                return (
                  <tr {...row.getRowProps()} key={row.original.nid}>
                    {row.cells.map(cell => (
                      <td {...cell.getCellProps()} key={cell.column.id}>{cell.render('Cell')}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>
            <h2>Agregar Persona NoSQL</h2>
            <input
              type="text"
              name="nid"
              placeholder="DNI"
              value={newPersonNoSQL.nid}
              onChange={handleInputChangeNoSQL}
            />
            <input
              type="text"
              name="firstName"
              placeholder="Nombre"
              value={newPersonNoSQL.firstName}
              onChange={handleInputChangeNoSQL}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Apellido"
              value={newPersonNoSQL.lastName}
              onChange={handleInputChangeNoSQL}
            />
            <input
              type="number"
              name="age"
              placeholder="Edad"
              value={newPersonNoSQL.age}
              onChange={handleInputChangeNoSQL}
            />
            <input
              type="text"
              name="gender"
              placeholder="Género"
              value={newPersonNoSQL.gender}
              onChange={handleInputChangeNoSQL}
            />
            <input
              type="text"
              name="nationality"
              placeholder="Nacionalidad"
              value={newPersonNoSQL.nationality}
              onChange={handleInputChangeNoSQL}
            />
            <button onClick={handleAddPersonNoSQL}>Agregar Persona NoSQL</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;