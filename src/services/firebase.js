const config = {
    apiKey: 'AIzaSyAJiIKqmSES8zv6ypDlZWCJaAW_OyrIU9w',
    authDomain: 'chat-room-3c433.firebaseapp.com',
    databaseURL: 'https://chat-room-3c433.firebaseio.com',
    projectId: 'chat-room-3c433',
    storageBucket: 'chat-room-3c433.appspot.com',
    messagingSenderId: '757552031065',
    appId: '1:757552031065:web:a3bce3dcc4a9857f'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database();

export const userFavoritesRef = db.ref('userFavorites');