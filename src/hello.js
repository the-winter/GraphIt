const addYAxis = () => {
    document.getElementsByClassName("second-axis-inputs")[0].style.display = "block";
    document.getElementById("draw1").style.display = "none";
}

const draw = (axis) => {


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
    var addY = document.getElementById("add-y");

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

    if (inputs[0].length === 2) {
        addY.style.display = "block"
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

export { addYAxis, draw }