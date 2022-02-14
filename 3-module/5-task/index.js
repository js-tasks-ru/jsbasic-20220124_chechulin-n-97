function getMinMax(str) {
    let num = str.split(' ').map(parseFloat).filter(function(v) {return !Number.isNaN(v)})
    let maxValue = Math.max.apply(null, num)
    let minValue = Math.min.apply(null, num)
    return {max: maxValue, min: minValue}
}
