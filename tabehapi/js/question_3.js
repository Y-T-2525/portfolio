//////質問3のページ用//////

//質問を定義
const question = '今の気分はどうですかー？？';

//質問をブラウザに表示
document.getElementById('question').textContent = question;

//押したボタンから値を取得して、セッションで保存
document.getElementsByTagName('button')[0].addEventListener('click', () => {
    sessionStorage.setItem('answer_2', document.getElementsByTagName('button')[0].textContent);
    location.href = 'answer.html';
});

document.getElementsByTagName('button')[1].addEventListener('click', () => {
    sessionStorage.setItem('answer_2', document.getElementsByTagName('button')[1].textContent);
    location.href = 'answer.html';
});

document.getElementsByTagName('button')[2].addEventListener('click', () => {
    sessionStorage.setItem('answer_2', document.getElementsByTagName('button')[2].textContent);
    location.href = 'answer.html';
});