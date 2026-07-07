export const mockMyBetting = {
  id: 1,
  participationId: 101,
  ownerName: "승민",
  question: "미션1을 성공한다vs실패한다",
  remainingTimeText: "3시간 38분 후 자동 마감",
  selectedOptionId: 11,

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
};

export const mockAvailableBetting = {
  id: 2,
  ownerName: "주희",
  question: "미션1을 성공한다vs실패한다",
  remainingTimeText: "3시간 38분 후 자동 마감",
  selectedOptionId: null,

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
};

export const mockAvailableBetting2 = {
  id: 3,
  ownerName: "경무",
  question: "미션1을 성공한다vs실패한다",
  remainingTimeText: "3시간 38분 후 자동 마감",
  selectedOptionId: null,

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
};