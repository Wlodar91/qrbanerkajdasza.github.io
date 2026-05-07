# QR do oferty Otodom z możliwością podmiany linku

Ten projekt służy do stworzenia stałego kodu QR, który prowadzi najpierw na Twoją stronę pośrednią, a ta automatycznie przekierowuje użytkownika do aktualnej oferty Otodom.

Dzięki temu po wydrukowaniu QR nie musisz generować nowego kodu, gdy zmieni się link do ogłoszenia. Wystarczy podmienić link w jednym pliku.

---

## Jak działa projekt

Schemat:

```text
QR → Twoja strona na hostingu → aktualny link Otodom
```

Przykład:

```text
QR → https://twoja-strona.netlify.app → https://www.otodom.pl/pl/oferta/...
```

---

## Najważniejsze pliki

```text
index.html              Strona pośrednia z automatycznym przekierowaniem
config.js               Plik, w którym podmieniasz link do oferty Otodom
qr-generator/index.html Generator QR w przeglądarce
```

---

## Krok 1: Podmień link do oferty Otodom

Otwórz plik:

```text
config.js
```

Znajdź linię:

```js
targetUrl: "https://www.otodom.pl/pl/oferta/TUTAJ-WKLEJ-LINK-DO-OFERTY",
```

Wklej swój aktualny link do oferty Otodom, np.:

```js
targetUrl: "https://www.otodom.pl/pl/oferta/mieszkanie-83m2-z-tarasem-ID123456.html",
```

Zapisz plik.

To jest najważniejsza część konfiguracji.

---

## Krok 2: Wrzuć projekt na hosting

Możesz użyć dowolnego hostingu statycznego, np.:

- Netlify
- Vercel
- GitHub Pages
- zwykły hosting z panelem FTP

Na hosting wrzuć zawartość folderu projektu, czyli minimum:

```text
index.html
config.js
```

Folder `qr-generator` nie musi być publicznie dostępny. Możesz go trzymać lokalnie na komputerze tylko do generowania QR.

---

## Krok 3: Sprawdź link strony pośredniej

Po wrzuceniu projektu hosting da Ci adres, np.:

```text
https://twoja-oferta.netlify.app
```

Wejdź w ten adres w przeglądarce.

Powinno nastąpić automatyczne przekierowanie do oferty Otodom.

---

## Krok 4: Wygeneruj QR

Otwórz lokalnie plik:

```text
qr-generator/index.html
```

Najprościej: kliknij go dwa razy i otwórz w przeglądarce.

W polu „Link do zakodowania w QR” wpisz link do strony pośredniej, np.:

```text
https://twoja-oferta.netlify.app
```

Nie wpisuj tam linku Otodom.

W QR ma być zapisany link do Twojej strony pośredniej, bo to ona pozwoli później podmieniać ofertę.

Kliknij:

```text
Generuj QR
```

Następnie pobierz plik PNG lub SVG.

---

## Krok 5: Co zrobić, gdy link Otodom się zmieni

Gdy ogłoszenie zostanie wystawione ponownie i dostanie nowy link:

1. Otwórz plik `config.js`.
2. Podmień wartość `targetUrl` na nowy link Otodom.
3. Wrzuć zaktualizowany plik `config.js` na hosting.
4. QR zostaje taki sam.

Nie trzeba drukować nowych materiałów.

---

## Ustawienia dodatkowe w config.js

### `delayMs`

```js
delayMs: 0
```

Oznacza natychmiastowe przekierowanie.

Jeśli chcesz, żeby użytkownik przez chwilę widział ekran pośredni, możesz ustawić np.:

```js
delayMs: 1000
```

To oznacza 1 sekundę opóźnienia.

### `useReplace`

Zalecane ustawienie:

```js
useReplace: false
```

Dzięki temu przycisk „wstecz” w telefonie działa bardziej naturalnie.

---

## Ważne

Kod QR generuj tylko raz, dopiero po tym, jak znasz finalny adres strony pośredniej na hostingu.

Do QR wpisuj adres swojej strony pośredniej, nie adres Otodom.
