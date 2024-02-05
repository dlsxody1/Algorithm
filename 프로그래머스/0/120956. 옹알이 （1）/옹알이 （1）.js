function solution(babbling) {
  var answer = 0;

  const aya = babbling.map(el => {
    return el.replace('aya', '-')
  })

  const ye = aya.map(el => {
    return el.replace('ye','-')
  })

  const woo = ye.map(el => {
    return el.replace('woo','-')
  })

  const ma = woo.map(el => {
    return el.replace('ma','-')
  })

  const regex = /^-*$/
  return ma.filter(el => regex.test(el)).length;
}