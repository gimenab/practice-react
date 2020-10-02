import React, {useEffect, useState} from 'react';
import {  Table,  TableHead, TableCell, TableBody, TableRow} from '@material-ui/core';

const baseUrl= 'https://api.thecatapi.com/v1/breeds';

function TableBreeds({ breeds }) {
    


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
                        {breeds.map(breed => (
                            <TableRow>
                                <TableCell>{breed.name}</TableCell>
                                <TableCell>{breed.origin}</TableCell>
                                <TableCell>{breed.temperament}</TableCell>
                                <TableCell>{breed.social_needs}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            
        </div>
    )
}

export default TableBreeds






























