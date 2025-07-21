"use strict";
// JS Assessment: Find Your Hat //
import promptSync from "prompt-sync";
import clear from "clear-screen";

const prompt = promptSync({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(field = [[]]) {
    this.field = field;
    // Set the home position at (0, 0) before the game starts
    this.positionRow = 0;
    this.positionCol = 0;
    this.field[this.positionRow][this.positionCol] = pathCharacter;
    this.gameOver = false;
  }

  // Print field //
  print() {
    clear();
    for (let row of this.field) {
      console.log(row.join(" "));
    }
  }

  moveRight() {
    this.positionCol++;
    this.check();
  }
  moveLeft() {
    this.positionCol--;
    this.check();
  }
  moveUp() {
    this.positionRow--;
    this.check();
  }
  moveDown() {
    this.positionRow++;
    this.check();
  }

  check() {
    const ground = this.field[this.positionRow][this.positionCol];

    if (ground === hole) {
      console.log("You fell into a hole! Game over.");
      this.gameOver = true;
    } else if (ground === hat) {
      console.log("You found the hat! You win!");
      this.gameOver = true;
    } else if (ground === "░") {
      this.field[this.positionRow][this.positionCol] = pathCharacter;
    } else {
            console.log("You went out of bounds! Game over.");
      this.gameOver = true;
    }
  }

  playGame() {
    while (!this.gameOver) {
      this.print();
      const input = prompt(
        "\nไปเที่ยวกันมั้ยยย ? จะเดินไปก็เดินไป (r/l/u/d): "
      );
      if (input === "r") this.moveRight();
      else if (input === "l") this.moveLeft();
      else if (input === "u") this.moveUp();
      else if (input === "d") this.moveDown();
      else console.log("รบกวนเลือกกรอกข้อมูลตามนี้ (r/l/u/d) เท่านั้น");
    }
  }
}

const newGame = new Field([
  ["░", "░", "O"],
  ["░", "O", "░"],
  ["░", "^", "░"],
]);
newGame.playGame();
