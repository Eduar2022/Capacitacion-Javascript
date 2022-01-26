const cerdosfelices = ['cerdo 1', 'cerdo 2', 'cerdo 3']
const cerdostristes = ['triste 1', 'triste 2', 'triste 3']
const otroscerdos = []


/*module.exports = {
    cerdosfelices,
    cerdostristes,
}*/


const fn1 = () => {
    console.log('soy la funcion 1');
}
function fn2() {
    console.log('soy la funcion 2');
}
export {cerdostristes, otroscerdos, fn1, fn2}
export default cerdosfelices