export const environment = {
  production: false,
  urlGateway: 'http://localhost:8888/',
  microservices: {
   api1:'API1',
  } ,
  keycloak: {
    // Url of the Identity Provider
    issuer: 'http://localhost:8080/auth/',

    // Realm
    realm: 'micro-formation',


    clientId: 'angular-front',
  }
};
