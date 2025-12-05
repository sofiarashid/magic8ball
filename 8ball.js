function shakeMagic8Ball() {
    const question = prompt("What is your question?");
    if(question===null){
        document.getElementById('response-text').innerText = "Please ask a question!"
        document.getElementById('response-text').classList = 'lead text-warning'
        document.getElementById('response-img').src = 'unhappyFace.png'
    }

    if (!question.trim()) {
        alert('Please ask a valid question.')
    }

    const randomNumber = Math.floor(Math.random()*8);
    let answer, image, color;

    switch(randomNumber) {
        case 0:
            answer = "It is certain";
            image='0-image.png';
            color='text-success';
            break;
        case 1:
            answer = "It is decidedly so";
            image='1-image.png';
            color='text-danger';
            break;
        case 2:
            answer = "Reply hazy, try again";
            image='2-image.png';
            color='text-warning';
            break;
        case 3:
            answer = "Cannot predict now";
            image='3-image.png';
            color='text-success';
            break;
        case 4:
            answer = "Do not count on it";
            image='4-image.png';
            color='text-info';
            break;
        case 5:
            answer = "My sources say no";
            image='5-image.png';
            color='text-danger';
            break;
        case 6:
            answer = "Outlook not so good";
            image='6-image.png';
            color='text-success';
            break;
        case 7:
            answer = "Signs point to yes";
            image='7-image.png';
            color='text-danger';
            break;
        default:
            answer = "Error";
            image='8-image.png';
            color='text-secondary';
    }
    
    document.getElementById('response-text').innerText = answer
    document.getElementById('response-text').classList = `${color}`
    document.getElementById('response-img').src = image
}