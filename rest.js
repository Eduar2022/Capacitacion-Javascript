const rest = (a, b,...argumentos) => {
    console.log(a)
    console.log(b)
    console.log(argumentos);
}

//rest('cerdito feliz', 2, 3)

const obj = {
    a: 1, b: 1, c: 3, d: 1
}

//const { a, b, ...restobj } = obj
//console.log(a, b, restobj);

const arr = [1, 2, 3, 4, 5]

const [a, b, c, ...r] = arr

const useState = () =>['valor', () => {}]

const [valor, setValor] = useState()
console.log(valor, setValor)