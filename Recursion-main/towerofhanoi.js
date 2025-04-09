function towerOfHanoi (n, src, dest, intmd) {

if(n === 1) {
    console.log(`Move disk 1 from ${src} to ${dest}`);
   

}

else {
    
    if(n>1)

        {
            towerOfHanoi(n - 1, src, intmd, dest);
        }

console.log(`Move disk ${n} from ${src} to ${dest}`);

if(n>1){
    towerOfHanoi(n - 1, intmd, dest , src);

   }

 }

}


towerOfHanoi(3, "A", "C", "B");
