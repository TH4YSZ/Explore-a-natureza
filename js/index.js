import {ativarConteudo, ativarRespostas, removerRespostas} from "./modulos/acordion.js"
import {menuMobileInit} from "./modulos/tabMenu.js"
import { pegarValorForm } from "./modulos/modal.js"

menuMobileInit()
pegarValorForm()
ativarConteudo()
ativarRespostas()
removerRespostas()

new Modal('.js-modal', 
'.modal-close', 
'.modal-forms').init();

