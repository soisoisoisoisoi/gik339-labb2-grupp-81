// Uppgift 4 - Hämta element med olika DOM metoder

// Checkbox – hämtas via getElementById
const checkbox = document.getElementById("divStyle");

// Textfälten – hämtas via getElementsByClassName
const textFields = document.getElementsByClassName("textfield");

// Knappen – hämtas via querySelector
const removeButton = document.querySelector("#removeBtn");

// Div-elementet – hämtas via getElementById
const outputDiv = document.getElementById("outputDiv");

// Uppgift 5 - Eventhantering

// Funktionen körs när man skriver i eller lämnar
// något av textfälten. Vi loggar e.target, tar reda på vilket
// fält som skickade eventet och om det var "content" så skriver
// vi värdet till output-diven.
function handleInputEvent(e) {
  console.log("Event target:", e.target);

  const targetName = e.target.name;
  console.log("Elementets name-attribut:", targetName);

  if (targetName === "content") {
    // Uppdatera texten i div
    outputDiv.innerHTML = e.target.value;
  }
}

// Uppgift 6 - Eventlyssnare för textfält
// input och blur
Array.from(textFields).forEach((field) => {
  field.addEventListener("input", handleInputEvent);
  field.addEventListener("blur", handleInputEvent);
});

// Uppgift 6 - Eventlyssnare för checkbox
// När checkboxen klickas hämtas färgen från "color"-fältet
// och sätter den som bakgrundsfärg på output-diven
checkbox.addEventListener("change", () => {
  // Hämta aktuell färg från textfältet "color"
  const colorValue = document.getElementById("color").value;

  // Sätt bakgrundsfärgen på div
  outputDiv.style.backgroundColor = colorValue;
});

// Uppgift 6 - Eventlyssnare för knapp
// När man klickar på "Ta bort"-knappen ska div-elementet
// tas bort ur DOM-trädet genom remove()
removeButton.addEventListener("click", () => {
  outputDiv.remove();
  console.log("Div togs bort från DOM.");
});
