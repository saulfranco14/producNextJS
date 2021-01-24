import app from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import firebaseConfig from './config';

class Firebase {
    constructor(){
        if(!app.apps.length){
            // Initialize Firebase
            app.initializeApp(firebaseConfig);
            app.analytics();
        }
        this.auth = app.auth();
    }

    //Register User
    async register(nombre, email, password){
        const newUser = await this.auth.createUserWithEmailAndPassword(email,password);

        return await newUser.user.updateProfile({
            displayName : nombre
        })
    }

    //Login User
    async login(email, password){
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    //Logout 
    async logout(){
        await this.auth.signOut();
    }
}

const firebase = new Firebase();
export default firebase;