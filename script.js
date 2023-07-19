//lista de variaveis:

//variaveis das barras 
const t1 = document.querySelector('#t1');//1 da esquerda -> vai para D
const t2 = document.querySelector('#t2');//2 da esquerda -> vai para F
const t3 = document.querySelector('#t3');//2 da direita -> vai para J
const t4 = document.querySelector('#t4');//1 da direita -> vai para K

//variaveis para os botões
let d = document.querySelector('#d');
let f = document.querySelector('#f');
let j = document.querySelector('#j');
let k = document.querySelector('#k');

//variaveis de pontuação
var c = 0;//contador de combo
var p = 0;//contador de pontuação
let barra = 0;//contador de barra no final

window.alert('Para iniciar o jogo pressione qualquer tecla.');

//ativar a musica
const audio = new Audio('teste.mp3');
document.addEventListener("keydown", function pause() {
    audio.play();
    audio.loop();
    t1.classList.add('movet1');
    t2.classList.add('movet2');
    t3.classList.add('movet3');
    t4.classList.add('movet4');

//evento para quando presionar uma tecla
document.addEventListener("keydown", function(event) {
    press(event.key)
} )

//função que conta combo e pontuação quando pressionar uma tecla
function press(key){
    setTimeout(()=>{d.style.backgroundColor='white'},500)
    setTimeout(()=>{f.style.backgroundColor='white'},500)
    setTimeout(()=>{j.style.backgroundColor='white'},500)
    setTimeout(()=>{k.style.backgroundColor='white'},500)
    switch (key) {
        case "d":
            const t1Position = t1.offsetTop;
            if (t1Position >=740 && t1Position<=810 ) {
             
                c++;      
                p++;   
                d.style.backgroundColor='green';                
            }
            else{
                c=0
                d.style.backgroundColor='red';
            }
            break;
        case "f":
            const t2Position = t2.offsetTop;
            if (t2Position >=740 && t2Position<=810) {
               
                c++;
                p++;
                f.style.backgroundColor='green';
            }
            else{
                c=0
                f.style.backgroundColor='red';
            }
            break;
        case "j":
            const t3Position = t3.offsetTop;
            if (t3Position >=740 && t3Position<=810) {
                
                c++;
                p++;
                j.style.backgroundColor='green';
            }
            else{
                c=0
                j.style.backgroundColor='red';
            }
            break;
        case "k":
            const t4Position = t4.offsetTop;
            if (t4Position >=740 && t4Position<=810) {
                
                c++;
                p++;
                k.style.backgroundColor='green';
            }
            else{
                c=0
                k.style.backgroundColor='red';
            }
            break;

        
    }
    
    //atualiza o contador da tela quando aperta uma tecla
    const cont = document.querySelector('#cont');
    cont.innerHTML = c;
    const point = document.querySelector('#point');
    point.innerHTML = p;
}

//função que verifica se a barra passou sem o usuario clicar em um botão
setInterval(()=>{ 
    //criação das variaveis de posição da barra
    const t1Position = t1.offsetTop;
    const t2Position = t2.offsetTop;
    const t3Position = t3.offsetTop;
    const t4Position = t4.offsetTop;
    //verificação se a barra está abaixo do botão
    if (t1Position>820 && t1Position<830 || t2Position>820 && t2Position<830|| t3Position>820 && t3Position<830 || t4Position>820 && t4Position<830) {
        barra++;
        
        //confere se o usuario apertou antes da barra passar
       if (barra>c) {
        c=0;
        barra=0;
       }
    }
   
    //atualiza o contador da tela a cada 1 segundo
    const cont = document.querySelector('#cont');
    cont.innerHTML = c;
},25)
 
})



//função para clicar com o mouse, em standby no momento!
/*function press(x){
    switch (x) {
        case 1:
            const t1Position = t1.offsetTop;
            if (t1Position >=793) {
                console.log(t1Position);
                c++;
            }
            else{
                c=0
            }
            break;
        case 2:
            const t2Position = t2.offsetTop;
            if (t2Position >=793) {
                console.log(t2Position);
                c++;
            }
            else{
                c=0
            }
            break;
        case 3:
            const t3Position = t3.offsetTop;
            if (t3Position >=793) {
                console.log(t3Position);
                c++;
            }
            else{
                c=0
            }
            break;
        case 4:
            const t4Position = t4.offsetTop;
            if (t4Position >=793) {
                console.log(t4Position);
                c++;
            }
            else{
                c=0
            }
            break;
    }
    const cont = document.querySelector('#cont');
    cont.innerHTML = c;
}*/