
const entradasItens = ['Espeto de Camarões', 'Parmegiana Aperitivo', 'Crostini de Camarões', 'Ceviche'];

const principaisItens = [
    'Risoto de Camarão', 
    'Spaguetti ao Pesto', 
    'Moqueca de Camarão', 
    'Arroz de Polvo e Camarões', 
    'Bobó de Camarão', 
    'Ao Molho de Camarões'
];

const bebidaItens = ['Heineken', 'Refrigerante', 'Vinho', 'Coquetel de Frutas'];
const kidItens = ['Filé Mignon Kid', 'Frango Kid'];

function pesquisarItem(event){
    event.preventDefault();

    const itemPesquisado = document.getElementById('item-pesquisado').value;

    if (entradasItens.map(item => item.toLowerCase()).includes(itemPesquisado.toLowerCase())) {
        window.location.href = '#entradas'
    };

    if (principaisItens.map(item => item.toLowerCase()).includes(itemPesquisado.toLowerCase())) {
        window.location.href = '#principais'
    };

    if (bebidaItens.map(item => item.toLowerCase()).includes(itemPesquisado.toLowerCase())) {
        window.location.href = '#bebidas'
    };

    if (kidItens.map(item => item.toLowerCase()).includes(itemPesquisado.toLowerCase())) {
        window.location.href = '#kids'
    };

}