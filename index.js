const posts = [];

const maxTitleLength = 100;
const minTitleLength = 2;
const minPostLength = '';

const countOfSymbolsTitle = document.querySelector('.js__count');
const postTitleInputNode = document.querySelector('.js__post_title-input');
const postTextInputNode = document.querySelector('.js__post_text-input');
const publishBtnPost = document.querySelector('.js__publish_btn');
const postsNode = document.querySelector('.js__posts')

// считаем кол-во введенных символов в заголовке
postTitleInputNode.addEventListener('input', function(event){
    let length = event.target.value.length;
    event.target.value = event.target.value.substr(0, maxTitleLength);
    countOfSymbolsTitle.textContent = length;
    // Если ровно лимиту - выводим сообщение
    if (length === maxTitleLength) {
        alert('Введено максимальное количество символов для заголовка')
    }
})

// выводим значения по нажатию на кнопку
publishBtnPost.addEventListener('click', function() {
    const postFromUser = getPostFromUser();
    addPost(postFromUser);
    renderPosts();

    postTitleInputNode.value = '';
    postTextInputNode.value = '';
})

// отключаем кнопку, если поля ввода пустые или содержат пробелы

// function checkInputNode () {
//     const titleLength = postTitleInputNode.value.length;
//     const postLength = postTextInputNode.value.length;

//     if (titleLength === null && postLength === null) {
//         publishBtnPost.disabled = true;
//     }
// }


// postTitleInputNode.addEventListener("click", checkInputNode);
// postTextInputNode.addEventListener("click", checkInputNode);

// function checkInputNode() {
//     const titleLength = postTitleInputNode.value.length;
//     const postLength = postTextInputNode.value.length;

//     if (titleLength === null && typeof titleLength === "undefined") {
//         publishBtnPost.disabled = true;
// }
//     if (postLength != null && typeof postLength !== "undefined" ) {
//         publishBtnPost.disabled = true;
//     }
// }

// получаем данные поста
function getPostFromUser() {
    const title = postTitleInputNode.value;
    const text = postTextInputNode.value;

    return {
        title: title,
        text: text,
    };
}

// публикуем пост в историю
function addPost({title, text}) {
    const datePostAdded = new Date();
    const date = datePostAdded.toLocaleString();
    
    posts.push({
        date: date,
        title: title,
        text: text,
    });
}

function getPosts() {
    return posts;
}

// выводим следующий пост
function renderPosts() {
    const posts = getPosts();
    let postsHTML = '';

    posts.forEach(post => {
        postsHTML += `
            <div class ='post'>
                <p class ='date__post'>${post.date}</p>
                <p class ='title__input'>${post.title}</p>
                <p class ='post__input'>${post.text}</p>
            </div>
        `;
    })
    postsNode.innerHTML = postsHTML;
}