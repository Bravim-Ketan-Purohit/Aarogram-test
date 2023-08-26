import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Navbar from "../Navbar/Navbar";
import { getreports } from "../";
const Main = () => {
  return (
    <div>
      <Navbar />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Reportname</TableCell>
            <TableCell>RBC</TableCell>
            <TableCell>HEMOGLOBIN</TableCell>
            <TableCell>WBC</TableCell>
          </TableRow>
        </TableHead>
        <TableBody></TableBody>
      </Table>
    </div>
  );
};

export default Main;
