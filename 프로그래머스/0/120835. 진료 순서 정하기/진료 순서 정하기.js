function solution(emergency) {
  const map = new Map();
  const Arr = [...emergency]
  const sortArr = Arr.sort((a,b)=> b-a);

  sortArr.forEach((el,i) => {
    map.set(el,i+1)
  })

  const result = emergency.map(el => map.get(el))
  return result
}