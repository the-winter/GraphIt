$(document).ready(function () {
    var maxField = 11; //Input fields increment limitation
    var axis1Wrapper;
    var axis2Wrapper;
    const addButton = $('a.add-inputs');
    const removeButton = $('a.remove-inputs');
    var x = 3;
    let axis1fieldHtml;
    let axis2fieldHtml;

    //Once add button is clicked
    $(addButton).on('click', function (e) {
        axis1Wrapper = $(this).closest('.individual-axis-inputs').find('.added-inputs')
        axis2Wrapper = $(this).closest('ul').find('.individual-axis-inputs2').find('.added-inputs')
        e.stopImmediatePropagation();
        //Check maximum number of input fields
        if (x < maxField) {
            axis1fieldHtml = `<div><label>${x} </label><input id="${x}"type="text" name="field_name[]" value="" required="" data-parsley-type="digits" style="margin-left:0.4em"/><a href="javascript:void(0);" class="remove_button">X</a></div>`
            axis2fieldHtml = `<div><label>${x} </label><input id="${x}B"type="text" name="field_name[]" value="" required="" data-parsley-type="digits" style="margin-left:0.4em"/><a href="javascript:void(0);" class="remove_button">X</a></div>`
            x++; //Increment field counter
            $(axis1Wrapper).append(axis1fieldHtml); //Add field html
            $(axis2Wrapper).append(axis2fieldHtml);
        }
    });

    $(removeButton).on('click', function (e) {
        e.stopImmediatePropagation();
        //Check maximum number of input fields
        if (x >= 3) {
            $("#added-inputs1 div:last-child").last().remove()
            $("#added-inputs2 div:last-child").last().remove()
            x--; //Decrement field counter
        }
    });

    $("form").submit(function (e) {
        e.preventDefault();
        $('form').parsley().on('field:validated', function () {
            var ok = $('.parsley-error').length === 0;
            $('.bs-callout-info').toggleClass('hidden', !ok);
            $('.bs-callout-warning').toggleClass('hidden', ok);
        })
            .on('form:submit', function () {
                return false; // Don't submit form for this demo
            });
    });

})