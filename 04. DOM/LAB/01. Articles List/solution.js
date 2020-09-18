function createArticle() {
    let titleElement = document.getElementById('createTitle');
    let contentElement = document.getElementById('createContent');

    const title = titleElement.value;
    let titleHeadingElement = document.createElement('h3');
    titleHeadingElement.innerHTML = title;

    const content = contentElement.value;
    let contentParagraphElement =  document.createElement('p');
    contentParagraphElement.innerHTML = content;

    if (title === '' || content === '') {
        titleElement.value = '';
        contentElement.value = '';
        return;
    }
    
    let articleElement = document.createElement('article');
    articleElement.appendChild(titleHeadingElement);
    articleElement.appendChild(contentParagraphElement);

    let aritclesSection = document.querySelector("#articles");
    aritclesSection.appendChild(articleElement);

    titleElement.value = '';
    contentElement.value = '';
}