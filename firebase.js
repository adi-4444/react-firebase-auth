import { initializeApp } from 'firebase/app';


const firebaseConfig = {
   apiKey: 'AIzaSyACRFD5J3LgSXVrAWWtxgI8RRyPmwybThc',
   authDomain: 'fir-auth-fd7b1.firebaseapp.com',
   projectId: 'fir-auth-fd7b1',
   storageBucket: 'fir-auth-fd7b1.appspot.com',
   messagingSenderId: '976620699802',
   appId: '1:976620699802:web:4a10bebd3200bf08a19f23',
   measurementId: 'G-PKQ3Y0KYX7',
};

export const app = initializeApp(firebaseConfig);
