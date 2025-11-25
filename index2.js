const partical = [];
const pcluster = [];
let stablect = [];
let stablectn = 0;
let cmp1=0;
let cmp2=0;
let cmp3=0;
let cmp=0;

for (let i = 0; i < 1000; i++) {
  const ran=Math.floor(Math.random() * 3) + 1;
  partical.push(i);
    partical[i] = ran;
    if(ran==1){
        cmp1=cmp1+1;
    }
    if(ran==2){
        cmp2=cmp2+1;
    }
    if(ran==3){
        cmp3=cmp3+1;
    }
} 
if(cmp1>cmp2 && cmp1>cmp3){
    cmp=1;
}
if(cmp2>cmp1 && cmp2>cmp3){
    cmp=2;
}
if(cmp3>cmp1 && cmp3>cmp2){
    cmp=3;


console.log('Particles created: ' + partical.length);
console.log(cmp);
console.log( partical);
}
function start(){
    let stable=0;
    let stables=true;
    for (let i = 0; i < 3; i++) {
    const ran=Math.floor(Math.random() * 1000) + 1;
    if(partical[ran]==1){
        stable=stable+1;
    }
    else if(partical[ran]==2){
        stable=stable+2;
    }
    else if(partical[ran]==3){
       stable=stable+3;
    }
    }
    pcluster.push(stablect+1);
    
    if(stable==5){ 
        pcluster[stablect]=true;
        stables=true;
        push(stablectn+1);
        stablect[stablectn]=Math.floor(Math.random() * 3) + 1;
    }else{
        pcluster[stablectn]=false;
        stables=false;
    }
    stablect=stablect+1;
    stablectn=stablectn+1;
    console.log(stables);
    console.log('Stable Cluster created: ' + stablect);
    return pcluster;    
}
function neofetch(){
    let sc =0;
    let usc =0;
    let ac =0;
   for (let i = 0; i < 100; i++) { 
    start();
   }
   for (let i = 0; i < pcluster.length; i++) {
    if(pcluster[i]==true){
        sc=sc+1;
    }else{
        usc=usc+1;
    }
   }
   console.log('Stable Clusters: ' + sc);
   console.log('Unstable Clusters: ' + usc);
   ac= sc + usc;
   console.log('All Clusters: ' + ac);
}
