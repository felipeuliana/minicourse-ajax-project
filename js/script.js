
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // YOUR CODE GOES HERE!

    // load streetview
    var $street = $('#street').val();
    var $city = $('#city').val();

    var streetViewAddress = $street + ', ' + $city;

    $body.append('<img class="bgimg" src="https://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + streetViewAddress + '">');

    // load New York Times api
    var nytApiUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json';
    var nytQuery = '?q=' + $street + '+' + $city;
    var nytApiKey = '&api-key=82bd23bcb69609f99ac4a626ab4d5216:14:73655973';
    var nytUrl = nytApiUrl + nytQuery + nytApiKey;

    $.getJSON(nytUrl, function(data) {
        console.log(data);
    });

    return false;
};

$('#form-container').submit(loadData);

// loadData();
