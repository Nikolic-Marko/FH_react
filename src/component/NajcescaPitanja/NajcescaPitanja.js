import React from 'react'
import './NajcescaPitanja.css'

const NajcescaPitanja = () => {
  return (
    <section id="najcesca-pitanja">
      <h1 className="najcesca-pitanja-naslov">NAJČEŠĆA PITANJA</h1>

      <div className="najcesca-pitanja-container">
        <div className="najcesca-pitanja-row">
          <div className="najcesce-pitanje" id="pitanje1">
            <div className="pitanje-link">
              <div className="pitanje-tekst">Šta je ono što bodujemo u procesu selekcije za učešće na takmičenju?</div>
              <div className="krug-zatvoreno-pitanje"></div>
              <div className="krug-otvoreno-pitanje"></div>
            </div>
            <div className="odgovor" id="dugacakOdgovor">
              <p>
                Selekciju čine dva dela, najpre sama prijava, a zatim test znanja. U prijavi želimo da nam, na vama svojstven način, pokažete motivaciju da učestvujete na ovogodišnjem takmičenju. Pored dobre energije, potrebno je da svi članovi tima prilože i CV koji nam pomaže da bolje sagledamo vaše znanje, iskustvo i veštine kada je programiranje u pitanju. Test znanja se radi od kuće, timski, na Moodle-u. Pitanja obuhvataju različite sfere informatike, poznavanje aktuelnih tehnologija, ali i značajnih ličnosti i događaja u IT svetu. Rangiranje je zbirno, a veći udeo u ukupnim poenima ima test.
              </p>
            </div>
          </div>

          <div className="najcesce-pitanje" id="pitanje2">
            <div className="pitanje-link">
              <div className="pitanje-tekst">
                Šta je tema FON Hakatona?
              </div>
              <div className="krug-zatvoreno-pitanje"></div>
              <div className="krug-otvoreno-pitanje"></div>
            </div>
            <div className="odgovor" id="kratakOdgovor">
              <p>
                Tema se otkriva na brifingu, odmah posle otvaranja Hakatona. Do tada je tajna.
              </p>
            </div>
          </div>

          <div className="najcesce-pitanje" id="pitanje3">
            <div className="pitanje-link">
              <div className="pitanje-tekst">
                Ko ima pravo učešća na FON Hakatonu?
              </div>
              <div className="krug-zatvoreno-pitanje"></div>
              <div className="krug-otvoreno-pitanje"></div>
            </div>
            <div className="odgovor">
              <p>
                Za učešće na Hakatonu se mogu prijaviti svi stariji od 16 i mlađi od 26 godina iz Srbije i sveta, bez obzira na državljanstvo ili nivo formalnog obrazovanja, ili studenti, uz izuzetke koji se nalaze u „Pravilniku”.
              </p>
            </div>
          </div>

          <div className="najcesce-pitanje" id="pitanje4">
            <div className="pitanje-link">
              <div className="pitanje-tekst">
                Da li mogu individualno da se prijavim?
              </div>
              <div className="krug-zatvoreno-pitanje"></div>
              <div className="krug-otvoreno-pitanje"></div>
            </div>
            <div className="odgovor" id="kratakOdgovor">
              <p>
                Nije moguće. Prijave se vrše isključivo timski, a jedan tim može imati 3 ili 4 člana.
              </p>
            </div>
          </div>

          <div className="najcesce-pitanje" id="pitanje5">
            <div className="pitanje-link">
              <div className="pitanje-tekst">
                Koliko vremena je na raspolaganju za rad?
              </div>
              <div className="krug-zatvoreno-pitanje"></div>
              <div className="krug-otvoreno-pitanje"></div>
            </div>
            <div className="odgovor" id="kratakOdgovor">
              <p>
                Timovi imaju 48 časova za izradu softverskog rešenja.
              </p>
            </div>
          </div>

          <div className="najcesce-pitanje" id="pitanje6">
            <div className="pitanje-link">
              <div className="pitanje-tekst">
                Da li postoji mentorska podrška tokom takmičenja?
              </div>
              <div className="krug-zatvoreno-pitanje"></div>
              <div className="krug-otvoreno-pitanje"></div>
            </div>
            <div className="odgovor">
              <p>
                Da. Tokom razvoja rešenja na Hakatonu, u određenim terminima, takmičari će imati mogućnost konsultovanja sa mentorima koje će činiti stručnjaci sa Fakulteta organizacionih nauka i alumni članovi FONIS-a.
               </p>
            </div>
          </div>

          <div className="najcesce-pitanje" id="pitanje7">
            <div className="pitanje-link">
              <div className="pitanje-tekst">
                Koje tehnologije su prihvatljive za izradu rešenja?
               </div>
              <div className="krug-zatvoreno-pitanje"></div>
              <div className="krug-otvoreno-pitanje"></div>
            </div>
            <div className="odgovor" id="kratakOdgovor">
              <p>
                Takmičari mogu koristiti tehnologije po svom izboru.
               </p>
            </div>
          </div>

          <div className="najcesce-pitanje" id="pitanje8">
            <div className="pitanje-link">
              <div className="pitanje-tekst">
                Kako će izgledati online održavanje takmičenja?
              </div>
              <div className="krug-zatvoreno-pitanje"></div>
              <div className="krug-otvoreno-pitanje"></div>
            </div>
            <div className="odgovor">
              <p>
                Svi delovi projekta su u online formatu. Timovi će biti blagovremeno obavešteni o načinu za pristup platformi na kojoj će se projekat održati. Za detaljnije informacije o načinu održavanja projekta posetite deo sajta „Pravilnik”.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NajcescaPitanja
