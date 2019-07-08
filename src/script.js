$(document).ready(function () {
    var maxField = 11; //Input fields increment limitation
    const wrapper = $('.added-inputs');
    const addButton = $('button.add-inputs');
    var x = 6;
    let fieldHTML;


    //Once add button is clicked
    $(addButton).on('click', function (e) {
        e.stopImmediatePropagation();
        //Check maximum number of input fields
        if (x < maxField) {
            fieldHTML = `<div><label>${x}</label><input id="${x}"type="text" name="field_name[]" value=""/><a href="javascript:void(0);" class="remove_button">X</a></div>`
            x++; //Increment field counter
            $(wrapper).append(fieldHTML); //Add field html
        }
    });
})