import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

//function createData(name, trackingId, date, status) {
  //return { name, trackingId, date, status };
//}

function createData(name, trackingId, date, status, kpi) {
  return { name, trackingId, date, status, kpi};
}


const rows = [
  createData("Advance", "México", "Eleonor Salazar Estrada", 98.6, "QA"),
  createData("Prevención de Fraudes", "Guadalajara", "Oscar Alberto Ramirez", 325, "AHT"),
  createData("Premier", "Guadalajara", "Alberto Raúl Aranza", 95, "ADH"),
  createData("Altas Ventas", "México", "Fernando Salzar Quiñonez", 93.9, "QA"),
  createData("Personal Banking", "México", "Roberto Hernández Quiroga ", 93.9, "QA")
];

/*Aqui cambias el color dependiento de lo que aparezca :3
const makeStyle=(status)=>{
  if(status === 'Approved')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Pending')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

*/
//Aqui cambias el color dependiento de lo que aparezca :3
const makeStyle=(status)=>{
  if(parseFloat(status) > 95)
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(parseFloat(status) < 95)
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#ace6fc',
      color: 'gray',
    }
  }
}
export default function BasicTable() {
  return (
      <div className="Table">
      <h3>Top Unidades</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Unidad</TableCell>
                <TableCell align="left">Sitio</TableCell>
                <TableCell align="left">Gerente</TableCell>
                <TableCell align="left">Rating</TableCell>
                <TableCell align="left">KPI</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.trackingId}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                  <TableCell align="left">{row.kpi}</TableCell>
                  <TableCell align="left" className="Details"> Ir </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
