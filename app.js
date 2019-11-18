/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, dicePrevious1, dicePrevious2, winningScore;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;
isGamePlaying=true;
dicePrevious1=0;
dicePrevious2=0;
winningScore= 100;

document.querySelector('.dice1').style.display = 'none';
document.querySelector('.dice2').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(isGamePlaying){
        var dice1 = Math.ceil(Math.random() * 6);
        var dice2 = Math.floor(Math.random()* 6)+1;
        
        if(dice1!==dicePrevious1 && dice2 !== dicePrevious2){
            dicePrevious1=dice1;
            dicePrevious2=dice2;
            document.querySelector('.dice1').style.display = 'block';
            document.querySelector('.dice1').src = 'dice-' + dice1 + '.png';
            document.querySelector('.dice2').style.display = 'block';
            document.querySelector('.dice2').src = 'dice-' + dice2 + '.png';
            if(dice1 !==1 && dice2 !==1){
                roundScore += dice1 + dice2;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            }else{
                nextPlayer();
            }
        }
        else{
            nextPlayer();
        }
        
    
    
        
    }
    
    
    
});
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(isGamePlaying){
        scores[activePlayer] += roundScore;
        document.getElementById("score-"+ activePlayer).innerHTML = scores[activePlayer];

        if(scores[activePlayer]>= winningScore){
            document.getElementById("name-"+ activePlayer).innerHTML = '<strong>Winner!</strong>';
            isGamePlaying = false;
        }else{ 
            nextPlayer();
        }
    }
    
    
});
document.querySelector('.btn-new').addEventListener('click', function(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    isGamePlaying=true;
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.getElementById('name-0').innerHTML='Player 1';
    document.getElementById('name-1').innerHTML='Player 2';  
    
});
document.querySelector('.btn-score').addEventListener('click', function(){
    winningScore = document.getElementById('WinScore').value;
});
function nextPlayer(){
    activePlayer ==1? activePlayer=0:activePlayer=1;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        roundScore =0;
}




