const hello = (greeting) => {
    console.log(greeting)
}

const draw = () => {

    console.log(document.getElementById("title").value);
    const title = document.getElementById("title").value;

    const one = parseInt(document.getElementById("one").value);
    const two = parseInt(document.getElementById("two").value);
    const three = parseInt(document.getElementById("three").value);
    const four = parseInt(document.getElementById("four").value);
    const five = parseInt(document.getElementById("five").value);
    const six = parseInt(document.getElementById("six").value);
    const seven = parseInt(document.getElementById("seven").value);

    const inputs = [[1, one], [2, two], [3, three], [4, four], [5, five], [6, six], [7, seven]]
    var g = new Dygraph(
        document.getElementById('graph'),
        inputs,
        {
            // showRoller: true,
            // customBars: true,
            title: title,
            ylabel: "test",
            labels: ['x', 'A'],
            connectSeparatedPoints: true,
            drawPoints: true
        }
    );
}

export { hello, draw }