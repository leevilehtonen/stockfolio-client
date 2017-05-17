import randomColor from 'randomcolor';
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

    let colors = randomColor({
        format: 'rgbArray',
        count: 5,
        luminosity: 'dark',
    });
    chartDataObj.datasets.push(createDefualtDataset('High', highData, colors[0]))
    chartDataObj.datasets.push(createDefualtDataset('Low', lowData, colors[1]))
    chartDataObj.datasets.push(createDefualtDataset('Open', openData, colors[2]))
    chartDataObj.datasets.push(createDefualtDataset('Close', closeData, colors[3]))
    chartDataObj.datasets.push(createDefualtDataset('Volume', volumeData, colors[4], { hidden: true, fill: true }))

    return chartDataObj;



}

function createDefualtDataset(label, data, color, additional) {
    let obj = {
        label: label,
        fill: false,
        lineTension: 0.1,
        backgroundColor: createColorString(color, 0.4),
        borderColor: createColorString(color, 1),
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        borderWidth:2,
        pointBorderColor: createColorString(color, 1),
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: createColorString(color, 1),
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 0,
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