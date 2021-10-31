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
    cardHorizontal: {
      'border-radius': '6px',
      display: "flex",
      padding: "12px",
      margin: "0px",
      "background-color": "white",
      marginBottom: theme.spacing(2),
    },
    imgLocal: {
      'border-radius': '20px',
      'padding-right': '12px',
      'padding-top': '5px'
    },
    imgPlatillo: {
      'border-radius': '20px',
      'padding-right': '12px',
      'padding-top': '5px',
      'width': '100%',
      'max-width': '200px'
    },
    textoCardLocal: {
      'padding-top': '5px',
      'border-radius': '20px',
    },
    listadoCategorias: {
      'position': 'sticky',
    },
    acciones: {
      display: "flex",
      justifyContent: "between"
    },
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    noBorder: {
      border: "none",
      fontSize: 40
    },
    bgImageHome:{
      "background-image": "url('https://images.deliveryhero.io/image/pedidosya/home-backgrounds/home-background-ar.jpg?quality=100&width=1345),url(https://images.deliveryhero.io/image/pedidosya/home-backgrounds/home-background-others.jpg?quality=100&width=1345')",
      "background-position": "center center",
      "background-repeat": "no-repeat",
      "background-attachment": "fixed",
      "background-size": "cover",
      "height":"100vh"
    },
    buscarLocales:{
      "background-color":"#ffffff"
    }
  })
};