import app from 'firebase/app';
import 'firebase/analytics';
import firebaseConfig from './config';

class Firebase {
    constructor(){
        if(!app.apps.length){
            // Initialize Firebase
            app.initializeApp(firebaseConfig);
            app.analytics();
        }
    }
}

const firebase = new Firebase();
export default firebase;