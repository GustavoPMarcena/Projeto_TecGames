var btn_left = document.getElementById('btn_left')
var btn_right = document.getElementById('btn_right')
    

function clickright() {
            var caixas = document.getElementsByClassName('caixa')
            var k;
            var lista_id_caixa_ativa = [] // armazena o id das caixas ativas
            for (k=0; k<9 ;k++) {
                //alert(caixas[k]+ k)
                if (!caixas[k].classList.contains('caixa-oculta')) {
                    lista_id_caixa_ativa.push(k)
                }
            }

            caixas[ lista_id_caixa_ativa[0] ].classList.add('caixa-oculta')
            caixas[ lista_id_caixa_ativa[1] ].classList.add('caixa-oculta')
            caixas[ lista_id_caixa_ativa[2] ].classList.add('caixa-oculta')

            for (k=0; k<3 ;k++) {
                if (lista_id_caixa_ativa[k] < 8) {
                    caixas[ lista_id_caixa_ativa[k] +1 ].classList.remove('caixa-oculta')
                }
                else {
                    caixas[ 0 ].classList.remove('caixa-oculta')
                }
            }
            
        }
        
function clickleft() {
            var caixas = document.getElementsByClassName('caixa')
            var k;
            var lista_id_caixa_ativa = [] // armazena o id das caixas ativas
            for (k=0; k<9 ;k++) {
                //alert(caixas[k]+ k)
                if (!caixas[k].classList.contains('caixa-oculta')) {
                    lista_id_caixa_ativa.push(k)
                }
            }

            caixas[ lista_id_caixa_ativa[0] ].classList.add('caixa-oculta')
            caixas[ lista_id_caixa_ativa[1] ].classList.add('caixa-oculta')
            caixas[ lista_id_caixa_ativa[2] ].classList.add('caixa-oculta')

            for (k=0; k<3 ;k++) {
                if (lista_id_caixa_ativa[k] > 0) {
                    caixas[ lista_id_caixa_ativa[k] -1 ].classList.remove('caixa-oculta')
                }
                else {
                    caixas[ 8 ].classList.remove('caixa-oculta')
                }
            }
            
        }


btn_left.addEventListener("click", clickleft)
btn_right.addEventListener("click", clickright)

