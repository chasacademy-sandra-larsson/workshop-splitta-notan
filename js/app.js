// =============================================
// Splitta notan – startfil
// Fyll i funktionerna nedan steg för steg.
// Läs README.md för tickets och tips.
// =============================================


// ---------- 1. Element i DOM:en ----------
// Formuläret och fälten
const billForm = document.querySelector('#bill-form');
const friendsInput = document.querySelector('#friends');
const totalInput = document.querySelector('#total');
const tipInput = document.querySelector('#tip');
const errorText = document.querySelector('#error');

// Resultatvyn
const resultSection = document.querySelector('#result');
const perPersonText = document.querySelector('#per-person');

// Används i extrauppgifterna
const charityBox = document.querySelector('#charity');
const restText = document.querySelector('#rest');
const btnReset = document.querySelector('#btn-reset');


// ---------- 2. Funktioner ----------

// NOTA-1: Läser av formuläret och returnerar värdena som TAL
function getFormValues() {
  // TODO: Hämta .value från friendsInput, totalInput och tipInput
  // TODO: Gör om varje värde från sträng till tal
  // TODO: Returnera ett objekt: { friends, total, tip }
}

// NOTA-2: Räknar ut vad varje person ska betala
// Exempel: calculateSplit(4, 880, 10) ska ge { perPerson: 242, rest: 0 }
function calculateSplit(friends, total, tip) {
  // TODO: Räkna ut totalen inklusive dricks (tip är i procent).
  //       Skriv total * (100 + tip) / 100, inte total * 1.1 (se README, "Bra att veta")
  //       Avrunda uppåt till hela kronor med Math.ceil()
  // TODO: Dela på antal vänner och avrunda NEDÅT med Math.floor() -> perPerson
  // TODO: Räkna ut det som blir över -> rest
  // TODO: Returnera ett objekt: { perPerson, rest }
}

// NOTA-3: Visar resultatet och döljer formuläret
// Testa i konsolen: showResult(242)
function showResult(perPerson) {
  // TODO: Skriv in perPerson i perPersonText
  // TODO: Dölj formuläret och visa resultSection (egenskapen .hidden)
}

// NOTA-4: Kontrollerar värdena. Returnerar true om allt är ok, annars false
// Testa i konsolen: validate({ friends: 0, total: 500, tip: 10 })
function validate(values) {
  // TODO: Är friends minst 1 och ett heltal?
  // TODO: Är total större än 0?
  // TODO: Är tip 0 eller mer?
  // TODO: Om något är fel: skriv ett felmeddelande i errorText och returnera false
  // TODO: Om allt är rätt: töm errorText och returnera true
}

// NOTA-1: Körs när formuläret skickas
function handleSubmit(event) {
  // TODO: Stoppa sidan från att laddas om

  const values = getFormValues();
  console.log(values); // Ta bort när NOTA-1 är klar

  // Avkommentera raderna nedan när NOTA-2, NOTA-3 och NOTA-4 är mergade
  // if (!validate(values)) return;
  // const result = calculateSplit(values.friends, values.total, values.tip);
  // showResult(result.perPerson);
}


// ---------- 3. Händelser ----------
billForm.addEventListener('submit', handleSubmit);
