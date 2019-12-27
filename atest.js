var series1 = new TimeSeries();
var series2 = new TimeSeries();



var data = [-0.45,-0.455,-0.47,-0.475,-0.46,-0.45,-0.445,-0.44,-0.435,-0.44,-0.41,-0.395,-0.37,-0.365,-0.36,-0.365,-0.34,-0.325,-0.315,-0.32,-0.33,-0.33,-0.32,-0.31,-0.3,-0.3,-0.32,-0.32,-0.315,-0.305,-0.305,-0.295,-0.32,-0.33,-0.305,-0.31,-0.3,-0.3,-0.32,-0.325,-0.31,-0.305,-0.315,-0.305,-0.315,-0.315,-0.31,-0.295,-0.29,-0.305,-0.31,-0.32,-0.315,-0.3,-0.315,-0.315,-0.315,-0.33,-0.315,-0.32,-0.315,-0.325,-0.335,-0.34,-0.335,-0.335,-0.33,-0.325,-0.345,-0.35,-0.345,-0.335,-0.33,-0.33,-0.345,-0.345,-0.345,-0.32,-0.33,-0.335,-0.34,-0.355,-0.335,-0.33,-0.33,-0.335,-0.355,-0.36,-0.355,-0.35,-0.34,-0.345,-0.345,-0.345,-0.345,-0.33,-0.33,-0.335,-0.345,-0.35,-0.35,-0.34,-0.33,-0.345,-0.345,-0.355,-0.35,-0.34,-0.33,-0.34,-0.34,-0.34,-0.33,-0.335,-0.33,-0.335,-0.345,-0.345,-0.34,-0.33,-0.315,-0.295,-0.3,-0.295,-0.285,-0.275,-0.265,-0.265,-0.265,-0.255,-0.25,-0.24,-0.225,-0.215,-0.24,-0.245,-0.24,-0.245,-0.235,-0.245,-0.25,-0.275,-0.275,-0.265,-0.25,-0.225,-0.22,-0.23,-0.265,-0.27,-0.28,-0.285,-0.305,-0.32,-0.34,-0.33,-0.335,-0.335,-0.355,-0.37,-0.36,-0.345,-0.35,-0.355,-0.365,-0.375,-0.38,-0.37,-0.365,-0.365,-0.38,-0.385,-0.38,-0.375,-0.355,-0.37,-0.39,-0.405,-0.41,-0.435,-0.465,-0.49,-0.52,-0.555,-0.57,-0.525,-0.405,-0.25,-0.09,0.12,0.41,0.69,0.885,0.96,0.85,0.52,0.05,-0.32,-0.5,-0.505,-0.445,-0.415,-0.395,-0.39,-0.395,-0.39,-0.395,-0.405,-0.395,-0.405,-0.39,-0.395,-0.395,-0.41,-0.405,-0.4,-0.4,-0.415,-0.405,-0.42,-0.415,-0.405,-0.405,-0.42,-0.42,-0.435,-0.42,-0.41,-0.41,-0.405,-0.425,-0.43,-0.42,-0.415,-0.41,-0.41,-0.425,-0.42,-0.4,-0.395,-0.4,-0.4,-0.395,-0.415,-0.405,-0.39,-0.4,-0.4,-0.415,-0.425,-0.425,-0.415,-0.415,-0.41,-0.425,-0.425,-0.42,-0.415,-0.4,-0.4,-0.41,-0.425,-0.41,-0.405,-0.395,-0.4,-0.4,-0.405,-0.385,-0.4,-0.39,-0.39,-0.4,-0.415,-0.405,-0.405,-0.41,-0.415,-0.42,-0.42,-0.425,-0.415,-0.415,-0.41,-0.435,-0.43,-0.435,-0.42,-0.42,-0.42,-0.42,-0.425,-0.425
    -0.415,-0.395,-0.395,-0.39,-0.375,-0.36,-0.34,-0.335,-0.33,-0.335,-0.335,-0.325,-0.32,-0.305,-0.305,-0.315,-0.31,-0.305,-0.3,-0.3,-0.3,-0.31,-0.31,-0.31,-0.315,-0.3,-0.305,-0.315,-0.32,-0.325,-0.31,-0.305,-0.305,-0.32,-0.325,-0.305,-0.31,-0.295,-0.31,-0.325,-0.33,-0.32,-0.32,-0.32,-0.325,-0.35,-0.35,-0.34,-0.335,-0.33,-0.335,-0.34,-0.36,-0.35,-0.35,-0.355,-0.36,-0.355,-0.365,-0.355,-0.35,-0.34,-0.355,-0.35,-0.365,-0.365,-0.35,-0.355,-0.35,-0.37,-0.38,-0.37,-0.36,-0.365,-0.36,-0.365,-0.38,-0.37,-0.365,-0.35,-0.35,-0.35,-0.37,-0.365,-0.345,-0.345,-0.34,-0.355,-0.365,-0.36,-0.355,-0.355,-0.355,-0.375,-0.385,-0.355,-0.36,-0.355,-0.36,-0.36,-0.37,-0.36,-0.345,-0.355,-0.345,-0.345,-0.345,-0.34,-0.31,-0.305,-0.305,-0.31,-0.305,-0.29,-0.285,-0.275,-0.28,-0.28,-0.275,-0.265,-0.255,-0.245,-0.26,-0.265,-0.275,-0.28,-0.265,-0.27,-0.275,-0.28,-0.275,-0.28,-0.275,-0.265,-0.255,-0.24,-0.26,-0.28,-0.31,-0.31,-0.345,-0.36,-0.38,-0.385,-0.38,-0.37,-0.375,-0.385,-0.39,-0.395,-0.385,-0.385,-0.385,-0.395,-0.405,-0.4,-0.375,-0.375,-0.39,-0.395,-0.415,-0.405,-0.4,-0.39,-0.405,-0.425,-0.46,-0.475,-0.505,-0.51,-0.525,-0.54,-0.6,-0.645,-0.63,-0.575,-0.495,-0.385,-0.27,-0.115,0.09,0.37,0.635,0.81,0.86,0.77,0.475,0.065,-0.305,-0.5,-0.52,-0.475,-0.41,-0.39,-0.39,-0.4,-0.41,-0.405,-0.385,-0.39,-0.395,-0.405,-0.41,-0.405,-0.4,-0.39,-0.395,-0.41,-0.415,-0.41,-0.395,-0.405,-0.41,-0.405,-0.405,-0.41,-0.39,-0.385,-0.39,-0.395,-0.4,-0.4,-0.4,-0.395,-0.395,-0.405,-0.405,-0.4,-0.395,-0.385,-0.375,-0.385,-0.395,-0.39,-0.385,-0.375,-0.385,-0.395,-0.395,-0.385,-0.375,-0.375,-0.385,-0.395,-0.39,-0.39,-0.365,-0.375,-0.385,-0.395,-0.38,-0.385,-0.375,-0.38,-0.39,-0.38,-0.375,-0.375,-0.375,-0.375,-0.38,-0.39,-0.39,-0.365,-0.37,-0.375,-0.385,-0.39,-0.39,-0.375,-0.365,-0.385,-0.38,-0.39,-0.375,-0.375,-0.365,-0.37,-0.385,-0.395,-0.385,-0.385,-0.37,-0.365
    -0.37,-0.375,-0.35,-0.335,-0.32,-0.315,-0.32,-0.325,-0.315,-0.295,-0.285,-0.3,-0.295,-0.285,-0.285,-0.28,-0.27,-0.28,-0.29,-0.295,-0.295,-0.29,-0.28,-0.29,-0.295,-0.31,-0.295,-0.285,-0.28,-0.275,-0.295,-0.305,-0.3,-0.295,-0.295,-0.285,-0.3,-0.305,-0.3,-0.295,-0.3,-0.305,-0.315,-0.31,-0.315,-0.295,-0.3,-0.31,-0.33,-0.34,-0.33,-0.32,-0.32,-0.315,-0.325,-0.335,-0.33,-0.315,-0.32,-0.32,-0.33,-0.345,-0.34,-0.335,-0.33,-0.335,-0.345,-0.35,-0.345,-0.34,-0.335,-0.335,-0.33,-0.335,-0.34,-0.335,-0.32,-0.34,-0.34,-0.35,-0.365,-0.36,-0.345,-0.345,-0.35,-0.35,-0.35,-0.34,-0.34,-0.345,-0.345,-0.38,-0.36,-0.36,-0.345,-0.345,-0.35,-0.355,-0.345,-0.33,-0.33,-0.335,-0.335,-0.34,-0.33,-0.32,-0.29,-0.29,-0.3,-0.305,-0.285,-0.28,-0.275,-0.28,-0.275,-0.27,-0.265,-0.25,-0.23,-0.245,-0.24,-0.255,-0.255,-0.245,-0.235,-0.255,-0.265,-0.26,-0.255,-0.27,-0.265,-0.28,-0.255,-0.25,-0.245,-0.265,-0.28,-0.3,-0.315,-0.325,-0.335,-0.345,-0.33,-0.335,-0.345,-0.36,-0.35,-0.34,-0.335,-0.345,-0.36,-0.365,-0.375,-0.37,-0.365,-0.365,-0.38,-0.375,-0.375,-0.365,-0.37,-0.36,-0.37,-0.38,-0.365,-0.36,-0.35,-0.355,-0.37,-0.385,-0.395,-0.43,-0.445,-0.485,-0.515,-0.565,-0.555,-0.475,-0.355,-0.22,-0.055,0.185,0.475,0.705,0.82,0.78,0.535,0.145,-0.2,-0.42,-0.5,-0.48,-0.45,-0.41,-0.4,-0.39,-0.39,-0.4,-0.405,-0.425,-0.425,-0.405,-0.395,-0.405,-0.405,-0.415,-0.405,-0.385,-0.39,-0.395,-0.395,-0.395,-0.395,-0.385,-0.39,-0.39,-0.4,-0.425,-0.41,-0.4,-0.395,-0.4,-0.405,-0.425,-0.415,-0.405,-0.405,-0.405,-0.41,-0.415,-0.405,-0.42,-0.405,-0.41,-0.41,-0.42,-0.415,-0.405,-0.395,-0.395,-0.395,-0.4,-0.395,-0.395,-0.405,-0.405,-0.42,-0.435,-0.415,-0.405,-0.395,-0.39,-0.415,-0.405,-0.405,-0.4,-0.395,-0.395,-0.405,-0.42,-0.415,-0.4,-0.395,-0.4,-0.405,-0.425,-0.425,-0.425,-0.42,-0.425,-0.45,-0.445,-0.45,-0.435,-0.445,-0.47,-0.455,-0.46,-0.44,-0.435,-0.425,-0.43,-0.445,-0.45
    -0.445,-0.43,-0.42,-0.41,-0.425,-0.42,-0.405,-0.38,-0.37,-0.365,-0.365,-0.365,-0.345,-0.33,-0.315,-0.305,-0.305,-0.32,-0.31,-0.31,-0.305,-0.31,-0.315,-0.32,-0.315,-0.305,-0.305,-0.295,-0.31,-0.32,-0.31,-0.315,-0.295,-0.3,-0.305,-0.3,-0.285,-0.28,-0.29,-0.295,-0.305,-0.325,-0.305,-0.3,-0.3,-0.315,-0.325,-0.335,-0.325,-0.315,-0.32,-0.335,-0.33,-0.34,-0.325,-0.325,-0.32,-0.315,-0.335,-0.335,-0.345,-0.335,-0.325,-0.33,-0.315,-0.335,-0.33,-0.33,-0.33,-0.33,-0.335,-0.34,-0.33,-0.32,-0.315,-0.325,-0.335,-0.355,-0.345,-0.34,-0.335,-0.32,-0.325,-0.35,-0.33,-0.315,-0.315,-0.33,-0.33,-0.335,-0.335,-0.33,-0.33,-0.33,-0.34,-0.34,-0.34,-0.325,-0.325,-0.325,-0.345,-0.35,-0.34,-0.33,-0.32,-0.31,-0.305,-0.305,-0.275,-0.27,-0.255,-0.26,-0.265,-0.26,-0.25,-0.235,-0.235,-0.22,-0.235,-0.235,-0.22,-0.23,-0.225,-0.235,-0.245,-0.255,-0.24,-0.23,-0.23,-0.25,-0.255,-0.25,-0.23,-0.205,-0.195,-0.21,-0.23,-0.27,-0.27,-0.285,-0.285,-0.31,-0.33,-0.34,-0.34,-0.345,-0.35,-0.35,-0.34,-0.355,-0.345,-0.34,-0.34,-0.345,-0.355,-0.37,-0.355,-0.37,-0.345,-0.34,-0.36,-0.38,-0.36,-0.345,-0.35,-0.35,-0.355,-0.38,-0.39,-0.395,-0.425,-0.455,-0.475,-0.51,-0.545,-0.54,-0.495,-0.405,-0.295,-0.16,0.04,0.315,0.595,0.8,0.885,0.795,0.52,0.13,-0.215,-0.425,-0.5,-0.49,-0.45,-0.4,-0.39,-0.395,-0.395,-0.4,-0.39,-0.38,-0.385,-0.385,-0.4,-0.41,-0.41,-0.39,-0.39,-0.405,-0.405,-0.415,-0.41,-0.395,-0.395,-0.4,-0.415,-0.415,-0.415,-0.4,-0.39,-0.39,-0.41,-0.415,-0.405,-0.395,-0.395,-0.395,-0.405,-0.41,-0.41,-0.4,-0.39,-0.395,-0.41,-0.425,-0.415,-0.405,-0.41,-0.405,-0.415,-0.425,-0.425,-0.41,-0.395,-0.39,-0.4,-0.41,-0.41,-0.4,-0.39,-0.41,-0.42,-0.42,-0.415,-0.415,-0.405,-0.42,-0.415,-0.425,-0.41,-0.4,-0.405,-0.4,-0.4,-0.41,-0.4,-0.395,-0.395,-0.405,-0.41,-0.425,-0.425,-0.41,-0.41,-0.42,-0.43,-0.445,-0.44,-0.435,-0.43,-0.43,-0.45,-0.445,-0.445,-0.435
    -0.435,-0.445,-0.44,-0.45,-0.43,-0.43,-0.415,-0.4,-0.4,-0.385,-0.365,-0.335,-0.33,-0.325,-0.33,-0.33,-0.31,-0.295,-0.285,-0.29,-0.29,-0.31,-0.295,-0.285,-0.28,-0.3,-0.29,-0.295,-0.29,-0.28,-0.275,-0.275,-0.29,-0.29,-0.285,-0.27,-0.27,-0.27,-0.275,-0.29,-0.285,-0.275,-0.275,-0.29,-0.295,-0.305,-0.295,-0.295,-0.285,-0.29,-0.3,-0.305,-0.31,-0.295,-0.3,-0.305,-0.31,-0.325,-0.325,-0.315,-0.31,-0.315,-0.315,-0.325,-0.32,-0.31,-0.32,-0.315,-0.33,-0.33,-0.32,-0.31,-0.31,-0.31,-0.33,-0.335,-0.33,-0.32,-0.325,-0.325,-0.33,-0.335,-0.33,-0.325,-0.325,-0.32,-0.325,-0.33,-0.325,-0.315,-0.305,-0.325,-0.315,-0.335,-0.33,-0.31,-0.32,-0.33,-0.33,-0.335,-0.33,-0.33,-0.32,-0.32,-0.33,-0.33,-0.325,-0.315,-0.315,-0.315,-0.33,-0.33,-0.32,-0.315,-0.305,-0.305,-0.295,-0.315,-0.3,-0.275,-0.255,-0.255,-0.26,-0.265,-0.255,-0.235,-0.23,-0.225,-0.22,-0.22,-0.215,-0.2,-0.205,-0.205,-0.225,-0.235,-0.24,-0.23,-0.215,-0.24,-0.24,-0.25,-0.235,-0.21,-0.2,-0.22,-0.255,-0.275,-0.285,-0.3,-0.305,-0.32,-0.33,-0.325,-0.32,-0.33,-0.33,-0.335,-0.34,-0.345,-0.34,-0.335,-0.32,-0.325,-0.335,-0.345,-0.345,-0.345,-0.335,-0.34,-0.345,-0.355,-0.34,-0.34,-0.34,-0.34,-0.345,-0.355,-0.365,-0.37,-0.405,-0.445,-0.48,-0.495,-0.52,-0.535,-0.505,-0.415,-0.28,-0.135,0.065,0.3,0.58,0.81,0.945,0.92,0.775,0.445,0.02,-0.295,-0.445,-0.47,-0.425,-0.38,-0.36,-0.36,-0.37,-0.38,-0.38,-0.375,-0.37,-0.365,-0.37,-0.385,-0.385,-0.375,-0.37,-0.37,-0.385,-0.395,-0.385,-0.385,-0.39,-0.385,-0.395,-0.41,-0.4,-0.395,-0.38,-0.395,-0.395,-0.4,-0.4,-0.395,-0.39,-0.39,-0.395,-0.405,-0.39,-0.385,-0.375,-0.375,-0.38,-0.39,-0.385,-0.37,-0.37,-0.37,-0.375,-0.385,-0.37,-0.39,-0.375,-0.37,-0.38,-0.39,-0.39,-0.385,-0.375,-0.375,-0.385,-0.395,-0.39,-0.385,-0.375,-0.38,-0.385,-0.39,-0.38,-0.38,-0.37,-0.37,-0.365,-0.39,-0.365,-0.365,-0.36,-0.375,-0.38,-0.4,-0.39,-0.375,-0.375,-0.37,-0.385,-0.39,-0.39,-0.39,-0.39,-0.375,-0.385,-0.395,-0.38,-0.37
    ]
let i = 0;
// Randomly add a data point every 500ms
setInterval(function() {
    
    var now = Date.now();
    var val = data[i]; 
    series2.append(now, val);
    if(i == data.length)
        i = 0;
    else
        i++;
}, 9);
function createTimeline() {
    var chart2 = new SmoothieChart({ responsive: true });
    chart2.addTimeSeries(series2, { strokeStyle: 'rgba(0, 255, 0, 1)', fillStyle: 'rgba(0, 255, 0, 0.2)', lineWidth: 1});
    chart2.streamTo(document.getElementById("chart-responsive"), 500);
    console.log(data.length);
}