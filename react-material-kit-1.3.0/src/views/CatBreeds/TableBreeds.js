import React, {useEffect, useState} from 'react';
import {  Table,  TableHead, TableCell, TableBody, TableRow, TablePagination} from '@material-ui/core';
import axios from 'axios';

const baseUrl= 'https://api.thecatapi.com/v1/breeds';

function TableBreeds({ breeds, handleChangePage, page }) {
    
    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Origen</TableCell>
                        <TableCell>Temperament</TableCell>
                        <TableCell>Social Needs</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {breeds.filter((breed, index) => (index >= page * 5) && (index < page * 5 + 5)).map(breed => (
                        <TableRow>
                            <TableCell>{breed.name}</TableCell>
                            <TableCell>{breed.origin}</TableCell>
                            <TableCell>{breed.temperament}</TableCell>
                            <TableCell>{breed.social_needs}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                component="div"
                count={100}
                page={page}
                rowsPerPage={5}
                onChangePage={handleChangePage}
                //onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>
    )
}

export default TableBreeds






























