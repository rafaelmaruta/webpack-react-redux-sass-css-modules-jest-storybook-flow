// Retorna o maior parcelamento
const getGreaterInstallment = products => Math.max.apply(Math, products.map(item => item.installments));

const FormatPrice = {
  // Splita o número fracionário
  getSplit: price => {
    try {
      price = price.toFixed(2).toString().split('.');
      return {int: price[0], float: price[1]};
    } catch (err) {
      return 0;
    }
  },
  // Calcula o valor da parcela e retorna com vírgula
  getInstallments: (installments, price) => (
    installments > 1 ? (price / installments).toFixed(2).replace('.', ',') : ''
  )
};

const ToSeo = function (str) {
  const withAccent = 'áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ/';
  const noAccent = 'aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC-';
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    if (withAccent.search(str.substr(i, 1)) >= 0) {
      newStr += noAccent.substr(withAccent.search(str.substr(i, 1)), 1);
    } else {
      newStr += str.substr(i, 1);
    }
  }
  return newStr.toLowerCase().replace(/ /g, '-');
};

export {CalcTotal, FormatPrice, GetQuantity, ReduceCart, SetQuantity, ToSeo};
