export const chartOptions = {
    autoSkipPadding: 5
}

export function createChartData(data, symbol) {

    let chartDataObj = {
        labels: [],
        datasets: []
    }

    if (!data) {
        return chartDataObj;
    }

    let labelData = data.map(item => {
        return item.date;
    });
    chartDataObj.labels = labelData;

    let highData = data.map(item => {
        return item.high;
    })
    let lowData = data.map(item => {
        return item.low;
    })
    let openData = data.map(item => {
        return item.open;
    })
    let closeData = data.map(item => {
        return item.close;
    })
    let volumeData = data.map(item => {
        return item.volume;
    })
    chartDataObj.datasets.push(createDefualtDataset('High', highData, [0, 0, 0]))
    chartDataObj.datasets.push(createDefualtDataset('Low', lowData, [0, 0, 0]))
    chartDataObj.datasets.push(createDefualtDataset('Open', openData, [0, 0, 0]))
    chartDataObj.datasets.push(createDefualtDataset('Close', closeData, [0, 0, 0]))
    chartDataObj.datasets.push(createDefualtDataset('Volume', volumeData, [0, 0, 0], { hidden: true, fill: true }))

    return chartDataObj;



}

function createDefualtDataset(label, data, color, additional) {
    let obj = {
        label: label,
        fill: false,
        lineTension: 0.0,
        backgroundColor: createColorString(color, 0.4),
        borderColor: createColorString(color, 1),
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: createColorString(color, 1),
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: createColorString(color, 1),
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        spanGaps: false,
        data: data,
    }
    Object.assign(obj, additional);
    return obj;
}

function createColorString(color, alpha) {
    return 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',' + alpha + ')';
}