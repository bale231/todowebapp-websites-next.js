import { Shield, ChevronRight } from "lucide-react";

const sections = [
  {
    id: "introduzione",
    title: "1. Introduzione",
    content: `Benvenuto su ToDoWebApp ("noi", "nostro"). Questa Informativa sulla Privacy spiega come raccogliamo, utilizziamo, divulghiamo e proteggiamo le tue informazioni quando utilizzi la nostra applicazione web e i servizi correlati (collettivamente il "Servizio"). Accedendo o utilizzando ToDoWebApp, accetti i termini di questa Informativa. Se non sei d'accordo, ti invitiamo a interrompere l'utilizzo del Servizio.`,
  },
  {
    id: "dati-raccolti",
    title: "2. Informazioni che Raccogliamo",
    subsections: [
      {
        title: "2.1 Informazioni fornite direttamente da te",
        items: [
          "Dati di registrazione: username, indirizzo email e password (conservata in forma cifrata).",
          "Informazioni del profilo: nome visualizzato, foto profilo e bio opzionale.",
          "Dati di task e liste: titoli, descrizioni, scadenze, priorità e stato di completamento dei tuoi task.",
          "Comunicazioni: messaggi o informazioni inviati tramite il modulo di contatto.",
        ],
      },
      {
        title: "2.2 Informazioni raccolte automaticamente",
        items: [
          "Dati di log: indirizzo IP, tipo di browser, pagine visitate, timestamp e URL di provenienza.",
          "Informazioni sul dispositivo: tipo di dispositivo, sistema operativo e versione del browser.",
          "Cookie e local storage: token di sessione e dati sulle preferenze salvati localmente sul tuo dispositivo.",
          "Dati IndexedDB: dati dei task memorizzati nella cache locale del browser per il supporto offline.",
        ],
      },
    ],
  },
  {
    id: "utilizzo",
    title: "3. Come Utilizziamo le Tue Informazioni",
    items: [
      "Per creare e gestire il tuo account e autenticare le sessioni.",
      "Per fornire, mantenere e migliorare le funzionalità principali di ToDoWebApp, inclusa la gestione dei task e la collaborazione tra amici.",
      "Per inviare email transazionali come verifica dell'email, link di reset password e avvisi di notifica.",
      "Per rispondere alle tue richieste e ai messaggi di supporto.",
      "Per monitorare e analizzare i pattern di utilizzo al fine di migliorare le prestazioni e la sicurezza.",
      "Per applicare i nostri Termini di Servizio e proteggerci da attività fraudolente o abusive.",
    ],
  },
  {
    id: "condivisione",
    title: "4. Condivisione delle Informazioni",
    content: `Non vendiamo, scambiamo o affittiamo le tue informazioni personali a terze parti. Potremmo condividere le tue informazioni solo nelle seguenti circostanze limitate:`,
    items: [
      "Fornitori di servizi: terze parti che ci assistono nell'operare il Servizio (es. Firebase per autenticazione e storage, provider di hosting), vincolati da accordi di riservatezza.",
      "Obblighi legali: quando richiesto dalla legge, da normative o da un valido procedimento legale (es. citazione in giudizio o ordine del tribunale).",
      "Sicurezza: per proteggere i diritti, la proprietà o la sicurezza di ToDoWebApp, dei nostri utenti o del pubblico.",
      "Trasferimenti aziendali: in caso di fusione, acquisizione o vendita di asset, le tue informazioni potrebbero essere trasferite come parte di tale transazione.",
    ],
  },
  {
    id: "firebase",
    title: "5. Firebase e Servizi di Terze Parti",
    content: `ToDoWebApp utilizza Google Firebase per l'autenticazione degli utenti e l'archiviazione dei file. Firebase potrebbe raccogliere determinati dati tecnici come descritto nell'Informativa sulla Privacy di Google. Ti consigliamo di consultare l'Informativa di Google all'indirizzo https://policies.google.com/privacy. Utilizziamo inoltre EmailJS per elaborare le richieste inviate tramite il modulo di contatto. I messaggi inviati attraverso tale modulo vengono gestiti secondo le pratiche sulla privacy di EmailJS.`,
  },
  {
    id: "cookie",
    title: "6. Cookie e Local Storage",
    content: `Utilizziamo cookie del browser e meccanismi di local storage esclusivamente per mantenere la tua sessione autenticata e ricordare le tue preferenze (es. tema chiaro/scuro). Non utilizziamo cookie pubblicitari o di tracciamento. Puoi disabilitare i cookie tramite le impostazioni del tuo browser; tuttavia, questa operazione potrebbe influire sulle funzionalità del Servizio.`,
  },
  {
    id: "sicurezza",
    title: "7. Sicurezza dei Dati",
    content: `Adottiamo ragionevoli misure tecniche e organizzative per proteggere le tue informazioni personali da accessi non autorizzati, alterazioni, divulgazioni o distruzioni. Tali misure includono:`,
    items: [
      "Le password sono cifrate tramite algoritmi standard del settore e non vengono mai conservate in chiaro.",
      "L'autenticazione è gestita tramite JSON Web Token (JWT) con finestre di scadenza ridotte.",
      "Tutti i dati in transito sono cifrati tramite HTTPS/TLS.",
      "L'accesso ai sistemi di produzione è limitato esclusivamente al personale autorizzato.",
    ],
    footer: `Nonostante queste misure, nessun sistema di sicurezza è inviolabile. Non possiamo garantire una sicurezza assoluta e ti incoraggiamo a utilizzare una password forte e univoca per il tuo account.`,
  },
  {
    id: "conservazione",
    title: "8. Conservazione dei Dati",
    content: `Conserviamo i tuoi dati personali per tutto il tempo in cui il tuo account è attivo o necessario per fornire il Servizio. Se richiedi la cancellazione dell'account, elimineremo o anonimizzeremo i tuoi dati entro 30 giorni, salvo ove la conservazione sia richiesta per finalità legali, di conformità o di prevenzione delle frodi.`,
  },
  {
    id: "diritti",
    title: "9. I Tuoi Diritti",
    content: `A seconda della tua giurisdizione, potresti disporre dei seguenti diritti in merito ai tuoi dati personali:`,
    items: [
      "Accesso: richiedere una copia dei dati personali che conserviamo su di te.",
      "Rettifica: richiedere la correzione di dati inesatti o incompleti.",
      'Cancellazione: richiedere la cancellazione dei tuoi dati personali ("diritto all\'oblio").',
      "Portabilità: richiedere una copia leggibile dei tuoi dati.",
      "Opposizione: opporti a determinati tipi di trattamento, inclusa la profilazione.",
      "Revoca del consenso: laddove il trattamento si basi sul consenso, puoi revocarlo in qualsiasi momento.",
    ],
    footer: `Per esercitare uno qualsiasi di questi diritti, contattaci tramite la pagina Contatti. Risponderemo entro 30 giorni.`,
  },
  {
    id: "minori",
    title: "10. Privacy dei Minori",
    content: `ToDoWebApp non è destinato a bambini di età inferiore ai 13 anni. Non raccogliamo consapevolmente informazioni personali da bambini under 13. Se veniamo a sapere che un bambino under 13 ha fornito dati personali, adotteremo misure per eliminare tali informazioni tempestivamente. Se ritieni che un minore di 13 anni abbia inviato dati al Servizio, contattaci immediatamente.`,
  },
  {
    id: "modifiche",
    title: "11. Modifiche a questa Informativa",
    content: `Potremmo aggiornare questa Informativa sulla Privacy periodicamente. In caso di aggiornamento, revisioneremo la data "Ultimo aggiornamento" in cima a questa pagina. Le modifiche sostanziali saranno comunicate tramite un avviso nel Servizio o via email. Il tuo uso continuato del Servizio dopo eventuali modifiche costituisce accettazione dell'informativa aggiornata.`,
  },
  {
    id: "contatti",
    title: "12. Contattaci",
    content: `Se hai domande, dubbi o richieste riguardanti questa Informativa sulla Privacy o le nostre pratiche sui dati, contattaci tramite la pagina Contatti. Puoi anche aprire un issue sul nostro repository GitHub all'indirizzo https://github.com/bale231.`,
  },
];

