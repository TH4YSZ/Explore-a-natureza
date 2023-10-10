import {ativarConteudo, ativarRespostas, removerRespostas} from "./modulos/acordion.js"
import {menuMobileInit} from "./modulos/tabMenu.js"
import { pegarValorForm, exibirModal, ocultarModal } from "./modulos/modal.js"

menuMobileInit()
exibirModal()
ocultarModal()
pegarValorForm()
ativarConteudo()
ativarRespostas()
removerRespostas()

new Modal('.js-modal', 
'.modal-close', 
'.modal-forms').init();

