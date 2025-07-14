// Array di domande: ogni domanda ha testo, 5 risposte e l'indice della risposta corretta
const questions = [
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
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const nextBtn = document.getElementById('next-btn');
const resultEl = document.getElementById('result');

function showQuestion(index) {
    answered = false;
    const q = questions[index];
    questionEl.textContent = q.text;
    answersEl.innerHTML = '';
    resultEl.textContent = '';
    nextBtn.style.display = 'none';
    q.answers.forEach((ans, i) => {
        const btn = document.createElement('button');
        btn.textContent = ans;
        btn.onclick = () => selectAnswer(i);
        answersEl.appendChild(btn);
    });
}

function selectAnswer(selected) {
    if (answered) return;
    answered = true;
    const q = questions[currentQuestion];
    Array.from(answersEl.children).forEach((btn, i) => {
        btn.classList.remove('selected');
        if (i === q.correct) btn.classList.add('correct');
        if (i === selected && i !== q.correct) btn.classList.add('incorrect');
        if (i === selected) btn.classList.add('selected');
        btn.disabled = true;
    });
    if (selected === q.correct) {
        score++;
        resultEl.textContent = 'Risposta corretta!';
    } else {
        resultEl.textContent = `Risposta sbagliata! Quella giusta era: ${q.answers[q.correct]}`;
    }
    nextBtn.style.display = 'inline-block';
    if (currentQuestion === questions.length - 1) {
        nextBtn.textContent = 'Vedi il risultato';
    } else {
        nextBtn.textContent = 'Prossima domanda';
    }
}

nextBtn.onclick = () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    } else {
        showResult();
    }
};

function showResult() {
    questionEl.textContent = 'Quiz completato!';
    answersEl.innerHTML = '';
    nextBtn.style.display = 'none';
    resultEl.textContent = `Hai risposto correttamente a ${score} su ${questions.length} domande.`;
}

// Avvia il quiz
showQuestion(currentQuestion);
