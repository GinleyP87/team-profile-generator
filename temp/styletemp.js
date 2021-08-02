const stylesheet = `

body {
    display: flex;
    flex-direction: column;
    align-items: center;
}

header {
    background: rgba(139, 0, 0, 0.959);;
    padding: 20px;
    color: whitesmoke;
    border-bottom: solid 4px #000000;
    position: relative;
    top: 0;
    width: 100%;
    text-align: center;

h1 {
    font-family: Helvetica, sans-serif;
    font-size: 60px;
}

p {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    position: relative;
    left: 12px;
}

h2 {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 20px;
    padding: 0px 0px 0px 18px;
}

.card-deck {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 60px;
    width: 100%;
    margin-left: 50px;
    margin-right: 50px;
}

.employee-card{
    width: 275px;
    height: 300px;
    margin: 0px 8px 40px 8px;
    background-color: rgb(255, 125, 125);
    border-radius: 10px;
}

.team-header {
    background-color: rgb(255, 0, 0);
    border: 1px solid rgb(0, 0, 0);
    width: 100%;
}

.team-input {
    display: flex;
    flex-direction: column;
    align-content: center;
}

footer {
    background: rgba(139, 0, 0, 0.959);;
    padding: 20px;
    color: whitesmoke;
    border-top: solid 4px #000000;
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
}

`

module.exports = stylesheet;