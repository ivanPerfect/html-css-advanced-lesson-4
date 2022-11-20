function createBarChart(data, width, height, color) {

    let chart = document.createElement("div");
    chart.style.width = width + "px";
    chart.style.height = height + "px";
    chart.style.position = "relative";

    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < data.length; i++) {
        if (max < data[i]) max = data[i];
    }

    let scale = height / max;
    let barWidth = Math.floor(width / data.length);

    for (let i = 0; i < data.length; i++) {
        let bar = document.createElement("div");
        
        bar.style.height = data[i] * scale + "px";
        bar.style.width = barWidth - 5 + "px";

        bar.style.position = "absolute";
        bar.style.margin = "4px";
        bar.style.bottom = "0px";
        bar.style.left = barWidth * i + "px";

        bar.style.backgroundColor = color;

        chart.append(bar);
    }

    return chart;
}