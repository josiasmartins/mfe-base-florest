import { environment } from "src/environments/environment";

const MFE_NAMES: Array<string> = [''];

const HOME_ELEMENTS: Array<any> = [
  {
    id: 'd6-six-mfe-six-posicao-consolidada-element',
    tag: 'd6-six-mfe-six-posicao-consolidada-element',
    host: eventironemt.hostD6,
    config: null,
    deeplink: [
      {
        url: 'portalD6:homePrincipal',
        title: '',
        route: '/legacy/home/1',
        home: true
      }
    ],
    port: '4449'
  }
];


const STAND_ALONE_ELEMENTS: Array<any> = [
  {
    id: 'd6-six-mfe-six-poupanca-element',
    tag: 'd6-six-mfe-six-poupanca-element',
    path: 'mfe-six-poupanca',
    host: environment.hostD6,
    deeplink: [
      {
        url: 'portalD6:poupanca',
        title: 'Poupanca',
        route: '',
        home: false
      }
    ],
    config: null,
    port: '4447'
  }
]

export const INVEST_ELEMENTS: Array<any> = [
  ...HOME_ELEMENTS,
  ...STAND_ALONE_ELEMENTS
];


const ELEMENT_LIST = [
  {
    id: '1',
    showAccounts: true,
    list: HOME_ELEMENTS
  },
  {
    id: '2',
    showAccounts: false,
    list: STAND_ALONE_ELEMENTS
  }
]

export function getElementByRoute(route: string) {
  return HOME_ELEMENTS.find(item => item.route == route);
}

export function getShowAccountList(id: string) {
  return ELEMENT_LIST.find(item => item.id == id)?.showAccounts;
}
