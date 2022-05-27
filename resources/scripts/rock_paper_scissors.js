class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];
    return acceptedValues[Math.floor(Math.random() * 3)];
  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){
    let result = "lose";

    if(userSelection == cpuSelection){
      result = "tie";
    }
    else if (userSelection == "rock" && cpuSelection == "scissors"){
      result = "win";
    }
    else if (userSelection == "paper" && cpuSelection == "rock"){
      result = "win";
    }
    else if (userSelection == "scissors" && cpuSelection == "paper"){
      result = "win";
    }

    return result;
  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){
    const cpuResponse = this.generateCPUResponse();
    const gameOutcome = this.determineWinner(userSelection,cpuResponse);

    if(gameOutcome == 'lose'){
      this.score.cpu ++;
      this.gameHistoryLog.push(this.username + ' selected ' + userSelection + ', CPU selected ' + cpuResponse +  ': CPU won');
    }
    else if(gameOutcome == 'win'){
      this.score.user ++;
      this.gameHistoryLog.push(this.username + ' selected ' + userSelection + ', CPU selected ' + cpuResponse + ': ' + this.username + ' won');
    }
    else{
      this.gameHistoryLog.push(this.username + ' selected ' + userSelection + ', CPU selected ' + cpuResponse +  ': Tie');
    }

  }

}