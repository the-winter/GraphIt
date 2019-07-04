var g = new Dygraph(
    document.getElementById('graph'),
    [
        [1, null, 3],
        [2, 2, null],
        [3, null, 7],
        [4, 5, null],
        [5, null, 5],
        [6, 3, null],
        [7, null, 6]
    ],
    {
        width: 'auto',
        ylabel: 'items',
        title: 'Daily Temperatures in New York vs. San Francisco',
        labels: ['x', 'A', 'B'],
        connectSeparatedPoints: true,
        drawPoints: true
    }
);

export { g }