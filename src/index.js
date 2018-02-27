module.exports = function solveEquation(equation) {
    let searchForA = equation.split('* x^2');



    let A = searchForA[0];




    let pro = searchForA[1];
    let searchForB = pro.split(' * x ');
    let pro2 = searchForB[0];
    let pro3 = pro2.split(' ');
    let B = pro3.join('');


    let raz = searchForB[1];
    let raz1 = raz.split(' ');
    let C = raz1.join('');



    let det = ((+B) * (+B) - 4 * ((+A) * (+C)));

    const kordet = Math.sqrt(det);

    const X1 = Math.round((-B - kordet) / (2 * A));
    const X2 = Math.round((-B + kordet) / (2 * A));

    if (X1 < X2) {
        return [X1, X2];
    } else return [X2, X1];
}