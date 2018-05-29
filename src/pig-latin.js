const VOWEL_SUFFIX = "way";
const CONSONANT_SUFFIX = "ay";

export class PigLatin {
    translate(input) {
        input = input.trim()
        if (!input || input.length==0) {
            return s
        }
        let words = input.toLowerCase().split(" ");
        
        for (let i=0; i<words.length; i++) {
            words[i] = this._convertWord(words[i]);
        }
        return words.join(" ");
    }

    _firstVowelIndex(word) {
        let vowel = word.replace(/\w*?([aeiou])\w*/i, '$1');
        return word.indexOf(vowel);
    }

    _convertWord(word) {
        word = word.replace(/[^\w ]/g, '');
        let firstVowelIndex = this._firstVowelIndex(word);

        if ( firstVowelIndex === 0) {
            return word + VOWEL_SUFFIX;
        } else {
            let firstPart = word.substring(0,firstVowelIndex),
                secondPart = word.substring(firstVowelIndex);

            return secondPart + firstPart + CONSONANT_SUFFIX;
        }
    }
}