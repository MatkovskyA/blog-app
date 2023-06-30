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

// получаем данные поста
function getPostFromUser() {
    let publishBtnPost;
    const title = postTitleInputNode.value;
    const text = postTextInputNode.value;

// отключаем кнопку, если поля ввода пустые или содержат пробелы
    if (!postTitleInputNode.value || 
        typeof postTitleInputNode.value === 'undefined' ||
        postTitleInputNode.value === null || 
        !postTitleInputNode.value.trim()) // проверка на пробелы
        {
        alert('Введите корректный заголовок');

    }
    if (!postTextInputNode.value ||
        typeof postTextInputNode.value === 'undefined' ||
        postTextInputNode.value === null ||
        !postTextInputNode.value.trim()) // проверка на пробелы
        {
        alert('Введите корректный текст поста');

    }

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