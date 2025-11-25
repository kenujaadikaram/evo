const particals = [];
const clusters = [];
for (let i = 0; i < 10000; i++) {

     const ran=Math.floor(Math.random() * 5) + 1;
     particals.push(i);
    

    if(ran==1){
        particals[i] ='A';

    }
    if(ran==2){
        particals[i] ='B';

    }
    if(ran==3){
        particals[i] ='C';

    }
    if(ran==4){
        particals[i] ='D';

    }
    if(ran==5){
        particals[i] ='E';

    }
} 
function start(){
    let As=0;
    let Bs=0;
    let Cs=0;
    let Ds=0;
    let Es=0;
    let order="";
    let probability=0;

    for (let i = 0; i < 5; i++) {
    
    const ran=Math.floor(Math.random() * 10000) + 1;
    if(particals[ran]=="A"){
        As=As+1;
        order=order+'A';
        probability=probability+1;
    }
    else if(particals[ran]=="B"){
        Bs=Bs+1;
        order=order+'B';
        probability=probability+2;
    }
    else if(particals[ran]=="C"){
        Cs=Cs+1;
        order=order+'C';
        probability=probability+3;
    }
    else if(particals[ran]=="D"){
        Ds=Ds+1;
        order=order+'D';
        probability=probability+4;
    }
    else if(particals[ran]=="E"){
        Es=Es+1;
        order=order+'E';
        probability=probability+5;
    }
    }
        if([probability]==15 && As<2 && Bs<2 && Cs<2 && Ds<2 && Es<2){ 

        stables=true;
        clusters.push(clusters+1);
        clusters[clusters.length-1]=order;

        }
        return clusters;
}
function neofetch(){
    for (let i = 0; i < 500; i++) {
        start();
    }
    console.log('Clusters created: ' + clusters.length);
}
function fastfetch(){
    for (let i = 0; i < 100; i++) {
        neofetch();
    }
    start();
}
function start2(){
    const ran=Math.floor(Math.random() * clusters.length) + 1;
    for (let i = 0; i < 10000; i++) {
        for (let i = 0; i < 100; i++) {
    let clusterA=clusters[ran];
    let clusterB=clusters[ran];
    let l='Fail';
    if(clusterA=='ABCDE'&&clusterB=='EDCBA'){
        l='Success';
    }else if(clusterA=='BCDEA'&&clusterB=='DCBAE'){
        l='Success';
    }else if(clusterA=='CDEBA'&&clusterB=='CBAED'){
        l='Success';
    }else if(clusterA=='DEABC'&&clusterB=='BAECD'){
        l='Success';
    }else if(clusterA=='EABCD'&&clusterB=='ABCDE'){
        l='Success';
    }
    if(l=='Success'){
        console.log('Fusion Successful');
    }else{
        console.log('Fusion Failed');
    }
}
}
}
function ultrafetch(){
    fastfetch();
    for (let i = 0; i < 50; i++) {
        start2();
    }
}
