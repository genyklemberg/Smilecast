function changeActiveHiddenState(hiddenVal) {

    var active = document.getElementsByClassName('active');

    for (var i = 0; i < active.length; i++) {

        active[i].hidden = hiddenVal;

    }

}

function prepareGame() {

    document.getElementById('gameover').hidden = 'hidden';

    changeActiveHiddenState('');

    var cells = document.getElementsByTagName('td');

    for (var i = 0; i < cells.length; i++) {

        cells[i].hidden = '';

        cells[i].innerHTML = Math.floor((Math.random() * 100) + 1);

        cells[i].onclick = handleClick;

    }

    cellsLeft = 16;

    startTime = Date.now();

}

function handleClick() {

    var current = parseInt(this.innerHTML);

    var incorrect = false;

    var cells = document.getElementsByTagName('td');

    for (var i = 0; i < cells.length; i++) {

        var cell = cells[i];

        if (!cell.hidden) {

            if (parseInt(cell.innerHTML) < current) {

                incorrect = true;

            }

        }

    }

    if (!incorrect) {

        this.hidden = 'hidden';

        cellsLeft--;

        if (cellsLeft == 0) {

            finishGame();

        }

    }

}

function finishGame() {

    changeActiveHiddenState('hidden');

    document.getElementById('time').innerHTML = (Date.now() - startTime) / 1000;

    document.getElementById('gameover').hidden = '';

}

