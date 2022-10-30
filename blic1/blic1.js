// Funkcija uzima Array Object-a. Vraća listu u kojoj se nalaze samo Object-i s jednim ključem.
// Ispis : [ { '1': 'A' }, { '1': 'C', '2': 'A' }, { '2': 'C' } ] -> [ { '1': 'A' }, { '2': 'C' } ]

function func1(x) {
  console.log(x);
  let lista = [];
  for (let i of x) {
    if (Object.keys(i).length === 1) {
      lista.push(i);
    }
  }
  return console.log(lista);
}

var polje = [{ 1: "A" }, { 1: "C", 2: "C" }, { 2: "C" }];
func1(polje);

// Napišite funkciju koja za parametar uzima String, te vraća točno drugu polovicu danog stringa. (Zaokrožite na nižu, u slučaju floata)
// Ispis : "Javascript i nije tolko los" -> "nije tolko los"
function func2(x) {
  console.log(x);
  var pola = parseInt(x.length / 2);
  console.log(pola);
  var rez = x.slice(pola);
  console.log(rez);
}
let string = "Javascript i nije toliko los";
func2(string);
// Funkcija uzima Array brojeva i stringova. Vraća sortirani Array u kojemu brojevi dolaze na pocetku, a stringovi na kraju, po veličini.
// Ispis : [321,63,"Mermelada",4,"Kruh",1,1234,"Tanjur",50] -> [ 1, 4, 50, 63, 321, 1234, 'Kruh', 'Tanjur', 'Mermelada' ]

function func3(d) {
  let brojevi = [];
  let stringovi = [];
  console.log(d);

  for (let i of d) {
    if (typeof i === "number") {
      brojevi.push(i);
    } else {
      stringovi.push(i);
    }
  }
  brojevi = brojevi.sort(function (a, b) {
    a - b;
  });
  console.log(brojevi);
  stringovi = stringovi.sort(function (a, b) {
    a.length - b.length;
  });
  console.log(stringovi);
  let rezultat = brojevi.concat(stringovi);

  return rezultat;
}
// let unos = [321, 63, "Mermelada", 4, "Kruh", 1, 1234, "Tanjur", 50];
console.log(func3([321, 63, "Mermelada", 4, "Kruh", 1, 1234, "Tanjur", 50]));

// // Funkcija uzima Object. Ako je vrijednost Array zbroji sve brojeve, izbaci ih iz Array-a, te zbroj,
// ako je paran broj, korjenuje i zaokruzi na dvije decimale i spremi u Array. (Mora biti float)
// // Ispis : { '1': [ 143, 'A', 21 ], '2': 'B', '3': [ 12, 11, 'C' ] } -> { '1': [ 'A', 12.81 ], '2': 'B', '3': [ 'C' ] }

function func4(x) {
  console.log(x);

  for (let i in x) {
    if (Array.isArray(x[i])) {
      var temp = [];
      var sum = 0;
      for (let j of x[i]) {
        if (typeof j === "number") {
          sum += j;
        } else {
          temp.push(j);
        }
      }
      if (sum % 2 == 0) {
        sum = sum ** (0.5).toFixed(2);
        console.log(sum);
        temp.push(sum);
      }
      x[i] = temp;
    }
  }
  return x;
}
console.log(func4({ 1: [143, "C", 21], 2: "B", 3: [12, 11, "C"] }));
