
// 1 . ------------------------
/*
fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));

*/




// 2. ----------------------
/*
document.getElementById('loadDataBtn').addEventListener('click',function(){
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => displayComment(data))

        .catch(error =>  console.error('Error fetching data : ',error));
    
})


function displayComment(comments){
    const commentsContainer = document.getElementById("CommnetContainer");
    commentsContainer.innerHTML=" ";

    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.innerHTML=`
        <h3>Name : ${comment.name}</h3>
        <p>Email : ${comment.email}</p>
        <p>Body : ${comment.body}</p>
        <hr>
        `
        commentsContainer.appendChild(commentElement);
    });
}


// -------------------- another way -------------------

async function loadDataBtn(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/comments")
        const data = await response.json();
        displayComments(data); // Fixed typo here
    }
    catch(error){
        console.error("Error fetching comments : ",error);
    }
}

function displayComments(comments){ // Fixed function name here
    const commentsContainer = document.getElementById("CommnetContainer");
    commentsContainer.innerHTML=" ";

    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.innerHTML=`
        <h3>Name : ${comment.name}</h3>
        <p>Email : ${comment.email}</p>
        <p>Body : ${comment.body}</p>
        <hr>
        `
        commentsContainer.appendChild(commentElement);
    });
}

document.getElementById('loadDataBtn').addEventListener('click',loadDataBtn);

*/


// 3..------------------------------
/*
document.addEventListener("DOMContentLoaded", function () {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(rep => rep.json())
        .then(data => displayComment(data))
        .catch(er => console.error("Error fatching data : ", error));
});


function displayComment(comments) {

    const commentcontainer = document.getElementById("CommnetContainer");

    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.innerHTML = `
    <h2> Name : ${comment.name}</h2>
    <h3>Email : ${comment.email}</h3>
    <p>Body : ${comment.body}</p>
    <hr>
`;
        commentcontainer.appendChild(commentElement);
    });

}
*/




// 4.------------------------
/*
fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(data => {
    data.forEach(element => {
        console.log(element.name)
    });
})
*/

// 5 ----------------------
/*
document.addEventListener('DOMContentLoaded', () => {
    const commentContainer = document.getElementById('comments');
    const commentDetailsContainer = document.getElementById('commentDetails');

    commentContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('comment-btn')) {
            const commentId = event.target.parentNode.getAttribute('data-comment-id');
            fetchCommentDetails(commentId);
        }
    });
});

function fetchCommentDetails(commentId) {
    const apiUrl = `https://jsonplaceholder.typicode.com/comments/${commentId}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayCommentDetails(data);
        })
        .catch(error => console.error('Error fetching comment details:', error));
}

function displayCommentDetails(comment) {
    const commentDetailsContainer = document.getElementById('commentDetails');
    commentDetailsContainer.innerHTML = `
        <h1>Comment Details:</h1>
        <p><strong>ID:</strong> ${comment.id}</p>
        <p><strong>Name:</strong> ${comment.name}</p>
        <p><strong>Email:</strong> ${comment.email}</p>
        <p><strong>Body:</strong> ${comment.body}</p>
    `;
}
*/



// 6 . ----------------------------------


document.addEventListener('DOMContentLoaded', function() {
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const userContainer = document.getElementById('userContainer');

            userContainer.innerHTML = `
                <img src="${user.picture.large}" alt="user img">
                <h1>Location : </h1>
                <ul>
                    <li>Street : ${user.location.street.name} ${user.location.street.number}</li>
                    <li>City : ${user.location.city} </li>
                    <li>Coordinates : Latitude ${user.location.coordinates.latitude}, 
                    Longitude ${user.location.coordinates.longitude}
                    </li>
                    <li>TImezone :  ${user.location.timezone.offset} ${user.location.timezone.description}</li>
                </ul>
            `;
        });
});


