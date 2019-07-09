const hello = (greeting) => {
    console.log(greeting)
}

const draw = () => {

    const title = document.getElementById("title").value;
    const label = document.getElementById("label").value;

    var oneA;
    var twoA;
    var threeA;
    var fourA;
    var fiveA;
    var sixA;
    var sevenA;
    var eightA;
    var nineA;
    var tenA;
    var inputs = [];

    for (var i = 1; i <= 11; i++) {
        let id = i.toString();
        var elem = document.getElementById(id);

        if (elem === null) {
            break;
        } else if (elem.value === "") {
            break;
        } else {
            inputs.push([i, parseInt(elem.value)])
        }
    }

    var g = new Dygraph(
        document.getElementById('graph'),
        inputs,
        {
            title: title,
            ylabel: label,
            labels: ['x', label],
            connectSeparatedPoints: true,
            drawPoints: true,
        }
    );
}

export { hello, draw }