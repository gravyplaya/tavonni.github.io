// Initialize Firebase
var config = {
apiKey: "AIzaSyBkxWz6B4Ayuqoexyo6FqFgBjQGa3QsnpQ",
authDomain: "tavonni-site.firebaseapp.com",
databaseURL: "https://tavonni-site.firebaseio.com",
projectId: "tavonni-site",
storageBucket: "tavonni-site.appspot.com",
messagingSenderId: "789848427810"
};
firebase.initializeApp(config);

var db = firebase.firestore();
var settings = {timestampsInSnapshots: true};
db.settings(settings);
