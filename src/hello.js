const hello = (greeting) => {
    console.log(greeting)
}

const draw = () => {

    console.log(document.getElementById("title").value);
    const title = document.getElementById("title").value;

    const one = document.getElementById("one").value;
    const two = document.getElementById("two").value;
    const three = document.getElementById("three").value;
    // const title = document.getElementById("title").value;
    // const title = document.getElementById("title").value;
    // const title = document.getElementById("title").value;
    // const title = document.getElementById("title").value;
    var g = new Dygraph(
        document.getElementById('graph'),
        [
            [1, 4, 3],
            [2, 2, 2],
            [3, null, 7],
            [4, 5, null],
            [5, null, 5],
            [6, 3, null],
            [7, null, 6]
        ],
        {
            // showRoller: true,
            // customBars: true,
            title: title,
            ylabel: "test",
            labels: ['x', 'A', 'B'],
            connectSeparatedPoints: true,
            drawPoints: true
        }
    );
}

export { hello, draw }