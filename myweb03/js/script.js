var txt = '';
        
for(var i = 1; i < 4; i++){
    var exe = (i !=1)? 'jpg':'png';
        txt += '<div class="blogbox">';
        txt += '<h1>여행</h1>';
        txt += '<div class="blogimg" style="background-image: url(images/tr0' + i + '.'+ exe + ');"></div>';
        txt += '<p>장식하는 얼마나 풀밭에 대한 인간의 천자만홍이 풀이 끓는다. 창공에 대중을 내는 이것이야말로 속잎나고, 튼튼하며, 그들에게 것이다. 어디 오직 천지는 얼음에 이상 거친 밥을 천하를 봄바람이다. 꽃이 못할 있는 위하여서. 끝에 심장은 거선의 아름다우냐? 작고 힘차게 방황하였으며, 그들은 것이다.</p>';
        txt += '<div class="iconbox">';
        txt += ' <span class="material-icons-outlined">event_note</span>';
        txt += '<span class="date"> 2022.02.23</span>';
        txt += '<span class="material-icons-outlined">favorite</span>';
        txt += '<span class="heart">17</span>';
        txt += '<span class="material-icons-outlined">chat</span>';
        txt += '<span class="comment">21</span>';
        txt += '</div>';
        txt += '</div>';
    }
    document.getElementById("blog").innerHTML = txt;