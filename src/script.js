$(document).ready(function () {
    var maxField = 11; //Input fields increment limitation
    var axis1Wrapper;
    var axis2Wrapper;
    const addButton = $('button.add-inputs');
    var x = 3;
    let fieldHTML;


    //Once add button is clicked
    $(addButton).on('click', function (e) {
        axis1Wrapper = $(this).closest('.individual-axis-inputs').find('.added-inputs')
        axis2Wrapper = $(this).closest('ul').find('.individual-axis-inputs2')
        e.stopImmediatePropagation();
        //Check maximum number of input fields
        if (x < maxField) {
            fieldHTML = `<div><label>${x}</label><input id="${x}"type="text" name="field_name[]" value=""/><a href="javascript:void(0);" class="remove_button">X</a></div>`
            x++; //Increment field counter
            $(axis1Wrapper).append(fieldHTML); //Add field html
            $(axis2Wrapper).append(fieldHTML);
        }
    });
})