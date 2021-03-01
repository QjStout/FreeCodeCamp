function checkCashRegister(price, cash, cid) {
  const denominations = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1.0,
    "FIVE": 5.0,
    "TEN": 10.0,
    "TWENTY": 20.0,
    "ONE HUNDRED": 100
  };

  const cidCopy = cid.slice().reverse();
  let changeOwing = cash - price;
  let change = [];
  let status = '';

  const totalCid = getTotal(cidCopy);

  if(totalCid < changeOwing){ return {status: 'INSUFFICIENT_FUNDS', change: []}; }
  if(totalCid === changeOwing){ return {status: 'CLOSED', change: cid}; }

  cidCopy.forEach(el => {
    const denomination = denominations[el[0]];
    let totalInDollars = el[1];
    const newChangeElement = [el[0], 0];

    while (totalInDollars >= denomination && changeOwing >= denomination) {
      let res = Math.round((changeOwing - denomination)*100)/100;

      newChangeElement[1] = newChangeElement[1] + denomination;
      totalInDollars = Math.round((totalInDollars - denomination)*100)/100;
      changeOwing = Math.round((changeOwing - denomination)*100)/100;
    }
    if(newChangeElement[1] > 0){change.push(newChangeElement)};
  });

  if(changeOwing !== 0){ return {status: 'INSUFFICIENT_FUNDS', change: []}; }
  return {status: 'OPEN', change: change};
}

function getTotal(cid){
  return cid.reduce((total, denomination) => {
    return total + denomination[1];
  }, 0)
}

const res = checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);
