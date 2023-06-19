let score = JSON.parse(localStorage.getItem('score'));

if(score === null)
{
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}

updateScore();

function playGame(movePicked)
{
    const computerMove = pickComputerMove();
    let result = '';

    if(movePicked === 'rock')
    {
        if(computerMove === 'rock')
        {
            result = 'Tie.';
        }
        else if(computerMove === 'paper')
        {
            result = 'You Lose.';
        }
        else if(computerMove === 'scissor')
        {
            result = 'You Win.';
        }
    }
    else if(movePicked === 'paper')
    {
        if(computerMove === 'rock')
        {
            result = 'You Win.';
        }
        else if(computerMove === 'paper')
        {
            result = 'Tie.';
        }
        else if(computerMove === 'scissor')
        {
            result = 'You Lose.';
        }
    }
    else if(movePicked === 'scissor')
    {
        if(computerMove === 'rock')
        {
            result = 'You Lose.';
        }
        else if(computerMove === 'paper')
        {
            result = 'You Win.';
        }
        else if(computerMove === 'scissor')
        {
            result = 'Tie.';
        }
    }
    
    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves')
        .innerHTML = `You
<img src="images/${movePicked}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;

    if(result === 'You Win.')
    {
        score.wins++;
    }
    else if(result === 'You Lose.')
    {
        score.losses++;
    }
    else if(result === 'Tie.')
    {
        score.ties++;
    }

    updateScore();

    localStorage.setItem('score', JSON.stringify(score));

}

function updateScore()
{
    document.querySelector('.js-score')
        .innerHTML = `Wins : ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties}`;
}

function pickComputerMove()
{
    const randomNumber = Math.random();
    let computerMove = '';

    if(randomNumber >= 0 && randomNumber < 1/3)
    {
        computerMove = 'rock';
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3)
    {
        computerMove = 'paper';
    }
    else if(randomNumber >= 2/3 && randomNumber < 1)
    {
        computerMove = 'scissor';
    }
    return computerMove;
}