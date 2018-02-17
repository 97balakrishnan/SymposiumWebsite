
function submitClick() {

	window.alert("hello");
	var firebaseRef= firebase.database().ref();
	firebaseRef.child("news").set("text");
	
}