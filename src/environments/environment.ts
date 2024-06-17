// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'documentosceibas-bffd7',
    appId: '1:432781020937:web:7b9e3567cbc25b7a6c8dd8',
    databaseURL: 'https://documentosceibas-bffd7-default-rtdb.firebaseio.com',
    storageBucket: 'documentosceibas-bffd7.appspot.com',
    locationId: 'southamerica-east1',
    apiKey: 'AIzaSyBBbVmwCEcNMoN2F8S6d1nug4sZzGwivO8',
    authDomain: 'documentosceibas-bffd7.firebaseapp.com',
    messagingSenderId: '432781020937',
  },
  production: false,
  urlConecction : 'https://portal.lasceibas.gov.co:9090/api/', 
  // urlConecction : 'https://localhost:4200', 
  urlArchivo : 'https://portal.lasceibas.gov.co/archivos/',
  urlConecctionLogeo : 'https://apiselfservice.co/api/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
