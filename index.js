
function newImage(location, left, bottom) {
    let asset = document.createElement('img')
    asset.src = location
    asset.style.position = 'fixed'
    asset.style.left = left + 'px'
    asset.style.bottom = bottom + 'px'
    document.body.append(asset)    
}

function newItem(location, left, bottom) {
    let asset = document.createElement('img')
    asset.src = location
    asset.style.position = 'fixed'
    asset.style.left = left + 'px'
    asset.style.bottom = bottom + 'px'
    document.body.append(asset)

    asset.addEventListener('dblclick', function() {
        asset.remove()
    })
}

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)