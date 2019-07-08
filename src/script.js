$(document).ready(function () {
    var maxField = 10; //Input fields increment limitation
    const wrapper = $('.added-inputs');
    const addButton = $('.add-inputs');
    let fieldHTML = '<div><input type="text" name="field_name[]" value=""/><a href="javascript:void(0);" class="remove_button"><img src="remove-icon.png"/></a></div>'
    var x = 7;

    //Once add button is clicked
    $(addButton).click(function () {
        console.log('btn clicked');
        //Check maximum number of input fields
        if (x < maxField) {
            x++; //Increment field counter
            $(wrapper).append(fieldHTML); //Add field html
        }
    });
})