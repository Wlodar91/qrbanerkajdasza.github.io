// =============================================
// KONFIGURACJA PRZEKIEROWANIA
// =============================================
// Tutaj podmień link na aktualną ofertę Otodom.
// To jest jedyne miejsce, które zwykle trzeba zmienić.

window.REDIRECT_CONFIG = {
  targetUrl: "https://www.otodom.pl/pl/oferta/TUTAJ-WKLEJ-LINK-DO-OFERTY",

  // Zalecane: false
  // false = użytkownik może użyć przycisku „wstecz” i wrócić z Otodom
  // true  = zastępuje stronę pośrednią w historii przeglądarki
  useReplace: false,

  // Opóźnienie w milisekundach.
  // 0 = natychmiastowe przekierowanie.
  delayMs: 0
};
