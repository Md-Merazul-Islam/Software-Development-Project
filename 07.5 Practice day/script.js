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

\