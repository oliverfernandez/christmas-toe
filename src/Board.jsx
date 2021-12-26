import React from 'react';
import { Square } from './Square';

const PLAYERS = [ '🎄', '🎁' ];
const NUMBER_PLAYERS = 2;


function initGame() {
	return {
		squares: Array(9).fill(null),
		round: 0,			
	};
}

function isSquareEmtpy(selectedSquare, squares) {
	return squares[selectedSquare] === null;
}

function getCurrentPlayer(currentRound) {
	return PLAYERS[currentRound % NUMBER_PLAYERS];
}

function nextRound(selectedSquare, game) {
	if (isSquareEmtpy(selectedSquare, game.squares)) {
		const currentRound = game.round;
		const currentPlayer = getCurrentPlayer(currentRound);
		const newSquares = game.squares.slice();

		newSquares[selectedSquare] = currentPlayer;

		return {
			squares: newSquares,
			round: currentRound + 1
		}
	}

	return game;
}

export class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = initGame();
	  }

	render() {
	  const status = `Next player: ${getCurrentPlayer(this.state.round)}`;
  
	  return (
		<div>
		  <div className="status">{ status }</div>
		  <div className="board-row">
			{ this.renderSquare(0) }
			{ this.renderSquare(1) }
			{ this.renderSquare(2) }
		  </div>
		  <div className="board-row">
			{ this.renderSquare(3) }
			{ this.renderSquare(4) }
			{ this.renderSquare(5) }
		  </div>
		  <div className="board-row">
			{ this.renderSquare(6) }
			{ this.renderSquare(7) }
			{ this.renderSquare(8) }
		  </div>
		</div>
	  );
	}

	renderSquare(i) {
		return (
			<Square value={ this.state.squares[i] } onClick={ () => this.handleSquareClick(i) } />
		);
	}

	handleSquareClick(i) {
		this.setState(nextRound(i, this.state));
	}
  }