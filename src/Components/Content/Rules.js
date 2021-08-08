import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

const Rules = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant={"h4"} gutterBottom>
          Regulamin
        </Typography>
      </Box>
      <Box>
        <Typography component="div">
          <ol>
            <li>
              Gramy w Go na zasadach Japońskich, komi 6.5, nigiri na serwerze
              KGS w Polskim Pokoju lub ewentualnie w pokoju Polish Go Players na
              OGS.
            </li>
            <li>
              Gracze są świadomi ducha sportowej rywalizacji znajdującego się w
              tej lidze i szanują innych i siebie.
            </li>
            <li>Każdy gracz gra sam, bez dodatkowych pomocy.</li>
            <li>
              Jeśli gracze nie ustalą inaczej, gry odbywają się w terminie
              domyślnym.
            </li>
            <li>
              Za zgodą obu graczy można zagrać na OGS. Należy to zaznaczyć w
              arkuszu oraz wkleić link do gry.
            </li>
            <li>
              Jeśli obaj gracze się zgodzą, można zmienić termin gry. Gracz,
              który chciałby zmienić termin, informuje o tym drugiego gracza co
              najmniej trzy dni przed domyślnym terminem gry przez e-mail.
              <ul>
                <li>
                  Gracz, który nie zaproponuje nowego terminu i nie stawi się w
                  terminie domyślnym, przegrywa grę.
                </li>
                <li>
                  Nowy termin należy wpisać w skoroszyt przed rundą domyślną.
                </li>
                <li>
                  Kopię rozmowy między graczami w sprawie zmiany terminu należy
                  przesłać administratorowi ligi na adres e-mail.
                </li>
              </ul>
            </li>
            <li>
              Po 30 minutowym spóźnieniu, gracz spóźniony przegrywa walkowerem.
            </li>
            <li>
              Wynik gier zgłaszamy do{" "}
              <Link
                href={
                  "https://docs.google.com/spreadsheets/d/1Be7XNZ9BaCTK_uxmuyh32yrcYhMbHDT9YaWBCz8tW94/edit"
                }
              >
                ligowego excela
              </Link>
              . Wynik zgłasza gracz, który wygrał
            </li>
            <li>
              Nowo zapisany gracz, zaczyna w grupie z graczami o podobnej sile.
            </li>
            <li>
              Na początku gry należy zaznaczyć, że jest do gra do ligi IGLO
              (napisać IGLO w czacie gry).
            </li>
            <li>
              Regulamin jest minimalistyczny, więc w razie wszelkich niejasności
              pierwszeństwo przed regulaminem ma decyzja Administratora Ligi.
            </li>
          </ol>
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant={"h5"} gutterBottom>
          Zasady szczegółowe grup
        </Typography>
      </Box>
      <Box>
        <Typography component="div">
          <ol>
            <li>
              Grupa składa się z n graczy i jak wiadomo koniecznie
              dwuargumentowe działanie wewnętrzne ;).
              <ul>
                <li>
                  Kształt grupy (ilośc osób) ustalany jest na początku sezonu i
                  może się zmienić
                </li>
                <li>
                  Grupa może rozgrywana na zasadach:
                  <ul>
                    <li>Ligi</li>
                    <li>Pucharu</li>
                    <li>Turnieju na zasadach szwajcarskich lub McMahon</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Standardowo wszystkie grupy to k osobowe Ligi z ostatnią grupą
              grającą turniej na zasadach szwajcarskich
            </li>
            <li>
              Czas gry
              <ul>
                <li>
                  Czas gry może się różnić dla każdej grupy i jest zapisany
                  bezpośrednio w arkuszu danej grupy
                </li>
                <li>
                  Standardowo minimalny czas gry to 30min i 3x30s japońskiego
                  niedoczasu
                </li>
                <li>
                  Standardowo zalecany czas gry to 40min i 3x30s japońskiego
                  niedoczasu
                </li>
                <li>
                  Za zgodą obu graczy można zmienić zasady czasu podstawowego i
                  dotatkowego jak i jego ilość.
                </li>
              </ul>
            </li>
            <li>
              Breakery:
              <ul>
                <li>
                  Dla Ligi:
                  <ul>
                    <li>Ilość zwycięstw</li>
                    <li>SODOS</li>
                    <li>DC</li>
                    <li>Pozycja startowa</li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  Dla Turnieju McMahon/Szwajcar:
                  <ul>
                    <li>ScoreX</li>
                    <li>SOS</li>
                    <li>SOSOS</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Spadki i awanse
              <ul>
                <li>
                  Dwie osoby z górnych miejsc w grupie awansują do grupy wyżej
                </li>
                <li>
                  Dwie osoby z ostatnich miejsc w grupie spadają do grupy niżej
                </li>
                <li>
                  Awans i spadek nie są gwarantowane. Na przykład zasady grup
                  mogą się zmienić między sezonami (ilośćgraczy w grupie). Mogą
                  zapisać lub zrezygnować gracze, róźnie to wychodzi :).
                </li>
              </ul>
            </li>
          </ol>
        </Typography>
      </Box>
    </>
  );
};

export default Rules;
