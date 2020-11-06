import React from 'react';
import {
Table,
TableHead,
TableCell,
TableBody,
TableRow,
TablePagination
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import './tableBreeds.scss';
function TableBreeds({ breeds, handleChangePage, page, handleChangeRowsPerPage, rowsPerPage, handleClick }) {
    return (
        <div className="breed-table" >

                <Table className="table" >
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Origen</TableCell>
                            <TableCell>Temperament</TableCell>
                            <TableCell>Social Needs</TableCell>
                        </TableRow>
                    </TableHead >
                    <TableBody >
                    {breeds.map(breed => (
                        <TableRow onClick={() => {handleClick(breed)}}>
                            <TableCell className="name-link">{breed.name}</TableCell>
                            <TableCell>{breed.origin}</TableCell>
                            <TableCell>{breed.temperament}</TableCell>
                            <TableCell>{breed.social_needs}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                <TablePagination
                component="div"
                count={70}
                page={page}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[5, 10, 25, 50, 100]}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                
            />
        </div>
    )
}

export default TableBreeds;

