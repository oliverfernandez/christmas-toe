import React from 'react';
import { Board } from './Board';

export class Game extends React.Component {
	render() {
	  return (
		  <React.Fragment>
			  <h1 class="title">CHRISTMAS TOE</h1>
			  <div className="game">			
				<div className="game-board">
					<Board />
				</div>
				<div className="game-info">
					<div>{/* status */}</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		  </React.Fragment>		
	  );
	}
  }