document.addEventListener('DOMContentLoaded', function() {
    const postButton = document.querySelector('button');
    const textarea = document.querySelector('textarea');
    const postsContainer = document.getElementById('postsContainer');

    // Load posts from local storage
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    savedPosts.forEach(postContent => {
        createPost(postContent);
    });

    postButton.addEventListener('click', function(event) {
        event.preventDefault();
        const postContent = textarea.value;
        if (postContent.trim() !== '') {
            const postDetails = {
                user: 'CodeWithAhmed',
                content: postContent,
                privacy: 'Friends'
            };
            createPost(postDetails);
            savePost(postDetails);
            textarea.value = ''; // Clear the textarea
        }
    });

    function createPost(details) {
        const newPost = document.createElement('div');
        newPost.className = 'post-card';
        newPost.innerHTML = `
            <div class="post-header">
                <img src="icons/MySelf.jpg" alt="logo">
                <div class="details">
                    <p>${details.user}</p>
                    <div class="privacy">
                        <i class="fas fa-user-friends"></i>
                        <span>${details.privacy}</span>
                    </div>
                </div>
            </div>
            <div class="post-content">
                <p>${details.content}</p>
            </div>
        `;
        postsContainer.appendChild(newPost);
    }

    function savePost(details) {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(details);
        localStorage.setItem('posts', JSON.stringify(posts));
    }
});