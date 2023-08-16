// championshipId 850 = Brasileirão Série A // matchId 206687
// api example https://footstats-prediction.azurewebsites.net/api/v1/message/850/206687

import { Championships } from "src/types/Championships";

export const footstatsSiteApiEndpoint = {
  match: "https://footstats-prediction.azurewebsites.net/api/v1",
  championshipCalendar:
    "https://footstatsapiapp.azurewebsites.net//campeonatos",
};

export const footstatsSiteApiTypes = {
  prediction: "prediction",
  message: "message",
};

export const footstatsSiteApiChampionshipsId = {
  "sul-americana-2023": 853,
  "libertadores-2023": 839,
  "brasileirao-serie-a-2023": 850,
  "brasileirao-serie-b-2023": 851,
  "copa-do-brasil-2023": 845,
};

export const footstatsTeams = {
  "bahia-ba": 1250,
  "america-mg": 1085,
};

export const footstatsChampionships: Championships[] = [
  {
    id: 836,
    urlLogo:
      "https://frontendapiapp.blob.core.windows.net/images/campeonatos/uefa-europa-league.png",
    nome: "Copas Europeias",
  },
  {
    id: 839,
    urlLogo:
      "https://frontendapiapp.blob.core.windows.net/images/campeonatos/libertadores-da-america.png",
    nome: "Libertadores da América 2023",
  },
  {
    id: 854,
    urlLogo:
      "https://frontendapiapp.blob.core.windows.net/images/campeonatos/euro20.png",
    nome: "Eliminatórias Euro 2024",
  },
  {
    id: 853,
    urlLogo:
      "https://frontendapiapp.blob.core.windows.net/images/campeonatos/copa-sulamericana.png",
    nome: "Sul-Americana 2023",
  },
  {
    id: 852,
    urlLogo:
      "https://frontendapiapp.blob.core.windows.net/images/campeonatos/Conference_League.jpg",
    nome: "Conference League 2022/2023",
  },
  {
    id: 861,
    urlLogo: null,
    nome: "Pelo Mundo",
  },
  {
    id: 864,
    urlLogo:
      "https://frontendapiapp.blob.core.windows.net/images/campeonatos/2023_world_cup.png",
    nome: "Copa do Mundo Sub-20 2023",
  },
  {
    id: 865,
    urlLogo:
      "https://frontendapiapp.blob.core.windows.net/images/campeonatos/League_of_Ireland_logo.png",
    nome: "Divisão Premier 2023",
  },
  {
    id: 877,
    urlLogo:
      "https://frontendapiapp.blob.core.windows.net/images/campeonatos/transferir.png",
    nome: "Euro Sub-19 2023",
  },
  {
    id: 828,
    urlLogo:
      "https://frontendapiapp.blob.core.windows.net/images/campeonatos/copa-feminina-2023.png",
    nome: "Copa do Mundo Feminina 2023",
  },
  {
    id: 893,
    urlLogo:
      "https://frontendapiapp.blob.core.windows.net/images/campeonatos/transferir%20%281%29.png",
    nome: "Supercopa da Croácia",
  },
  {
    id: 898,
    urlLogo:
      "https://frontendapiapp.blob.core.windows.net/images/campeonatos/leagues%20cup.png",
    nome: "Leagues Cup 2023",
  },
  {
    id: 912,
    urlLogo:
      "https://frontendapiapp.blob.core.windows.net/images/campeonatos/uefa-champions-league.png",
    nome: "Champions League 2023/2024",
  },
  {
    id: 913,
    urlLogo:
      "https://frontendapiapp.blob.core.windows.net/images/campeonatos/17a77832-1895-46e9-a0a6-030714699448.png",
    nome: "Copa da Argentina 2023",
  },
  {
    id: 914,
    urlLogo:
      "https://frontendapiapp.blob.core.windows.net/images/campeonatos/180px-UEFA_Super_Cup.png",
    nome: "Supercopa da UEFA 2023",
  },
  {
    id: 870,
    urlLogo:
      "https://frontendapiapp.blob.core.windows.net/images/campeonatos/nations-league.png",
    nome: "Nations League",
  },
  {
    id: 868,
    urlLogo:
      "https://frontendapiapp.blob.core.windows.net/images/campeonatos/i.png",
    nome: "Copa das Nações Africanas 2023",
  },
  {
    id: 871,
    urlLogo:
      "https://frontendapiapp.blob.core.windows.net/images/campeonatos/concacaf-nations-league.png",
    nome: "CONCACAF Nations 2023",
  },
  {
    id: 872,
    urlLogo:
      "https://frontendapiapp.blob.core.windows.net/images/campeonatos/descarga.jpg",
    nome: "Euro Sub-21 2023",
  },
  {
    id: 875,
    urlLogo:
      "https://frontendapiapp.blob.core.windows.net/images/campeonatos/Concacafgold.jpg",
    nome: "Copa Ouro",
  },
  {
    id: 751,
    urlLogo: null,
    nome: "Amistosos Seleção Feminina",
  },
  {
    id: 2,
    urlLogo:
      "https://frontendapiapp.blob.core.windows.net/images/campeonatos/amistosos-selecao-brasileira.png",
    nome: "Amistosos Seleção",
  },
  {
    id: 27,
    urlLogo: null,
    nome: "Amistosos Internacionais",
  },
  {
    id: 850,
    urlLogo: null,
    nome: "Brasileirão séria A 2023",
  },
  {
    id: 851,
    urlLogo: null,
    nome: "Brasileirão séria B 2023",
  },
  {
    id: 845,
    urlLogo: null,
    nome: "Copa do Brasil 2023",
  },
];
