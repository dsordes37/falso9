const jogadores = [["Lionel Messi", "Cristiano Ronaldo"], ["Neymar Jr.", "Kylian Mbappé"], ["Kevin De Bruyne", "Virgil van Dijk"],["Robert Lewandowski", "Sadio Mané"], ["Mohamed Salah", "Erling Haaland"]];

exports.listarJogadores = (req, res) => {
    res.json({
        mensagem: "Lista de jogadores de futebol",
        quantidade: jogadores.length,
        jogadores: jogadores
    });
};