function generate_chart(params) {
    const { chartType, options, title, data } = params;
    const dataString = JSON.stringify(data)
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/\t/g, '\\t');

    const optionsString = JSON.stringify(options)
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/\t/g, '\\t');

    const htmlString = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>${title}</title>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    </head>
    <body>
        <canvas id="generated-chart"></canvas>
        <script>
            var ctx = document.getElementById('generated-chart').getContext('2d');
            var chart = new Chart(ctx, {
                type: '${chartType}',
                data: JSON.parse("${dataString}"),
                options: JSON.parse("${optionsString}")
            });
        </script>
    </body>
    </html>
    `;
    return htmlString;
}