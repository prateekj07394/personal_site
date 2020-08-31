const roles = ["A book-lover.","A fitness-enthusiast.","A problem solver.","A coder.","An engineer."];
    let index = 0;
    setInterval(()=>{
        if(index === 4){
            index = 0;
        }

        let text = roles[index % 4];
        document.getElementById("role").innerText = roles[index % 4];
        index+=1;
    },2000);
