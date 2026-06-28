function attack(){

let damage = Math.floor(Math.random()*20)+5;
let enemyDamage = Math.floor(Math.random()*10)+1;

setEnemyHP(enemyHP - damage);
setPlayerHP(playerHP - enemyDamage);

setMessage(
fighter + " dealt " + damage + " damage ⚔️ | Enemy hit you for " + enemyDamage
);

}


