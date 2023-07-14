## Credential

```bash
username: "user"
password: "pass"
```

## AVANZATO

_CSR - Client Side Rendering_

- L’esercizio prevede l’utilizzo dello useEffect e il render avverrà lato client direttamente dal browser.
- Il cliente deve attendere il render della pagina che non sarà lato server ma, appunto, lato client in seguito al caricamento da parte del browser dell’applicazione.
- Il caricamento iniziale dell’applicazione durerà di più rispetto a quello in SSR.
- Durante l’analisi per l’indicizzazione dell’applicazione non viene trovato nulla, quindi non è un aspetto positivo.

_SSR - Server Side Rendering_

- Le pagine dell’applicazione verranno caricate e renderizzate direttamente lato server prima di arrivare al browser dell’utente.
- L’utente finale ha come risultato la visualizzazione della pagina in modo immediato, si tronca l’attesa per il cliente.
- Priorità per l’analisi dell’indicizzazione e positivo, quindi, per la SEO.
