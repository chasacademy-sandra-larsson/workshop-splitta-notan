# 🔍 Kodgranskning i gruppen

Varje pull request granskas av någon annan i gruppen innan den mergas till `main`. Ni mergar aldrig er egen PR. Det är hela poängen: någon som inte satt med när koden skrevs ska ha testat den.

## 🔄 Vem granskar vem

Bestäm i gruppen innan ni börjar, t.ex. A granskar B, B granskar C, C granskar D och D granskar A. Byt gärna nästa gång så att alla har läst allas kod.

Den som öppnar PR:en lägger till sin granskare under **Reviewers** och säger till i gruppen.

## ⚠️ Regeln som gör granskningen värd något

**Ni får inte granska genom att bara läsa diffen.** Ni ska köra appen.

```bash
git fetch origin
git switch <branchen-i-PR:en>
```

Öppna sidan med Live Server och testa. En granskning som inte har kört koden är en gissning.

## 🧭 Så här granskar ni

### 1. 🎯 Testa mot ticketen, inte mot tycke

Öppna [README.md](README.md) bredvid. Varje ticket har ett **Klart när**. Det är kravet — inte hur du själv hade skrivit koden.

### 2. 🧪 Kör testerna som gäller ticketen

| Test | Hur |
|---|---|
| Ticketen | Gör det som står i **Klart när**, steg för steg. Stämmer allt? |
| Konsolen | Kör funktionen direkt i DevTools → Console, t.ex. `calculateSplit(3, 650, 10)` eller `validate({ friends: 0, total: 500, tip: 10 })`. Stämmer det mot tabellen i README? |
| Kanterna | Tomma fält, 0 vänner, 2,5 vänner, negativ dricks. Vad händer? |
| Tangentbord | Går det att fylla i och skicka med bara Tab och Enter? |
| Fel | Några röda fel i konsolen? |

Alla tester går inte att köra förrän fler tickets är mergade. Testa det som går.

### 3. 💬 Skriv kommentarerna i "Files changed"

Kommentera på **raden** det gäller, inte i ett samlat inlägg. Då ser den som ska rätta exakt var problemet sitter.

Minst **en radkommentar** per PR, och hänvisa till **Klart när** när något saknas.

Skriv så här:

> **NOTA-2:** `calculateSplit(4, 880, 10)` ger 242 kr per person men rest 1, inte 0. `880 * 1.1` blir 968.0000000000001, och `Math.ceil` gör det till 969. Se "Decimaltal i JavaScript" i README.

Och inte så här:

> Ser bra ut! Kanske kolla uträkningen?

Ser koden bra ut? Skriv vad du testade och vad du lärde dig av lösningen.

### 4. ✅ Avsluta granskningen

I "Submit review", välj ett av två:

- **Request changes** — något *Klart när* är inte uppfyllt. Skriv vad.
- **Approve** — skriv **vad du testade och hur**. Ett "Approve" utan det räknas inte.

Efter **Approve** klickar granskaren **Merge pull request**. Säg till i gruppen, så att alla kör `git pull` på `main`.

## 🤝 Att få kritik

Svara på varje kommentar. Håller du inte med, säg det och motivera — en granskare kan ha fel, och en PR är en diskussion och inte en dom.

Rätta det du håller med om, committa på samma branch och pusha. PR:en uppdateras av sig själv.
