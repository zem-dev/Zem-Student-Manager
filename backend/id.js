getId = () => {
    let id = "";

    for(i=0; i < 9; i++) {
        id += Math.floor(Math.random() * 10);
    }
    return id;
}

export default getId; 
