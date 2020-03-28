const formatMoney = function (number, decPlaces = undefined, decSep = undefined, thouSep = undefined) {
    decSep = typeof decSep === "undefined" ? "." : decSep;
    decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces;
    thouSep = typeof thouSep === "undefined" ? "," : thouSep;
    let sign = number < 0 ? "-" : "";
    let i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decPlaces)));
    let j = i.length;
    j = j > 3 ? j % 3 : 0;
    return sign +
        (j ? i.substr(0, j) + thouSep : "") +
        i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
        (decPlaces ? decSep + Math.abs(number - i).toFixed(decPlaces).slice(2) : "");
};
const onChangeMoney = function ({target}) {
    const value = target.value.replace('R$ ', '').replace(/[a-zA-Z]/g, '').replace(',', '.');
    target.value = `R$ ${formatMoney(value)}`.trim();
};
const reaisMask = function ({target}) {
    const value = target.value.replace('R$ ', '').replace(/[a-zA-Z]/g, '');
    target.value = `R$ ${value}`;
};
export {
    formatMoney, onChangeMoney, reaisMask
}