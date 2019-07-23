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
        title: 'Default Title',
        labels: ['x', 'A', 'B'],
        connectSeparatedPoints: true,
        drawPoints: true,
        axes: {
            x: {
                // pixelsPerLabel: 200 // may need to be a media query
            }
        }
    }
);

export { g }