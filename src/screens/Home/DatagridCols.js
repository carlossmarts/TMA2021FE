import React from 'react';
import { IconButton, Tooltip, Button, Typography } from '@material-ui/core';

export const ColumnasComercioXLocalidad = () => {

    
      return ([
          {
            field: "logo",
            headerName: "logo",
            flex: 0.5,
            headerClassName: "data-grid-header",
            headerAlign: 'center',
            align: 'center',
            cellClassName: 'data-grid-chip-cell',
            valueGetter: (params)=>{
                return params.row.id
            },
            renderCell: (params)=>(
                <>
                  <Tooltip title="aca va una imagen con el logo">
                    <Typography color="initial">
                      {params.value}
                    </Typography>
                  </Tooltip>
                </>)
          },
            {
            field: 'Nombre',
            headerName: 'Nombre del Comercio',
            flex: 1,
            headerClassName: 'data-grid-header',
            headerAlign: 'center',
            align: 'center',
            cellClassName: 'data-grid-chip-cell',
            valueGetter: (params)=>{
                return params.row.nombre
            }
            },
            {
                field: 'Direccion',
                headerName: 'Direccion',
                flex: 1,
                headerClassName: 'data-grid-header',
                headerAlign: 'center',
                align: 'center',
                cellClassName: 'data-grid-chip-cell',
                valueGetter: (params)=>{
                return params.row.direccion
                }
            }
      ])
    };