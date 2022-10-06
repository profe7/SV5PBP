var container =  $('div.container');

$('input#get').click(function() {
    $ajax({
        type: 'GET',
        url: 'wishlist/fixtures/initial_wishlist_data.json',
        dataType: 'json',
        success: function(data) {
            $.each(data, function(pk, item) {
                container.append(pk + ':' + item + '</br>');
            });
            container.append('<br></br>')
        }
    });
});

