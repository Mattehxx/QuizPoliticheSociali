// Funzione per randomizzare la posizione della risposta corretta
export function randomizeAnswers(questions) {
    questions.forEach(q => {
        const correctAnswer = q.answers[q.correct];
        const otherAnswers = q.answers.filter((_, i) => i !== q.correct);
        const newIndex = Math.floor(Math.random() * q.answers.length);
        const shuffledAnswers = [...otherAnswers];
        shuffledAnswers.splice(newIndex, 0, correctAnswer);
        q.answers = shuffledAnswers;
        q.correct = newIndex;
    });
}

// Sezioni del quiz: ogni sezione ha un titolo e un array di domande

var quizSections = [
// Esporta per browser e randomizza risposte all'avvio
    {
        title: "Lezione 1, 2, 3",
        questions: [
            {
                text: "Qual è la caratteristica distintiva principale delle 'politiche sociali' rispetto alle 'politiche pubbliche' in generale?",
                answers: [
                    "Si occupano esclusivamente di problemi economici di rilevanza collettiva.",
                    "Sono definite e approvate solo da istituzioni non democratiche.",
                    "Hanno natura sociale e riguardano il benessere dei cittadini.",
                    "Si concentrano unicamente sulla risoluzione di problemi sanitari urgenti.",
                    "Sono sempre finanziate tramite contribuzione obbligatoria dei lavoratori."
                ],
                correct: 2
            },
            {
                text: "Secondo la definizione di Ferrera, il 'welfare state' si configura come un insieme di politiche pubbliche connesse a quale processo storico?",
                answers: [
                    "La deindustrializzazione e la globalizzazione.",
                    "Il processo di modernizzazione, in particolare industrializzazione e urbanizzazione.",
                    "La transizione verso la società post-industriale e la terziarizzazione.",
                    "La crisi petrolifera degli anni '70 e il contenimento delle risorse.",
                    "Lo sviluppo del settore terziario avanzato e l'economia della conoscenza."
                ],
                correct: 1
            },
            {
                text: "Quali sono le tre forme principali di protezione fornite dal welfare state, secondo la definizione di Ferrera?",
                answers: [
                    "Educazione, ricerca e sviluppo tecnologico.",
                    "Assistenza, assicurazione e sicurezza sociale.",
                    "Occupazione, previdenza e sanità.",
                    "Carità, beneficenza e filantropia.",
                    "Redistribuzione, distribuzione e sottrazione."
                ],
                correct: 1
            },
            {
                text: "Nel contesto del welfare, quale delle seguenti affermazioni descrive correttamente la 'copertura' dell'assistenza sociale?",
                answers: [
                    "È universale e si basa sulla cittadinanza/residenza.",
                    "È occupazionale e dipende dalla posizione nel mercato del lavoro.",
                    "È universale, ma selettiva, con logica sia reattiva che preventiva.",
                    "È limitata a specifiche categorie professionali con alta contribuzione.",
                    "È destinata solo a chi ha una storia contributiva molto lunga."
                ],
                correct: 2
            },
            {
                text: "Per accedere alle prestazioni di 'assicurazione sociale', quale condizione è tipicamente richiesta?",
                answers: [
                    "Lo stato di bisogno accertato e l'assenza di mezzi propri.",
                    "La cittadinanza o la residenza nel paese.",
                    "Una storia contributiva precedente e/o di anzianità assicurativa.",
                    "L'appartenenza a una specifica categoria professionale non a rischio.",
                    "La dimostrazione di un impegno attivo nella ricerca di lavoro."
                ],
                correct: 2
            },
            {
                text: "Come avviene il finanziamento della 'sicurezza sociale'?",
                answers: [
                    "Tramite contributi sociali obbligatori trattenuti sulla retribuzione.",
                    "Esclusivamente attraverso il gettito fiscale, senza legame diretto con il beneficio individuale.",
                    "Prevalentemente tramite donazioni e fondi caritatevoli.",
                    "Attraverso una combinazione di tassazione e contributi volontari.",
                    "Dipende dalla situazione di bisogno del beneficiario."
                ],
                correct: 1
            },
            {
                text: "Quale delle seguenti affermazioni è vera riguardo alle prestazioni di 'sicurezza sociale'?",
                answers: [
                    "Sono collegate alla situazione di bisogno e variano di importo.",
                    "Sono contributive/retributive e dipendono dai contributi versati.",
                    "Sono omogenee/a somma fissa e corrispondono a un 'minimo nazionale'.",
                    "Sono erogate solo a chi ha una posizione occupazionale stabile.",
                    "Sono sempre gestite da enti tripartiti (Stato e parti sociali)."
                ],
                correct: 2
            },
            {
                text: "La fase di 'Instaurazione' dello stato sociale (1880-1920) è caratterizzata principalmente da quale innovazione?",
                answers: [
                    "L'introduzione di schemi di reddito minimo garantito per tutti i cittadini.",
                    "L'espansione dei servizi all'infanzia e dei congedi parentali.",
                    "L'introduzione dell'assicurazione obbligatoria dei lavoratori.",
                    "Il consolidamento del welfare a sostegno dei totalitarismi.",
                    "La riorganizzazione degli apparati statali in senso manageriale."
                ],
                correct: 2
            },
            {
                text: "Prima della fase genetica (fine '800), come venivano gestite le prestazioni per la povertà?",
                answers: [
                    "Erano standardizzate e basate su diritti individuali.",
                    "Erano imparziali e automatiche su tutto il territorio nazionale.",
                    "Si trattava di interventi occasionali, residuali e discrezionali, spesso di natura caritatevole.",
                    "Erano finanziate da un sistema fiscale generale e universale.",
                    "Erano gestite da enti assicurativi obbligatori per i lavoratori."
                ],
                correct: 2
            },
            {
                text: "Quale implicazione deriva dalla natura obbligatoria dell'assicurazione sociale?",
                answers: [
                    "La possibilità di escludere categorie svantaggiate di assicurati.",
                    "La riduzione della redistribuzione orizzontale e verticale.",
                    "La garanzia di condizioni speciali per categorie svantaggiate e la copertura di rischi difficili.",
                    "L'aumento dei costi per il singolo assicurato a causa dell'obbligo.",
                    "La trasformazione dei contributi in premi assicurativi individuali."
                ],
                correct: 2
            },
            {
                text: "Secondo Alber, quali sono i 'fattori cornice' che spiegano lo sviluppo del welfare state in Europa tra il 1880 e il 1915?",
                answers: [
                    "La stabilità politica e l'assenza di conflitti sociali.",
                    "La rivoluzione industriale, il rapido decollo industriale e la razionalizzazione degli apparati statali.",
                    "La democratizzazione del suffragio e la nascita dei partiti operai.",
                    "L'espansione coloniale e l'accumulo di ricchezze da parte degli imperi.",
                    "La diffusione di ideologie socialiste e comuniste in tutta Europa."
                ],
                correct: 1
            },
            {
                text: "Nei 'regimi monarchico-autoritari' (es. Germania di Bismarck), l'assicurazione obbligatoria venne introdotta con quale finalità principale?",
                answers: [
                    "Per promuovere la piena occupazione e la mobilità sociale.",
                    "Per incentivare la partecipazione politica dei lavoratori e il decentramento.",
                    "Come concessione dall'alto per il controllo sociale e l'auto-legittimazione del potere.",
                    "Per rispondere alle pressioni dei partiti operai e dei sindacati.",
                    "Per finanziare nuove infrastrutture e lo sviluppo economico."
                ],
                correct: 2
            },
            {
                text: "Quale fu la principale differenza nell'introduzione dell'assicurazione obbligatoria tra i 'regimi monarchico-autoritari' e i 'regimi parlamentari'?",
                answers: [
                    "Nei primi fu introdotta dopo la democratizzazione del suffragio, nei secondi prima.",
                    "Nei primi fu una concessione dall'alto, nei secondi dovette aspettare la forza politica dei partiti operai.",
                    "Nei primi il finanziamento era fiscale, nei secondi contributivo.",
                    "Nei primi la copertura era universale, nei secondi occupazionale.",
                    "Nei primi si puntava alla redistribuzione verticale, nei secondi a quella orizzontale."
                ],
                correct: 1
            },
            {
                text: "La fase di 'Consolidamento' del welfare (1920-1945) è caratterizzata da quale tendenza principale?",
                answers: [
                    "La completa liberalizzazione dei servizi sociali.",
                    "La marginalizzazione del ruolo dello Stato nel welfare.",
                    "Il miglioramento delle prestazioni e l'estensione della copertura dal capofamiglia ai familiari.",
                    "L'introduzione di schemi di reddito minimo universali.",
                    "La riduzione della spesa per la difesa a favore del welfare."
                ],
                correct: 2
            },
            {
                text: "Il periodo di 'Espansione' del welfare (1945-1975), definito 'trentennio glorioso', vide quale significativo ampliamento della copertura?",
                answers: [
                    "L'esclusione dei lavoratori autonomi dalla tutela sociale.",
                    "Il passaggio dall'assicurazione dei lavoratori all'assicurazione sociale, tutelando anche il lavoro autonomo.",
                    "La riduzione della copertura per malattia, invalidità e vecchiaia.",
                    "Il ritorno a prestazioni ad hoc e discrezionali.",
                    "La privatizzazione di tutti i servizi sanitari e pensionistici."
                ],
                correct: 1
            },
            {
                text: "Quali sono i tre fattori principali che spiegano la grande espansione del welfare tra il 1945 e il 1975?",
                answers: [
                    "Crisi petrolifera, instabilità economica e riduzione del consenso.",
                    "Condizioni di pace, crescita economica sostenuta e stabilità economica con consenso diffuso.",
                    "Aumento delle disuguaglianze, maggiore povertà ed esclusione sociale.",
                    "Declino demografico, invecchiamento della popolazione e nuove migrazioni.",
                    "Internazionalizzazione economica, globalizzazione e integrazione europea."
                ],
                correct: 1
            },
            {
                text: "Quale modello di welfare si consolidò in Europa continentale (e in Italia) nella fase di espansione (1945-1975)?",
                answers: [
                    "Il modello anglosassone, imperniato su principi egualitari e finanziato fiscalmente.",
                    "Il modello scandinavo, con universalismo e servizi quasi gratuiti.",
                    "Il modello occupazionale, tendente a frammentare le prestazioni in base alla condizione lavorativa.",
                    "Un modello ibrido che combinava universalismo e residualismo.",
                    "Un sistema basato esclusivamente sulla sicurezza sociale per tutti i cittadini."
                ],
                correct: 2
            },
            {
                text: "Il 'modello italiano' di welfare è caratterizzato da quale peculiarità principale?",
                answers: [
                    "Un universalismo spiccato e una generosità omogenea per tutti i cittadini.",
                    "Un particolarismo accentuato, con enorme differenziazione tra categorie lavorative e un sistema dualistico.",
                    "Un'elevata spesa pubblica ben funzionalizzata per tutti i bisogni sociali.",
                    "Una forte enfasi sulla prevenzione e sui servizi, piuttosto che sui trasferimenti monetari.",
                    "Una bassa spesa sociale e un'alta simmetricità nei tassi di occupazione tra i generi."
                ],
                correct: 1
            },
            {
                text: "A partire dagli anni '50, la politica sociale ha acquisito una natura essenzialmente 'distributiva'. Qual è la conseguenza principale di questa deriva?",
                answers: [
                    "È più trasparente chi paga e meno chi riceve i benefici.",
                    "Si sa chi e quanto riceve, ma non si sa più chi paga, generando asimmetria tra benefici e costi.",
                    "Si rafforza la redistribuzione esplicita di risorse tra gruppi sociali.",
                    "Aumentano i conflitti tra gli attori sociali per l'allocazione delle risorse.",
                    "La spesa sociale diventa più contenuta e sostenibile nel lungo periodo."
                ],
                correct: 1
            },
            {
                text: "La 'spirale espansiva' del welfare, sul lato della domanda, è alimentata da quale dinamica?",
                answers: [
                    "La riduzione delle richieste di prestazioni da parte dei cittadini.",
                    "L'istituzionalizzazione delle concessioni che crea precedenti e alimenta nuove richieste.",
                    "La diminuzione dei costi per il singolo assicurato.",
                    "La concentrazione dei benefici su pochi gruppi sociali.",
                    "L'adozione di procedure tecniche finanziarie per nascondere i costi."
                ],
                correct: 1
            },
            {
                text: "Quale conseguenza ha avuto la 'spirale espansiva' per il welfare state italiano, come evidenziato nel testo?",
                answers: [
                    "Alta coesione sociale e aumento della partecipazione dei destinatari.",
                    "Bassa evasione fiscale e distribuzione meritocratica delle prestazioni.",
                    "Alta evasione fiscale, distribuzione clientelare di prestazioni e il welfare come fattore di segmentazione.",
                    "Concentrazione sulla crescita e lo sviluppo economico, piuttosto che sulla risposta ai bisogni.",
                    "Un aumento del voto di opinione a scapito del voto di scambio."
                ],
                correct: 2
            },
            {
                text: "La fase di 'Crisi' del welfare (1975-1990) è stata innescata principalmente da quale evento?",
                answers: [
                    "La caduta del Muro di Berlino e l'integrazione europea.",
                    "La crisi finanziaria del 2007-2008.",
                    "La crisi petrolifera degli anni '70 e la necessità di contenere le risorse.",
                    "La fine delle due guerre mondiali e la presenza di totalitarismi.",
                    "La ri-definizione dei rapporti di genere e i nuovi modelli familiari."
                ],
                correct: 2
            },
            {
                text: "Quale delle seguenti trasformazioni socio-economiche ha caratterizzato la fase di crisi degli anni '70, secondo il testo?",
                answers: [
                    "La stabilità occupazionale e l'equilibrio demografico.",
                    "La società industriale e le aspettative morigerate.",
                    "Lo sviluppo lento o nullo, la società post-industriale e la ri-definizione dei rapporti di genere.",
                    "La solidità e centralità dello Stato-nazione come bacino di redistribuzione.",
                    "La diminuzione delle disuguaglianze e della povertà."
                ],
                correct: 2
            },
            {
                text: "Nonostante l'allungamento della vita e il maggiore benessere, perché la 'vecchiaia' ha continuato ad essere considerata un rischio nel welfare?",
                answers: [
                    "Perché l'età pensionabile è stata drasticamente abbassata.",
                    "Perché si è affermata la logica della 'spettanza' e il ritiro dal lavoro è diventato una fase distinta del ciclo di vita.",
                    "Perché si è mantenuta un'elevata simmetria tra contributi e prestazioni.",
                    "Perché la popolazione anziana ha smesso di contribuire finanziariamente al sistema.",
                    "Perché si è ridotta la necessità di tutela contro malattie e invalidità in età avanzata."
                ],
                correct: 1
            },
            {
                text: "La fase di 'Riforme' (1990-2005) è definita come un periodo di 'ricalibratura'. Qual è la logica sottostante a queste riforme?",
                answers: [
                    "L'eliminazione completa dei vincoli e delle scelte restrittive.",
                    "La presenza di vincoli e l'interdipendenza tra scelte migliorative e restrittive per compensare i tagli.",
                    "L'aumento indiscriminato della spesa pubblica in tutte le aree del welfare.",
                    "Il ritorno a un modello di welfare basato esclusivamente sull'assistenza sociale.",
                    "La totale privatizzazione dei sistemi di protezione sociale."
                ],
                correct: 1
            }
        ]
    },
    {
        title: "Lezione 4",
        questions: [
            {
                text: "Quale tra le seguenti è considerata una delle principali sfide demografiche per il welfare state contemporaneo?",
                answers: [
                    "L'aumento del tasso di natalità.",
                    "L'invecchiamento della popolazione e la diminuzione del rapporto tra lavoratori e pensionati.",
                    "La diminuzione dell'aspettativa di vita.",
                    "L'emigrazione di massa di giovani qualificati.",
                    "La stabilizzazione delle strutture familiari tradizionali."
                ],
                correct: 1 // Corrisponde a 'B' (indice 1)
            },
            {
                text: "Il concetto di \"nuovi rischi sociali\" si riferisce a quali tipi di incertezze o vulnerabilità?",
                answers: [
                    "Rischi legati esclusivamente a catastrofi naturali.",
                    "Rischi tradizionali come vecchiaia e malattia, ma con maggiore intensità.",
                    "Rischi emergenti legati alla flessibilità del mercato del lavoro, alla conciliazione vita-lavoro e alla frammentazione familiare.",
                    "Rischi derivanti unicamente dalla globalizzazione economica.",
                    "Rischi legati alla criminalità organizzata e alla sicurezza pubblica."
                ],
                correct: 2 // Corrisponde a 'C' (indice 2)
            },
            {
                text: "In che modo la globalizzazione economica influenza il welfare state?",
                answers: [
                    "Rafforza la capacità degli stati nazionali di finanziare autonomamente il welfare.",
                    "Aumenta la pressione competitiva e la mobilità dei capitali, rendendo più difficile mantenere alti livelli di tassazione e spesa sociale.",
                    "Promuove l'adozione universale di un unico modello di welfare a livello globale.",
                    "Riduce la necessità di politiche sociali grazie alla crescita economica diffusa.",
                    "Incentiva la nazionalizzazione di tutti i servizi di welfare."
                ],
                correct: 1 // Corrisponde a 'B' (indice 1)
            },
            {
                text: "Qual è la principale critica mossa al welfare state in relazione alla sua sostenibilità finanziaria?",
                answers: [
                    "La sua eccessiva dipendenza da donazioni private.",
                    "La tendenza a generare deficit pubblici e debito a causa dell'aumento della spesa e della difficoltà di finanziamento.",
                    "La mancanza di trasparenza nella gestione dei fondi.",
                    "La sua incapacità di attrarre investimenti esteri.",
                    "La sua eccessiva burocratizzazione che impedisce l'erogazione dei servizi."
                ],
                correct: 1 // Corrisponde a 'B' (indice 1)
            },
            {
                text: "Il passaggio da un approccio \"passivo\" a uno \"attivo\" nelle politiche del lavoro del welfare state implica:",
                answers: [
                    "L'erogazione di sussidi di disoccupazione senza alcuna condizione.",
                    "La riduzione degli investimenti nella formazione professionale.",
                    "Un maggiore focus sull'attivazione dei beneficiari, sulla formazione e sul reinserimento nel mercato del lavoro.",
                    "L'eliminazione totale dei sussidi per i disoccupati.",
                    "La promozione del lavoro a tempo parziale come unica soluzione alla disoccupazione."
                ],
                correct: 2 // Corrisponde a 'C' (indice 2)
            },
            {
                text: "Cosa si intende per \"femminilizzazione\" del welfare state?",
                answers: [
                    "L'aumento della percentuale di donne impiegate nel settore pubblico del welfare.",
                    "Il crescente riconoscimento del ruolo delle donne come destinatarie e fornitrici di cura, e la necessità di politiche che supportino la conciliazione vita-lavoro.",
                    "La riduzione delle prestazioni destinate agli uomini.",
                    "La privatizzazione dei servizi di cura, affidandoli esclusivamente alle famiglie.",
                    "L'introduzione di quote rosa obbligatorie in tutti i settori del welfare."
                ],
                correct: 1 // Corrisponde a 'B' (indice 1)
            },
            {
                text: "Quale concetto descrive la tendenza a coinvolgere attori non statali (terzo settore, mercato, famiglie) nell'erogazione delle prestazioni di welfare?",
                answers: [
                    "Centralizzazione.",
                    "Nazionalizzazione.",
                    "Pluralismo del welfare o welfare mix.",
                    "Residualismo puro.",
                    "Universalismo puro."
                ],
                correct: 2 // Corrisponde a 'C' (indice 2)
            },
            {
                text: "Quale delle seguenti affermazioni è una conseguenza della crescente individualizzazione dei rischi sociali?",
                answers: [
                    "Una maggiore omogeneità nelle esigenze di protezione sociale.",
                    "La necessità di politiche più flessibili e personalizzate.",
                    "Il ritorno a un modello di welfare basato esclusivamente sulla famiglia.",
                    "La diminuzione della domanda di servizi sociali.",
                    "La scomparsa della povertà."
                ],
                correct: 1 // Corrisponde a 'B' (indice 1)
            },
            {
                text: "La \"crisi fiscale\" del welfare state si manifesta principalmente attraverso:",
                answers: [
                    "Un surplus costante nel bilancio statale.",
                    "L'incapacità di finanziare adeguatamente le prestazioni a causa di entrate insufficienti o spese eccessive.",
                    "La riduzione della pressione fiscale sui cittadini.",
                    "La diminuzione del debito pubblico.",
                    "L'aumento della fiducia dei mercati finanziari."
                ],
                correct: 1 // Corrisponde a 'B' (indice 1)
            },
            {
                text: "Qual è l'obiettivo principale delle riforme pensionistiche implementate in molti paesi europei negli ultimi decenni?",
                answers: [
                    "Aumentare la generosità delle pensioni per tutti i lavoratori.",
                    "Ridurre l'età pensionabile.",
                    "Garantire la sostenibilità finanziaria dei sistemi pensionistici di fronte all'invecchiamento demografico, spesso attraverso l'aumento dell'età pensionabile o il calcolo contributivo.",
                    "Eliminare completamente il sistema pensionistico pubblico.",
                    "Promuovere esclusivamente i fondi pensione privati."
                ],
                correct: 2 // Corrisponde a 'C' (indice 2)
            },
            {
                text: "Il concetto di \"de-familiarizzazione\" nel contesto del welfare state si riferisce a:",
                answers: [
                    "La riduzione del ruolo delle famiglie nell'erogazione di cura e supporto.",
                    "L'aumento della dipendenza delle famiglie dalle prestazioni statali.",
                    "La promozione di politiche che rafforzano il ruolo tradizionale della famiglia.",
                    "La diminuzione delle nascite.",
                    "L'emigrazione dei membri della famiglia."
                ],
                correct: 0 // Corrisponde a 'A' (indice 0)
            },
            {
                text: "Quale delle seguenti è una caratteristica distintiva dei \"nuovi rischi sociali\" rispetto ai rischi tradizionali?",
                answers: [
                    "Sono più prevedibili e facili da assicurare.",
                    "Colpiscono in modo più omogeneo tutte le fasce della popolazione.",
                    "Richiedono interventi più complessi e spesso personalizzati, non solo trasferimenti monetari.",
                    "Sono meno costosi da gestire per il welfare state.",
                    "Non sono influenzati dai cambiamenti del mercato del lavoro."
                ],
                correct: 2 // Corrisponde a 'C' (indice 2)
            },
            {
                text: "La pressione per la \"convergenza\" dei modelli di welfare in Europa è spesso legata a:",
                answers: [
                    "La volontà di mantenere differenze significative tra i sistemi nazionali.",
                    "L'integrazione economica e politica dell'Unione Europea.",
                    "La scomparsa delle sfide demografiche.",
                    "La riduzione della mobilità dei lavoratori tra i paesi membri.",
                    "La promozione di politiche di austerità in tutti i settori."
                ],
                correct: 1 // Corrisponde a 'B' (indice 1)
            },
            {
                text: "Cosa si intende per \"paradigma dell'investimento sociale\" nel welfare state?",
                answers: [
                    "La riduzione della spesa per l'istruzione e la formazione.",
                    "Un approccio che enfatizza la spesa per prestazioni passive e trasferimenti monetari.",
                    "L'investimento in politiche che migliorano le capacità individuali e la produttività, come istruzione, formazione e servizi per l'infanzia.",
                    "La privatizzazione totale dei servizi sociali.",
                    "La diminuzione degli investimenti in ricerca e sviluppo."
                ],
                correct: 2 // Corrisponde a 'C' (indice 2)
            },
            {
                text: "La \"crisi di legittimità\" del welfare state può derivare da:",
                answers: [
                    "Un eccessivo consenso pubblico sulle sue politiche.",
                    "La percezione che il welfare sia inefficiente, ingiusto o insostenibile.",
                    "L'aumento della fiducia nelle istituzioni pubbliche.",
                    "La diminuzione delle disuguaglianze sociali.",
                    "La riduzione della pressione fiscale."
                ],
                correct: 1 // Corrisponde a 'B' (indice 1)
            },
            {
                text: "In che modo l'aumento del lavoro atipico (es. contratti a termine, part-time involontario) incide sul welfare state?",
                answers: [
                    "Semplifica la raccolta dei contributi sociali.",
                    "Riduce la necessità di politiche di protezione sociale.",
                    "Rende più difficile l'accesso alle prestazioni basate su una storia contributiva stabile e aumenta la precarietà.",
                    "Promuove la piena occupazione.",
                    "Stabilizza i sistemi pensionistici."
                ],
                correct: 2 // Corrisponde a 'C' (indice 2)
            },
            {
                text: "Quale ruolo gioca il \"terzo settore\" (organizzazioni non profit, volontariato) nel welfare mix contemporaneo?",
                answers: [
                    "Un ruolo marginale e ininfluente.",
                    "Un ruolo crescente nell'erogazione di servizi, spesso complementare o alternativo allo Stato.",
                    "L'unico fornitore di servizi sociali.",
                    "Un ruolo di controllo e vigilanza sulle politiche statali.",
                    "Un ruolo esclusivo nella gestione delle pensioni."
                ],
                correct: 1 // Corrisponde a 'B' (indice 1)
            },
            {
                text: "La \"personalizzazione\" dei servizi di welfare è una risposta a quale sfida?",
                answers: [
                    "L'omogeneità dei bisogni sociali.",
                    "La crescente individualizzazione dei rischi e la diversità delle esigenze dei cittadini.",
                    "La necessità di standardizzare tutte le prestazioni.",
                    "La riduzione della spesa pubblica.",
                    "L'aumento della burocrazia."
                ],
                correct: 1 // Corrisponde a 'B' (indice 1)
            },
            {
                text: "Quale delle seguenti è una possibile conseguenza dell'aumento delle disuguaglianze sociali per il welfare state?",
                answers: [
                    "Una maggiore coesione sociale.",
                    "Una riduzione della domanda di servizi sociali.",
                    "Una maggiore pressione sul welfare per mitigare gli effetti della disuguaglianza e prevenire l'esclusione sociale.",
                    "La scomparsa della povertà.",
                    "Un rafforzamento del consenso sulle politiche esistenti."
                ],
                correct: 2 // Corrisponde a 'C' (indice 2)
            },
            {
                text: "La \"sostenibilità intergenerazionale\" del welfare state si riferisce a:",
                answers: [
                    "La capacità del sistema di soddisfare i bisogni solo della generazione attuale.",
                    "La capacità di bilanciare i benefici e i costi tra le diverse generazioni, garantendo equità.",
                    "La dipendenza esclusiva dei giovani dalle prestazioni degli anziani.",
                    "La riduzione delle prestazioni per le future generazioni.",
                    "L'eliminazione di qualsiasi forma di solidarietà tra generazioni."
                ],
                correct: 1 // Corrisponde a 'B' (indice 1)
            },
            {
                text: "Le politiche di \"conciliazione vita-lavoro\" nel welfare state mirano a:",
                answers: [
                    "Separare completamente la vita professionale da quella personale.",
                    "Facilitare l'equilibrio tra impegni lavorativi e responsabilità familiari/personali, spesso con supporto per l'infanzia o congedi.",
                    "Promuovere orari di lavoro estremamente lunghi.",
                    "Ridurre la partecipazione femminile al mercato del lavoro.",
                    "Eliminare la necessità di servizi di cura."
                ],
                correct: 1 // Corrisponde a 'B' (indice 1)
            },
            {
                text: "In un contesto di invecchiamento della popolazione, quale settore del welfare è particolarmente sotto pressione?",
                answers: [
                    "L'istruzione primaria.",
                    "Le politiche per la gioventù.",
                    "La sanità e i sistemi pensionistici.",
                    "I sussidi per la disoccupazione giovanile.",
                    "Le politiche abitative per le giovani coppie."
                ],
                correct: 2 // Corrisponde a 'C' (indice 2)
            },
            {
                text: "La \"frammentazione familiare\" (es. aumento divorzi, famiglie monoparentali) rappresenta una sfida per il welfare perché:",
                answers: [
                    "Rende più semplici le politiche di supporto familiare.",
                    "Aumenta la necessità di nuove forme di supporto sociale e servizi per le famiglie non tradizionali.",
                    "Riduce la domanda di servizi per l'infanzia.",
                    "Rafforza le reti di supporto informale.",
                    "Diminuisce la pressione sulla spesa pubblica."
                ],
                correct: 1 // Corrisponde a 'B' (indice 1)
            },
            {
                text: "Quale delle seguenti affermazioni descrive un aspetto della \"crisi di efficienza\" del welfare state?",
                answers: [
                    "La capacità di erogare prestazioni in modo rapido ed efficace.",
                    "La percezione che le risorse siano sprecate o che i servizi non raggiungano gli obiettivi desiderati.",
                    "L'aumento della soddisfazione degli utenti.",
                    "La riduzione dei costi amministrativi.",
                    "La semplificazione delle procedure burocratiche."
                ],
                correct: 1 // Corrisponde a 'B' (indice 1)
            },
            {
                text: "Il concetto di \"resilienza\" del welfare state si riferisce a:",
                answers: [
                    "La sua incapacità di adattarsi ai cambiamenti.",
                    "La sua rigidità strutturale.",
                    "La capacità del sistema di adattarsi e rispondere a nuove sfide e shock, mantenendo la sua funzione di protezione sociale.",
                    "La sua tendenza a collassare sotto pressione.",
                    "La sua dipendenza da un unico modello di finanziamento."
                ],
                correct: 2 // Corrisponde a 'C' (indice 2)
            }
        ]
    },
    {
        title: "Lezione 5",
        questions: [
            {
                text: "Secondo la tipologia di Esping-Andersen, quale regime di welfare state è caratterizzato da un forte ruolo del mercato e da un'assistenza sociale residuale basata sulla prova dei mezzi?",
                answers: [
                    "Regime Socialdemocratico.",
                    "Regime Conservatore-Corporativo.",
                    "Regime Liberale.",
                    "Regime Mediterraneo.",
                    "Regime Familistico."
                ],
                correct: 2 // Corrisponde a 'Regime Liberale' (indice 2)
            },
            {
                text: "Nel regime di welfare Socialdemocratico, qual è l'obiettivo principale delle politiche sociali?",
                answers: [
                    "Mantenere le differenze di status e la sussidiarietà familiare.",
                    "Promuovere l'uguaglianza e l'universalismo attraverso servizi pubblici ampi e di alta qualità.",
                    "Incentivare il mercato come principale fornitore di welfare.",
                    "Fornire solo un minimo di sicurezza sociale per i più bisognosi.",
                    "Basarsi esclusivamente su assicurazioni obbligatorie per i lavoratori."
                ],
                correct: 1 // Corrisponde a 'Promuovere l'uguaglianza...' (indice 1)
            },
            {
                text: "Quale caratteristica è tipica del regime Conservatore-Corporativo (es. Germania, Italia fino a un certo punto)?",
                answers: [
                    "Elevata de-mercificazione e de-familizzazione.",
                    "Forte enfasi sulla prova dei mezzi e sulla stigmatizzazione dei beneficiari.",
                    "Mantenimento delle differenze di status, forte ruolo della famiglia e assicurazioni sociali basate sulla professione.",
                    "Predominanza di servizi universali finanziati dalla fiscalità generale.",
                    "Bassa spesa sociale e focus sul settore privato."
                ],
                correct: 2 // Corrisponde a 'Mantenimento delle differenze...' (indice 2)
            },
            {
                text: "Il concetto di 'de-mercificazione' nel welfare state si riferisce a:",
                answers: [
                    "La capacità degli individui di acquistare servizi sul mercato.",
                    "La misura in cui gli individui possono mantenere un tenore di vita accettabile indipendentemente dalla loro partecipazione al mercato del lavoro.",
                    "La privatizzazione dei servizi pubblici.",
                    "L'aumento della dipendenza dal mercato per la protezione sociale.",
                    "La riduzione dei salari per aumentare la competitività."
                ],
                correct: 1 // Corrisponde a 'La misura in cui gli individui...' (indice 1)
            },
            {
                text: "Quale tra i seguenti paesi è un esempio tipico di regime di welfare Liberale?",
                answers: [
                    "Svezia.",
                    "Germania.",
                    "Stati Uniti.",
                    "Francia.",
                    "Italia."
                ],
                correct: 2 // Corrisponde a 'Stati Uniti' (indice 2)
            },
            {
                text: "Le politiche sanitarie universali, finanziate tramite fiscalità generale e con accesso garantito a tutti i cittadini, sono un tratto distintivo di quale modello di welfare?",
                answers: [
                    "Liberale.",
                    "Conservatore-Corporativo.",
                    "Socialdemocratico.",
                    "Residuale.",
                    "Occupazionale."
                ],
                correct: 2 // Corrisponde a 'Socialdemocratico' (indice 2)
            },
            {
                text: "Nel contesto delle politiche familiari, cosa si intende per 'familizzazione'?",
                answers: [
                    "La tendenza dello Stato a fornire ampi servizi di supporto alle famiglie.",
                    "Il trasferimento delle responsabilità di cura e assistenza principalmente alla famiglia, con un ruolo limitato dello Stato.",
                    "La promozione di politiche di congedo parentale generose.",
                    "L'aumento del tasso di natalità.",
                    "La diminuzione dei divorzi."
                ],
                correct: 1 // Corrisponde a 'Il trasferimento delle responsabilità...' (indice 1)
            },
            {
                text: "Quale fattore ha contribuito alla crisi del modello 'uomo-breadwinner' sul quale si basavano molti welfare state tradizionali?",
                answers: [
                    "La diminuzione della partecipazione femminile al mercato del lavoro.",
                    "L'aumento dei salari maschili.",
                    "L'aumento della partecipazione femminile al mercato del lavoro e i cambiamenti nelle strutture familiari.",
                    "La riduzione dell'età pensionabile.",
                    "La stabilizzazione dei tassi di occupazione."
                ],
                correct: 2 // Corrisponde a 'L'aumento della partecipazione femminile...' (indice 2)
            },
            {
                text: "Le politiche attive del lavoro (PAL) mirano a:",
                answers: [
                    "Fornire sussidi di disoccupazione a lungo termine senza condizioni.",
                    "Disincentivare la ricerca di lavoro.",
                    "Promuovere l'occupabilità, la formazione e il reinserimento dei disoccupati nel mercato del lavoro.",
                    "Ridurre la spesa pubblica per il lavoro.",
                    "Aumentare la dipendenza degli individui dal welfare."
                ],
                correct: 2 // Corrisponde a 'Promuovere l'occupabilità...' (indice 2)
            },
            {
                text: "Qual è una delle principali critiche mosse al regime Liberale di welfare state?",
                answers: [
                    "Eccessiva generosità delle prestazioni.",
                    "Tendenza a generare disuguaglianze e a lasciare ampie fasce della popolazione scoperte.",
                    "Troppa burocrazia e inefficienza.",
                    "Scarsa attenzione alla crescita economica.",
                    "Eccessiva dipendenza dalla famiglia."
                ],
                correct: 1 // Corrisponde a 'Tendenza a generare disuguaglianze...' (indice 1)
            },
            {
                text: "Il 'Basic Income' (Reddito di Base Incondizionato) è una proposta che mira a:",
                answers: [
                    "Sostituire tutti i servizi di welfare esistenti con un unico trasferimento monetario.",
                    "Fornire un reddito minimo a tutti i cittadini, indipendentemente dalla loro condizione lavorativa o di bisogno.",
                    "Aumentare la burocrazia per l'accesso ai benefici.",
                    "Ridurre la tassazione sui redditi più alti.",
                    "Incentivare il lavoro a tempo pieno."
                ],
                correct: 1 // Corrisponde a 'Fornire un reddito minimo...' (indice 1)
            },
            {
                text: "Quale ruolo ha l'Unione Europea nell'evoluzione dei welfare state nazionali?",
                answers: [
                    "Impone un modello di welfare unico a tutti gli stati membri.",
                    "Non ha alcun impatto sulle politiche sociali nazionali.",
                    "Esercita un'influenza indiretta attraverso il coordinamento delle politiche economiche e sociali, raccomandazioni e la promozione di obiettivi comuni.",
                    "Finanzia direttamente tutte le prestazioni di welfare in Europa.",
                    "Promuove la privatizzazione totale dei servizi sociali."
                ],
                correct: 2 // Corrisponde a 'Esercita un'influenza indiretta...' (indice 2)
            },
            {
                text: "Le politiche di 'Long-Term Care' (LTC) si occupano di:",
                answers: [
                    "L'assistenza sanitaria di emergenza.",
                    "Il supporto e l'assistenza per persone anziane o con disabilità che necessitano di cure a lungo termine.",
                    "Le politiche per l'infanzia.",
                    "I sussidi di disoccupazione.",
                    "La formazione professionale."
                ],
                correct: 1 // Corrisponde a 'Il supporto e l'assistenza...' (indice 1)
            },
            {
                text: "Cosa si intende per 'path dependency' (dipendenza dal percorso) nel contesto del welfare state?",
                answers: [
                    "La capacità dei sistemi di welfare di cambiare rapidamente e radicalmente.",
                    "La tendenza dei sistemi di welfare a seguire percorsi di sviluppo predefiniti, rendendo difficile il cambiamento radicale.",
                    "La dipendenza dalle condizioni economiche attuali.",
                    "La flessibilità delle politiche sociali.",
                    "La capacità di adattarsi a nuove sfide senza vincoli storici."
                ],
                correct: 1 // Corrisponde a 'La tendenza dei sistemi di welfare...' (indice 1)
            },
            {
                text: "Il concetto di 'green welfare' o 'welfare ecologico' suggerisce un legame tra:",
                answers: [
                    "Politiche sociali e crescita economica illimitata.",
                    "Politiche sociali e sostenibilità ambientale.",
                    "Politiche sociali e privatizzazione dei servizi.",
                    "Politiche sociali e riduzione della spesa pubblica.",
                    "Politiche sociali e aumento del consumo."
                ],
                correct: 1 // Corrisponde a 'Politiche sociali e sostenibilità ambientale.' (indice 1)
            },
            {
                text: "Qual è una delle principali sfide per i sistemi pensionistici contemporanei, oltre all'invecchiamento demografico?",
                answers: [
                    "L'aumento del tasso di inflazione.",
                    "La diminuzione della speranza di vita.",
                    "La precarietà del lavoro e la discontinuità contributiva.",
                    "La riduzione dei costi sanitari.",
                    "L'aumento dei tassi di interesse."
                ],
                correct: 2 // Corrisponde a 'La precarietà del lavoro...' (indice 2)
            },
            {
                text: "Le politiche di 'work-life balance' sono particolarmente rilevanti per affrontare quale dei 'nuovi rischi sociali'?",
                answers: [
                    "La vecchiaia.",
                    "La malattia cronica.",
                    "Le difficoltà di conciliazione tra vita professionale e responsabilità familiari.",
                    "La disoccupazione di lunga durata.",
                    "L'esclusione sociale."
                ],
                correct: 2 // Corrisponde a 'Le difficoltà di conciliazione...' (indice 2)
            },
            {
                text: "In che modo l'immigrazione influenza il welfare state nei paesi di accoglienza?",
                answers: [
                    "Non ha alcun impatto sul welfare state.",
                    "Aumenta solo i costi senza apportare benefici.",
                    "Può portare a nuove sfide in termini di accesso ai servizi e integrazione, ma anche a benefici demografici ed economici.",
                    "Riduce la domanda di servizi sociali.",
                    "Semplifica la gestione dei sistemi pensionistici."
                ],
                correct: 2 // Corrisponde a 'Può portare a nuove sfide...' (indice 2)
            },
            {
                text: "Quale tendenza caratterizza la 'convergenza' dei modelli di welfare in Europa?",
                answers: [
                    "Una completa omogeneizzazione dei sistemi nazionali.",
                    "Una crescente diversificazione tra i modelli.",
                    "Un processo di 'apprendimento' e adattamento reciproco, pur mantenendo differenze nazionali.",
                    "La scomparsa di qualsiasi forma di welfare state.",
                    "L'adozione esclusiva del modello liberale."
                ],
                correct: 2 // Corrisponde a 'Un processo di 'apprendimento'...' (indice 2)
            },
            {
                text: "Le politiche di 'attivazione' nel welfare state si concentrano su:",
                answers: [
                    "La fornitura di sussidi passivi.",
                    "Il rafforzamento della dipendenza dal welfare.",
                    "L'incentivazione della partecipazione al mercato del lavoro e l'investimento in capitale umano.",
                    "La riduzione della spesa per la formazione.",
                    "L'eliminazione dei programmi di reinserimento."
                ],
                correct: 2 // Corrisponde a 'L'incentivazione della partecipazione...' (indice 2)
            },
            {
                text: "Il 'welfare aziendale' (corporate welfare) è un esempio di:",
                answers: [
                    "Centralizzazione dello Stato nel welfare.",
                    "Riduzione del ruolo del settore privato.",
                    "Espansione del welfare mix e del coinvolgimento di attori non statali.",
                    "Eliminazione delle prestazioni sociali.",
                    "Aumento della burocrazia pubblica."
                ],
                correct: 2 // Corrisponde a 'Espansione del welfare mix...' (indice 2)
            },
            {
                text: "Qual è l'impatto potenziale delle nuove tecnologie (es. intelligenza artificiale, robotica) sul futuro del welfare state?",
                answers: [
                    "Non avranno alcun impatto.",
                    "Semplificheranno la gestione del welfare eliminando tutti i problemi.",
                    "Potrebbero creare nuove sfide (es. disoccupazione tecnologica) ma anche opportunità (es. servizi più efficienti, monitoraggio della salute).",
                    "Renderanno obsolete tutte le politiche sociali.",
                    "Aumenteranno la dipendenza dal lavoro manuale."
                ],
                correct: 2 // Corrisponde a 'Potrebbero creare nuove sfide...' (indice 2)
            },
            {
                text: "Il 'gap di genere' nelle pensioni è una problematica che evidenzia:",
                answers: [
                    "Che gli uomini ricevono pensioni più basse delle donne.",
                    "Che le donne, a parità di carriera, ricevono pensioni più alte degli uomini.",
                    "Le differenze nelle carriere lavorative (es. part-time, interruzioni per cura) che portano le donne a ricevere pensioni mediamente più basse degli uomini.",
                    "Che le pensioni non sono influenzate dal genere.",
                    "La parità di trattamento pensionistico tra uomini e donne."
                ],
                correct: 2 // Corrisponde a 'Le differenze nelle carriere lavorative...' (indice 2)
            },
            {
                text: "Le politiche di 'inclusione sociale' mirano a:",
                answers: [
                    "Escludere determinate categorie dalla società.",
                    "Fornire solo assistenza monetaria ai più poveri.",
                    "Garantire la piena partecipazione di tutti gli individui alla vita economica, sociale e culturale, superando le barriere e le disuguaglianze.",
                    "Limitare l'accesso ai servizi pubblici.",
                    "Promuovere la segregazione sociale."
                ],
                correct: 2 // Corrisponde a 'Garantire la piena partecipazione...' (indice 2)
            },
            {
                text: "Quale tra le seguenti è una caratteristica del 'welfare pluralistico'?",
                answers: [
                    "Un unico attore (lo Stato) che eroga tutti i servizi.",
                    "La coesistenza e collaborazione di diversi attori (Stato, mercato, terzo settore, famiglie) nell'erogazione del welfare.",
                    "La totale privatizzazione di tutti i servizi.",
                    "La scomparsa del ruolo dello Stato nel welfare.",
                    "La dipendenza esclusiva dalle donazioni private."
                ],
                correct: 1 // Corrisponde a 'La coesistenza e collaborazione...' (indice 1)
            }
        ]
    },
    {
        title: "Lezione 6",
        questions: [
            {
                text: "Quale delle seguenti affermazioni descrive meglio il concetto di 'retrenchment' (ridimensionamento) del welfare state?",
                answers: [
                    "L'espansione indiscriminata della spesa sociale.",
                    "La contrazione o la ridefinizione delle prestazioni e dei servizi di welfare, spesso a causa di vincoli fiscali o cambiamenti ideologici.",
                    "La nazionalizzazione di tutti i servizi sociali.",
                    "L'aumento della generosità delle pensioni.",
                    "La promozione di nuovi diritti sociali."
                ],
                correct: 1 // Corrisponde a 'La contrazione o la ridefinizione...' (indice 1)
            },
            {
                text: "Le politiche di 'workfare' si distinguono dai tradizionali sussidi di disoccupazione perché:",
                answers: [
                    "Non prevedono alcun requisito per l'accesso.",
                    "Richiedono ai beneficiari di partecipare ad attività lavorative, di formazione o di ricerca attiva di lavoro in cambio del sussidio.",
                    "Sono finanziate esclusivamente da donazioni private.",
                    "Sono destinate solo a chi non ha mai lavorato.",
                    "Eliminano completamente l'assistenza sociale."
                ],
                correct: 1 // Corrisponde a 'Richiedono ai beneficiari...' (indice 1)
            },
            {
                text: "Quale tra i seguenti è un esempio di 'politica di conciliazione' nel welfare state?",
                answers: [
                    "L'aumento dell'età pensionabile.",
                    "La riduzione dei sussidi di disoccupazione.",
                    "I congedi parentali retribuiti e i servizi di asilo nido pubblici.",
                    "La privatizzazione della sanità.",
                    "L'introduzione di tasse sui beni di consumo."
                ],
                correct: 2 // Corrisponde a 'I congedi parentali retribuiti...' (indice 2)
            },
            {
                text: "Il concetto di 'sussidiarietà orizzontale' nel welfare si riferisce a:",
                answers: [
                    "Il ruolo predominante dello Stato nell'erogazione dei servizi.",
                    "La delega di funzioni e responsabilità a enti non statali come famiglie, associazioni e organizzazioni del terzo settore.",
                    "La centralizzazione delle decisioni a livello nazionale.",
                    "La fornitura di servizi solo ai più bisognosi.",
                    "La riduzione della partecipazione civica."
                ],
                correct: 1 // Corrisponde a 'La delega di funzioni...' (indice 1)
            },
            {
                text: "Quale delle seguenti è una caratteristica delle riforme pensionistiche che introducono il sistema 'contributivo'?",
                answers: [
                    "Le pensioni sono calcolate in base all'ultima retribuzione.",
                    "Le pensioni sono direttamente proporzionali ai contributi versati durante la carriera lavorativa.",
                    "Le pensioni sono uguali per tutti i cittadini.",
                    "L'età pensionabile è fissa e non modificabile.",
                    "Il sistema è finanziato esclusivamente dalla fiscalità generale."
                ],
                correct: 1 // Corrisponde a 'Le pensioni sono direttamente proporzionali...' (indice 1)
            },
            {
                text: "La 'crisi di consenso' del welfare state può essere attribuita a:",
                answers: [
                    "Un'eccessiva soddisfazione dei cittadini nei confronti del sistema.",
                    "La percezione di iniquità, inefficienza o insostenibilità del sistema da parte dell'opinione pubblica e dei gruppi di interesse.",
                    "L'aumento della fiducia nelle istituzioni pubbliche.",
                    "La riduzione delle disuguaglianze sociali.",
                    "La diminuzione della pressione fiscale."
                ],
                correct: 1 // Corrisponde a 'La percezione di iniquità...' (indice 1)
            },
            {
                text: "Cosa si intende per 'privatizzazione' nel contesto del welfare state?",
                answers: [
                    "L'aumento del ruolo dello Stato nell'erogazione dei servizi.",
                    "Il trasferimento di responsabilità e/o proprietà di servizi e prestazioni dal settore pubblico a quello privato (profit o non-profit).",
                    "La riduzione della spesa sociale complessiva.",
                    "La nazionalizzazione delle imprese private.",
                    "L'introduzione di un reddito di base universale."
                ],
                correct: 1 // Corrisponde a 'Il trasferimento di responsabilità...' (indice 1)
            },
            {
                text: "Le politiche di 'flexicurity' (flessibilità e sicurezza) mirano a:",
                answers: [
                    "Aumentare la rigidità del mercato del lavoro.",
                    "Combinare la flessibilità per le imprese (es. facilità di licenziamento) con la sicurezza per i lavoratori (es. sussidi, formazione, politiche attive).",
                    "Eliminare qualsiasi forma di protezione per i lavoratori.",
                    "Promuovere solo contratti a tempo indeterminato.",
                    "Ridurre la mobilità dei lavoratori."
                ],
                correct: 1 // Corrisponde a 'Combinare la flessibilità...' (indice 1)
            },
            {
                text: "Quale delle seguenti è una misura tipica delle riforme di 'ricalibratura' del welfare state?",
                answers: [
                    "L'abolizione completa di un pilastro del welfare (es. sanità pubblica).",
                    "L'introduzione di nuovi diritti sociali senza alcuna compensazione.",
                    "La combinazione di tagli o restrizioni in alcune aree con espansioni o miglioramenti in altre, per adattarsi a nuove sfide.",
                    "Un aumento indiscriminato della spesa pubblica.",
                    "Il ritorno a un modello di welfare residuale puro."
                ],
                correct: 2 // Corrisponde a 'La combinazione di tagli...' (indice 2)
            },
            {
                text: "Il concetto di 'Europeanization' del welfare state si riferisce a:",
                answers: [
                    "La creazione di un unico welfare state europeo.",
                    "L'influenza delle politiche e delle istituzioni dell'Unione Europea sui sistemi di welfare nazionali, portando a processi di convergenza o coordinamento.",
                    "La riduzione di qualsiasi forma di cooperazione tra gli stati membri in materia sociale.",
                    "La promozione di modelli di welfare completamente diversi tra i paesi europei.",
                    "L'esclusiva responsabilità degli stati nazionali per le politiche sociali."
                ],
                correct: 1 // Corrisponde a 'L'influenza delle politiche...' (indice 1)
            },
            {
                text: "Le 'politiche di attivazione' nel contesto del welfare state mirano a:",
                answers: [
                    "Disincentivare la partecipazione al mercato del lavoro.",
                    "Fornire assistenza passiva ai disoccupati.",
                    "Promuovere l'occupabilità e l'integrazione sociale dei beneficiari, spesso attraverso formazione e servizi di collocamento.",
                    "Ridurre la spesa per la formazione professionale.",
                    "Aumentare la dipendenza degli individui dal welfare."
                ],
                correct: 2 // Corrisponde a 'Promuovere l'occupabilità...' (indice 2)
            },
            {
                text: "Qual è un potenziale rischio della 'frammentazione' dei servizi di welfare tra diversi attori (Stato, mercato, terzo settore)?",
                answers: [
                    "Una maggiore coesione sociale.",
                    "Una semplificazione dell'accesso ai servizi.",
                    "La creazione di disuguaglianze nell'accesso e nella qualità dei servizi, e la difficoltà di coordinamento.",
                    "Una riduzione dei costi complessivi del welfare.",
                    "L'aumento della trasparenza."
                ],
                correct: 2 // Corrisponde a 'La creazione di disuguaglianze...' (indice 2)
            },
            {
                text: "Il concetto di 'social investment state' enfatizza l'importanza di:",
                answers: [
                    "Tagliare la spesa sociale per ridurre il debito.",
                    "Investire in capitale umano (es. istruzione, formazione, servizi per l'infanzia) per migliorare la produttività e l'occupabilità nel lungo termine.",
                    "Privatizzare tutti i servizi sociali.",
                    "Fornire solo assistenza residuale.",
                    "Ridurre la partecipazione femminile al mercato del lavoro."
                ],
                correct: 1 // Corrisponde a 'Investire in capitale umano...' (indice 1)
            },
            {
                text: "Quale delle seguenti è una critica comune alle politiche di 'austerità' applicate al welfare state?",
                answers: [
                    "Rafforzano la protezione sociale.",
                    "Possono portare a un aumento delle disuguaglianze e della povertà, e a un deterioramento della qualità dei servizi.",
                    "Promuovono la crescita economica sostenibile.",
                    "Aumentano la spesa pubblica a lungo termine.",
                    "Semplificano l'accesso ai benefici."
                ],
                correct: 1 // Corrisponde a 'Possono portare a un aumento...' (indice 1)
            },
            {
                text: "Il 'Long-Term Care' (LTC) è diventato un'area di crescente importanza per il welfare state a causa di:",
                answers: [
                    "La diminuzione dell'aspettativa di vita.",
                    "L'invecchiamento della popolazione e l'aumento delle malattie croniche e delle disabilità.",
                    "La riduzione dei costi sanitari.",
                    "La diminuzione della domanda di servizi di cura.",
                    "La maggiore autonomia degli anziani."
                ],
                correct: 1 // Corrisponde a 'L'invecchiamento della popolazione...' (indice 1)
            },
            {
                text: "Le politiche di 'gender mainstreaming' nel welfare state mirano a:",
                answers: [
                    "Creare politiche separate per uomini e donne.",
                    "Integrare una prospettiva di genere in tutte le fasi di progettazione, attuazione e valutazione delle politiche, per promuovere l'uguaglianza di genere.",
                    "Ridurre la partecipazione femminile al mercato del lavoro.",
                    "Ignorare le differenze di genere nelle politiche sociali.",
                    "Promuovere ruoli di genere tradizionali."
                ],
                correct: 1 // Corrisponde a 'Integrare una prospettiva di genere...' (indice 1)
            },
            {
                text: "Quale ruolo hanno le organizzazioni internazionali (es. OCSE, FMI) nelle riforme del welfare state?",
                answers: [
                    "Impongono unilateralmente le riforme a tutti i paesi.",
                    "Non hanno alcun ruolo o influenza.",
                    "Forniscono analisi, raccomandazioni e condizionalità sui prestiti, influenzando le agende di riforma nazionali.",
                    "Finanziano direttamente tutti i servizi di welfare nel mondo.",
                    "Promuovono l'espansione illimitata della spesa sociale."
                ],
                correct: 2 // Corrisponde a 'Forniscono analisi, raccomandazioni...' (indice 2)
            },
            {
                text: "Il concetto di 'dualizzazione' del mercato del lavoro e del welfare si riferisce a:",
                answers: [
                    "Una maggiore omogeneità nelle condizioni di lavoro.",
                    "La creazione di due segmenti distinti: uno con alta protezione e stabilità, l'altro con precarietà e bassa protezione.",
                    "La riduzione delle disuguaglianze salariali.",
                    "L'eliminazione del lavoro atipico.",
                    "La piena occupazione per tutti."
                ],
                correct: 1 // Corrisponde a 'La creazione di due segmenti distinti...' (indice 1)
            },
            {
                text: "Le politiche di 'reddito minimo garantito' sono un esempio di:",
                answers: [
                    "Politiche basate esclusivamente sull'assicurazione sociale.",
                    "Politiche universali che forniscono un supporto di base a chiunque si trovi in stato di bisogno, indipendentemente dai contributi.",
                    "Politiche che incentivano la disoccupazione.",
                    "Politiche che aumentano le disuguaglianze.",
                    "Politiche che richiedono una storia contributiva molto lunga."
                ],
                correct: 1 // Corrisponde a 'Politiche universali che forniscono...' (indice 1)
            },
            {
                text: "Quale impatto ha la 'digitalizzazione' sui servizi di welfare?",
                answers: [
                    "Rende i servizi più lenti e meno accessibili.",
                    "Non ha alcun impatto sui servizi.",
                    "Può migliorare l'efficienza, l'accessibilità e la personalizzazione dei servizi, ma anche creare nuove forme di esclusione digitale.",
                    "Elimina la necessità di interazione umana.",
                    "Aumenta la burocrazia."
                ],
                correct: 2 // Corrisponde a 'Può migliorare l'efficienza...' (indice 2)
            },
            {
                text: "La 'crisi di finanziamento' del welfare state è spesso legata a:",
                answers: [
                    "Un surplus costante nel bilancio pubblico.",
                    "La difficoltà di reperire risorse sufficienti per coprire una spesa crescente, a causa di fattori demografici, economici e occupazionali.",
                    "La riduzione della pressione fiscale.",
                    "L'aumento della fiducia dei mercati finanziari.",
                    "La diminuzione del debito pubblico."
                ],
                correct: 1 // Corrisponde a 'La difficoltà di reperire risorse...' (indice 1)
            },
            {
                text: "Il concetto di 'welfare mix' implica:",
                answers: [
                    "La gestione esclusiva del welfare da parte dello Stato.",
                    "La coesistenza e interazione di Stato, mercato, terzo settore e famiglia nell'erogazione di protezione sociale.",
                    "La totale privatizzazione del welfare.",
                    "La riduzione della spesa sociale a zero.",
                    "L'eliminazione di qualsiasi forma di solidarietà."
                ],
                correct: 1 // Corrisponde a 'La coesistenza e interazione...' (indice 1)
            },
            {
                text: "Le politiche di 'active ageing' (invecchiamento attivo) promuovono:",
                answers: [
                    "Il ritiro precoce dal mercato del lavoro.",
                    "La partecipazione degli anziani alla vita sociale, economica e culturale, anche oltre l'età pensionabile, per migliorare il loro benessere e contribuire alla società.",
                    "L'isolamento degli anziani.",
                    "La riduzione delle opportunità per gli anziani.",
                    "La dipendenza degli anziani dalla famiglia."
                ],
                correct: 1 // Corrisponde a 'La partecipazione degli anziani...' (indice 1)
            },
            {
                text: "Quale delle seguenti affermazioni è vera riguardo alla 'sostenibilità sociale' del welfare state?",
                answers: [
                    "Si riferisce solo alla sostenibilità finanziaria.",
                    "Riguarda la capacità del welfare di mantenere la coesione sociale, ridurre le disuguaglianze e garantire l'equità tra le generazioni e i gruppi sociali.",
                    "Implica la riduzione di tutti i servizi sociali.",
                    "Non è influenzata dalle politiche di welfare.",
                    "È garantita solo dalla crescita economica."
                ],
                correct: 1 // Corrisponde a 'Riguarda la capacità del welfare...' (indice 1)
            },
            {
                text: "Il concetto di 'resilienza' applicato al welfare state indica la sua capacità di:",
                answers: [
                    "Resistere a qualsiasi cambiamento.",
                    "Adattarsi e rispondere efficacemente a shock esterni (es. crisi economiche, pandemie) e a trasformazioni sociali, mantenendo la sua funzione protettiva.",
                    "Collassare sotto pressione.",
                    "Ignorare le nuove sfide.",
                    "Mantenere un modello statico nel tempo."
                ],
                correct: 1 // Corrisponde a 'Adattarsi e rispondere efficacemente...' (indice 1)
            }
        ]
    },
    {
        title: "Lezione 7",
        questions: [
            {
                text: "Quale delle seguenti è una caratteristica distintiva del concetto di 'Universal Basic Services' (UBS) rispetto al 'Reddito di Base Incondizionato'?",
                answers: [
                    "UBS si concentra sulla fornitura gratuita di beni e servizi essenziali, mentre il Reddito di Base è un trasferimento monetario.",
                    "UBS è un trasferimento monetario, mentre il Reddito di Base è la fornitura di servizi.",
                    "UBS è destinato solo ai più poveri, mentre il Reddito di Base è universale.",
                    "UBS è sempre finanziato tramite contributi, mentre il Reddito di Base tramite tassazione.",
                    "Non c'è alcuna differenza significativa tra i due concetti."
                ],
                correct: 0 // Corrisponde a 'UBS si concentra sulla fornitura...' (indice 0)
            },
            {
                text: "Il concetto di 'social innovation' nel contesto del welfare state si riferisce a:",
                answers: [
                    "L'introduzione di nuove tecnologie per automatizzare i servizi sociali.",
                    "La creazione di nuove soluzioni (prodotti, servizi, modelli) per rispondere a bisogni sociali insoddisfatti, spesso coinvolgendo attori diversi.",
                    "La riduzione della spesa sociale attraverso tagli lineari.",
                    "Il ritorno a modelli di welfare tradizionali e rigidi.",
                    "L'esclusiva responsabilità dello Stato nell'innovazione."
                ],
                correct: 1 // Corrisponde a 'La creazione di nuove soluzioni...' (indice 1)
            },
            {
                text: "Quale impatto si prevede che l'automazione e l'intelligenza artificiale avranno sul mercato del lavoro e, di conseguenza, sul welfare state?",
                answers: [
                    "Una diminuzione della disoccupazione e un aumento dei salari per tutti.",
                    "Una maggiore stabilità occupazionale e meno rischi sociali.",
                    "Potenziali perdite di posti di lavoro in alcuni settori e la necessità di nuove forme di protezione e riqualificazione.",
                    "La scomparsa della necessità di politiche attive del lavoro.",
                    "Un ritorno al lavoro manuale su larga scala."
                ],
                correct: 2 // Corrisponde a 'Potenziali perdite di posti di lavoro...' (indice 2)
            },
            {
                text: "Le politiche di 'welfare preventivo' mirano a:",
                answers: [
                    "Intervenire solo quando un problema sociale è già conclamato.",
                    "Prevenire l'insorgere di problemi sociali o mitigarne gli effetti negativi prima che diventino gravi, investendo in servizi precoci.",
                    "Ridurre la spesa sociale eliminando i servizi di prevenzione.",
                    "Fornire assistenza passiva a lungo termine.",
                    "Concentrarsi esclusivamente sulla cura delle malattie."
                ],
                correct: 1 // Corrisponde a 'Prevenire l'insorgere di problemi sociali...' (indice 1)
            },
            {
                text: "In un contesto di 'multi-level governance' del welfare, quale attore assume un ruolo crescente?",
                answers: [
                    "Esclusivamente lo Stato centrale.",
                    "Le organizzazioni internazionali e i governi locali/regionali, insieme allo Stato nazionale.",
                    "Solo le famiglie e il terzo settore.",
                    "Le grandi corporazioni multinazionali.",
                    "Le agenzie di rating finanziario."
                ],
                correct: 1 // Corrisponde a 'Le organizzazioni internazionali...' (indice 1)
            },
            {
                text: "Quale delle seguenti è una tendenza comune nelle riforme sanitarie contemporanee?",
                answers: [
                    "La completa nazionalizzazione di tutti i servizi sanitari.",
                    "Una maggiore enfasi sulla prevenzione e sulla gestione delle malattie croniche, spesso con un mix di pubblico e privato.",
                    "La riduzione degli investimenti nella ricerca medica.",
                    "L'eliminazione dell'accesso universale alle cure.",
                    "Il ritorno a un modello di cura ospedalocentrico."
                ],
                correct: 1 // Corrisponde a 'Una maggiore enfasi sulla prevenzione...' (indice 1)
            },
            {
                text: "Il concetto di 'capitale sociale' è rilevante per il welfare state perché:",
                answers: [
                    "Descrive la ricchezza finanziaria degli individui.",
                    "Si riferisce alle reti di relazioni e alla fiducia che possono facilitare la cooperazione e l'erogazione informale di supporto sociale.",
                    "È un indicatore della spesa pubblica per il welfare.",
                    "Misura l'efficienza della burocrazia statale.",
                    "È un sinonimo di capitale economico."
                ],
                correct: 1 // Corrisponde a 'Si riferisce alle reti di relazioni...' (indice 1)
            },
            {
                text: "Le politiche di 'empowerment' nel welfare state mirano a:",
                answers: [
                    "Aumentare la dipendenza degli individui dai servizi statali.",
                    "Rafforzare la capacità degli individui e delle comunità di prendere decisioni e agire per migliorare la propria vita, riducendo la passività.",
                    "Ridurre la partecipazione civica.",
                    "Concentrarsi solo sui trasferimenti monetari.",
                    "Eliminare la responsabilità individuale."
                ],
                correct: 1 // Corrisponde a 'Rafforzare la capacità degli individui...' (indice 1)
            },
            {
                text: "Qual è una delle principali sfide per le politiche educative nel contesto del welfare state contemporaneo?",
                answers: [
                    "La diminuzione della domanda di istruzione.",
                    "Garantire l'equità nell'accesso e la qualità dell'istruzione in un contesto di crescenti disuguaglianze e nuove esigenze del mercato del lavoro.",
                    "La riduzione degli investimenti nell'istruzione pubblica.",
                    "L'eliminazione della formazione professionale.",
                    "La standardizzazione dei curricula a livello globale."
                ],
                correct: 1 // Corrisponde a 'Garantire l'equità nell'accesso...' (indice 1)
            },
            {
                text: "Il 'dividendo demografico' si riferisce a:",
                answers: [
                    "La diminuzione del rapporto tra popolazione in età lavorativa e popolazione dipendente (anziani e giovani).",
                    "Un periodo in cui la proporzione di persone in età lavorativa è particolarmente elevata, offrendo opportunità di crescita economica.",
                    "L'aumento del tasso di natalità.",
                    "L'invecchiamento della popolazione.",
                    "La riduzione dell'aspettativa di vita."
                ],
                correct: 1 // Corrisponde a 'Un periodo in cui la proporzione...' (indice 1)
            },
            {
                text: "Le politiche di 'housing sociale' nel welfare state mirano a:",
                answers: [
                    "Promuovere solo l'acquisto di case private di lusso.",
                    "Garantire l'accesso ad alloggi dignitosi e a prezzi accessibili per le fasce più vulnerabili della popolazione.",
                    "Eliminare qualsiasi forma di intervento pubblico nel mercato immobiliare.",
                    "Aumentare i prezzi degli affitti.",
                    "Concentrarsi solo sulla costruzione di nuove abitazioni."
                ],
                correct: 1 // Corrisponde a 'Garantire l'accesso ad alloggi dignitosi...' (indice 1)
            },
            {
                text: "Quale ruolo gioca la 'partecipazione civica' nell'evoluzione del welfare state?",
                answers: [
                    "Un ruolo ininfluente, poiché le decisioni sono prese solo dallo Stato.",
                    "Un ruolo crescente nel co-produzione di servizi, nella definizione delle priorità e nel controllo delle politiche.",
                    "La riduzione dell'interesse dei cittadini per le politiche sociali.",
                    "L'esclusiva responsabilità delle organizzazioni non profit.",
                    "La diminuzione della trasparenza."
                ],
                correct: 1 // Corrisponde a 'Un ruolo crescente nel co-produzione...' (indice 1)
            },
            {
                text: "Il concetto di 'fiscal compact' e le regole di bilancio europee hanno avuto quale impatto sui welfare state nazionali?",
                answers: [
                    "Hanno promosso un'espansione illimitata della spesa sociale.",
                    "Hanno imposto vincoli sulla spesa pubblica e sui deficit, influenzando le politiche di welfare e spingendo verso il consolidamento fiscale.",
                    "Non hanno avuto alcun impatto.",
                    "Hanno eliminato la necessità di riforme pensionistiche.",
                    "Hanno aumentato la generosità delle prestazioni."
                ],
                correct: 1 // Corrisponde a 'Hanno imposto vincoli sulla spesa pubblica...' (indice 1)
            },
            {
                text: "Le politiche di 'salute mentale' sono diventate sempre più importanti nel welfare state a causa di:",
                answers: [
                    "Una diminuzione dei problemi di salute mentale nella popolazione.",
                    "Un crescente riconoscimento dell'impatto dei disturbi mentali sul benessere individuale e sociale, e la necessità di servizi integrati.",
                    "La riduzione dei costi delle cure mediche.",
                    "L'eliminazione della stigmatizzazione associata ai problemi di salute mentale.",
                    "La privatizzazione completa dei servizi di salute mentale."
                ],
                correct: 1 // Corrisponde a 'Un crescente riconoscimento dell'impatto...' (indice 1)
            },
            {
                text: "Quale delle seguenti è una potenziale conseguenza del 'cambiamento climatico' per il welfare state?",
                answers: [
                    "Una riduzione della domanda di servizi sanitari.",
                    "Nuove sfide in termini di salute pubblica, migrazioni, sicurezza alimentare e necessità di adattamento sociale.",
                    "La scomparsa della povertà.",
                    "Un aumento della stabilità economica.",
                    "La riduzione dei costi per la protezione sociale."
                ],
                correct: 1 // Corrisponde a 'Nuove sfide in termini di salute pubblica...' (indice 1)
            },
            {
                text: "Il concetto di 'welfare generativo' si concentra su:",
                answers: [
                    "La fornitura di prestazioni passive e assistenziali.",
                    "L'investimento in capitale umano e sociale per promuovere l'autonomia, la partecipazione e la capacità delle persone di contribuire alla società.",
                    "La riduzione della spesa pubblica attraverso tagli indiscriminati.",
                    "L'eliminazione di qualsiasi forma di solidarietà sociale.",
                    "La dipendenza esclusiva dal mercato."
                ],
                correct: 1 // Corrisponde a 'L'investimento in capitale umano...' (indice 1)
            },
            {
                text: "Le 'politiche per la famiglia' nei welfare state contemporanei spesso mirano a:",
                answers: [
                    "Promuovere un unico modello familiare tradizionale.",
                    "Supportare la diversità delle strutture familiari e le esigenze di conciliazione vita-lavoro, con servizi per l'infanzia e congedi parentali.",
                    "Ridurre il sostegno economico alle famiglie.",
                    "Incentivare la natalità senza alcun supporto ai genitori.",
                    "Eliminare la responsabilità dello Stato per il benessere dei bambini."
                ],
                correct: 1 // Corrisponde a 'Supportare la diversità delle strutture familiari...' (indice 1)
            },
            {
                text: "Quale delle seguenti affermazioni descrive il ruolo delle 'organizzazioni del terzo settore' nel welfare contemporaneo?",
                answers: [
                    "Sono attori marginali e non rilevanti.",
                    "Forniscono servizi e supporto, spesso colmando lacune lasciate dallo Stato o offrendo approcci innovativi, e rappresentano gli interessi dei cittadini.",
                    "Sono responsabili unicamente della gestione delle pensioni.",
                    "Mirano esclusivamente al profitto.",
                    "Non collaborano mai con lo Stato."
                ],
                correct: 1 // Corrisponde a 'Forniscono servizi e supporto...' (indice 1)
            },
            {
                text: "La 'povertà energetica' è un nuovo rischio sociale che evidenzia:",
                answers: [
                    "La mancanza di accesso a fonti di energia rinnovabile.",
                    "L'incapacità di un nucleo familiare di riscaldare adeguatamente la propria abitazione o di accedere a servizi energetici essenziali a costi sostenibili.",
                    "La dipendenza esclusiva dall'energia nucleare.",
                    "L'eccessivo consumo di energia da parte delle famiglie ricche.",
                    "La riduzione dei prezzi dell'energia."
                ],
                correct: 1 // Corrisponde a 'L'incapacità di un nucleo familiare...' (indice 1)
            },
            {
                text: "Il concetto di 'cittadinanza sociale' implica:",
                answers: [
                    "Che i diritti sociali sono acquisiti solo attraverso il lavoro retribuito.",
                    "Che tutti i cittadini hanno diritto a un certo livello di benessere e protezione sociale, indipendentemente dalla loro condizione economica o lavorativa.",
                    "La riduzione dei diritti civili e politici.",
                    "La dipendenza esclusiva dalla carità privata.",
                    "L'eliminazione di qualsiasi forma di solidarietà."
                ],
                correct: 1 // Corrisponde a 'Che tutti i cittadini hanno diritto...' (indice 1)
            },
            {
                text: "Le 'riforme del mercato del lavoro' nei welfare state contemporanei spesso mirano a:",
                answers: [
                    "Aumentare la rigidità contrattuale e la protezione del posto di lavoro a vita.",
                    "Promuovere la flessibilità e l'adattabilità del mercato del lavoro, spesso bilanciandola con misure di sicurezza sociale (flexicurity).",
                    "Eliminare i sindacati e la contrattazione collettiva.",
                    "Ridurre la mobilità dei lavoratori.",
                    "Incentivare il lavoro nero."
                ],
                correct: 1 // Corrisponde a 'Promuovere la flessibilità e l'adattabilità...' (indice 1)
            },
            {
                text: "Quale delle seguenti è una sfida per il welfare state legata all'aumento delle 'migrazioni internazionali'?",
                answers: [
                    "La diminuzione della diversità culturale.",
                    "La necessità di integrare i migranti nei sistemi di protezione sociale, garantendo accesso ai servizi e prevenendo l'esclusione.",
                    "La riduzione della domanda di servizi sociali.",
                    "La semplificazione delle procedure burocratiche.",
                    "L'eliminazione delle barriere linguistiche."
                ],
                correct: 1 // Corrisponde a 'La necessità di integrare i migranti...' (indice 1)
            },
            {
                text: "Il concetto di 'welfare locale' o 'community welfare' enfatizza:",
                answers: [
                    "La centralizzazione dei servizi a livello nazionale.",
                    "Il ruolo delle comunità locali e dei servizi di prossimità nell'erogazione di supporto e assistenza, spesso con un approccio integrato.",
                    "La privatizzazione completa dei servizi sociali.",
                    "La riduzione della partecipazione dei cittadini.",
                    "L'esclusiva responsabilità delle grandi istituzioni."
                ],
                correct: 1 // Corrisponde a 'Il ruolo delle comunità locali...' (indice 1)
            },
            {
                text: "La 'crisi della rappresentanza' nel welfare state si manifesta quando:",
                answers: [
                    "I cittadini sentono che le loro esigenze sono pienamente rappresentate dalle istituzioni.",
                    "I gruppi di interesse e i cittadini percepiscono che le loro voci non sono ascoltate o che le politiche non rispondono adeguatamente ai loro bisogni.",
                    "Aumenta la fiducia nelle istituzioni politiche.",
                    "La partecipazione elettorale è molto alta.",
                    "Le decisioni sono prese in modo trasparente e partecipato."
                ],
                correct: 1 // Corrisponde a 'I gruppi di interesse e i cittadini...' (indice 1)
            },
            {
                text: "Quale delle seguenti è una caratteristica delle 'politiche per l'infanzia' nel welfare state moderno?",
                answers: [
                    "Si concentrano esclusivamente sull'assistenza ai bambini malati.",
                    "Mirano a garantire il benessere e lo sviluppo dei bambini attraverso servizi educativi, sanitari e di supporto alle famiglie, con un'ottica di investimento futuro.",
                    "Sono destinate solo ai bambini in situazioni di estrema povertà.",
                    "Non prevedono alcun coinvolgimento dello Stato.",
                    "Sono orientate solo alla punizione dei comportamenti scorretti."
                ],
                correct: 1 // Corrisponde a 'Mirano a garantire il benessere...' (indice 1)
            }
        ]
    },
    {
        title: "Lezione 8",
        questions: [
            {
                text: "Quale dei seguenti è un esempio di 'politica di attivazione' nel welfare state?",
                answers: [
                    "Sussidi di disoccupazione a lungo termine senza requisiti.",
                    "Programmi di formazione professionale e servizi di collocamento per i disoccupati.",
                    "Pensioni di anzianità anticipate.",
                    "Erogazione di un reddito di base incondizionato.",
                    "Riduzione delle tasse per le imprese."
                ],
                correct: 1 // Corrisponde a 'Programmi di formazione professionale...' (indice 1)
            },
            {
                text: "Il concetto di 'sostenibilità finanziaria' del welfare state si riferisce principalmente a:",
                answers: [
                    "La capacità di mantenere un elevato livello di spesa sociale senza generare deficit o debito eccessivo.",
                    "La capacità di ridurre tutte le prestazioni sociali.",
                    "La dipendenza esclusiva da finanziamenti privati.",
                    "La capacità di aumentare la spesa senza limiti.",
                    "La capacità di eliminare la tassazione."
                ],
                correct: 0 // Corrisponde a 'La capacità di mantenere...' (indice 0)
            },
            {
                text: "Quale delle seguenti affermazioni è vera riguardo al 'regime di welfare mediterraneo' (es. Italia, Spagna)?",
                answers: [
                    "È caratterizzato da un universalismo spinto e servizi pubblici ampi.",
                    "Presenta un forte ruolo della famiglia, un sistema dualistico di protezione sociale e un'alta frammentazione.",
                    "Si basa principalmente su un'assistenza residuale e sul mercato.",
                    "Ha un'elevata de-mercificazione e de-familizzazione.",
                    "È dominato da assicurazioni sociali uniformi per tutti i lavoratori."
                ],
                correct: 1 // Corrisponde a 'Presenta un forte ruolo della famiglia...' (indice 1)
            },
            {
                text: "La 'crisi del modello breadwinner' ha portato alla necessità di:",
                answers: [
                    "Rafforzare il ruolo tradizionale dell'uomo come unico sostentatore.",
                    "Sviluppare politiche di conciliazione vita-lavoro e supportare la partecipazione femminile al mercato del lavoro.",
                    "Ridurre la partecipazione femminile al mercato del lavoro.",
                    "Eliminare i servizi per l'infanzia.",
                    "Aumentare la dipendenza delle famiglie dallo Stato."
                ],
                correct: 1 // Corrisponde a 'Sviluppare politiche di conciliazione...' (indice 1)
            },
            {
                text: "Cosa si intende per 'de-familizzazione' nel contesto del welfare state?",
                answers: [
                    "L'aumento del ruolo delle famiglie nell'erogazione di cura.",
                    "La riduzione della dipendenza degli individui dalla famiglia per la protezione sociale, grazie a servizi e trasferimenti statali.",
                    "La promozione di un modello familiare tradizionale.",
                    "La diminuzione del tasso di natalità.",
                    "L'emigrazione dei membri della famiglia."
                ],
                correct: 1 // Corrisponde a 'La riduzione della dipendenza...' (indice 1)
            },
            {
                text: "Le riforme pensionistiche che introducono il 'sistema a ripartizione' si basano su:",
                answers: [
                    "Ogni lavoratore accumula contributi su un conto individuale che verrà utilizzato per la propria pensione.",
                    "I contributi versati dai lavoratori attuali finanziano direttamente le pensioni dei pensionati attuali.",
                    "Le pensioni sono finanziate esclusivamente da investimenti sul mercato azionario.",
                    "Il sistema è completamente privatizzato.",
                    "Le pensioni sono determinate dall'ultima retribuzione, indipendentemente dai contributi."
                ],
                correct: 1 // Corrisponde a 'I contributi versati...' (indice 1)
            },
            {
                text: "Quale delle seguenti è una sfida legata alla 'digitalizzazione' dei servizi di welfare?",
                answers: [
                    "Una maggiore inclusione digitale per tutti i cittadini.",
                    "Il rischio di esclusione per le fasce della popolazione con scarse competenze digitali o accesso limitato alla tecnologia.",
                    "La riduzione della burocrazia senza alcun effetto negativo.",
                    "Una maggiore interazione umana nei servizi.",
                    "La scomparsa della necessità di protezione dei dati."
                ],
                correct: 1 // Corrisponde a 'Il rischio di esclusione...' (indice 1)
            },
            {
                text: "Il concetto di 'welfare aziendale' (corporate welfare) è un esempio di:",
                answers: [
                    "Centralizzazione del welfare nelle mani dello Stato.",
                    "Espansione del 'welfare mix' con un ruolo crescente delle imprese nella fornitura di beni e servizi ai dipendenti.",
                    "Riduzione di qualsiasi forma di protezione sociale.",
                    "Eliminazione della responsabilità sociale delle imprese.",
                    "Privatizzazione totale dei servizi pubblici."
                ],
                correct: 1 // Corrisponde a 'Espansione del 'welfare mix'...' (indice 1)
            },
            {
                text: "Le politiche di 'inclusione sociale' mirano a:",
                answers: [
                    "Escludere determinate categorie dalla società.",
                    "Garantire la piena partecipazione di tutti gli individui alla vita economica, sociale e culturale, superando le barriere e le disuguaglianze.",
                    "Fornire solo assistenza monetaria ai più poveri.",
                    "Limitare l'accesso ai servizi pubblici.",
                    "Promuovere la segregazione sociale."
                ],
                correct: 1 // Corrisponde a 'Garantire la piena partecipazione...' (indice 1)
            },
            {
                text: "Quale ruolo ha la 'società civile' (associazioni, volontariato) nel welfare mix?",
                answers: [
                    "Un ruolo ininfluente e passivo.",
                    "Un ruolo crescente nella co-produzione di servizi, nella rappresentanza degli interessi e nell'innovazione sociale.",
                    "L'unico fornitore di servizi sociali.",
                    "Un ruolo di controllo e vigilanza esclusiva sullo Stato.",
                    "La riduzione della partecipazione civica."
                ],
                correct: 1 // Corrisponde a 'Un ruolo crescente nella co-produzione...' (indice 1)
            },
            {
                text: "Il 'Long-Term Care' (LTC) è un'area di crescente importanza a causa di:",
                answers: [
                    "La diminuzione dell'aspettativa di vita.",
                    "L'invecchiamento della popolazione e l'aumento delle malattie croniche e delle disabilità.",
                    "La riduzione dei costi sanitari.",
                    "La diminuzione della domanda di servizi di cura.",
                    "La maggiore autonomia degli anziani."
                ],
                correct: 1 // Corrisponde a 'L'invecchiamento della popolazione...' (indice 1)
            },
            {
                text: "Quale delle seguenti è una caratteristica delle 'politiche per l'infanzia' nel welfare state moderno?",
                answers: [
                    "Si concentrano esclusivamente sull'assistenza ai bambini malati.",
                    "Mirano a garantire il benessere e lo sviluppo dei bambini attraverso servizi educativi, sanitari e di supporto alle famiglie, con un'ottica di investimento futuro.",
                    "Sono destinate solo ai bambini in situazioni di estrema povertà.",
                    "Non prevedono alcun coinvolgimento dello Stato.",
                    "Sono orientate solo alla punizione dei comportamenti scorretti."
                ],
                correct: 1 // Corrisponde a 'Mirano a garantire il benessere...' (indice 1)
            },
            {
                text: "Il concetto di 'povertà multidimensionale' considera:",
                answers: [
                    "Solo la mancanza di reddito come indicatore di povertà.",
                    "La povertà come carenza non solo di reddito, ma anche di accesso a servizi essenziali (salute, istruzione, abitazione) e di opportunità.",
                    "La povertà come un fenomeno esclusivamente temporaneo.",
                    "La povertà come un problema solo nei paesi in via di sviluppo.",
                    "La povertà come un problema che si risolve solo con la crescita economica."
                ],
                correct: 1 // Corrisponde a 'La povertà come carenza non solo di reddito...' (indice 1)
            },
            {
                text: "Le politiche di 'active ageing' (invecchiamento attivo) promuovono:",
                answers: [
                    "Il ritiro precoce dal mercato del lavoro.",
                    "La partecipazione degli anziani alla vita sociale, economica e culturale, anche oltre l'età pensionabile, per migliorare il loro benessere e contribuire alla società.",
                    "L'isolamento degli anziani.",
                    "La riduzione delle opportunità per gli anziani.",
                    "La dipendenza degli anziani dalla famiglia."
                ],
                correct: 1 // Corrisponde a 'La partecipazione degli anziani...' (indice 1)
            },
            {
                text: "Quale delle seguenti è una sfida per il welfare state legata all'aumento delle 'migrazioni internazionali'?",
                answers: [
                    "La diminuzione della diversità culturale.",
                    "La necessità di integrare i migranti nei sistemi di protezione sociale, garantendo accesso ai servizi e prevenendo l'esclusione.",
                    "La riduzione della domanda di servizi sociali.",
                    "La semplificazione delle procedure burocratiche.",
                    "L'eliminazione delle barriere linguistiche."
                ],
                correct: 1 // Corrisponde a 'La necessità di integrare i migranti...' (indice 1)
            },
            {
                text: "Il 'Reddito di Base Incondizionato' (UBI) si differenzia dai sussidi tradizionali perché:",
                answers: [
                    "È condizionato alla ricerca di lavoro.",
                    "È erogato a tutti i cittadini, indipendentemente dal reddito o dalla condizione lavorativa, senza requisiti di partecipazione.",
                    "È destinato solo ai disoccupati.",
                    "È finanziato esclusivamente da contributi dei lavoratori.",
                    "È un programma temporaneo."
                ],
                correct: 1 // Corrisponde a 'È erogato a tutti i cittadini...' (indice 1)
            },
            {
                text: "Quale delle seguenti è una tendenza comune nelle riforme del 'mercato del lavoro' nei welfare state contemporanei?",
                answers: [
                    "Aumentare la rigidità contrattuale e la protezione del posto di lavoro a vita.",
                    "Promuovere la flessibilità e l'adattabilità del mercato del lavoro, spesso bilanciandola con misure di sicurezza sociale (flexicurity).",
                    "Eliminare i sindacati e la contrattazione collettiva.",
                    "Ridurre la mobilità dei lavoratori.",
                    "Incentivare il lavoro nero."
                ],
                correct: 1 // Corrisponde a 'Promuovere la flessibilità e l'adattabilità...' (indice 1)
            },
            {
                text: "Il concetto di 'Europeanization' del welfare state implica:",
                answers: [
                    "La creazione di un unico welfare state europeo con politiche uniformi.",
                    "L'influenza delle politiche e delle istituzioni dell'Unione Europea sui sistemi di welfare nazionali, portando a processi di convergenza o coordinamento.",
                    "La riduzione di qualsiasi forma di cooperazione tra gli stati membri in materia sociale.",
                    "La promozione di modelli di welfare completamente diversi tra i paesi europei.",
                    "L'esclusiva responsabilità degli stati nazionali per le politiche sociali."
                ],
                correct: 1 // Corrisponde a 'L'influenza delle politiche...' (indice 1)
            },
            {
                text: "Le politiche di 'gender mainstreaming' nel welfare state mirano a:",
                answers: [
                    "Creare politiche separate per uomini e donne.",
                    "Integrare una prospettiva di genere in tutte le fasi di progettazione, attuazione e valutazione delle politiche, per promuovere l'uguaglianza di genere.",
                    "Ridurre la partecipazione femminile al mercato del lavoro.",
                    "Ignorare le differenze di genere nelle politiche sociali.",
                    "Promuovere ruoli di genere tradizionali."
                ],
                correct: 1 // Corrisponde a 'Integrare una prospettiva di genere...' (indice 1)
            },
            {
                text: "Quale delle seguenti è una potenziale conseguenza del 'cambiamento climatico' per il welfare state?",
                answers: [
                    "Una riduzione della domanda di servizi sanitari.",
                    "Nuove sfide in termini di salute pubblica, migrazioni, sicurezza alimentare e necessità di adattamento sociale.",
                    "La scomparsa della povertà.",
                    "Un aumento della stabilità economica.",
                    "La riduzione dei costi per la protezione sociale."
                ],
                correct: 1 // Corrisponde a 'Nuove sfide in termini di salute pubblica...' (indice 1)
            },
            {
                text: "Il concetto di 'welfare generativo' si concentra su:",
                answers: [
                    "La fornitura di prestazioni passive e assistenziali.",
                    "L'investimento in capitale umano e sociale per promuovere l'autonomia, la partecipazione e la capacità delle persone di contribuire alla società.",
                    "La riduzione della spesa pubblica attraverso tagli indiscriminati.",
                    "L'eliminazione di qualsiasi forma di solidarietà sociale.",
                    "La dipendenza esclusiva dal mercato."
                ],
                correct: 1 // Corrisponde a 'L'investimento in capitale umano...' (indice 1)
            },
            {
                text: "Le 'politiche per la famiglia' nei welfare state contemporanei spesso mirano a:",
                answers: [
                    "Promuovere un unico modello familiare tradizionale.",
                    "Supportare la diversità delle strutture familiari e le esigenze di conciliazione vita-lavoro, con servizi per l'infanzia e congedi parentali.",
                    "Ridurre il sostegno economico alle famiglie.",
                    "Incentivare la natalità senza alcun supporto ai genitori.",
                    "Eliminare la responsabilità dello Stato per il benessere dei bambini."
                ],
                correct: 1 // Corrisponde a 'Supportare la diversità delle strutture familiari...' (indice 1)
            },
            {
                text: "Quale delle seguenti affermazioni descrive il ruolo delle 'organizzazioni del terzo settore' nel welfare contemporaneo?",
                answers: [
                    "Sono attori marginali e non rilevanti.",
                    "Forniscono servizi e supporto, spesso colmando lacune lasciate dallo Stato o offrendo approcci innovativi, e rappresentano gli interessi dei cittadini.",
                    "Sono responsabili unicamente della gestione delle pensioni.",
                    "Mirano esclusivamente al profitto.",
                    "Non collaborano mai con lo Stato."
                ],
                correct: 1 // Corrisponde a 'Forniscono servizi e supporto...' (indice 1)
            },
            {
                text: "La 'povertà energetica' è un nuovo rischio sociale che evidenzia:",
                answers: [
                    "La mancanza di accesso a fonti di energia rinnovabile.",
                    "L'incapacità di un nucleo familiare di riscaldare adeguatamente la propria abitazione o di accedere a servizi energetici essenziali a costi sostenibili.",
                    "La dipendenza esclusiva dall'energia nucleare.",
                    "L'eccessivo consumo di energia da parte delle famiglie ricche.",
                    "La riduzione dei prezzi dell'energia."
                ],
                correct: 1 // Corrisponde a 'L'incapacità di un nucleo familiare...' (indice 1)
            },
            {
                text: "Il concetto di 'cittadinanza sociale' implica:",
                answers: [
                    "Che i diritti sociali sono acquisiti solo attraverso il lavoro retribuito.",
                    "Che tutti i cittadini hanno diritto a un certo livello di benessere e protezione sociale, indipendentemente dalla loro condizione economica o lavorativa.",
                    "La riduzione dei diritti civili e politici.",
                    "La dipendenza esclusiva dalla carità privata.",
                    "L'eliminazione di qualsiasi forma di solidarietà."
                ],
                correct: 1 // Corrisponde a 'Che tutti i cittadini hanno diritto...' (indice 1)
            }
        ]
    },
    {
        title: "Lezione 9",
        questions: [
            {
                text: "Quale principio è alla base dei sistemi di welfare che enfatizzano la 'selettività'?",
                answers: [
                    "L'erogazione universale delle prestazioni a tutti i cittadini.",
                    "La fornitura di prestazioni solo a coloro che dimostrano un effettivo stato di bisogno (prova dei mezzi).",
                    "La dipendenza esclusiva dai contributi lavorativi.",
                    "La promozione dell'uguaglianza di risultato tra tutti i cittadini.",
                    "La nazionalizzazione di tutti i servizi sociali."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Il concetto di 'de-mercificazione' è stato introdotto da quale studioso per classificare i regimi di welfare?",
                answers: [
                    "Richard Titmuss.",
                    "Gøsta Esping-Andersen.",
                    "William Beveridge.",
                    "Otto von Bismarck.",
                    "John Maynard Keynes."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Qual è una delle principali differenze tra 'assicurazione sociale' e 'assistenza sociale'?",
                answers: [
                    "L'assicurazione sociale è basata sulla cittadinanza, l'assistenza sociale sui contributi.",
                    "L'assicurazione sociale richiede una storia contributiva, l'assistenza sociale si basa sullo stato di bisogno.",
                    "L'assicurazione sociale è finanziata dalla fiscalità generale, l'assistenza sociale dai contributi.",
                    "L'assicurazione sociale è sempre universale, l'assistenza sociale è sempre occupazionale.",
                    "Non ci sono differenze significative, sono termini interscambiabili."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Le 'politiche passive del lavoro' si caratterizzano per:",
                answers: [
                    "L'investimento in formazione professionale e riqualificazione.",
                    "La fornitura di sussidi monetari ai disoccupati senza requisiti di attivazione immediata.",
                    "La promozione di contratti di lavoro a tempo indeterminato.",
                    "La creazione di posti di lavoro pubblici.",
                    "La riduzione dei benefici per incentivare la ricerca di lavoro."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Quale dei seguenti è un esempio di 'nuovo rischio sociale' emerso nella società post-industriale?",
                answers: [
                    "La vecchiaia.",
                    "La malattia cronica.",
                    "La disoccupazione giovanile e la precarietà lavorativa.",
                    "Gli infortuni sul lavoro.",
                    "La perdita del capofamiglia."
                ],
                correct: 2 // La risposta corretta è la terza opzione (indice 2)
            },
            {
                text: "Il concetto di 'welfare mix' descrive:",
                answers: [
                    "Un sistema di welfare gestito esclusivamente dallo Stato.",
                    "Un sistema in cui Stato, mercato, terzo settore e famiglia collaborano nell'erogazione di protezione sociale.",
                    "La privatizzazione totale di tutti i servizi di welfare.",
                    "Un modello di welfare basato unicamente sulla carità.",
                    "Un sistema in cui le prestazioni sono fornite solo da enti internazionali."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Quale delle seguenti affermazioni è vera riguardo alla 'sostenibilità demografica' del welfare state?",
                answers: [
                    "È garantita da un alto tasso di natalità e un basso tasso di mortalità.",
                    "È minacciata dall'invecchiamento della popolazione e dalla diminuzione del rapporto tra lavoratori e pensionati.",
                    "Non è un fattore rilevante per il welfare state.",
                    "Dipende esclusivamente dalla crescita economica.",
                    "È assicurata dalla riduzione dell'aspettativa di vita."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Le politiche di 'work-life balance' mirano a:",
                answers: [
                    "Separare completamente la vita professionale da quella personale.",
                    "Facilitare la conciliazione tra impegni lavorativi e responsabilità familiari/personali.",
                    "Aumentare le ore di lavoro settimanali.",
                    "Ridurre la partecipazione femminile al mercato del lavoro.",
                    "Eliminare la necessità di servizi di cura."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Il 'regime di welfare liberale' (es. Stati Uniti, Regno Unito) è caratterizzato da:",
                answers: [
                    "Un forte universalismo e servizi pubblici ampi.",
                    "Un ruolo predominante del mercato e un'assistenza sociale residuale basata sulla prova dei mezzi.",
                    "Il mantenimento delle differenze di status e assicurazioni sociali occupazionali.",
                    "Un'elevata de-mercificazione e de-familizzazione.",
                    "Un sistema di welfare finanziato principalmente da contributi obbligatori."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Quale delle seguenti è una conseguenza della 'globalizzazione economica' per i welfare state?",
                answers: [
                    "Un aumento della capacità degli stati di finanziare autonomamente il welfare.",
                    "Una maggiore pressione competitiva e la mobilità dei capitali, rendendo più difficile mantenere alti livelli di tassazione e spesa sociale.",
                    "La promozione di un unico modello di welfare a livello globale.",
                    "Una riduzione della necessità di politiche sociali grazie alla crescita economica diffusa.",
                    "Un rafforzamento della sovranità nazionale in materia di welfare."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Il concetto di 'social investment state' implica:",
                answers: [
                    "La riduzione della spesa per l'istruzione e la formazione.",
                    "L'investimento in capitale umano e sociale (es. istruzione, formazione, servizi per l'infanzia) per migliorare la produttività e l'occupabilità.",
                    "La privatizzazione totale dei servizi sociali.",
                    "La fornitura di soli sussidi passivi.",
                    "La diminuzione degli investimenti in ricerca e sviluppo."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Le riforme pensionistiche che introducono il 'sistema a capitalizzazione' si basano su:",
                answers: [
                    "I contributi versati dai lavoratori attuali finanziano direttamente le pensioni dei pensionati attuali.",
                    "Ogni lavoratore accumula contributi su un conto individuale che viene investito e utilizzato per la propria pensione futura.",
                    "Le pensioni sono finanziate esclusivamente dalla fiscalità generale.",
                    "Le pensioni sono uguali per tutti i cittadini.",
                    "Il sistema è completamente gestito dallo Stato."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Quale delle seguenti è una sfida per il welfare state legata alla 'frammentazione familiare'?",
                answers: [
                    "Una maggiore stabilità delle strutture familiari.",
                    "L'aumento della necessità di nuove forme di supporto sociale e servizi per le famiglie non tradizionali (es. monoparentali, ricomposte).",
                    "Una riduzione della domanda di servizi per l'infanzia.",
                    "Un rafforzamento delle reti di supporto informale.",
                    "Una semplificazione delle politiche familiari."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Il 'Basic Income' (Reddito di Base Incondizionato) è una proposta che mira a:",
                answers: [
                    "Sostituire tutti i servizi di welfare esistenti con un unico trasferimento monetario.",
                    "Fornire un reddito minimo a tutti i cittadini, indipendentemente dalla loro condizione lavorativa o di bisogno.",
                    "Aumentare la burocrazia per l'accesso ai benefici.",
                    "Ridurre la tassazione sui redditi più alti.",
                    "Incentivare il lavoro a tempo pieno."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Quale ruolo ha l'Unione Europea nell'evoluzione dei welfare state nazionali?",
                answers: [
                    "Impone un modello di welfare unico a tutti gli stati membri.",
                    "Non ha alcun impatto sulle politiche sociali nazionali.",
                    "Esercita un'influenza indiretta attraverso il coordinamento delle politiche economiche e sociali, raccomandazioni e la promozione di obiettivi comuni.",
                    "Finanzia direttamente tutte le prestazioni di welfare in Europa.",
                    "Promuove la privatizzazione totale dei servizi sociali."
                ],
                correct: 2 // La risposta corretta è la terza opzione (indice 2)
            },
            {
                text: "Le politiche di 'Long-Term Care' (LTC) si occupano di:",
                answers: [
                    "L'assistenza sanitaria di emergenza.",
                    "Il supporto e l'assistenza per persone anziane o con disabilità che necessitano di cure a lungo termine.",
                    "Le politiche per l'infanzia.",
                    "I sussidi di disoccupazione.",
                    "La formazione professionale."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Il concetto di 'path dependency' (dipendenza dal percorso) nel contesto del welfare state si riferisce a:",
                answers: [
                    "La capacità dei sistemi di welfare di cambiare rapidamente e radicalmente.",
                    "La tendenza dei sistemi di welfare a seguire percorsi di sviluppo predefiniti, rendendo difficile il cambiamento radicale.",
                    "La dipendenza dalle condizioni economiche attuali.",
                    "La flessibilità delle politiche sociali.",
                    "La capacità di adattarsi a nuove sfide senza vincoli storici."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Quale delle seguenti affermazioni descrive un aspetto della 'crisi di efficienza' del welfare state?",
                answers: [
                    "La capacità di erogare prestazioni in modo rapido ed efficace.",
                    "La percezione che le risorse siano sprecate o che i servizi non raggiungano gli obiettivi desiderati.",
                    "L'aumento della soddisfazione degli utenti.",
                    "La riduzione dei costi amministrativi.",
                    "La semplificazione delle procedure burocratiche."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "La 'crisi fiscale' del welfare state si manifesta principalmente attraverso:",
                answers: [
                    "Un surplus costante nel bilancio statale.",
                    "L'incapacità di finanziare adeguatamente le prestazioni a causa di entrate insufficienti o spese eccessive.",
                    "La riduzione della pressione fiscale sui cittadini.",
                    "La diminuzione del debito pubblico.",
                    "L'aumento della fiducia dei mercati finanziari."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Il concetto di 'resilienza' del welfare state si riferisce a:",
                answers: [
                    "La sua incapacità di adattarsi ai cambiamenti.",
                    "La sua rigidità strutturale.",
                    "La capacità del sistema di adattarsi e rispondere a nuove sfide e shock, mantenendo la sua funzione di protezione sociale.",
                    "La sua tendenza a collassare sotto pressione.",
                    "La sua dipendenza da un unico modello di finanziamento."
                ],
                correct: 2 // La risposta corretta è la terza opzione (indice 2)
            },
            {
                text: "Le politiche di 'housing sociale' nel welfare state mirano a:",
                answers: [
                    "Promuovere solo l'acquisto di case private di lusso.",
                    "Garantire l'accesso ad alloggi dignitosi e a prezzi accessibili per le fasce più vulnerabili della popolazione.",
                    "Eliminare qualsiasi forma di intervento pubblico nel mercato immobiliare.",
                    "Aumentare i prezzi degli affitti.",
                    "Concentrarsi solo sulla costruzione di nuove abitazioni."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Quale ruolo gioca la 'partecipazione civica' nell'evoluzione del welfare state?",
                answers: [
                    "Un ruolo ininfluente, poiché le decisioni sono prese solo dallo Stato.",
                    "Un ruolo crescente nel co-produzione di servizi, nella definizione delle priorità e nel controllo delle politiche.",
                    "La riduzione dell'interesse dei cittadini per le politiche sociali.",
                    "L'esclusiva responsabilità delle organizzazioni non profit.",
                    "La diminuzione della trasparenza."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Il concetto di 'fiscal compact' e le regole di bilancio europee hanno avuto quale impatto sui welfare state nazionali?",
                answers: [
                    "Hanno promosso un'espansione illimitata della spesa sociale.",
                    "Hanno imposto vincoli sulla spesa pubblica e sui deficit, influenzando le politiche di welfare e spingendo verso il consolidamento fiscale.",
                    "Non hanno avuto alcun impatto.",
                    "Hanno eliminato la necessità di riforme pensionistiche.",
                    "Hanno aumentato la generosità delle prestazioni."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Le politiche di 'salute mentale' sono diventate sempre più importanti nel welfare state a causa di:",
                answers: [
                    "Una diminuzione dei problemi di salute mentale nella popolazione.",
                    "Un crescente riconoscimento dell'impatto dei disturbi mentali sul benessere individuale e sociale, e la necessità di servizi integrati.",
                    "La riduzione dei costi delle cure mediche.",
                    "L'eliminazione della stigmatizzazione associata ai problemi di salute mentale.",
                    "La privatizzazione completa dei servizi di salute mentale."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Il concetto di 'welfare generativo' si concentra su:",
                answers: [
                    "La fornitura di prestazioni passive e assistenziali.",
                    "L'investimento in capitale umano e sociale per promuovere l'autonomia, la partecipazione e la capacità delle persone di contribuire alla società.",
                    "La riduzione della spesa pubblica attraverso tagli indiscriminati.",
                    "L'eliminazione di qualsiasi forma di solidarietà sociale.",
                    "La dipendenza esclusiva dal mercato."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            }
        ]
    },
    {
        title: "Lezione 10",
        questions: [
            {
                text: "Quale delle seguenti affermazioni descrive meglio il concetto di 'Welfare Pluralism'?",
                answers: [
                    "Un sistema di welfare gestito esclusivamente da enti statali.",
                    "La coesistenza e interazione di Stato, mercato, terzo settore e famiglia nell'erogazione di protezione sociale.",
                    "La totale privatizzazione di tutti i servizi di welfare.",
                    "Un modello di welfare basato unicamente sulla carità.",
                    "Un sistema in cui le prestazioni sono fornite solo da organizzazioni internazionali."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Il concetto di 'risk pooling' (mutualizzazione del rischio) è fondamentale per quale tipo di protezione sociale?",
                answers: [
                    "L'assistenza sociale residuale.",
                    "Le assicurazioni sociali obbligatorie.",
                    "I servizi di welfare aziendale.",
                    "Le donazioni private.",
                    "Il reddito di base incondizionato."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Quale dei seguenti è un esempio di 'politica di attivazione' nel contesto della disoccupazione?",
                answers: [
                    "L'erogazione di sussidi passivi senza requisiti.",
                    "Programmi di formazione e riqualificazione professionale per i disoccupati.",
                    "La riduzione delle opportunità di lavoro per i giovani.",
                    "L'aumento dell'età pensionabile per tutti.",
                    "L'eliminazione dei servizi di collocamento."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "La 'crisi di legittimità' del welfare state può derivare da:",
                answers: [
                    "Un eccessivo consenso pubblico sulle sue politiche.",
                    "La percezione di iniquità, inefficienza o insostenibilità del sistema da parte dell'opinione pubblica.",
                    "L'aumento della fiducia nelle istituzioni pubbliche.",
                    "La riduzione delle disuguaglianze sociali.",
                    "La diminuzione della pressione fiscale."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Cosa si intende per 'de-commodification' (de-mercificazione) nel contesto del welfare state?",
                answers: [
                    "La capacità degli individui di acquistare servizi sul mercato.",
                    "La misura in cui gli individui possono mantenere un tenore di vita accettabile indipendentemente dalla loro partecipazione al mercato del lavoro.",
                    "La privatizzazione dei servizi pubblici.",
                    "L'aumento della dipendenza dal mercato per la protezione sociale.",
                    "La riduzione dei salari per aumentare la competitività."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Quale dei seguenti è un fattore che contribuisce all'invecchiamento demografico?",
                answers: [
                    "L'aumento del tasso di natalità.",
                    "La diminuzione dell'aspettativa di vita.",
                    "La riduzione della mortalità e l'aumento della speranza di vita.",
                    "L'emigrazione di massa di persone anziane.",
                    "La stabilizzazione delle strutture familiari tradizionali."
                ],
                correct: 2 // La risposta corretta è la terza opzione (indice 2)
            },
            {
                text: "Il 'regime di welfare socialdemocratico' (es. Svezia, Norvegia) è caratterizzato da:",
                answers: [
                    "Un ruolo predominante del mercato e un'assistenza residuale.",
                    "Il mantenimento delle differenze di status e assicurazioni occupazionali.",
                    "Un forte universalismo, servizi pubblici ampi e di alta qualità, e un'elevata de-mercificazione.",
                    "Un sistema dualistico con forte ruolo della famiglia.",
                    "Un sistema basato principalmente sulla carità e il volontariato."
                ],
                correct: 2 // La risposta corretta è la terza opzione (indice 2)
            },
            {
                text: "Le politiche di 'work-life balance' sono particolarmente rilevanti per affrontare quale dei 'nuovi rischi sociali'?",
                answers: [
                    "La vecchiaia.",
                    "La malattia cronica.",
                    "Le difficoltà di conciliazione tra vita professionale e responsabilità familiari.",
                    "La disoccupazione di lunga durata.",
                    "L'esclusione sociale."
                ],
                correct: 2 // La risposta corretta è la terza opzione (indice 2)
            },
            {
                text: "Quale delle seguenti è una caratteristica delle riforme pensionistiche che introducono il 'sistema a ripartizione'?",
                answers: [
                    "Ogni lavoratore accumula contributi su un conto individuale.",
                    "I contributi versati dai lavoratori attuali finanziano direttamente le pensioni dei pensionati attuali.",
                    "Le pensioni sono finanziate esclusivamente da investimenti sul mercato azionario.",
                    "Il sistema è completamente privatizzato.",
                    "Le pensioni sono determinate dall'ultima retribuzione, indipendentemente dai contributi."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Il concetto di 'multi-level governance' nel welfare state implica:",
                answers: [
                    "La centralizzazione di tutte le decisioni a livello nazionale.",
                    "La delega di tutte le responsabilità a enti locali.",
                    "Il coinvolgimento di diversi livelli di governo (locale, regionale, nazionale, sovranazionale) e attori non statali nella gestione del welfare.",
                    "L'eliminazione di qualsiasi forma di coordinamento tra i livelli.",
                    "La gestione esclusiva del welfare da parte di organizzazioni internazionali."
                ],
                correct: 2 // La risposta corretta è la terza opzione (indice 2)
            },
            {
                text: "Cosa si intende per 'femminilizzazione' del welfare state?",
                answers: [
                    "L'aumento della percentuale di uomini impiegati nel settore del welfare.",
                    "Il crescente riconoscimento del ruolo delle donne come destinatarie e fornitrici di cura, e la necessità di politiche che supportino la conciliazione vita-lavoro.",
                    "La riduzione delle prestazioni destinate alle donne.",
                    "La privatizzazione dei servizi di cura, affidandoli esclusivamente alle famiglie.",
                    "L'introduzione di quote rosa obbligatorie in tutti i settori del welfare."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Il 'paradigma dell'investimento sociale' nel welfare state enfatizza:",
                answers: [
                    "La riduzione della spesa per l'istruzione e la formazione.",
                    "L'investimento in politiche che migliorano le capacità individuali e la produttività, come istruzione, formazione e servizi per l'infanzia.",
                    "La privatizzazione totale dei servizi sociali.",
                    "La fornitura di soli sussidi passivi.",
                    "La diminuzione degli investimenti in ricerca e sviluppo."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Quale delle seguenti è una critica comune alle politiche di 'austerità' applicate al welfare state?",
                answers: [
                    "Rafforzano la protezione sociale.",
                    "Possono portare a un aumento delle disuguaglianze e della povertà, e a un deterioramento della qualità dei servizi.",
                    "Promuovono la crescita economica sostenibile.",
                    "Aumentano la spesa pubblica a lungo termine.",
                    "Semplificano l'accesso ai benefici."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Il concetto di 'Universal Basic Services' (UBS) si differenzia dal Reddito di Base Incondizionato perché:",
                answers: [
                    "UBS è un trasferimento monetario, mentre il Reddito di Base è la fornitura di servizi.",
                    "UBS si concentra sulla fornitura gratuita di beni e servizi essenziali, mentre il Reddito di Base è un trasferimento monetario.",
                    "UBS è destinato solo ai più poveri, mentre il Reddito di Base è universale.",
                    "UBS è sempre finanziato tramite contributi, mentre il Reddito di Base tramite tassazione.",
                    "Non c'è alcuna differenza significativa tra i due concetti."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Quale impatto si prevede che l'automazione e l'intelligenza artificiale avranno sul mercato del lavoro e, di conseguenza, sul welfare state?",
                answers: [
                    "Una diminuzione della disoccupazione e un aumento dei salari per tutti.",
                    "Una maggiore stabilità occupazionale e meno rischi sociali.",
                    "Potenziali perdite di posti di lavoro in alcuni settori e la necessità di nuove forme di protezione e riqualificazione.",
                    "La scomparsa della necessità di politiche attive del lavoro.",
                    "Un ritorno al lavoro manuale su larga scala."
                ],
                correct: 2 // La risposta corretta è la terza opzione (indice 2)
            },
            {
                text: "Le politiche di 'welfare preventivo' mirano a:",
                answers: [
                    "Intervenire solo quando un problema sociale è già conclamato.",
                    "Prevenire l'insorgere di problemi sociali o mitigarne gli effetti negativi prima che diventino gravi, investendo in servizi precoci.",
                    "Ridurre la spesa sociale eliminando i servizi di prevenzione.",
                    "Fornire assistenza passiva a lungo termine.",
                    "Concentrarsi esclusivamente sulla cura delle malattie."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Il concetto di 'capitale sociale' è rilevante per il welfare state perché:",
                answers: [
                    "Descrive la ricchezza finanziaria degli individui.",
                    "Si riferisce alle reti di relazioni e alla fiducia che possono facilitare la cooperazione e l'erogazione informale di supporto sociale.",
                    "È un indicatore della spesa pubblica per il welfare.",
                    "Misura l'efficienza della burocrazia statale.",
                    "È un sinonimo di capitale economico."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Le politiche di 'empowerment' nel welfare state mirano a:",
                answers: [
                    "Aumentare la dipendenza degli individui dai servizi statali.",
                    "Rafforzare la capacità degli individui e delle comunità di prendere decisioni e agire per migliorare la propria vita, riducendo la passività.",
                    "Ridurre la partecipazione civica.",
                    "Concentrarsi solo sui trasferimenti monetari.",
                    "Eliminare la responsabilità individuale."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Qual è una delle principali sfide per le politiche educative nel contesto del welfare state contemporaneo?",
                answers: [
                    "La diminuzione della domanda di istruzione.",
                    "Garantire l'equità nell'accesso e la qualità dell'istruzione in un contesto di crescenti disuguaglianze e nuove esigenze del mercato del lavoro.",
                    "La riduzione degli investimenti nell'istruzione pubblica.",
                    "L'eliminazione della formazione professionale.",
                    "La standardizzazione dei curricula a livello globale."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Il 'dividendo demografico' si riferisce a:",
                answers: [
                    "La diminuzione del rapporto tra popolazione in età lavorativa e popolazione dipendente (anziani e giovani).",
                    "Un periodo in cui la proporzione di persone in età lavorativa è particolarmente elevata, offrendo opportunità di crescita economica.",
                    "L'aumento del tasso di natalità.",
                    "L'invecchiamento della popolazione.",
                    "La riduzione dell'aspettativa di vita."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Quale ruolo gioca la 'partecipazione civica' nell'evoluzione del welfare state?",
                answers: [
                    "Un ruolo ininfluente, poiché le decisioni sono prese solo dallo Stato.",
                    "Un ruolo crescente nel co-produzione di servizi, nella definizione delle priorità e nel controllo delle politiche.",
                    "La riduzione dell'interesse dei cittadini per le politiche sociali.",
                    "L'esclusiva responsabilità delle organizzazioni non profit.",
                    "La diminuzione della trasparenza."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Il concetto di 'fiscal compact' e le regole di bilancio europee hanno avuto quale impatto sui welfare state nazionali?",
                answers: [
                    "Hanno promosso un'espansione illimitata della spesa sociale.",
                    "Hanno imposto vincoli sulla spesa pubblica e sui deficit, influenzando le politiche di welfare e spingendo verso il consolidamento fiscale.",
                    "Non hanno avuto alcun impatto.",
                    "Hanno eliminato la necessità di riforme pensionistiche.",
                    "Hanno aumentato la generosità delle prestazioni."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Le politiche di 'salute mentale' sono diventate sempre più importanti nel welfare state a causa di:",
                answers: [
                    "Una diminuzione dei problemi di salute mentale nella popolazione.",
                    "Un crescente riconoscimento dell'impatto dei disturbi mentali sul benessere individuale e sociale, e la necessità di servizi integrati.",
                    "La riduzione dei costi delle cure mediche.",
                    "L'eliminazione della stigmatizzazione associata ai problemi di salute mentale.",
                    "La privatizzazione completa dei servizi di salute mentale."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Quale delle seguenti è una potenziale conseguenza del 'cambiamento climatico' per il welfare state?",
                answers: [
                    "Una riduzione della domanda di servizi sanitari.",
                    "Nuove sfide in termini di salute pubblica, migrazioni, sicurezza alimentare e necessità di adattamento sociale.",
                    "La scomparsa della povertà.",
                    "Un aumento della stabilità economica.",
                    "La riduzione dei costi per la protezione sociale."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            },
            {
                text: "Il concetto di 'welfare generativo' si concentra su:",
                answers: [
                    "La fornitura di prestazioni passive e assistenziali.",
                    "L'investimento in capitale umano e sociale per promuovere l'autonomia, la partecipazione e la capacità delle persone di contribuire alla società.",
                    "La riduzione della spesa pubblica attraverso tagli indiscriminati.",
                    "L'eliminazione di qualsiasi forma di solidarietà sociale.",
                    "La dipendenza esclusiva dal mercato."
                ],
                correct: 1 // La risposta corretta è la seconda opzione (indice 1)
            }
        ]
    }
];

if (typeof window !== 'undefined') {
    window.quizSections = quizSections;
    window.randomizeAnswers = randomizeAnswers;
    quizSections.forEach(section => {
        randomizeAnswers(section.questions);
    });
}