//比較用の変数を定義
let answer = [0, 1, 2];

//これまでの回答をセッションから取得する
let data_0 =sessionStorage.getItem('answer_0');
let data_1 =sessionStorage.getItem('answer_1');
let data_2 =sessionStorage.getItem('answer_2');

//セッションから取得した値を当てはめる
answer[0] = data_0;
answer[1] = data_1;
answer[2] = data_2;

//メニューを定義
const recipe = {
    //エラー用
    menu_0: ['お肉', '温かい', 'おつまみ' ,'回答が正しく選択されていません。もう一度食材の選択からお試しください。'],
    //お肉
    menu_1: ['お肉', '温かい', 'おつまみ' ,'鶏むね肉のネギ塩レモン', 'https://delishkitchen.tv/recipes/198900678758760806'],
    menu_2: ['お肉', '温かい', 'すぐ食べたい' ,'豚肉とキャベツの梅しそあえ', 'https://delishkitchen.tv/recipes/255865863482114533'],
    menu_3: ['お肉', '温かい', '少し時間をかけて' ,'ローストビーフ', 'https://delishkitchen.tv/recipes/118820531095994692'],
    menu_4: ['お肉', '冷たい', 'おつまみ', 'きゅうりとトマトのピリ辛豚しゃぶ', 'https://delishkitchen.tv/recipes/204009260080694506'],
    menu_5: ['お肉', '冷たい', 'すぐ食べたい', '豚しゃぶと水菜のゴマだれうどん', 'https://delishkitchen.tv/recipes/158453418480894444'],
    menu_6: ['お肉', '冷たい', '少し時間をかけて', 'サラダチキン', 'https://delishkitchen.tv/recipes/166463047827718636'],
    //お魚
    menu_7: ['お魚', '温かい', 'おつまみ', 'サバ味噌もやし', 'https://delishkitchen.tv/recipes/153379335024148943'],
    menu_8: ['お魚', '温かい', 'すぐ食べたい', 'たらのわかめ蒸し', 'https://delishkitchen.tv/recipes/195860425525429280'],
    menu_9: ['お魚', '温かい', '少し時間をかけて', '魚肉ハンバーグ', 'https://delishkitchen.tv/recipes/210062209600980188'],
    menu_10: ['お魚', '冷たい', 'おつまみ', 'アボカドとマグロのユッケ', 'https://delishkitchen.tv/recipes/163377898261053843'],
    menu_11: ['お魚', '冷たい', 'すぐ食べたい', 'さば缶でアレンジ冷や汁', 'https://delishkitchen.tv/recipes/208483765364720672'],
    menu_12: ['お魚', '冷たい', '少し時間をかけて', '鮭のハーブマリネ', 'https://delishkitchen.tv/recipes/189212543745524070'],
    //とうふ
    menu_13: ['とうふ', '温かい', 'おつまみ', 'はんぺんと豆腐のふわふわ焼き', 'https://delishkitchen.tv/recipes/172005154407580140'],
    menu_14: ['とうふ', '温かい', 'すぐ食べたい', 'たっぷりねぎの電子レンジ湯豆腐', 'https://delishkitchen.tv/recipes/309102824073986340'],
    menu_15: ['とうふ', '温かい', '少し時間をかけて', '豆腐ハンバーグのきのこソース', 'https://delishkitchen.tv/recipes/195282904996118950'],
    menu_16: ['とうふ', '冷たい', 'おつまみ', 'キムチやっこ', 'https://delishkitchen.tv/recipes/242871439642853722'],
    menu_17: ['とうふ', '冷たい', 'すぐ食べたい', 'くずし豆腐とおくらの冷やしうどん', 'https://delishkitchen.tv/recipes/162659632173548012'],
    menu_18: ['とうふ', '冷たい', '少し時間をかけて', '豆腐のきな粉アイス', 'https://delishkitchen.tv/recipes/167591958624076179'],
    //たまご
    menu_19: ['たまご', '温かい', 'おつまみ', 'ブロッコリーのかに玉あんかけ', 'https://delishkitchen.tv/recipes/204006698367582566'],
    menu_20: ['たまご', '温かい', 'すぐ食べたい', 'ほうれん草と卵のココット', 'https://delishkitchen.tv/recipes/144562573830783245'],
    menu_21: ['たまご', '温かい', '少し時間をかけて', 'サンラータン', 'https://delishkitchen.tv/recipes/332411873297171693'],
    menu_22: ['たまご', '冷たい', 'おつまみ', '濃いだし味たま', 'https://delishkitchen.tv/recipes/191977692512388177'],
    menu_23: ['たまご', '冷たい', 'すぐ食べたい', '納豆としらすの冷やしうどん', 'https://delishkitchen.tv/recipes/139064440132731379'],
    menu_24: ['たまご', '冷たい', '少し時間をかけて', 'だし巻卵とトマトの冷やしおでん', 'https://delishkitchen.tv/recipes/248636266684351594']
}

