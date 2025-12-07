//Uppgift 4 - Hämta element med olika DOM metoder

//checkbox – hämtas via getElementById
const checkbox = document.getElementById("divStyle");

//textfälten – hämtas via getElementsByClassName
const textFields = document.getElementsByClassName("textfield");

//knappen – hämtas via querySelector
const removeButton = document.querySelector("#removeBtn");

//div-elementet – hämtas via getElementById
const outputDiv = document.getElementById("outputDiv");

//Uppgift 5 - Eventhantering

function handleInputEvent(e) {
  //funktionsdeklaration handleInputEvent tar emot argumentet e, event-objektet från webbläsaren
  console.log("Event target:", e.target); //loggar ut e.target i konsolen, det HTML-element som utlöste eventet

  const targetName = e.target.name; //hämtar name-attributet från det element som utlöste eventet
  console.log("Elementets name-attribut:", targetName); //skriver ut name-attributet i konsolen

  if (targetName === "content") {
    //kollar om name-attributet är "content"
    outputDiv.innerHTML = e.target.value; //om = content skrivs värdet från textfältet in i div:en (live-uppdatering)
  }
}

//Uppgift 6a - Eventlyssnare för textfält
//input och blur
Array.from(textFields).forEach((field) => {
  field.addEventListener("input", handleInputEvent);
  field.addEventListener("blur", handleInputEvent);
});

//Uppgift 6b - Eventlyssnare för checkbox
//När checkboxen klickas hämtas färgen från "color"-fältet
//och sätter den som bakgrundsfärg på output-diven
checkbox.addEventListener("change", () => {
  //Hämta aktuell färg från textfältet "color"
  const colorValue = document.getElementById("color").value;

  //Sätt bakgrundsfärgen på div
  outputDiv.style.backgroundColor = colorValue;
});

//Uppgift 6c - Eventlyssnare för knapp
//När man klickar på "Ta bort"-knappen ska div-elementet
//tas bort ur DOM-trädet genom remove()
removeButton.addEventListener("click", () => {
  outputDiv.remove();
  console.log("Div togs bort från DOM.");
});
