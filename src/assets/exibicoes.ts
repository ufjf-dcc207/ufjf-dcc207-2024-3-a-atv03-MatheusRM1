type ExibicaoTuplaType = [string, string, string, AnimaisTuplaType[]];
type AnimaisTuplaType = [string, string, number, boolean];

const EXIBICOES: ExibicaoTuplaType[] = [
  [
    "A1",
    "2024-12-06T08:00:00.000-03:00",
    "2024-12-06T12:00-03:00",
    [
      ["🦁", "Leão", 190.5, true],
      ["🐼", "Panda", 400.5, true],
    ],
  ],
  ["B2", "2024-12-06T08:00:00.000-03:00", "2024-12-06T17:00-03:00", [
    ["🦄", "Unicornio", 500.25, true],
    ["🐒", "Macaco", 30.25, false],
  ]],
];

export default EXIBICOES;