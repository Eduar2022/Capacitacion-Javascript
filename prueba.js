function cerdo(){
    this.prop = 'propiedad'
    return 'cerdito feliz'
}


const r = new cerdo()

//console.log(r)

//fat arrow function

const fatFn = () =>{
    //this.prop = 'propiedad' //EL OBJETO LITERAL DE THIS NO PERTENECE A LA FAT ARROW FUNCTION
    //console.log('cerdo triste')
    //return this
}

const fat = fatFn()

//console.log(fat)

const fnR = () =>  2



console.log(fnR())