//合致して案内するレシピを扱うための変数を定義
let guide_menu = 0;

// ユーザーの回答と、メニューを比較する

switch(answer.toString()) {
    case recipe.menu_1.slice(0, 3).toString():
        guide_menu = recipe.menu_1;
        break; 
    case recipe.menu_2.slice(0, 3).toString():
        guide_menu = recipe.menu_2;
        break; 
    case recipe.menu_3.slice(0, 3).toString():
        guide_menu = recipe.menu_3;
        break; 
    case recipe.menu_4.slice(0, 3).toString():
        guide_menu = recipe.menu_4;
        break; 
    case recipe.menu_5.slice(0, 3).toString():
        guide_menu = recipe.menu_5;
        break; 
    case recipe.menu_6.slice(0, 3).toString():
        guide_menu = recipe.menu_6;
        break; 
    case recipe.menu_7.slice(0, 3).toString():
        guide_menu = recipe.menu_7;
        break; 
    case recipe.menu_8.slice(0, 3).toString():
        guide_menu = recipe.menu_8;
        break; 
    case recipe.menu_9.slice(0, 3).toString():
        guide_menu = recipe.menu_9;
        break; 
    case recipe.menu_10.slice(0, 3).toString():
        guide_menu = recipe.menu_10;
        break; 
    case recipe.menu_11.slice(0, 3).toString():
        guide_menu = recipe.menu_11;
        break; 
    case recipe.menu_12.slice(0, 3).toString():
        guide_menu = recipe.menu_12;
        break; 
    case recipe.menu_13.slice(0, 3).toString():
        guide_menu = recipe.menu_13;
        break; 
    case recipe.menu_14.slice(0, 3).toString():
        guide_menu = recipe.menu_14;
        break; 
    case recipe.menu_15.slice(0, 3).toString():
        guide_menu = recipe.menu_15;
        break; 
    case recipe.menu_16.slice(0, 3).toString():
        guide_menu = recipe.menu_16;
        break; 
    case recipe.menu_17.slice(0, 3).toString():
        guide_menu = recipe.menu_17;
        break; 
    case recipe.menu_18.slice(0, 3).toString():
        guide_menu = recipe.menu_18;
        break; 
    case recipe.menu_19.slice(0, 3).toString():
        guide_menu = recipe.menu_19;
        break; 
    case recipe.menu_20.slice(0, 3).toString():
        guide_menu = recipe.menu_20;
        break; 
    case recipe.menu_21.slice(0, 3).toString():
        guide_menu = recipe.menu_21;
        break; 
    case recipe.menu_22.slice(0, 3).toString():
        guide_menu = recipe.menu_22;
        break; 
    case recipe.menu_23.slice(0, 3).toString():
        guide_menu = recipe.menu_23;
        break; 
    case recipe.menu_24.slice(0, 3).toString():
        guide_menu = recipe.menu_24;
        break; 
    default:
        guide_menu = recipe.menu_0;
}

//提案するメニューを表示
document.getElementById('answer').textContent = guide_menu[3];

//提案するメニューのリンクを代入
document.getElementById('link').href = guide_menu[4];


// テスト出力
// console.log(guide_menu);