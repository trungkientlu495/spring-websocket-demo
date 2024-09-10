'use strict'

var join_group = document.querySelector('#join-group');
var commentInput = document.querySelector(  '#commentInput');
join_group.addEventListener('submit', connect, true);
var stompClient = null;
var username = "Kiên đẹp zai";



function connect(event) {
    if(username) {
        var socket = new SockJS('/ws');
        stompClient = Stomp.over(socket);

        stompClient.connect({}, onConnected, onError);

    }
    event.preventDefault();

}

function onError(error) {
    console.error('Error connecting to WebSocket:', error);
}


function onConnected() {
    var commenta = {
        username: username,
        comment: "mnpq"
    }
    // Subscribe to the Public Topic
    stompClient.subscribe('/topic/public', onMessageReceived);

    // Tell your username to the server
    stompClient.send("/app/comment/post",
        {},JSON.stringify(commenta)
    )

}

function onMessageReceived(payload) {
    var abc = JSON.parse(payload.body);
    var commentSection = document.getElementById('comment-parent');
    commentSection.innerHTML += `
    <div id="comment">
        <img src="user-avatar.jpg" alt="Avatar" class="avatar">
        <div class="comment-content">
            <span class="username">${abc.username}</span>
            <p class="comment-text">${abc.comment}</p>
        </div>
    </div>
`;
    commentInput.value= "";
    disConnect();

}

function disConnect() {
    stompClient.disconnect(function() {
    });
}






