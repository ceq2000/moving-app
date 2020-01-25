import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/storage';

// Set the configuration for your app
// TODO: Replace with your app's config object
var firebaseConfig = {
    apiKey: 'AIzaSyDjGEppIYYUK2FAVnpNTTHnc-OxTKdAvrI',
    authDomain: 'moving-app-c7d6b.firebaseapp.com',
    databaseURL: 'https://moving-app-c7d6b.firebaseio.com',
    storageBucket: 'moving-app-c7d6b.appspot.com'
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

class StorageBtn extends React.Component {

    uploadFile = (event) => {
        //Get file
        var file = event.target.files[0];
        console.log(file);
        //Create storage ref
        var storageRef = storage.ref('item_pics/' + file.name)
        console.log(storageRef)
        //Upload file - question: what do we do with task?
        var task = storageRef.put(file);
        const URL= storageRef.getDownloadURL()
        return URL
    }

    render() {

        return (
            <div>
                //confirm input type
                <input type="file" onChange={(event) => this.uploadFile(event)}></input>
            </div>
        )
    }
}

//Get elements
// var uploader = document.getElementbyID('uploader');
// var fileButton = document.getElementById('fileButton');

// //Listen for file selection
// fileButton.addEventListener(change, function (e) {

//     //Update progress bar
//     task.on('state_changed', function progress(snapshot) {
//         var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         uploader.value = percentage;

//     },
//         function error(err) {

//         },

//         function complete() {

//         },

//     );
// });

export default StorageBtn;