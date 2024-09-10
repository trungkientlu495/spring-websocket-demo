'use strict'

var join_group = document.querySelector('#join-group');
join_group.addEventListener('submit', connect, true);
var stompClient = null;
var username = "kienmnpq";



function connect(event) {
    //alert("XXXadd");
    if(username) {
        var socket = new SockJS('/ws');
        alert("XXX");
        stompClient = Stomp.over(socket);

        stompClient.connect({}, onConnected, onError);

    }
    alert("XXXa");
    event.preventDefault();

}

function onError(error) {
    console.error('Error connecting to WebSocket:', error);
}


function onConnected() {
    // Subscribe to the Public Topic
    stompClient.subscribe('/topic/public', onMessageReceived);

    // Tell your username to the server
    stompClient.send("/app/comment.create",
        {},JSON.stringify(username)
    )

}

function onMessageReceived(payload) {
    var message = JSON.stringify(payload.body);
    alert(message);
}






