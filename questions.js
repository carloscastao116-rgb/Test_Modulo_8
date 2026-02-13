const questionsData = [
    {
        question: "¿Cuál era la principal preocupación del movimiento 'cypherpunk' en los años 70 y 80?",
        options: {
            A: "La rentabilidad de las inversiones digitales",
            B: "La pérdida de privacidad en el entorno digital debido a los intermediarios",
            C: "La velocidad de las transacciones bancarias",
            D: "La creación de redes sociales descentralizadas"
        },
        answer: "B",
        [cite_start]explanation: "Los cypherpunks buscaban proteger la libertad individual y la privacidad frente a la vigilancia y censura de intermediarios centralizados[cite: 10, 11, 12]."
    },
    {
        question: "¿Qué gran problema del dinero digital resolvió Satoshi Nakamoto con el Whitepaper de Bitcoin?",
        options: {
            A: "La falta de anonimato total",
            B: "El alto consumo energético",
            C: "El problema del doble gasto sin necesidad de un tercero centralizado",
            D: "La lentitud de los servidores gubernamentales"
        },
        answer: "C",
        [cite_start]explanation: "Bitcoin permite realizar pagos P2P asegurando que el dinero no pueda copiarse ni duplicarse (doble gasto) a través de una red descentralizada[cite: 16, 17, 20, 22]."
    },
    {
        question: "En el ecosistema de Bitcoin, ¿cuál es la función principal de los nodos?",
        options: {
            A: "Resolver problemas matemáticos para emitir nuevas monedas",
            B: "Verificar que todas las transacciones cumplan las reglas del protocolo",
            C: "Fabricar las hardware wallets",
            D: "Fijar el precio de mercado del activo"
        },
        answer: "B",
        [cite_start]explanation: "Los nodos son el control descentralizado; ellos verifican el cumplimiento de las reglas y rechazan bloques inválidos[cite: 26, 142, 215]."
    },
    {
        question: "¿Qué define la propiedad de un activo en la red Bitcoin?",
        options: {
            A: "La posesión física de un dispositivo hardware wallet",
            B: "El reconocimiento de un banco o registro estatal",
            C: "El control exclusivo de la información criptográfica (clave privada/semilla)",
            D: "El nombre del titular registrado en la blockchain"
        },
        answer: "C",
        [cite_start]explanation: "La propiedad se basa en el control de las claves privadas; el conocimiento de la semilla permite reconstruir el acceso en cualquier momento[cite: 36, 39, 41]."
    },
    {
        question: "¿Por qué se afirma que Bitcoin es una categoría económica distinta a otras criptomonedas?",
        options: {
            A: "Porque fue la primera en subir de precio",
            B: "Porque no depende de una fundación, equipo gestor o empresa que cambie sus reglas",
            C: "Porque es la única que utiliza una blockchain",
            D: "Porque solo puede comprarse con dólares"
        },
        answer: "B",
        [cite_start]explanation: "A diferencia de otros proyectos que funcionan como startups con líderes, Bitcoin no tiene dirección ni entidad que altere su política monetaria[cite: 52, 54, 55]."
    },
    {
        question: "Desde el punto de vista económico, ¿cuál es el encaje principal de Bitcoin actualmente?",
        options: {
            A: "Medio de intercambio cotidiano para micro-pagos",
            B: "Reserva de valor estable sin volatilidad",
            C: "Depósito de valor que compite con el oro o los inmuebles",
            D: "Un activo financiero estatal"
        },
        answer: "C",
        [cite_start]explanation: "Su oferta limitada y resistencia a la censura lo sitúan como un depósito de valor, aunque no es una reserva estable debido a su volatilidad[cite: 69, 70, 114]."
    },
    {
        question: "¿Qué efecto tiene Bitcoin sobre la capacidad de los Estados según los apuntes?",
        options: {
            A: "Destruye automáticamente la soberanía nacional",
            B: "Actúa como un límite externo a la capacidad de abuso fiscal y monetario",
            C: "Permite a los Estados imprimir más dinero sin inflación",
            D: "Elimina la necesidad de fronteras físicas"
        },
        answer: "B",
        [cite_start]explanation: "Al permitir atesorar riqueza fuera del control tradicional, obliga a los Estados a moderar sus comportamientos para evitar la fuga de capital[cite: 86, 87, 88]."
    },
    {
        question: "¿Qué es la 'semilla' (seed phrase) en una cartera de Bitcoin?",
        options: {
            A: "La contraseña para encender la computadora",
            B: "Una secuencia de 12 o 24 palabras que permite recuperar todas las claves privadas",
            C: "El código fuente del software de Bitcoin",
            D: "El número de serie de la hardware wallet"
        },
        answer: "B",
        [cite_start]explanation: "La semilla abstrae la complejidad criptográfica y permite restaurar la propiedad del activo incluso si se pierde el hardware[cite: 39, 202, 209]."
    },
    {
        question: "¿Cuál es la función del mecanismo 'Proof of Work' (Prueba de Trabajo)?",
        options: {
            A: "Identificar legalmente a los usuarios de la red",
            B: "Convertir energía y hardware en seguridad verificable para el registro",
            C: "Acelerar las transacciones para que sean instantáneas",
            D: "Permitir que los bancos centrales controlen la emisión"
        },
        answer: "B",
        [cite_start]explanation: "El Proof of Work sella los bloques y hace que alterar el historial sea extremadamente costoso, alineando los incentivos de la red[cite: 134, 135, 173]."
    },
    {
        question: "¿Qué distingue a una blockchain pública 'permissionless' como Bitcoin?",
        options: {
            A: "Que solo las empresas autorizadas pueden validar datos",
            B: "Que cualquier usuario puede consultar la información y cualquier nodo participar en la validación",
            C: "Que los datos pueden ser borrados por consenso del gobierno",
            D: "Que no requiere conexión a internet"
        },
        answer: "B",
        [cite_start]explanation: "En sistemas públicos y sin permiso, no hay restricciones para unirse a la red o auditar el registro[cite: 263, 266]."
    },
    {
        question: "¿Para qué sirve la tecnología 'Lightning Network'?",
        options: {
            A: "Para aumentar el número máximo de bitcoins que existirán",
            B: "Para permitir pagos rápidos, frecuentes y de bajo coste fuera de la capa base",
            C: "Para minar bitcoins usando menos energía",
            D: "Para conectar la blockchain con el sistema de impuestos"
        },
        answer: "B",
        [cite_start]explanation: "Lightning es una solución que permite usar Bitcoin para pagos cotidianos de forma eficiente y con mayor privacidad[cite: 257, 258]."
    },
    {
        question: "En la fiscalidad española, ¿cuándo se genera generalmente una obligación tributaria en el IRPF?",
        options: {
            A: "Por la mera tenencia de bitcoin en una cartera fría",
            B: "Cuando ocurre un evento de transmisión (venta o permuta)",
            C: "Cada vez que se descarga el software de un nodo",
            D: "Al leer el Whitepaper de Satoshi Nakamoto"
        },
        answer: "B",
        [cite_start]explanation: "La tributación suele activarse ante hechos económicos como la venta o el intercambio por otros activos[cite: 278, 281]."
    },
    {
        question: "¿Cómo tributa la obtención de bitcoin mediante la actividad de minería?",
        options: {
            A: "Está exenta de impuestos por ser una actividad tecnológica",
            B: "Genera tributación en el IRPF por el valor de mercado en el momento de su generación",
            C: "Solo tributa cuando los bitcoins se venden por euros",
            D: "Tributa como una donación del protocolo"
        },
        answer: "B",
        [cite_start]explanation: "La minería se considera una actividad económica donde el valor del activo generado se integra en la base imponible[cite: 283]."
    },
    {
        question: "¿Qué factor determina la localización del bitcoin a efectos del Impuesto sobre el Patrimonio?",
        options: {
            A: "La nacionalidad de Satoshi Nakamoto",
            B: "Si está en custodia de un tercero o en autocustodia",
            C: "La marca de la hardware wallet utilizada",
            D: "El precio del activo el día de la compra"
        },
        answer: "B",
        [cite_start]explanation: "La forma de custodia influye en la localización del activo y, por tanto, en las obligaciones fiscales de tenencia[cite: 288, 289]."
    },
    {
        question: "¿Por qué se considera que Bitcoin tiene una 'oferta estrictamente limitada'?",
        options: {
            A: "Porque los mineros deciden cuántos fabricar cada día",
            B: "Porque su política monetaria está definida en el código y no puede ser alterada por ninguna autoridad",
            C: "Porque ya se han minado todos los posibles",
            D: "Porque el oro limita su producción"
        },
        answer: "B",
        [cite_start]explanation: "El diseño técnico garantiza un límite máximo de 21 millones, ajeno a decisiones discrecionales de gobiernos o bancos[cite: 55, 143]."
    }
];