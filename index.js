/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

let marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
  }
  
  let paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
  }
  
  let amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
  }
  
  let prices = [134, 4, 2]
  let shippingCost = 50
  let utenteCheEffettuaLAcquisto = marco //cambia il valore qui per provare se il tuo algoritmo funziona!
  let ambassadors = [];
  let totalPrices = (prices[0]+prices[1]+prices[2]);

  if (utenteCheEffettuaLAcquisto.isAmbassador=true&&ambassadors.push(utenteCheEffettuaLAcquisto)){
    console.log( "" + ambassadors[0].name + ambassadors[0].lastName + "è un ambassador!")
  } else if (utenteCheEffettuaLAcquisto.isAmbassador=false&& ambassadors.push(utenteCheEffettuaLAcquisto)) {
    console.log( "" + ambassadors[0].name + ambassadors[0].lastName + "non è un ambassador!")
  }
  if (utenteCheEffettuaLAcquisto.isAmbassador=true&&totalPrices<100) {
    console.log ("Il carrello di" + ambassadors[0].name+ ambassadors[0].lastName + "è di $" + ((totalPrices*0.7)+shippingCost));
  } else if (utenteCheEffettuaLAcquisto.isAmbassador=false&&totalPrices<100){
    console.log ("Il carrello di" + ambassadors[0].name+ ambassadors[0].lastName + "è di $" +totalPrices+shippingCost);
  } else if (utenteCheEffettuaLAcquisto.isAmbassador=true&&totalPrices>100){
    console.log ("Il carrello di" + ambassadors[0].name+ ambassadors[0].lastName + "è di $" +totalPrices*0.7);
  } else if (utenteCheEffettuaLAcquisto.isAmbassador=false&&totalPrices>100){
    console.log ("Il carrello di" + ambassadors[0].name+ ambassadors[0].lastName + "è di $" +totalPrices);
  }
       

  