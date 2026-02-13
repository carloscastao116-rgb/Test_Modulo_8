const questionsData = [
    {
        question: "¿Cuál era la principal preocupación del movimiento 'cypherpunk'?",
        options: {
            A: "La rentabilidad de las inversiones digitales",
            B: "La pérdida de privacidad debido a los intermediarios centralizados",
            C: "La velocidad de las redes WiFi",
            D: "La creación de redes sociales"
        },
        answer: "B",
        explanation: "Los cypherpunks buscaban proteger la libertad individual y la privacidad frente a la vigilancia de terceros mediante la criptografía."
    },
    {
        question: "¿Qué problema histórico del dinero digital resolvió Satoshi Nakamoto?",
        options: {
            A: "El coste de las tarjetas de crédito",
            B: "La falta de internet en zonas rurales",
            C: "El problema del doble gasto sin un tercero de confianza",
            D: "La inflación del dólar"
        },
        answer: "C",
        explanation: "Bitcoin permitió por primera vez que un activo digital no pudiera ser duplicado sin necesidad de que un banco lo validara."
    },
    {
        question: "En Bitcoin, ¿cuál es la función de los nodos?",
        options: {
            A: "Emitir nuevos préstamos",
            B: "Verificar que todas las transacciones cumplan las reglas del protocolo",
            C: "Vender hardware wallets",
            D: "Fijar el precio del Bitcoin"
        },
        answer: "B",
        explanation: "Los nodos son los auditores de la red; aseguran que nadie haga trampas y que se respeten las reglas de consenso."
    },
    {
        question: "¿Qué define realmente la propiedad de un Bitcoin?",
        options: {
            A: "Tener el archivo descargado en el móvil",
            B: "Un registro en el Banco de España",
            C: "El control de las claves privadas (la semilla)",
            D: "El nombre de usuario y contraseña de un exchange"
        },
        answer: "C",
        explanation: "En Bitcoin, 'tus llaves, tus bitcoins'. La propiedad reside en el conocimiento de la clave criptográfica privada."
    },
    {
        question: "¿Por qué Bitcoin se considera una categoría económica distinta a otras criptomonedas?",
        options: {
            A: "Porque es la más cara",
            B: "Porque no tiene un líder, fundación o empresa que pueda cambiar sus reglas",
            C: "Porque usa una base de datos centralizada",
            D: "Porque solo se puede usar en El Salvador"
        },
        answer: "B",
        explanation: "La ausencia de un 'punto central de fallo' o equipo gestor hace que Bitcoin sea un descubrimiento, no solo un invento corporativo."
    },
    {
        question: "¿Qué es la 'semilla' (seed phrase) en la autocustodia?",
        options: {
            A: "Una clave que se planta en el ordenador",
            B: "Una secuencia de 12 o 24 palabras que permite recuperar el acceso a los fondos",
            C: "El código de barras de la billetera",
            D: "El número de teléfono asociado a la cuenta"
        },
        answer: "B",
        explanation: "La semilla es la representación mnemónica de tus claves privadas; si pierdes tu dispositivo, con ella recuperas tu dinero."
    },
    {
        question: "¿Cuál es el objetivo de la 'Lightning Network'?",
        options: {
            A: "Hacer que Bitcoin sea más caro",
            B: "Permitir pagos instantáneos y casi gratuitos a gran escala",
            C: "Minar bloques más rápido",
            D: "Cambiar Bitcoin por oro automáticamente"
        },
        answer: "B",
        explanation: "Es una 'capa 2' diseñada para que Bitcoin sea usable como medio de pago diario sin colapsar la red principal."
    },
    {
        question: "¿Qué es el 'Proof of Work' (Prueba de Trabajo)?",
        options: {
            A: "Un contrato laboral para mineros",
            B: "Un mecanismo que vincula el mundo digital con el gasto de energía física para dar seguridad",
            C: "Un sistema de votación por correo",
            D: "Una prueba de identidad del usuario"
        },
        answer: "B",
        explanation: "El PoW asegura la red haciendo que sea prohibitivamente caro intentar atacar o modificar el historial de transacciones."
    },
    {
        question: "¿Cómo tributa la minería de Bitcoin en España según los apuntes?",
        options: {
            A: "Está exenta de impuestos",
            B: "Tributa en el IRPF por el valor de mercado del bitcoin en el momento de su obtención",
            C: "Solo tributa si lo pasas a euros",
            D: "Tributa como un premio de lotería"
        },
        answer: "B",
        explanation: "La obtención de monedas mediante minería se considera una actividad económica sujeta a tributación desde el momento de la recepción."
    },
    {
        question: "¿Qué evento activa la tributación en el IRPF para un inversor común?",
        options: {
            A: "Mirar el precio en una App",
            B: "Comprar Bitcoin con euros",
            C: "Un evento de transmisión (venta o permuta por otra cripto)",
            D: "Descargar un monedero digital"
        },
        answer: "C",
        explanation: "La ganancia o pérdida patrimonial se genera cuando vendes el activo o lo cambias por otra criptomoneda diferente."
    }
];
