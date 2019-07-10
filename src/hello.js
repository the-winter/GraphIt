const addYAxis = () => {
    document.getElementsByClassName("second-axis-inputs")[0].style.display = "block";
    document.getElementById("draw1").style.display = "none";
}

const draw = (axis) => {

    const title = document.getElementById("title").value;
    const label = document.getElementById("label").value;
    // chart input array
    var inputs = [];
    var addY = document.getElementById("add-y");

    if (axis === 1) {
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
    } else {
        for (var i = 1; i <= 11; i++) {
            let id = i.toString();
            var elem = document.getElementById(id);
            var elemB = document.getElementById(id + 'B');

            if (elem === null) {
                break;
            } else if (elem.value === "") {
                break;
            } else {
                inputs.push([i, parseInt(elem.value), parseInt(elemB.value)])
            }
        }

        var g = new Dygraph(
            document.getElementById('graph'),
            inputs,
            {
                title: title,
                ylabel: label,
                labels: ['x', label, 'Y'],
                connectSeparatedPoints: true,
                drawPoints: true,
            }
        );
    }


    if (inputs[0].length === 2) {
        addY.style.display = "block"
    }


}

export { addYAxis, draw }