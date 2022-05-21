const productBeforeIndex = (arr) => {
    let product = 1
    let before = []
    
    for (let i = 0; i < arr.length; i++) {
      before[i] = product
      product *= arr[i]
    }
    return before
  }
  
  const productAfterIndex = (arr) => {
    let product = 1
    let after = []
    
    for (let i = arr.length - 1; i >= 0; i--) {
      after[i] = product
      product *= arr[i]
    }
    return after
  }
  
  const findProduct = (arr) => {
    const res = []
    const before = productBeforeIndex(arr)
    const after = productAfterIndex(arr)
    for (let i = 0; i < arr.length; i++) {
      res.push(before[i] * after[i])
    }
    return res
  }
  
  const arr = [ 1, 2, 3]
  
  console.log(findProduct(arr))