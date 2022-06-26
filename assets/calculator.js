let singleDelete = document.querySelector('#delete')
let clear = document.querySelector('#clear')
let field = document.querySelector('#text')
let calculate = document.querySelector('#equal')



clear.addEventListener('click', () => {
    field.value = ''
})

singleDelete.addEventListener('click', () => {
    field.value = field.value.slice(0,-1);

})

function append(x) {
    field.value = field.value+x;
    field.scrollLeft = field.scrollWidth;
}

calculate.addEventListener('click', () => {
    let data = field.value.trim()
    
    if (data.startsWith('*') || data.startsWith('/')) {
        field.value = 'ERROR'
    }
    else if (data.endsWith('*') || data.endsWith('/')|| data.endsWith('+')|| data.endsWith('-')) {
        field.value = 'ERROR'

    }
    else if (!(field.value.match(/[a-z]/g) || []).length) {
        field.value = eval(data); 
    } else {
        field.value = 'ERROR'

        
    }
    
})