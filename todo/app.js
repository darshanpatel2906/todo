let list=[];
let req=prompt("Enter request:");
while(true){
    if(req=="quit"){
        console.log("You quit.");
        break;
    }
    else if(req=="add"){
        let task=prompt("Enter thetask you want to add:");
        list.push(task);
        console.log("Task added.");
    }
    else if(req=="list"){
        for(li of list){
            console.log(li);
        }
    }
    else if(req=="remove"){
        let idx=prompt("Enter the index of task you want to remove:");
        list.splice(idx,1);
        console.log("task deleted.");
    }
    else{
        console.log("Wrong Request.");
    }
    req=prompt("Enter request:");
}