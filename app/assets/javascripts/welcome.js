document.addEventListener("turbolinks:load", function(event) {

    $('#search_city_id').change(function(){
        var value = $('#search_city_id').val();
        $('#search_district_id').html("<option value=''>--Select district--</option>");
        $.get("posts", {
            city_id: value
        },
        function(data, status){
            data.forEach(item => {
                $('#search_district_id').append("<option value="+item.id+ ">"+ item.name + "</option>")
            });
        })
    });
    // GET DATA TO CATEGORY
    $('#search_category_id').change(function(){
        var value = $(this).val();
        $("#category-detail").removeAttr("style").hide();
        $("#category-detail").show();
        $('#search_category_detail_id').html("<option value=''>--Select specific category--</option>");
        $.get("posts", {
            category_id: value
        },
        function(data, status){
            data.forEach(item => {
                $('#search_category_detail_id').append("<option value="+item.id+ ">"+ item.name + "</option>")
            });
        })
    });
    // SHOW SUPER ADVANCE
    $('#btnShowSAdvance').click(function(){
        $("#super_advance").removeAttr("style").hide();
        $("#super_advance").show();
    })
    // GET DATA TO WARD SELECT
    $('#search_district_id').change(function(){
        var value = $(this).val();
        $('#search_ward_id').html("<option value=''>--Select ward--</option>");        
        $.get("posts", {
            district_id: value
        },
        function(data, status){
            data.forEach(item => {
                $('#search_ward_id').append("<option value="+item.id+ ">"+ item.name + "</option>")
            });
        })
    })
    // GET DATA TO STREET SELECT
    $('#search_ward_id').change(function(){
        var value = $(this).val();
        $('#search_street_id').html("<option value=''>--Select street--</option>");  
        $.get("posts", {
            ward_id: value
        },
        function(data, status){
            data.forEach(item => {
                $('#search_street_id').append("<option value="+item.id+ ">"+ item.name + "</option>")
            });
        })
    })

});
