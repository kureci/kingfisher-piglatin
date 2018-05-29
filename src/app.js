import { PigLatin } from './pig-latin';
const Translator = new PigLatin();

window.translatePigLatin = function(form) {
    let input = $('#original-text').val();
    $('#pig-latin-text').text(Translator.translate(input));

    return false;
}