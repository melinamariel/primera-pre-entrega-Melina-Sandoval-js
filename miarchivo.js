const data = {
    monto: 0,
    periodo: '',
    tna: '',
    total: 0,
}
const tableTNA = {
    30: 35,
    60: 45,
    90: 55,
    180: 65,
    360: 75,
}
function addAmount(value) {
    if (value > 0) {
        data.monto = parseInt(value)
    }
    calculate()
}

function selectDay(obj) {
    if (obj.value > 0) {
        data.periodo = parseInt(obj.value)
        data.tna = tableTNA[obj.value]
    } else {
        data.tna = 0
    }
    calculate()
}

function calculate() {
    if (data.monto && data.monto > 0 && data.periodo && data.periodo && data.tna && data.tna) {
        data.total = ((data.tna / 100) + 1) * data.monto
    } else {
        data.total = 0
    }
    document.querySelector("#tna").value = data.tna
    document.querySelector("#total").value = data.total
}