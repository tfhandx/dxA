let baseUrl = "https://shequ.dxchain.com";
// let baseUrl = 'http://192.168.31.118:8081'
if (process.env.NODE_ENV === "production") {
  baseUrl = "https://shequ.dxchain.com";
} else if (process.env.NODE_ENV === "development") {
  baseUrl = "https://shequ-test.dxchain.com";
  // baseUrl = "http://localhost:8081";
} else if (process.env.NODE_ENV === "development2") {
  baseUrl = "https://shequ-test2.dxchain.com";
  // baseUrl = "http://192.168.31.118:8081";
}


export { baseUrl };
