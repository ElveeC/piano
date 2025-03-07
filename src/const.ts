export enum AppRoute {
    Main = '/',
}

export const PIANO_KEYS = [
  {
    id: '1w',
    noteName: 'до',
    keyCode: 'q',
    keyCodeRus: 'й',
    file: 'do.mp3',
    octave: 0,
  },
  {
    id: '2w',
    noteName: 'ре',
    keyCode: 'w',
    keyCodeRus: 'ц',
    file: 're.mp3',
    octave: 0,
  },
  {
    id: '3w',
    noteName: 'ми',
    keyCode: 'e',
    keyCodeRus: 'у',
    file: 'mi.mp3',
    octave: 0,
  },
  {
    id: '4w',
    noteName: 'фа',
    keyCode: 'r',
    keyCodeRus: 'к',
    file: 'fa.mp3',
    octave: 0,
  },
  {
    id: '5w',
    noteName: 'соль',
    keyCode: 't',
    keyCodeRus: 'е',
    file: 'sol.mp3',
    octave: 0,
  },
  {
    id: '6w',
    noteName: 'ля',
    keyCode: 'y',
    keyCodeRus: 'н',
    file: 'la.mp3',
    octave: 0,
  },
  {
    id: '7w',
    noteName: 'си',
    keyCode: 'u',
    keyCodeRus: 'г',
    file: 'si.mp3',
    octave: 0,
  },
  {
    id: '8w',
    noteName: 'до',
    keyCode: 'a',
    keyCodeRus: 'ф',
    file: 'do1.mp3',
    octave: 1,
  },
  {
    id: '9w',
    noteName: 'ре',
    keyCode: 's',
    keyCodeRus: 'ы',
    file: 're1.mp3',
    octave: 1,
  },
  {
    id: '10w',
    noteName: 'ми',
    keyCode: 'd',
    keyCodeRus: 'в',
    file: 'mi1.mp3',
    octave: 1,
  },
  {
    id: '11w',
    noteName: 'фа',
    keyCode: 'f',
    keyCodeRus: 'а',
    file: 'fa1.mp3',
    octave: 1,
  },
  {
    id: '12w',
    noteName: 'соль',
    keyCode: 'g',
    keyCodeRus: 'п',
    file: 'sol1.mp3',
    octave: 1,
  },
  {
    id: '13w',
    noteName: 'ля',
    keyCode: 'h',
    keyCodeRus: 'р',
    file: 'la1.mp3',
    octave: 1,
  },
  {
    id: '14w',
    noteName: 'си',
    keyCode: 'j',
    keyCodeRus: 'о',
    file: 'si1.mp3',
    octave: 1,
  },
  {
    id: '15w',
    noteName: 'до',
    keyCode: 'z',
    keyCodeRus: 'я',
    file: 'do2.mp3',
    octave: 2,
  },
  {
    id: '16w',
    noteName: 'ре',
    keyCode: 'x',
    keyCodeRus: 'ч',
    file: 're2.mp3',
    octave: 2,
  },
  {
    id: '17w',
    noteName: 'ми',
    keyCode: 'c',
    keyCodeRus: 'с',
    file: 'mi2.mp3',
    octave: 2,
  },
  {
    id: '18w',
    noteName: 'фа',
    keyCode: 'v',
    keyCodeRus: 'м',
    file: 'fa2.mp3',
    octave: 2,
  },
  {
    id: '19w',
    noteName: 'соль',
    keyCode: 'b',
    keyCodeRus: 'и',
    file: 'sol2.mp3',
    octave: 2,
  },
  {
    id: '20w',
    noteName: 'ля',
    keyCode: 'n',
    keyCodeRus: 'т',
    file: 'la2.mp3',
    octave: 2,
  },
  {
    id: '21w',
    noteName: 'си',
    keyCode: 'm',
    keyCodeRus: 'ь',
    file: 'si2.mp3',
    octave: 2,
  },
];

export const BLACK_KEYS = [
  {
    id: '1b',
    keyCode: 'Q',
    keyCodeRus: 'Й',
    file: 'do_re.mp3',
    octave: 0,
  },
  {
    id: '2b',
    keyCode: 'W',
    keyCodeRus: 'Ц',
    file: 're_mi.mp3',
    octave: 0,
  },
  {
    id: '3b',
    keyCode: 'R',
    keyCodeRus: 'К',
    file: 'fa_sol.mp3',
    octave: 0,
  },
  {
    id: '4b',
    keyCode: 'T',
    keyCodeRus: 'Е',
    file: 'sol_la.mp3',
    octave: 0,
  },
  {
    id: '5b',
    keyCode: 'Y',
    keyCodeRus: 'Н',
    file: 'la_si.mp3',
    octave: 0,
  },
  {
    id: '6b',
    keyCode: 'A',
    keyCodeRus: 'Ф',
    file: 'do_re1.mp3',
    octave: 1,
  },
  {
    id: '7b',
    keyCode: 'S',
    keyCodeRus: 'Ы',
    file: 're_mi1.mp3',
    octave: 1,
  },
  {
    id: '8b',
    keyCode: 'F',
    keyCodeRus: 'А',
    file: 'fa_sol1.mp3',
    octave: 1,
  },
  {
    id: '9b',
    keyCode: 'G',
    keyCodeRus: 'П',
    file: 'sol_la1.mp3',
    octave: 1,
  },
  {
    id: '10b',
    keyCode: 'H',
    keyCodeRus: 'Р',
    file: 'la_si1.mp3',
    octave: 1,
  },
  {
    id: '11b',
    keyCode: 'Z',
    keyCodeRus: 'Я',
    file: 'do_re2.mp3',
    octave: 2,
  },
  {
    id: '12b',
    keyCode: 'X',
    keyCodeRus: 'Ч',
    file: 're_mi2.mp3',
    octave: 2,
  },
  {
    id: '13b',
    keyCode: 'V',
    keyCodeRus: 'М',
    file: 'fa_sol2.mp3',
    octave: 2,
  },
  {
    id: '14b',
    keyCode: 'B',
    keyCodeRus: 'И',
    file: 'sol_la2.mp3',
    octave: 2,
  },
  {
    id: '15b',
    keyCode: 'N',
    keyCodeRus: 'Т',
    file: 'la_si2.mp3',
    octave: 2,
  },
]
