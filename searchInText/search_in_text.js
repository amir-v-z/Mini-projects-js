const searchFn = (value) => {
    let p = document.getElementById('paragraph')
    let r = new RegExp(`(${value})`, 'gi')
    p.innerHTML = p.textContent.replace(r, '<mark>$1</mark>');
}