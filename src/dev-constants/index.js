export const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
export const BAR_SERIES = [
  {
    name: "Errores",
    data: [300, 250, 200, 220, 180, 210, 250, 200, 220, 180, 150, 100]
  },
  {
    name: "Éxitos",
    data: [3700, 2750, 2300, 2560, 1710, 2170, 3240, 2580, 2980, 4320, 4750, 5100]
  }
]
export const LINE_SERIES = [
  {
    name: 'SRI Bot',
    data: [80, 86, 75, 90, 87, 50, 65, 50, 30]
  },
  {
    name: 'SII Bot',
    data: [60, 63, 70, 65, 75, 80, 65, 64, 89]
  },
  // {
  //   name: 'TransUnion',
  //   data: [10, 20, 15, 25, 19, 30, 40, 51, 65].reverse()
  // },
  // {
  //   name: 'Siisa',
  //   data: [42, 30, 20, 10, 19, 33, 40, 32, 11].reverse()
  // }
]
export const INITIAL_ROWS_USERS = [
  {
    id: 1,
    name: 'Usuario Enlace',
    user: 'usuario@enlaceinmobiliario.cl',
    state: 'Active'
  },
  {
    id: 2,
    name: 'Usuario Penta',
    user: 'usuario@penta.cl',
    state: 'No Active'
  }
]

export const INITIAL_ROWS_EMPRESAS = [
  {
    id: Date.now(),
    name: 'SRI Bot',
    legalIdentification: 'Convierte una factura a comercial negociable',
    country: 'Ecuador',
    state: 1
  },
  {
    id: Date.now() + 1,
    name: 'SII bot',
    legalIdentification: 'Servicio de Impuestos Internos',
    country: 'Chile',
    state: 1
  }
]