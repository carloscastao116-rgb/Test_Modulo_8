const questionsData = [
    {
        question: "¿Qué problema fundamental resolvía Bitcoin al nacer?",
        options: {
            A: "Evitar el doble gasto en un sistema digital sin necesidad de terceros",
            B: "Mejorar la velocidad de las transferencias bancarias",
            C: "Crear una red social alternativa a Facebook",
            D: "Aumentar la rentabilidad del dinero en el sistema financiero"
        },
        answer: "A",
        explanation: "El objetivo de Bitcoin era permitir transacciones electrónicas entre personas sin intermediarios, resolviendo el problema del doble gasto."
    },
    {
        question: "¿Qué función cumplen los nodos en la red de Bitcoin?",
        options: {
            A: "Ejecutar las transacciones que ordena el banco central",
            B: "Procesar los pagos con tarjeta",
            C: "Verificar todas las transacciones y hacer cumplir las reglas del protocolo",
            D: "Controlar la emisión de nuevos bitcoins de forma centralizada"
        },
        answer: "C",
        explanation: "Los nodos validan y propagan transacciones, asegurando que se cumplan las reglas sin necesidad de confiar en terceros."
    },
    {
        question: "¿Cuál de estas afirmaciones es cierta respecto al whitepaper de Bitcoin?",
        options: {
            A: "Fue publicado por Vitalik Buterin en 2013",
            B: "Se define como un sistema de efectivo electrónico peer-to-peer",
            C: "Propone una red cerrada y privada para grandes bancos",
            D: "Su objetivo principal era evitar el uso de criptografía en internet"
        },
        answer: "B",
        explanation: "En el whitepaper de 2008, Satoshi Nakamoto lo presenta como un sistema de efectivo electrónico entre pares que elimina intermediarios."
    },
    {
        question: "¿Qué es lo que demuestra realmente la propiedad de bitcoins?",
        options: {
            A: "La posesión de una hardware wallet",
            B: "El registro en una plataforma de intercambio",
            C: "El control de la clave privada",
            D: "La validación por parte de un banco"
        },
        answer: "C",
        explanation: "La propiedad depende exclusivamente del control de la clave privada, que permite firmar transacciones y mover los fondos."
    },
    {
        question: "¿Por qué se dice que la propiedad en Bitcoin es absoluta?",
        options: {
            A: "Porque está garantizada por tratados internacionales",
            B: "Porque depende de la fuerza física del propietario",
            C: "Porque no puede ser alterada, confiscada ni revertida por el Estado",
            D: "Porque siempre está asociada a una identidad legal"
        },
        answer: "C",
        explanation: "Bitcoin permite una forma de propiedad que no puede ser intervenida por autoridades mientras el dueño conserve su clave privada."
    },
    {
        question: "¿En qué sentido puede considerarse Bitcoin un 'activo real digital'?",
        options: {
            A: "Porque está respaldado por una empresa privada",
            B: "Porque su existencia depende de una fundación",
            C: "Porque su valor se decide por votación de los usuarios",
            D: "Porque no depende de una entidad emisora ni de la voluntad de terceros"
        },
        answer: "D",
        explanation: "Su existencia y reglas están definidas por el protocolo y la red, lo que lo asemeja a activos reales como el oro."
    },
    {
        question: "¿Por qué no es correcto agrupar Bitcoin junto al resto de criptomonedas?",
        options: {
            A: "Porque pertenece a una categoría económica distinta y no funciona como un proyecto empresarial",
            B: "Porque Bitcoin no utiliza criptografía",
            C: "Porque Bitcoin es una red privada",
            D: "Porque Bitcoin depende de una fundación central"
        },
        answer: "A",
        explanation: "Bitcoin es un sistema monetario sin emisor ni gestor discrecional, a diferencia de la mayoría de criptoactivos que funcionan como startups."
    },
    {
        question: "¿Por qué la lentitud de Bitcoin no se considera un fallo del sistema?",
        options: {
            A: "Porque prioriza la verificabilidad y la resistencia a la manipulación frente a la velocidad",
            B: "Porque pretende sustituir a Visa y Mastercard",
            C: "Porque los bloques podrían minarse más rápido si se quisiera",
            D: "Porque depende de servidores centralizados"
        },
        answer: "A",
        explanation: "El diseño prioriza que cualquier nodo pueda verificar transacciones sin intermediarios, reforzando seguridad y descentralización."
    },
    {
        question: "¿En qué categoría económica encaja mejor Bitcoin?",
        options: {
            A: "Reserva de valor estable",
            B: "Depósito de valor",
            C: "Medio de pago cotidiano",
            D: "Activo respaldado por deuda"
        },
        answer: "B",
        explanation: "Aunque es volátil, permite almacenar riqueza asumiendo la incertidumbre de su valoración futura."
    },
    {
        question: "¿Por qué Bitcoin introduce una tensión directa con el Estado?",
        options: {
            A: "Porque elimina completamente la necesidad de impuestos",
            B: "Porque sustituye a los sistemas democráticos",
            C: "Porque permite una forma de propiedad absoluta fuera del control estatal",
            D: "Porque centraliza el poder monetario"
        },
        answer: "C",
        explanation: "Al permitir propiedad fuera del control territorial o estatal, desafía el pilar histórico del poder estatal sobre el patrimonio."
    },
    {
        question: "¿Qué papel juega Bitcoin frente a los excesos del Estado?",
        options: {
            A: "Actúa como una alternativa política directa",
            B: "Sustituye las instituciones públicas",
            C: "Refuerza la capacidad recaudatoria",
            D: "Introduce un límite y un poder de negociación frente al Estado"
        },
        answer: "D",
        explanation: "Incentiva la moderación fiscal y monetaria al ofrecer a los ciudadanos una vía de escape al control patrimonial."
    },
    {
        question: "¿Qué pueden hacer los Estados para beneficiarse de Bitcoin?",
        options: {
            A: "Integrarlo mediante marcos jurídicos favorables y fomentar su adopción",
            B: "Prohibir su uso para evitar la pérdida de soberanía",
            C: "Modificar su protocolo para adaptarlo a sus intereses",
            D: "Centralizar su emisión"
        },
        answer: "A",
        explanation: "Los Estados pueden aprovecharlo promoviendo regulación favorable, minería o integrándolo como activo patrimonial."
    },
    {
        question: "¿Por qué se define el dinero como una tecnología social?",
        options: {
            A: "Porque surge para reducir los costes de transacción y la incertidumbre en los intercambios",
            B: "Porque depende exclusivamente del Estado",
            C: "Porque solo existe en formato digital",
            D: "Porque requiere siempre intermediarios financieros"
        },
        answer: "A",
        explanation: "Es una herramienta que facilita intercambios impersonales reduciendo costes y riesgos sociales."
    },
    {
        question: "¿Qué se entiende por sistema monetario dual?",
        options: {
            A: "Un sistema donde dos Estados comparten moneda",
            B: "Un sistema basado exclusivamente en deuda pública",
            C: "Un sistema en el que distintos activos cumplen funciones monetarias distintas",
            D: "Un sistema donde el dinero pierde valor constantemente"
        },
        answer: "C",
        explanation: "Se da cuando se emplean diferentes activos para el intercambio y para el depósito patrimonial."
    },
    {
        question: "¿Cuál es el principal valor económico de Bitcoin según esta teoría?",
        options: {
            A: "Su capacidad para sustituir al dinero fiat en el corto plazo",
            B: "Su utilidad como medio de pago diario",
            C: "Su papel como activo especulativo sin valor fundamental",
            D: "Su función de protección patrimonial en determinados estados del mundo"
        },
        answer: "D",
        explanation: "Su valor reside en reducir costes de protección patrimonial frente a escenarios económicos extremos."
    },
    {
        question: "¿Qué papel desempeña la criptografía en el origen de Bitcoin?",
        options: {
            A: "Sirve únicamente para ocultar identidades",
            B: "Permite reducir el poder de intervención de los Estados en las transacciones",
            C: "Sustituye completamente a las instituciones jurídicas",
            D: "Garantiza la estabilidad de precios"
        },
        answer: "B",
        explanation: "La criptografía protege la identidad y el patrimonio, limitando la intervención estatal en el ámbito digital."
    },
    {
        question: "¿Por qué la Proof of Work funciona como un mecanismo de veracidad?",
        options: {
            A: "Porque impide cualquier modificación del historial",
            B: "Porque centraliza la validación en los mineros",
            C: "Porque convierte la energía invertida en una señal honesta difícil de falsificar",
            D: "Porque elimina la necesidad de nodos"
        },
        answer: "C",
        explanation: "El coste computacional hace que las alteraciones sean costosas y fácilmente detectables por la red."
    },
    {
        question: "¿Qué distingue a Bitcoin de otros sistemas monetarios desde el punto de vista social?",
        options: {
            A: "Su dependencia de líderes visibles",
            B: "Su vinculación a una jurisdicción concreta",
            C: "Su control por instituciones financieras",
            D: "Su autonomía respecto a Estados y organizaciones"
        },
        answer: "D",
        explanation: "Bitcoin no depende de ninguna organización central, sino del consenso distribuido de sus participantes."
    },
    {
        question: "¿Qué patrón histórico se observa en la relación entre imperios y sus monedas?",
        options: {
            A: "Las monedas se fortalecen indefinidamente con el poder imperial",
            B: "El auge y caída de los imperios suele ir acompañado del deterioro de su moneda",
            C: "Las monedas no guardan relación con el poder político",
            D: "Los imperios caen exclusivamente por causas militares"
        },
        answer: "B",
        explanation: "Históricamente, la degradación del sistema monetario dominante coincide con la pérdida de hegemonía política."
    },
    {
        question: "¿Por qué Bitcoin resulta relevante en un contexto de transición hegemónica?",
        options: {
            A: "Porque garantiza el liderazgo de un nuevo imperio",
            B: "Porque sustituye automáticamente a las divisas estatales",
            C: "Porque ofrece un activo ajeno a la lógica monetaria imperial tradicional",
            D: "Porque elimina los ciclos económicos"
        },
        answer: "C",
        explanation: "Actúa como una alternativa para preservar valor sin estar ligado a un Estado o imperio específico."
    },
    {
        question: "¿Cuál es la principal diferencia entre Bitcoin y los activos tradicionales en términos de protección?",
        options: {
            A: "Los activos tradicionales dependen de energía, Bitcoin no",
            B: "Bitcoin depende del uso de la fuerza física",
            C: "Los activos tradicionales son siempre más seguros",
            D: "Bitcoin sustituye el coste humano por el coste energético"
        },
        answer: "D",
        explanation: "Mientras los activos tradicionales usan la fuerza (ejércitos/policía), Bitcoin basa su seguridad en matemáticas y energía."
    },
    {
        question: "¿Por qué las revalorizaciones porcentuales de Bitcoin tienden a moderarse con el tiempo?",
        options: {
            A: "Porque los halvings pierden efecto",
            B: "Porque al aumentar su capitalización el crecimiento relativo se normaliza",
            C: "Porque deja de ser escaso",
            D: "Porque los Estados controlan su precio"
        },
        answer: "B",
        explanation: "A mayor capitalización, se requiere mucho más capital para mover el precio en el mismo porcentaje."
    },
    {
        question: "¿Qué combinación de características define mejor el comportamiento histórico de Bitcoin como activo?",
        options: {
            A: "Baja volatilidad y baja rentabilidad",
            B: "Alta estabilidad y crecimiento constante",
            C: "Alta volatilidad y elevada rentabilidad anualizada",
            D: "Estabilidad absoluta a largo plazo"
        },
        answer: "C",
        explanation: "Históricamente ha tenido grandes oscilaciones pero una de las rentabilidades anualizadas más altas."
    },
    {
        question: "¿Por qué Bitcoin sigue considerándose un activo en fase temprana?",
        options: {
            A: "Porque no tiene un protocolo terminado",
            B: "Porque su capitalización es muy inferior a la de activos tradicionales como el oro",
            C: "Porque no puede utilizarse como inversión",
            D: "Porque depende de decisiones políticas"
        },
        answer: "B",
        explanation: "Su tamaño de mercado es aún una fracción comparada con activos de reserva consolidados como el oro."
    },
    {
        question: "¿Por qué se dice que las propiedades de Bitcoin son emergentes y no del código en sí?",
        options: {
            A: "Porque dependen únicamente de la criptografía",
            B: "Porque aparecen solo cuando el sistema de incentivos alcanza suficiente escala",
            C: "Porque están programadas explícitamente en el software",
            D: "Porque los Estados las garantizan"
        },
        answer: "B",
        explanation: "La descentralización y seguridad nacen de la interacción de los participantes incentivados, no solo de las líneas de código."
    },
    {
        question: "¿Cuál es la función principal de la clave privada en Bitcoin?",
        options: {
            A: "Generar nuevas direcciones",
            B: "Observar los movimientos de la cartera",
            C: "Firmar transacciones y transferir la propiedad",
            D: "Verificar bloques"
        },
        answer: "C",
        explanation: "La clave privada es lo que permite autorizar el gasto; quien la posee es el dueño real de los fondos."
    },
    {
        question: "¿Por qué el alto coste energético del minado refuerza la seguridad del sistema?",
        options: {
            A: "Porque reduce el número de nodos",
            B: "Porque hace innecesaria la verificación",
            C: "Porque garantiza precios estables",
            D: "Porque desincentiva comportamientos deshonestos al hacerlos costosos"
        },
        answer: "D",
        explanation: "Si un minero intenta atacar la red, pierde su inversión en energía al ser rechazado por los nodos."
    },
    {
        question: "¿Cuál es la función principal de la semilla en una cartera de Bitcoin?",
        options: {
            A: "Almacenar los bitcoins",
            B: "Sustituir a la clave privada",
            C: "Permitir derivar todas las claves y restaurar la cartera",
            D: "Verificar bloques"
        },
        answer: "C",
        explanation: "La semilla (frase de recuperación) permite regenerar todas las claves y accesos en caso de pérdida del dispositivo."
    },
    {
        question: "¿Por qué Bitcoin utiliza un modelo basado en UTxOs en lugar de saldos?",
        options: {
            A: "Para facilitar la inflación monetaria",
            B: "Para permitir que los nodos verifiquen cada gasto y evitar el doble gasto",
            C: "Para ocultar el historial de transacciones",
            D: "Para centralizar la contabilidad"
        },
        answer: "B",
        explanation: "El modelo de Salidas No Gastadas (UTXO) permite auditar que cada moneda no se ha gastado dos veces de forma eficiente."
    },
    {
        question: "¿Qué factor determina principalmente la prioridad de una transacción en la red?",
        options: {
            A: "La antigüedad del usuario",
            B: "La reputación del emisor",
            C: "El tipo de dirección utilizada",
            D: "La comisión ofrecida al minero"
        },
        answer: "D",
        explanation: "Como el espacio por bloque es limitado, los mineros seleccionan primero las transacciones que más pagan por byte."
    },
    {
        question: "¿Qué es realmente una wallet en Bitcoin?",
        options: {
            A: "Un monedero que almacena bitcoins",
            B: "Una cuenta bancaria digital",
            C: "Una herramienta para gestionar claves privadas",
            D: "Un contrato inteligente"
        },
        answer: "C",
        explanation: "Los bitcoins viven en la blockchain; la wallet solo guarda las llaves que te dan acceso a ellos."
    },
    {
        question: "¿Cuál es la diferencia principal entre una cartera fría y una caliente?",
        options: {
            A: "El tipo de moneda que almacenan",
            B: "El nivel de conexión a Internet",
            C: "El coste de las comisiones",
            D: "El tipo de direcciones utilizadas"
        },
        answer: "B",
        explanation: "Las carteras frías (cold) están offline para seguridad; las calientes (hot) están online para conveniencia."
    },
    {
        question: "¿Por qué las hardware wallets mejoran la seguridad?",
        options: {
            A: "Porque eliminan la necesidad de nodos",
            B: "Porque almacenan bitcoins fuera de la blockchain",
            C: "Porque permiten firmar transacciones sin exponer la clave privada",
            D: "Porque garantizan anonimato total"
        },
        answer: "C",
        explanation: "La clave privada nunca sale del chip del dispositivo, impidiendo que hackers la roben por internet."
    },
    {
        question: "¿Para qué sirve una cartera watch-only?",
        options: {
            A: "Para gastar fondos sin restricciones",
            B: "Para minar bitcoin",
            C: "Para almacenar la semilla",
            D: "Para observar movimientos sin exponer claves privadas"
        },
        answer: "D",
        explanation: "Permite ver el saldo y las transacciones usando solo la clave pública, sin riesgo de que se puedan gastar los fondos."
    },
    {
        question: "¿Cuál es el principal riesgo de las software wallets?",
        options: {
            A: "La imposibilidad de firmar transacciones",
            B: "La exposición de las claves al estar en dispositivos conectados",
            C: "La falta de compatibilidad con Bitcoin",
            D: "El coste económico"
        },
        answer: "B",
        explanation: "Al estar en un móvil o PC conectado, son vulnerables a virus o troyanos que busquen las claves."
    },
    {
        question: "¿Por qué es importante separar la semilla y la passphrase?",
        options: {
            A: "Para facilitar el uso diario",
            B: "Para cumplir requisitos legales",
            C: "Para reducir el tamaño del respaldo",
            D: "Para aumentar la seguridad ante robos o pérdidas"
        },
        answer: "D",
        explanation: "Si alguien encuentra tu semilla de 12/24 palabras pero no la passphrase, no podrá acceder a tus fondos."
    },
    {
        question: "¿Qué define mejor a una blockchain desde el punto de vista técnico?",
        options: {
            A: "Una base de datos centralizada",
            B: "Un sistema de contabilidad distribuida basado en bloques enlazados",
            C: "Un software de pagos digitales",
            D: "Una red privada de empresas"
        },
        answer: "B",
        explanation: "Es un registro de datos repartido entre muchos participantes donde los bloques se unen con criptografía."
    },
    {
        question: "¿Por qué el uso de blockchain no garantiza por sí solo descentralización o seguridad?",
        options: {
            A: "Porque todas las blockchains usan Proof of Work",
            B: "Porque la criptografía es opcional",
            C: "Porque depende de un sistema de incentivos y gobernanza",
            D: "Porque depende siempre de una autoridad central"
        },
        answer: "C",
        explanation: "La tecnología blockchain sola es solo una base de datos; necesita incentivos correctos para ser segura y descentralizada."
    },
    {
        question: "¿Cuál es una de las principales deficiencias actuales de muchas blockchains públicas?",
        options: {
            A: "Falta de nodos",
            B: "Ausencia de criptografía",
            C: "Imposibilidad de crear tokens",
            D: "Problemas de escalabilidad y privacidad"
        },
        answer: "D",
        explanation: "La mayoría de redes públicas luchan por procesar muchas transacciones rápido y mantener la privacidad de los usuarios."
    },
    {
        question: "¿Cuál es el objetivo principal de una stablecoin?",
        options: {
            A: "Sustituir a Bitcoin como reserva de valor",
            B: "Mantener una paridad estable con un activo de referencia",
            C: "Eliminar la necesidad de regulación financiera",
            D: "Aumentar la volatilidad del mercado cripto"
        },
        answer: "B",
        explanation: "Buscan tener el mismo valor que un activo estable, generalmente el dólar estadounidense (1:1)."
    },
    {
        question: "¿Qué riesgo es más relevante en las stablecoins centralizadas?",
        options: {
            A: "El riesgo de escalabilidad",
            B: "El riesgo tecnológico de la blockchain",
            C: "El riesgo de contraparte del emisor",
            D: "El riesgo energético"
        },
        answer: "C",
        explanation: "Dependes totalmente de que la empresa emisora realmente tenga los dólares que dice tener y no sea insolvente."
    },
    {
        question: "¿Qué efecto económico relevante tienen las stablecoins a escala global?",
        options: {
            A: "Debilitan el papel del dólar",
            B: "Eliminan los sistemas bancarios",
            C: "Aumentan la inflación mundial",
            D: "Facilitan la dolarización y reducen costes en pagos internacionales"
        },
        answer: "D",
        explanation: "Permiten que personas en cualquier país accedan a dólares digitales fácilmente, abaratando los pagos."
    },
    {
        question: "¿Qué es una sidechain en el contexto de Bitcoin?",
        options: {
            A: "Una actualización obligatoria del protocolo",
            B: "Una blockchain completamente independiente",
            C: "Una cadena paralela conectada a Bitcoin con reglas propias",
            D: "Un tipo de wallet avanzada"
        },
        answer: "C",
        explanation: "Es una cadena de bloques secundaria que permite 'mover' bitcoins hacia ella para usar funciones que no tiene la capa principal."
    },
    {
        question: "¿Cuál es la principal característica distintiva de Liquid?",
        options: {
            A: "Es una sidechain completamente descentralizada",
            B: "Funciona sin relación con Bitcoin",
            C: "Sustituye a Lightning Network",
            D: "Es una sidechain federada orientada a empresas"
        },
        answer: "D",
        explanation: "Liquid es gestionada por un grupo de empresas (federación) para permitir intercambios rápidos y privados."
    },
    {
        question: "¿Por qué Liquid no se considera una capa fundamental del sistema Bitcoin?",
        options: {
            A: "Porque elimina la Proof of Work",
            B: "Porque requiere confianza en una federación",
            C: "Porque no permite mover bitcoin",
            D: "Porque no utiliza blockchain"
        },
        answer: "B",
        explanation: "Al depender de intermediarios (la federación), rompe el principio de Bitcoin de no tener que confiar en nadie."
    },
    {
        question: "¿Cuál es la principal diferencia entre Rootstock (RSK) y la red principal de Bitcoin?",
        options: {
            A: "Que RSK permite contratos inteligentes compatibles con Ethereum mediante una sidechain",
            B: "Que RSK elimina la necesidad de confianza",
            C: "Que RSK sustituye la minería"
        },
        answer: "A",
        explanation: "Rootstock trae la capacidad de ejecutar contratos inteligentes complejos a Bitcoin usando una cadena lateral."
    },
    {
        question: "¿Cuál es la función principal de Lightning Network dentro del ecosistema Bitcoin?",
        options: {
            A: "Sustituir la blockchain de Bitcoin",
            B: "Aumentar la capacidad transaccional operando fuera de la cadena",
            C: "Eliminar la necesidad de nodos",
            D: "Centralizar los pagos"
        },
        answer: "B",
        explanation: "Permite millones de pagos instantáneos y casi gratis sin colapsar la red principal de Bitcoin."
    },
    {
        question: "¿Qué papel cumple la blockchain de Bitcoin en Lightning Network?",
        options: {
            A: "Procesar todos los pagos intermedios",
            B: "Actuar como red de enrutamiento",
            C: "Garantizar la seguridad al inicio y al cierre de los canales",
            D: "Fijar las comisiones de Lightning"
        },
        answer: "C",
        explanation: "La red principal solo se usa para abrir o liquidar el canal; es el juez final en caso de disputa."
    },
    {
        question: "¿Cuál es una de las principales debilidades de Lightning Network?",
        options: {
            A: "La falta de seguridad",
            B: "La gestión de la liquidez y la tendencia a la custodia",
            C: "La falta de criptografía",
            D: "La dependencia de Proof of Stake"
        },
        answer: "B",
        explanation: "Requiere que los canales tengan fondos bloqueados, lo que a veces lleva a usar soluciones centralizadas por facilidad."
    },
    {
        question: "¿Qué diferencia fundamental a un Distributed Ledger (DLT) de una base de datos distribuida tradicional?",
        options: {
            A: "El uso de bloques",
            B: "La velocidad de procesamiento",
            C: "La asunción de un modelo adversarial",
            D: "El uso de criptomonedas"
        },
        answer: "C",
        explanation: "Un DLT asume que puede haber participantes malvados y sigue funcionando; las bases de datos normales asumen que todos son honestos."
    },
    {
        question: "¿Por qué las blockchains privadas no ofrecen las mismas garantías que las públicas?",
        options: {
            A: "Porque no utilizan criptografía",
            B: "Porque su gobernanza es centralizada y basada en permisos",
            C: "Porque no pueden procesar transacciones",
            D: "Porque no almacenan información"
        },
        answer: "B",
        explanation: "Al ser controladas por un dueño o grupo, pueden censurar o cambiar los datos a su antojo."
    },
    {
        question: "¿Qué característica distingue a Proof of Work frente a otros mecanismos de consenso?",
        options: {
            A: "La necesidad de identidad",
            B: "La rapidez en la validación",
            C: "El uso de votaciones",
            D: "La ausencia de permisos y la seguridad basada en coste energético"
        },
        answer: "D",
        explanation: "Cualquiera puede participar sin permiso y la seguridad se mide por el trabajo físico/energético realizado."
    },
    {
        question: "¿Cuándo se produce un evento fiscal en Bitcoin?",
        options: {
            A: "Cuando hacienda se entera",
            B: "Cuando se realiza un hecho económico o jurídico relevante",
            C: "Cuando se mantiene en autocustodia",
            D: "Cuando se mina un bloque"
        },
        answer: "B",
        explanation: "Las obligaciones tributarias nacen en el momento en que se produce la venta, permuta o ganancia según la ley."
    },
    {
        question: "¿Qué impuesto se genera al vender bitcoin con ganancia en España?",
        options: {
            A: "IVA",
            B: "ITP",
            C: "ISD",
            D: "IRPF (base del ahorro)"
        },
        answer: "D",
        explanation: "La ganancia (diferencia entre precio de compra y venta) tributa como renta del ahorro en el IRPF."
    },
    {
        question: "¿Qué método utiliza Hacienda para determinar qué bitcoin se ha vendido?",
        options: {
            A: "LIFO",
            B: "Valor medio",
            C: "FIFO",
            D: "Elección del contribuyente"
        },
        answer: "C",
        explanation: "Se usa el método FIFO (First In, First Out): se considera que los primeros que compraste son los primeros que vendes."
    },
    {
        question: "¿Qué ocurre fiscalmente al intercambiar BTC por ETH?",
        options: {
            A: "No ocurre nada porque no hay euros",
            B: "Se genera un evento fiscal",
            C: "Solo tributa si hay beneficio",
            D: "Solo tributa el exchange"
        },
        answer: "B",
        explanation: "Cambiar una cripto por otra (permuta) es legalmente una venta de la primera y una compra de la segunda."
    },
    {
        question: "¿Qué doble efecto fiscal tiene una donación de bitcoin?",
        options: {
            A: "Solo tributa el donatario",
            B: "Solo tributa el donante",
            C: "Tributan donante y donatario",
            D: "No tributa nadie"
        },
        answer: "C",
        explanation: "El que recibe paga Impuesto de Sucesiones/Donaciones, y el que da debe tributar en IRPF si el valor subió desde que lo compró."
    },
    {
        question: "¿Por qué la residencia fiscal es clave en la tributación de Bitcoin?",
        options: {
            A: "Porque determina el precio del bitcoin",
            B: "Porque define qué normativa e impuestos se aplican",
            C: "Porque elimina el método FIFO",
            D: "Porque evita el IRPF"
        },
        answer: "B",
        explanation: "Tus obligaciones dependen de dónde vivas más de 183 días al año, ya que cada país tiene leyes distintas."
    }
];
