//////質問2のページ用//////

//質問を定義
const question = '温かいのと冷たいのならどっちがいいですですかー？？';

//質問をブラウザに表示
document.getElementById('question').textContent = question;

//押したボタンから値を取得して、セッションで保存
document.getElementsByTagName('button')[0].addEventListener('click', () => {
    sessionStorage.setItem('answer_1', document.getElementsByTagName('button')[0].textContent);
    location.href = 'recipe_3.html';
});

document.getElementsByTagName('button')[1].addEventListener('click', () => {
    sessionStorage.setItem('answer_1', document.getElementsByTagName('button')[1].textContent);
    location.href = 'recipe_3.html';
});