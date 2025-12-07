// -------------------------------------------------------------
// HÄMTA ELEMENT MED OLIKA DOM-METODER (Uppgift 4)
// -------------------------------------------------------------

// Checkbox – hämtas via getElementById
const checkbox = document.getElementById("divStyle");

// Textfälten – hämtas via getElementsByClassName (samling)
const textFields = document.getElementsByClassName("textfield");

// Knappen – hämtas via querySelector
const removeButton = document.querySelector("#removeBtn");

// Div-elementet – hämtas via getElementById
const outputDiv = document.getElementById("outputDiv");

// -------------------------------------------------------------
// FUNKTION FÖR ATT HANTERA INPUT-EVENT (Uppgift 5)
// -------------------------------------------------------------
//
// Denna funktion körs när användaren skriver i eller lämnar
// något av textfälten. Vi loggar e.target, tar reda på vilket
// fält som skickade eventet och om det var "content" så skriver
// vi värdet till output-diven.
//
function handleInputEvent(e) {
  console.log("Event target:", e.target);

  const targetName = e.target.name;
  console.log("Elementets name-attribut:", targetName);

  if (targetName === "content") {
    // Uppdatera texten i div-elementet
    outputDiv.innerHTML = e.target.value;
  }
}

// -------------------------------------------------------------
// EVENTLYSSNARE FÖR TEXTFÄLTEN (Uppgift 6, del 1)
// -------------------------------------------------------------
//
// Vi lägger till både "input" (körs när man skriver)
// och "blur" (körs när man lämnar fältet).
// Detta gör att funktionen reagerar på båda beteendena.
//
Array.from(textFields).forEach((field) => {
  field.addEventListener("input", handleInputEvent);
  field.addEventListener("blur", handleInputEvent);
});

// -------------------------------------------------------------
// EVENTLYSSNARE FÖR CHECKBOXEN (Uppgift 6, del 2)
// -------------------------------------------------------------
//
// När checkboxen ändras hämtar vi färgen från "color"-fältet
// och sätter den som bakgrundsfärg på output-diven.
// -------------------------------------------------------------
checkbox.addEventListener("change", () => {
  // Hämta aktuellt färgvärde från textfältet "color"
  const colorValue = document.getElementById("color").value;

  // Sätt bakgrundsfärgen på div-elementet
  outputDiv.style.backgroundColor = colorValue;
});

// -------------------------------------------------------------
// EVENTLYSSNARE FÖR KNAPPEN (Uppgift 6)
// -------------------------------------------------------------
//
// När användaren klickar på "Ta bort"-knappen ska div-elementet
// tas bort ur DOM-trädet helt och hållet med remove().
//
removeButton.addEventListener("click", () => {
  outputDiv.remove();
  console.log("Div togs bort från DOM.");
});
