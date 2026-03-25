// O SEU BANCO DE DADOS DE MISSÕES (VERSÃO COMPLETA)
// Para desbloquear uma missão, basta mudar o status para "desbloqueado"

const arvoreDeSkills = [
    {
        nivel: "NÍVEL 1: A Fundação",
        descricao: "O tutorial. Onde a nossa história começou.",
        missoes: [
            { titulo: "Contato Visual", desc: "O primeiro flerte/olhar na escola.", status: "desbloqueado" },
            { titulo: "Add Friend", desc: "A primeira mensagem no WhatsApp.", status: "desbloqueado" },
            { titulo: "Call Noturna", desc: "A primeira ligação até a madrugada.", status: "desbloqueado" },
            { titulo: "Codinome", desc: "Dar o primeiro apelido carinhoso.", status: "desbloqueado" },
            { titulo: "Quebra de Gelo", desc: "O Primeiro Beijo.", status: "desbloqueado" },
            { titulo: "Coragem Máxima", desc: "Falar o primeiro 'Eu te amo'.", status: "desbloqueado" },
            { titulo: "Sincronia Musical", desc: "Descobrir a música favorita do outro.", status: "desbloqueado" }
        ]
    },
    {
        nivel: "NÍVEL 2: Intimidade & Loucura",
        descricao: "Farmando XP de casal e quebrando barreiras.",
        missoes: [
            { titulo: "Fogo no Parquinho", desc: "Primeira vez na cama.", status: "desbloqueado" },
            { titulo: "Modo Adrenalina", desc: "Primeira vez no carro.", status: "desbloqueado" },
            { titulo: "Conexão Física", desc: "Dormir de conchinha a noite toda.", status: "desbloqueado" },
            { titulo: "Quilometragem", desc: "Viajar/pegar estrada só para ver o outro.", status: "desbloqueado" },
            { titulo: "Roubo", desc: "Roubar a primeira peça de roupa do outro.", status: "bloqueado" },
            { titulo: "Ponto Fraco", desc: "Descobrir onde o outro tem mais cócegas.", status: "bloqueado" },
            { titulo: "Ataque de Risos", desc: "Crise de riso até a barriga doer.", status: "bloqueado" },
            { titulo: "Intimidade", desc: "Tomar o primeiro banho juntos.", status: "bloqueado" },
            { titulo: "Aventura Noturna", desc: "Virar a noite juntos.", status: "bloqueado" }
        ]
    },
    {
        nivel: "NÍVEL 3: Oficializando a Party",
        descricao: "A Campanha Principal do nosso romance.",
        missoes: [
            { titulo: "O Grande Passo", desc: "O Pedido de Namoro Oficial.", status: "bloqueado" },
            { titulo: "Assumir pra galera", desc: "Primeira foto oficial de casal nas redes.", status: "bloqueado" },
            { titulo: "Conhecendo a familia", desc: "Conhecer os sogros/família.", status: "bloqueado" },
            { titulo: "Clássico Romântico", desc: "Passeio e jantar chique à luz de velas.", status: "bloqueado" },
            { titulo: "Médico", desc: "Cuidar do outro doente pela primeira vez.", status: "bloqueado" },
            { titulo: "MasterChef ", desc: "Cozinhar uma refeição complexa juntos.", status: "bloqueado" },
            { titulo: "Cine Privê", desc: "Ir ao cinema e não prestar atenção no filme.", status: "bloqueado" },
            { titulo: "Surpresa", desc: "Dar o primeiro presente surpresa num dia comum.", status: "bloqueado" },
            { titulo: "Ar Livre", desc: "Piquenique ou date no parque num domingo.", status: "bloqueado" },
            { titulo: "Trilha Sonora", desc: "Definir a nossa 'Música Oficial'.", status: "bloqueado" },
            { titulo: "Fidelidade Testada", desc: "Ver uma série sem assistir episódio escondido.", status: "bloqueado" }
        ]
    },
    {
        nivel: "NÍVEL 4: Exploração de Mapa",
        descricao: "Aventuras de médio prazo e novas conquistas.",
        missoes: [
            { titulo: "Check-in", desc: "Primeira viagem de fim de semana só os dois.", status: "bloqueado" },
            { titulo: "Data Valentine", desc: "Primeiro Dia dos Namorados juntos.", status: "bloqueado" },
            { titulo: "A Virada", desc: "Passar o primeiro Réveillon juntos.", status: "bloqueado" },
            { titulo: "Trabalho em Equipe", desc: "Comprar e montar um móvel juntos (teste de paciência).", status: "bloqueado" },
            { titulo: "Pet Lover", desc: "Adotar uma plantinha ou pet (Level 1 de responsabilidade).", status: "bloqueado" }
        ]
    },
    {
        nivel: "NÍVEL 5: High Level",
        descricao: "Objetivos de longo prazo e consolidação.",
        missoes: [
            { titulo: "Atualizar", desc: "Troca de alianças de compromisso/prata.", status: "bloqueado" },
            { titulo: "Milhas Aéreas", desc: "Primeira viagem de avião juntos.", status: "bloqueado" },
            { titulo: "Isolamento", desc: "Alugar um chalé na montanha só pra nós no inverno.", status: "bloqueado" }
        ]
    },
    {
        nivel: "NÍVEL MÁXIMO: O Endgame",
        descricao: "O futuro épico que nos aguarda.",
        missoes: [
            { titulo: "Um só", desc: "Morar juntos (dividir o teto e as contas).", status: "bloqueado" },
            { titulo: "Anel de Poder", desc: "O Noivado.", status: "bloqueado" },
            { titulo: "O Evento Principal", desc: "O Casamento.", status: "bloqueado" },
            { titulo: "Expansão da geração", desc: "Aumentar a família.", status: "bloqueado" }
        ]
    }
];
