
var board = [
    [0, 9, 6, 4, 0, 2, 0, 0, 7],
    [1, 0, 0, 0, 0, 0, 0, 9, 0],
    [3, 0, 0, 0, 6, 0, 0, 0, 0],
    [0, 0, 0, 8, 0, 0, 0, 0, 3],
    [0, 2, 9, 0, 4, 0, 0, 8, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0],
    [6, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 7, 5, 0, 0],
    [0, 8, 4, 0, 2, 0, 0, 3, 0]
];

$(document).ready(function () {
    let ele = $('.container');
    initSudoku(ele, board);
});

function initSudoku(ele, board) {
    for (let i = 0; i < 9; i++) {        
        if (i % 3 == 0) {
            ele.append('<hr style="width: 650px; justify-items: center; text-align: center; justify-content: center;">');
        }
        for (let j = 0; j < 9; j++) {            
            if (j % 3 == 0) {
                ele.append('<span class="vl"></span>');
            }
            ele.append(`<input type="text" autocomplete="off" maxlength="1" inputmode="numeric" class="cell" id="c-${i}-${j}" value="${board[i][j]}" />`);
        }
        ele.append(`<br/>`);
    }
}

function btnSolveSudoku() {
    var newBoard = [];
    for (let i = 0; i < 9; i++) {
        newBoard[i] = [];
        for (let j = 0; j < 9; j++) {
            newBoard[i][j] = parseInt($('#c-' + i + '-' + j).val());
            if (parseInt($('#c-' + i + '-' + j).val()) != 0) {
                $('#c-' + i + '-' + j).css('background-color', '#ccc');
                $('#c-' + i + '-' + j).attr('readonly', true);
            }
        }
    }

    var solveBoard = solveSudoku(newBoard);
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            $('#c-' + i + '-' + j).val(solveBoard[i][j]);
        }
    }
}

function btnclearSudoku() {

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            $('#c-' + i + '-' + j).val(0);
        }
    }
}

function solveSudoku(board) {
    const N = 9;
    const empty = 0;

    // Check if a number is valid in a cell
    function isValid(board, row, col, num) {
        // Check row
        for (let i = 0; i < N; i++) {
            if (board[row][i] === num) {
                return false;
            }
        }

        // Check column
        for (let i = 0; i < N; i++) {
            if (board[i][col] === num) {
                return false;
            }
        }

        // Check 3x3 box
        const boxRow = Math.floor(row / 3) * 3;
        const boxCol = Math.floor(col / 3) * 3;
        for (let i = boxRow; i < boxRow + 3; i++) {
            for (let j = boxCol; j < boxCol + 3; j++) {
                if (board[i][j] === num) {
                    return false;
                }
            }
        }

        return true;
    }

    // Solve the board using recursion and backtracking
    function solve(board) {
        for (let row = 0; row < N; row++) {
            for (let col = 0; col < N; col++) {
                if (board[row][col] === empty) {
                    for (let num = 1; num <= N; num++) {
                        if (isValid(board, row, col, num)) {
                            board[row][col] = num;
                            if (solve(board)) {
                                return true;
                            }
                            board[row][col] = empty;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    // Copy the board to avoid modifying the original
    const copy = board.map(row => [...row]);

    // Solve the copy of the board using recursion and backtracking
    if (solve(copy)) {
        return copy;
    } else {
        return null; // No solution found
    }
}

