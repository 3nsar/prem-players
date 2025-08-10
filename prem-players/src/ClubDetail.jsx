import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'player_name', label: 'Player Name', minWidth: 150 },
  { id: 'position', label: 'Position', minWidth: 100 },
  { id: 'nationality', label: 'Nationality', minWidth: 120 },
  { id: 'appearances', label: 'Appearances', minWidth: 80, align: 'right' },
  { id: 'minutes', label: 'Minutes', minWidth: 80, align: 'right' },
  { id: 'goals', label: 'Goals', minWidth: 80, align: 'right' },
  { id: 'assists', label: 'Assists', minWidth: 80, align: 'right' },
  { id: 'yellow_cards', label: 'Yellow Cards', minWidth: 80, align: 'right' },
  { id: 'red_cards', label: 'Red Cards', minWidth: 80, align: 'right' },
];

const ClubDetail = () => {
  const { clubName } = useParams();
  const url = `http://localhost:8080/api/player?club=${clubName}`;
  const [players, setPlayers] = useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    axios.get(url).then((response) => {
      setPlayers(response.data);
    });
  }, [clubName]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className='flex min-h-screen flex-col justify-center items-center'>
      <h2 className=''>{clubName}</h2>

      <Paper sx={{ maxWidth: 1000, overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="players table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align ? column.align : 'left'}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {players
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((player, index) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={player.player_name + index}>
                    {columns.map((column) => {
                      const value = player[column.id];
                      return (
                        <TableCell key={column.id} align={column.align ? column.align : 'left'}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={players.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <Link to="/clubs">← Back to Clubs</Link>
    </div>
  );
};

export default ClubDetail;

