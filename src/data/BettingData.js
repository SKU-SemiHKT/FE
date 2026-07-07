export const mockMyBetting = {
  id: 1,
  participationId: 101,

  ownerName: "승민",
  missionTitle: "미션1",
  question: "미션1을 성공한다vs실패한다",
  detailQuestion: "미션1에 대한 선택은?",

  remainingTimeText: "3시간 38분 후 자동 마감",

  pointBalance: 1890,
  minimumPoint: 10,
  maximumPoint: 100,

  // 사용자가 이미 선택한 옵션
  selectedOptionId: 11,
  betPoint: 100,

  options: [
    {
      id: 11,
      label: "미션1을 성공한다",
      participantCount: 3,
      totalPoint: 200,
      percentage: 60,
    },
    {
      id: 12,
      label: "미션1을 실패한다",
      participantCount: 2,
      totalPoint: 100,
      percentage: 40,
    },
  ],

  participants: [
    {
      id: 1,
      nickname: "승민",
    },
    {
      id: 2,
      nickname: "주희",
    },
    {
      id: 3,
      nickname: "지우",
    },
  ],
};

export const mockAvailableBetting = {
  id: 2,

  ownerName: "주희",
  missionTitle: "미션1",
  question: "미션1을 성공한다vs실패한다",
  detailQuestion: "미션1에 대한 선택은?",

  remainingTimeText: "3시간 38분 후 자동 마감",

  pointBalance: 1890,
  minimumPoint: 10,
  maximumPoint: 100,

  // 아직 참여하지 않았기 때문에 null
  selectedOptionId: null,
  betPoint: null,

  options: [
    {
      id: 21,
      label: "미션1을 성공한다",
      participantCount: 1,
      totalPoint: 100,
      percentage: 50,
    },
    {
      id: 22,
      label: "미션1을 실패한다",
      participantCount: 1,
      totalPoint: 50,
      percentage: 50,
    },
  ],

  participants: [
    {
      id: 1,
      nickname: "주희",
    },
    {
      id: 2,
      nickname: "지우",
    },
    {
      id: 3,
      nickname: "경무",
    },
  ],
};

export const mockAvailableBetting2 = {
  id: 3,

  ownerName: "경무",
  missionTitle: "미션1",
  question: "미션1을 성공한다vs실패한다",
  detailQuestion: "미션1에 대한 선택은?",

  remainingTimeText: "3시간 38분 후 자동 마감",

  pointBalance: 1890,
  minimumPoint: 10,
  maximumPoint: 100,

  selectedOptionId: null,
  betPoint: null,

  options: [
    {
      id: 31,
      label: "미션1을 성공한다",
      participantCount: 1,
      totalPoint: 100,
      percentage: 50,
    },
    {
      id: 32,
      label: "미션1을 실패한다",
      participantCount: 1,
      totalPoint: 50,
      percentage: 50,
    },
  ],

  participants: [
    {
      id: 1,
      nickname: "경무",
    },
    {
      id: 2,
      nickname: "승민",
    },
  ],
};

export const mockBettings = [
  mockMyBetting,
  mockAvailableBetting,
  mockAvailableBetting2,
];
export const mockBettingHistory = [
  {
    id: 1,
    ownerName: "주희",
    missionResult: "미션1,2를 성공",

    selectedOptionId: 11,

    betPoint: 100,
    profitPoint: 150,

    options: [
      {
        id: 11,
        label: "미션1,2를 성공한다",
        participantCount: 1,
        totalPoint: 100,
        percentage: 50,
      },
      {
        id: 12,
        label: "미션1,2를 실패한다",
        participantCount: 1,
        totalPoint: 50,
        percentage: 50,
      },
    ],
  },

  {
    id: 2,
    ownerName: "지우",
    missionResult: "미션1을 실패",

    selectedOptionId: 21,

    betPoint: 50,
    profitPoint: -50,

    options: [
      {
        id: 21,
        label: "미션1을 성공한다",
        participantCount: 3,
        totalPoint: 200,
        percentage: 60,
      },
      {
        id: 22,
        label: "미션1을 실패한다",
        participantCount: 2,
        totalPoint: 100,
        percentage: 40,
      },
    ],
  },

  {
    id: 3,
    ownerName: "경무",
    missionResult: "미션1,2,3을 실패",

    selectedOptionId: 32,

    betPoint: 100,
    profitPoint: -100,

    options: [
      {
        id: 31,
        label: "미션1,2,3을 성공한다",
        participantCount: 2,
        totalPoint: 150,
        percentage: 40,
      },
      {
        id: 32,
        label: "미션1,2,3을 실패한다",
        participantCount: 3,
        totalPoint: 250,
        percentage: 60,
      },
    ],
  },
];