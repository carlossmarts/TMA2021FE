import { grid, gridCommon } from './gridCommon'

export const Estilos = theme => {
  return ({
    ...gridCommon,
    grid: {
      ...grid,
      '& .data-grid-chip-cell': {
        padding: '0 2.5em'
      },
      '& .data-grid-op-cell': {
        padding: '0 3.em'
      }
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    dialogContainer: {
      display: 'grid',
      rowGap: '1em'
    },
     divisor: {
      margin: `10px 0 0 ${theme.spacing(4)}px`,
    },
    acciones:{
        display: "flex",
        justifyContent: "between"
    }
  })
};