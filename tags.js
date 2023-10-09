
/*  single-Element */
function singleElementEx(tag, attr) {
  let s = "";
  // *** //
  if (attr != undefined) {
    for (let x of attr) s += ` ${x.name} = "${x.wert}" `;
  }
  // *** //
  return `<${tag} ${s} />`;
}

/*  Block-Element  mit  Attribu
      blockElementEx("div", "...", ["class", "meineklasse"]) -> Was machst du, wenn du mehrere Attribute brauchst???
      Beispiel:
      blockElementEx("div", "...", 
      [                                         --> eine Schleife (for, forEach, while, ...)
        {
            name : "class",
            wert : "meineKlasse"
        },
        {
            name : "id",
            wert : "meineId"
        },
        {
            ...
        }
      ])
  t */

/*
... = blockElementEx(
  "video",
  "Dein Browser unterstützt kein Video-Tag",
  [
    {
      name : "src",
      wert : "DATEI"
    },
    {
      name : "controls"
    },
    {
      name : "autoplay"
    }
  ]
);
*/
function blockElementEx(tag, wert, attr) {
  let s = "";
  if (attr != undefined) {
    for (let x = 0; x < attr.length; x++) {
      if (attr[x].wert == undefined) s += `${attr[x].name}  `;
      else s += `${attr[x].name} = "${attr[x].wert}"  `;
    }
  }

  return `<${tag} ${s}>${wert}</${tag}>`;
}

/*  Block-Element  mit erray und jeson
      <ul>
            <ul>...</ul> -> Lösung für TAG -> entweder Array tag[0]=ul, tag[1]=li ODER JSON -> tag.a = ul, tag.b = li
            <ul>...</ul>
            <ul>...</ul>
            <ul>...</ul>
      </ul>

      blockElementExMitArrayJSON(
        {
          a : "ol",
          b : "li"
        },
        [
          {
            vorname : "Max",
            nachname : "Mustermann"
          }
        ],
        [
          {
            name : "id",
            wert : "meineId" 
          }
        ]
      );
  */
function blockElementExMitArrayJSON(tag, wert, attr) {
  let s = "";
  // *** //
  for (let x = 0; x < wert.length; x++) {
    //     <...>                                          </...>
    s += `<${tag.b}>${wert[x].vorname} ${wert[x].nachname}</${tag.b}>`;
  }
  // *** //
  let t = "";
  // *** //
  if (attr != undefined) {
    for (let n = 0; n < attr.length; n++)
      t += ` ${attr[n].name} = "${attr[n].wert}" `;
  }
  // ***   <ul>                                     <ul>//
  return `<${tag.a} ${t}>${s}</${tag.a}>`;
}
