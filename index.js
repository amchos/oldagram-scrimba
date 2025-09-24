const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postEl = document.querySelector('.post-wrapper')

function postRender(post, toWhere) {
    for(let i = 0; i < post.length; i++) {
        toWhere.innerHTML += ` 
                <div class="post">
                    <div class="post-user">
                        <div class="post-user-img">
                            <img src="${post[i].avatar}" alt="profile picture of post owner">
                        </div>
                        <div class="post-user-info">
                            <div class="post-user-info-name">${post[i].username}</div>
                            <div class="post-user-info-town">${post[i].location}</div>
                        </div>
                    </div>
                    <div class="post-img">
                        <img src="${post[i].post}" alt="Post image: Vangogh">
                    </div>
                    <div class="post-bottom">
                        <div class="post-bottom-btn">
                            <button class="add-like">
                                <img src="images/icon-heart.png" alt="like button image">
                            </button>

                            <button>
                                <img src="images/icon-comment.png" alt="comment button image">
                            </button>

                            <button>
                                <img src="images/icon-dm.png" alt="share button image">
                            </button>
                        </div>
                        <div  class="post-bottom-likes-amount"><strong ">${post[i].likes}</strong> likes</div>
                        <div class="post-bottom-comment"><strong>${post[i].username}</strong> ${post[i].comment}</div>
                    </div>
                </div>`
    }

    let likesAmount = document.querySelectorAll('.post-bottom-likes-amount strong')
    let addLikes = document.querySelectorAll('.add-like')

    console.log(addLikes)

    addLikes.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            post[index].likes++
            likesAmount[index].textContent = post[index].likes
            console.log('working')
        })
    })

}


postRender(posts, postEl);
