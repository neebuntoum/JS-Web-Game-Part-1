
function newImage(url, left, bottom) {
    let newCharacter = function newImage()
}



/* function newImage(url, left, bottom) {
    let tree = document.createElement('img');
    tree.src = 'assets/pine-tree.png';
    tree.style.position = 'fixed';
    tree.style.left = '450px';
    tree.style.bottom = '200px';
    document.body.append(tree);
    return tree;
}
newImage() */

function newCharacter(url, left, bottom){
    let character = newImage(url, left, bottom)
}

newCharacter()

newImage('assets/green-character.gif', '100px', '100px')
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)



/* function newImage(url, left, bottom) {
    let greenCharacter = document.createElement('img');
    tree.src = 'assets/green-character.gif';
    tree.style.position = 'fixed';
    tree.style.left = '100px';
    tree.style.bottom = '100px';
    document.body.append(greenCharacter);
    return greenCharacter;
}
newImage() */


/* 
let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter) */

/* let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)
 */

/* function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
} */