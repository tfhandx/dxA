let baseUrl = "https://shequ.dxchain.com";
// let baseUrl = 'http://192.168.31.118:8081'
if (process.env.REACT_APP_ENV === 'pre') {
  // baseUrl = "https://shequ.dxchain.com";
  baseUrl = "https://shequ-test.dxchain.com";
} else if (process.env.REACT_APP_ENV === 'dev') {
  baseUrl = "https://shequ-test.dxchain.com";
  // baseUrl = "http://localhost:8081";
} else if (process.env.NODE_ENV === "development2") {
  baseUrl = "https://shequ-test2.dxchain.com";
  // baseUrl = "http://192.168.31.118:8081";
}


export { baseUrl };
