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
        explanation: "El objetivo de Bitcoin era permitir transacciones entre personas sin intermediarios, resolviendo el problema del doble gasto."
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
        explanation: "Los nodos validan y propagan transacciones, asegurando que se cumplan las reglas sin confiar en terceros."
    },
    {
        question: "¿Cuál de estas afirmaciones es cierta respecto al whitepaper de Bitcoin?",
        options: {
            A: "Fue publicado por Vitalik Buterin en 2013",
            B: "Se define como un sistema de efectivo electrónico peer-to-peer",
            C: "Propone una red cerrada y privada para grandes bancos",
            D: "Su objetivo principal era evitar el uso de criptografía"
        },
        answer: "B",
        explanation: "En el whitepaper de 2008, Satoshi Nakamoto lo define como un sistema de efectivo electrónico entre pares."
    },
    {
        question: "¿Qué es la 'clave privada' en el contexto de Bitcoin?",
        options: {
            A: "Una contraseña que se puede recuperar solicitándola a la red",
            B: "Un número secreto que permite gastar los bitcoins asociados",
            C: "La dirección que compartes para recibir pagos",
            D: "El nombre de usuario para acceder a la blockchain"
        },
        answer: "B",
        explanation: "La clave privada es la que otorga el control total sobre los fondos; si se pierde, no hay forma de recuperarla."
    },
    {
        question: "¿Por qué se dice que Bitcoin es una red 'permissionless' (sin permiso)?",
        options: {
            A: "Porque cualquiera puede unirse, validar y usar la red sin pedir autorización",
            B: "Porque el gobierno permite su uso legal",
            C: "Porque no hace falta internet para usarla",
            D: "Porque las transacciones son gratuitas siempre"
        },
        answer: "A",
        explanation: "Cualquier persona en cualquier lugar puede participar en la red sin necesidad de registro previo o permiso de una autoridad."
    },
    {
        question: "¿Qué papel juega el 'minero' en la red?",
        options: {
            A: "Imprimir billetes físicos de Bitcoin",
            B: "Vigilar que los usuarios no usen seudónimos",
            C: "Aportar poder de cómputo para asegurar la red y procesar transacciones",
            D: "Gestionar las cuentas de los clientes"
        },
        answer: "C",
        explanation: "Los mineros aseguran la red mediante la Prueba de Trabajo (PoW) y a cambio reciben una recompensa en BTC."
    },
    {
        question: "¿Qué ocurre fiscalmente al intercambiar BTC por ETH en España?",
        options: {
            A: "No ocurre nada porque no hay euros de por medio",
            B: "Se genera un evento fiscal (permuta) que puede generar ganancia patrimonial",
            C: "Solo tributa si el exchange está en España",
            D: "Se considera una donación"
        },
        answer: "B",
        explanation: "La permuta constituye una transmisión y debe declararse en el IRPF si hay una variación de valor."
    },
    {
        question: "¿Qué método utiliza Hacienda para determinar qué bitcoin se ha vendido?",
        options: {
            A: "LIFO (Last-In, First-Out)",
            B: "Valor medio ponderado",
            C: "FIFO (First-In, First-Out)",
            D: "Elección libre del contribuyente"
        },
        answer: "C",
        explanation: "Hacienda aplica el criterio FIFO: se considera que los primeros bitcoins vendidos son los primeros que se compraron."
    },
    {
        question: "¿Cuál es el límite máximo de suministro de Bitcoin?",
        options: {
            A: "100 millones",
            B: "No tiene límite",
            C: "21 millones",
            D: "Varía según la inflación anual"
        },
        answer: "C",
        explanation: "El protocolo establece un límite fijo e inalterable de 21 millones de unidades."
    },
    {
        question: "¿Qué es una 'Hardware Wallet'?",
        options: {
            A: "Una aplicación gratuita de móvil",
            B: "Un dispositivo físico diseñado para guardar claves privadas fuera de internet",
            C: "Un servidor de un banco que custodia criptomonedas",
            D: "Un tipo de tarjeta de crédito"
        },
        answer: "B",
        explanation: "Es un dispositivo de 'almacenamiento en frío' que ofrece la mayor seguridad al no estar conectado a la red."
    }
];
