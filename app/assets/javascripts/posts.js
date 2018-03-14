function onChangeForm(id, text) {
    // show element
    document.getElementById(id).style.display = 'block';
    // hide element
    document.getElementById(text).style.display = 'none';
};

const new_image_feild = '<div class="file_field"><button class="btn btn-info btn-image"><i class="fa fa-plus-circle fa-3x"></i><br>Add Image</button><input name="images[url][]" class="image-input" onchange="preview_image(event)" type="file" id="post_images_attributes_0_url"><div class="image-output"><div class="btn btn-danger image-remove" onclick="remove_image(event)"><i class="fa fa-trash"></i></div></div></div>'
var is_max_image_num = false;

function append_new_image_input() {
    if ($("#file_field_container").children().length < 8) {
        $("#file_field_container").append(new_image_feild);
    } else {
        is_max_image_num = true;
    }
}

function preview_image(event) {
    let reader = new FileReader();
    reader.onload = function () {
        let output = $(event.target).next();
        output.css("backgroundImage", 'url(' + reader.result + ')');
        output.css("display", "block");
        append_new_image_input();
    }
    reader.readAsDataURL(event.target.files[0]);
}


function remove_image(event) {
    let file_field = $(event.target).parents(".file_field");
    // console.log(file_field);
    file_field.remove();
    if (is_max_image_num) {
        append_new_image_input();
        is_max_image_num = false;
    }
}