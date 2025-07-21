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
  }
  moveLeft() {
    this.positionCol--;
  }
  moveUp() {
    this.positionRow--;
  }
  moveDown() {
    this.positionRow++;
  }

 playGame() {
    while (!this.gameOver) {
      this.print();
      const input = prompt("ไปเที่ยวกันมั้ยยย ? จะเดินไปก็เดินไป (r/l/u/d): ");
      if (input === "r") this.moveUp();
      else if (input === "l") this.moveDown();
      else if (input === "u") this.moveLeft();
      else if (input === "d") this.moveRight();
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
