import theme from "./themeConfig";

export const root = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'auto',
  height: '100%',
  margin: '2em',
  '& .MuiTablePagination-caption': {
    display: 'block',
  },
  '& > h5': {
    fontSize: '24 px',
    color: 'rgba(0,0,0,.87)',
    letterSpacing: '.1em'
  }
};

export const grid = {
  width: '100%',
  minHeight: 340,
  height: '100%',
  padding: theme.spacing(2),
  justifyContent: 'center',
  '& .data-grid-header': {
    backgroundColor: '#c62828 !important',
    color: 'white',
    '& svg': {
      display: 'none !important'
    },
    '& div': {
      fontWeight: 'bold',
    }
  }
}

export const controles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: '1em',
  '& .MuiIconButton-root:hover': {
    opacity: '0.9',
    backgroundColor: '#104ba5 !important',
  }
};

export const buttonNew = {
  borderRadius: '50px',
  backgroundColor: '#0D47A1',
  fontWeight: 400,
  color: 'white',
  '& > span': {
    fontFamily: 'Roboto,"Helvetica Neue",sans-serif',
    fontSize: '14 px',
    fontWeight: 500,
    textTransform: 'capitalize'
  }
};

export const form = {
  display: 'grid',
  '& .MuiFormControl-root': {
    width: '100% !important'
  }
}

export const gridCommon = {
  root,
  controles,
  filtro: {
    width: '50%',
  },
  formControl: {
    minWidth: 120,
  },
  buttonNew,
  form,
}