const SUDOKU_SIZE = 9;

export function solver(board){
    if (!isSolvable(board)) {
        return false;
    }
    if (isSolved(board)) {
        return true;  
    } 

    for (let i = 0; i < SUDOKU_SIZE; i++) {
        for (let j = 0; j < SUDOKU_SIZE; j++){
            if (board[i][j] === 0) {
                for (let k = 1; k <= SUDOKU_SIZE; k++){
                    if (isValid(board, i, j, k)){
                        board[i][j] = k;
                        if (solver(board))
                            return true;
                        board[i][j] = 0;
                    }
                    else {
                        board[i][j] = 0;
                        continue;
                    }
                }
                return false;
            }
        }
    }
}

function isValid(board, m, n, k) {
    // Check mth row
    for (let j = 0; j < SUDOKU_SIZE; j++){
        if (board[m][j] === k) {
            return false;
        }
    }
    // Check nth column
    for (let i = 0; i < SUDOKU_SIZE; i++){
        if (board[i][n] === k) {
            return false;
        }
    }
    // Check the particular block
    const rowStart = 3 * Math.floor(m/3);
    const colStart = 3 * Math.floor(n/3);

    for (let i = rowStart; i < rowStart + 3; i++){
        for (let j = colStart; j < colStart + 3; j++){
            if (board[i][j] === k)
            return false;
        }
    }

    return true;

}


function isSolved(board){
    // CHECK ALL ROWS FIRST

    for (let i = 0; i < SUDOKU_SIZE; i++){
        let table = [0, 0, 0, 0, 0 , 0, 0, 0, 0];
        for (let j = 0; j < SUDOKU_SIZE; j++){
            if (board[i][j] === 0) {
                return false;
            }
            const index = board[i][j] % 9;
            table[index] += 1;
            if (table[index] > 1) {
                return false;
            }
        }
    }

    // CHECK ALL COLUMNS

    for (let i = 0; i < SUDOKU_SIZE; i++){
        let table = [0, 0, 0, 0, 0 , 0, 0, 0, 0];
        for (let j = 0; j < SUDOKU_SIZE; j++){
            if (board[j][i] === 0) {
                return false;
            }
            const index = board[j][i] % 9;
            table[index] += 1;
            if (table[index] > 1) {
                return false;
            }
        }
    }

    // CHECK ALL BLOCKS
    // starting indexes for blocks are 0, 3, 6

    for(let m = 0; m < 3; m++){
        for (let n = 0; n < 3; n++){
            const startRow = 3 * m;
            const startCol = 3 * n;
            let table = [0, 0, 0, 0, 0 , 0, 0, 0, 0];
            for (let i = startRow; i < startRow + 3; i++){
                for (let j = startCol; j < startCol + 3; j++){
                    if (board[i][j] === 0) {
                        return false;
                    }
                    const index = board[j][i] % 9;
                    table[index] += 1;
                    if (table[index] > 1) {
                        return false;
                    }
                }
            }
        }
    }
    return true;
}


function isSolvable(board){
    for (let i = 0; i < SUDOKU_SIZE; i++){
        let table = [0, 0, 0, 0, 0 , 0, 0, 0, 0];
        for (let j = 0; j < SUDOKU_SIZE; j++){
            let index;
            if (board[i][j] === 0) {
                continue;
            }
            else{
                index = board[i][j] % 9;
                table[index] += 1;
            }
            if (table[index] > 1) {
                return false;
            }
        }
    }

    for (let i = 0; i < SUDOKU_SIZE; i++){
        let table = [0, 0, 0, 0, 0 , 0, 0, 0, 0];
        for (let j = 0; j < SUDOKU_SIZE; j++){
            let index;
            if (board[j][i] === 0) {
                continue;
            }
            else{
                index = board[j][i] % 9;
                table[index] += 1;
            }
            if (table[index] > 1) {
                return false;
            }
        }
    }

    for(let m = 0; m < 3; m++){
        for (let n = 0; n < 3; n++){
            const startRow = 3 * m;
            const startCol = 3 * n;
            let table = [0, 0, 0, 0, 0 , 0, 0, 0, 0];
            for (let i = startRow; i < startRow + 3; i++){
                for (let j = startCol; j < startCol + 3; j++){
                    let index;
                    if (board[i][j] === 0) {
                        continue;
                    }
                    else{
                        index = board[i][j] % 9;
                        table[index] += 1;
                    }
                    if (table[index] > 1) {
                        return false;
                    }
                }
            }
        }
    }
    return true;
}