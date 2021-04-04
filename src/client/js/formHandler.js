function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    let infInput = document.getElementById('infinitive')
    let pastInput = document.getElementById('past')
    let ppInput = document.getElementById('pp')
    
    const conjugatedVerb = {
      "verb": formText,
      "action": "conjugate"
    };
    // cuz it's constant :''D They are lets .. seebak mn el sent body , it's const cuz I hard coded it ..
    // that what I mean ... hard coding


    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8000/api/api.php', {method: "POST", body: JSON.stringify(conjugatedVerb) })
    .then(res => res.json())
    .then((data) => {

      infInput.innerHTML = data.infinitive;
      pastInput.innerHTML = data.past;
      ppInput.innerHTML = data.past_participle;
      console.log(data);


        //document.getElementById('results').innerHTML = data.past
    })
}

export { handleSubmit }
