// src/environments/environment.ts

export const environment = {
    production: false,
    apiBaseUrl: 'http://localhost:3000/api',  
    authEndpoint: 'http://localhost:3000/auth',  
    firebaseConfig: {
      apiKey: 'your-api-key',
      authDomain: 'your-project-id.firebaseapp.com',
      projectId: 'your-project-id',
      storageBucket: 'your-project-id.appspot.com',
      messagingSenderId: 'your-sender-id',
      appId: 'your-app-id',
      measurementId: 'your-measurement-id'
    }
  };
  