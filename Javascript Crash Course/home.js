const ageInDays = () => {
    const birthYear = prompt("What year were you born?");
    const ageInDayzz = (2022 - birthYear) *365;
    var h1 = document.createElement(h1);
    const textAnswer = document.createTextNode('You are ' + ageInDayzz + ' days old!');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    
}

const reset = () => {
    document.getElementById('ageInDays').remove();
}