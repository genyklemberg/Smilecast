function m10task01() {
    $('#target').load("js/data.json"); 
}


function createTable(size) {
    var table = $('table#data');
    for (var i = 0; i < size; i++) {
        var row = $("<tr></tr>");
        for (var j = 0; j < size; j++) {
            var td = $("<td></td>");
            row.append(td);
        }
        table.append(row);
    }
}

function prepareGame() {

    $('#gameover').hide('fast');

    $('.active, table#data td').show('normal');

    $('table#data td').each(function () {

        $(this).html(Math.floor((Math.random() * 100) + 1));

    });

    startTime = $.now();

}

function handleClick() {

    var current = parseInt($(this).html());

    var incorrect = false;

    $('table#data td:visible').each(function () {

        if (parseInt($(this).html()) < current) {

            incorrect = true;

        }

    });

    if (!incorrect) {

        $(this).hide("fast", function() {

            if (!$('table#data td:visible').length) {

                finishGame();

            }

        });               

    }

}

function finishGame() {

    $('#time').html(($.now() - startTime) / 1000);

    $('.active').hide('fast');

    $('#gameover').show('normal');

}

$(document).ready(function () {

    createTable(4);

    $('table#data td').click(handleClick);

    $('#restart').click(prepareGame);

    $('table#data').css({ background: "#CCC", border: "1px solid #000" });

    $('table#data td').css({padding:"15px",border:"1px solid #DDD","text-align":"center"});

    prepareGame();

});