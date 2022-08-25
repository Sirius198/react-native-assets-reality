// eslint-disable-next-line import/no-anonymous-default-export
export default {
  app: {
    isDark: false,
    drawer: false,
    drawersecond: false,
    QR: false,
    data: null,
  },
  auth: {
    isAuthenticated: false,
    is2FAuthenticated: false,
    token: null,
    userId: null,
    qrCode: null,
    org: "",
    prefs: null,
    loading: false,
  },
  operations: {
    operations: [],
    selectedOp: {},
    selectedPort: {},
    graphData: {},
  },
  assets: {
    loading: false,
    assets: [],
    tempWallets: [],
  },
  permissions: {
    loading: false,
    users: [],
  },
  orgs: {
    loading: false,
    orgs: [],
    users: [],
    selectedOrg: {},
    custodians: [],
    myOrg: {},
    filterRole: "admin",
  },
  activity: {
    filter_data: [],
    calender_data: [],
    client_data: [],
  },
  price: {
    ids: [],
  },
  groups: {
    orgGroups: {},
    opGroups: [],
    group_data: [],
  },
  client: {
    client_data: [],
  },
  error: {},
};
