function schreiben(KEY, WERT) {
  localStorage.setItem(KEY, WERT);
}

// Liest etwas aus dem lokalen Speicher

function lesen(KEY) {
  return localStorage.getItem(KEY);
}

// Entfernt ein KEY aus dem lokalen Speicher

function entfernen(KEY) {
  localStorage.removeItem(KEY);
}

// Macht den lokalen Speicher leer

function leer() {
  localStorage.clear();
}

function Hinzu() {
  const productName = document.getElementById("productName").value;

  const productPrice = parseFloat(
    document.getElementById("productPrice").value
  );

  const productQuantity = parseInt(
    document.getElementById("productQuantity").value
  );

  if (productName && !isNaN(productPrice) && !isNaN(productQuantity)) {
    const product = {
      name: productName,

      price: productPrice,

      quantity: productQuantity,
    };

    // Holen Sie sich die aktuelle Liste aus dem lokalen Speicher

    const productList = JSON.parse(lesen("productList")) || [];

    // Fügen Sie das neue Produkt zur Liste hinzu

    productList.push(product);

    // Speichern Sie die aktualisierte Liste im lokalen Speicher

    schreiben("productList", JSON.stringify(productList));

    // Aktualisieren Sie die Anzeige

    auflisten();
  }
}

function eintragEntfernen(index) {
  // Holen Sie sich die aktuelle Liste aus dem lokalen Speicher

  const productList = JSON.parse(lesen("productList")) || [];

  // Entfernen Sie das Produkt anhand des Index

  productList.splice(index, 1);

  // Speichern Sie die aktualisierte Liste im lokalen Speicher

  schreiben("productList", JSON.stringify(productList));

  // Aktualisieren Sie die Anzeige

  auflisten();
}

function alleProdukteEntfernen() {
  // Löschen Sie die gesamte Produktliste im lokalen Speicher

  if (confirm("Sollen alle Produkte gelöscht werden?")) leer();

  // Aktualisieren Sie die Anzeige

  auflisten();
}

function auflisten() {
  const productListDiv = document.getElementById("productList");

  const productList = JSON.parse(lesen("productList"));

  // Leeren Sie den aktuellen Inhalt des DIVs

  productListDiv.innerHTML = "";

  function auflisten1() {
    const productList = JSON.parse(lesen("productList"));

    const productNames = productList.map((product) => product.name);

    return productNames;
  }

  // Durchlaufen Sie die Produktliste und fügen Sie sie dem DIV hinzu

  productList.forEach((product, index) => {
    const productDiv = document.createElement("div");

    productDiv.innerHTML = `

                      <p><strong>Produktname:</strong> ${product.name}</p>

                      <p><strong>Preis:</strong> ${product.price}</p>

                      <p><strong>Menge:</strong> ${product.quantity}</p>

                      <button onclick="eintragEntfernen(${index})">Eintrag entfernen</button>

                  `;

    productListDiv.appendChild(productDiv);

    document.getElementById("productName").value = " ";

    document.getElementById("productPrice").value = " ";

    document.getElementById("productQuantity").value = " ";
  });
}

function auflistenInIndexHTML1() {
  const productList = JSON.parse(lesen("productList"));

  // Leeren Sie den aktuellen Inhalt des DIVs

  // Durchlaufen Sie die Produktliste und fügen Sie sie dem DIV hinzu
  if(productList!=null && productList != undefined && productList != "")
  {
    let abc = "";
    productList.forEach((product) => {
      abc += `<p>${product.name}</p>`;
    });
    //
    const ziel = document.querySelector("#div-1 ul");
    ziel.innerHTML = abc;  
  }
}

function auflistenInIndexHTML2() {
  const menge = Number(lesen("menge"));

  const kontaktList = [];

  if(menge > 0)
  {
    for(let wert = 0; wert < menge; wert++)
    {
      kontaktList.push(JSON.parse(lesen(`eintrag-${wert}`)));
    }
  }

  // Leeren Sie den aktuellen Inhalt des DIVs

  // Durchlaufen Sie die Produktliste und fügen Sie sie dem DIV hinzu
  if(kontaktList.length > 0 )
  {
    let aa = "";
    kontaktList.forEach((kontact) => {
      aa += `<p>${kontact.vorname}  <br>${kontact.nachname}  <br>${kontact.telefon} ${kontact.email} <br>${kontact.nachricht}</p>`;
    });
    //
    const ziel = document.querySelector("#div-2 ol");
    ziel.innerHTML = aa;  
  }
}