const tableOfContents = sections.map((s) => ({ id: s.id, title: s.title }));

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gradient-animated min-h-screen relative">
      {/* Background orbs */}
      <div className="orb w-72 h-72 bg-blue-600 top-24 -right-20" />
      <div className="orb w-56 h-56 bg-purple-600 bottom-60 -left-16" />

      <div className="relative max-w-5xl mx-auto px-6 pt-36 pb-24">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 text-sm text-slate-300">
            <Shield className="w-4 h-4 text-green-400" />
            I tuoi dati, i tuoi diritti
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Informativa sulla{" "}
            <span className="gradient-text">Privacy</span>
          </h1>
          <p className="text-slate-400 text-sm">
            Ultimo aggiornamento: <span className="text-slate-300">Febbraio 2026</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of contents — sticky sidebar */}
          <aside className="lg:col-span-1">
            <div className="glass rounded-2xl p-5 sticky top-28">
              <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-4">
                Indice
              </p>
              <nav className="flex flex-col gap-1">
                {tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-300 py-1 transition-colors group"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-blue-400 flex-shrink-0 transition-colors" />
                    <span className="leading-snug">{item.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="glass rounded-2xl p-7 scroll-mt-28"
              >
                <h2 className="text-white font-bold text-xl mb-4">{section.title}</h2>

                {section.content && (
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {section.content}
                  </p>
                )}

                {"subsections" in section &&
                  section.subsections?.map((sub) => (
                    <div key={sub.title} className="mb-4">
                      <h3 className="text-slate-200 font-semibold text-sm mb-2">
                        {sub.title}
                      </h3>
                      <ul className="flex flex-col gap-2">
                        {sub.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-1.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                {"items" in section && section.items && (
                  <ul className="flex flex-col gap-2 mb-4">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {"footer" in section && section.footer && (
                  <p className="text-slate-400 text-sm leading-relaxed mt-2">
                    {section.footer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
