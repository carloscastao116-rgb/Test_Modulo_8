const questionsData = [
    {
        question: "¿Cuál era la principal preocupación de los 'cypherpunks'?",
        options: {
            A: "La velocidad de las redes sociales",
            B: "La pérdida de privacidad en el entorno digital",
            C: "El precio de las acciones tecnológicas",
            D: "La creación de hardware más potente"
        },
        answer: "B",
        explanation: "Los cypherpunks se preocupaban por la pérdida de privacidad debido a que todo en internet pasaba por intermediarios[cite: 10, 11, 12]."
    },
    {
        question: "¿Qué problema del dinero digital resolvió Satoshi Nakamoto?",
        options: {
            A: "La falta de servidores",
            B: "El coste de las transferencias",
            C: "El doble gasto",
            D: "La identidad de los usuarios"
        },
        answer: "C",
        explanation: "Bitcoin resuelve el problema de que en digital todo puede copiarse, evitando que el dinero se duplique[cite: 20, 21, 22]."
    },
    {
        question: "¿Qué define el derecho de propiedad en Bitcoin?",
        options: {
            A: "Un registro en el Banco Central",
            B: "El control de la información criptográfica (clave privada)",
            C: "Tener la aplicación instalada",
            D: "Un contrato firmado ante notario"
        },
        answer: "B",
        explanation: "La propiedad se basa exclusivamente en el control de la clave privada, que funciona como una escritura pública digital[cite: 36, 38]."
    },
    {
        question: "¿Qué permite la 'semilla' (seed phrase)?",
        options: {
            A: "Mejorar la velocidad de internet",
            B: "Reconstruir la clave privada en cualquier dispositivo",
            C: "Cambiar el nombre del propietario",
            D: "Eliminar transacciones antiguas"
        },
        answer: "B",
        explanation: "La semilla es una secuencia de palabras que permite recuperar el acceso a los fondos incluso si se pierde el hardware[cite: 39, 40]."
    },
    {
        question: "A diferencia de otras criptomonedas, ¿por qué Bitcoin es una categoría distinta?",
        options: {
            A: "Porque es la más antigua",
            B: "Porque no tiene un líder, fundación o equipo gestor",
            C: "Porque solo usa una blockchain",
            D: "Porque es más rápida que las demás"
        },
        answer: "B",
        explanation: "Bitcoin no es un proyecto empresarial ni depende de una entidad que pueda cambiar sus reglas[cite: 52, 55]."
    },
    {
        question: "¿Cuál es la prioridad del protocolo Bitcoin?",
        options: {
            A: "La velocidad de las transacciones",
            B: "La verificabilidad y resistencia a la manipulación",
            C: "Bajar el precio del hardware",
            D: "Sustituir a todas las tarjetas de crédito"
        },
        answer: "B",
        explanation: "La prioridad es que cualquier nodo pueda comprobar que las reglas se cumplen sin confiar en nadie[cite: 59, 60]."
    },
    {
        question: "¿Qué función cumplen los 'nodos' en la red?",
        options: {
            A: "Emitir nuevos bitcoins",
            B: "Verificar el cumplimiento de las reglas",
            C: "Solo almacenar el precio",
            D: "Fabricar hardware wallets"
        },
        answer: "B",
        explanation: "Los nodos verifican que todo se cumpla según las reglas y rechazan bloques inválidos[cite: 26, 215]."
    },
    {
        question: "¿Qué permite la 'Lightning Network'?",
        options: {
            A: "Minar más rápido",
            B: "Pagos instantáneos y de bajo coste",
            C: "Cambiar las reglas de Bitcoin",
            D: "Eliminar la necesidad de internet"
        },
        answer: "B",
        explanation: "Lightning hace posible pagos rápidos y frecuentes que serían inviables en la capa base[cite: 257]."
    },
    {
        question: "En España, ¿cómo tributa la obtención de Bitcoin mediante minería?",
        options: {
            A: "Está exenta de impuestos",
            B: "Tributa en el IRPF por el valor de mercado al recibirlo",
            C: "Solo tributa si se vende",
            D: "Tributa como una donación"
        },
        answer: "B",
        explanation: "La obtención por minería genera tributación en el IRPF basada en el valor de mercado en ese momento[cite: 283]."
    },
    {
        question: "¿Qué evento activa la tributación para un inversor común?",
        options: {
            A: "Comprar Bitcoin",
            B: "La transmisión (venta o permuta por otra cripto)",
            C: "Descargar un monedero",
            D: "Leer noticias sobre Bitcoin"
        },
        answer: "B",
        explanation: "La obligación tributaria surge generalmente ante un evento de transmisión, como vender o cambiar por otra moneda[cite: 281]."
    }
];
