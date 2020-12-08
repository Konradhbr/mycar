import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyB40yKdLO8n8TXBH8exnoaSAfpSOjsb8Ao",
	authDomain: "mycar-52e2a.firebaseapp.com",
	databaseURL: "https://mycar-52e2a-default-rtdb.firebaseio.com",
	projectId: "mycar-52e2a",
	storageBucket: "mycar-52e2a.appspot.com",
	messagingSenderId: "1006106944751",
	appId: "1:1006106944751:web:b4bb3647516217d517a71a"
};
// Initialize Firebase
export const db = firebase.initializeApp(firebaseConfig).firestore();