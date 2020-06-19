const digitsRE = /(\d{3})(?=\d)/g

function currency(value, big = false, decimals) {
  if (value === '' || value === undefined || value === null) {
    return '--.--'
  }
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  decimals = decimals != null ? decimals : 2
  const stringified = Math.abs(value).toFixed(decimals)
  const _int = decimals
    ? stringified.slice(0, -1 - decimals)
    : stringified
  const i = _int.length % 3
  const head = i > 0
    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
    : ''
  const _float = decimals
    ? stringified.slice(-1 - decimals)
    : ''
  const sign = value < 0 ? '-' : ''
  return big ? <span style={{
    fontSize: '20px',
    color: '#0091FF',
    fontWeight: 800,
  }}> {sign + head +
    _int.slice(i).replace(digitsRE, '$1,') +
    _float}</span > : <span>{sign + head +
      _int.slice(i).replace(digitsRE, '$1,') +
      _float}</span>

}

function chkVal(value, quotationAccuracy = 2) {
  // value = chkInputAmount(value, quotationAccuracy);
  // 先把非数字的都替换掉，除了数字和.
  if (quotationAccuracy === 0) {
    value = value.replace(/\.{0,}/g, "");
    value = value.replace(/^[1-9]\./g, "");
  }
  value = String(value);
  value = value.replace(/[^0-9.]/g, "");
  // 保证只有出现一个.而没有多个.
  value = value.replace(/\.{2,}/g, ".");
  // 必须保证第一个为数字而不是.
  value = value.replace(/^\./g, "");
  // 保证.只出现一次，而不能出现两次以上//保证小数点之前最多12位数字
  if (value.split('.').length > 2) {
    value = value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
  } else if (value.substring(0, 1) === '0' && value.substring(1, 2) !== '.') {
    console.log(true, value.substring(1, 2))
    value = '0'
  }
  else if (value.indexOf(".") === -1) {
    value = value.substring(0, 12)
  } else {
    // 保证小数点后位数按精度计算
    const pointIndex = Number(value.indexOf("."));
    if (pointIndex > 12) {
      value = value.substring(0, 12) + value.substring(pointIndex, pointIndex + 1 + Number(quotationAccuracy));
    } else {
      value = value.substring(0, pointIndex) + value.substring(pointIndex, pointIndex + 1 + Number(quotationAccuracy));
    }
  }
  return value;
}

export {
  currency,
  chkVal
}

