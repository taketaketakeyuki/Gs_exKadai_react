export const getTraining = async (query) => {
  try {
    const muscle = ["胸", "背中", "太もも"];
    const myIndex = muscle.indexOf(query.mymuscle);
    if (myIndex === -1) return { message: "そのトレーニングは未実装" };
    const comIndex = Math.floor(Math.random() * 3);
    const resultSheet = [
      ["ダンベルプレス", "プッシュアップ", "アブローラー"],
      ["ダンベルオーバーロウ", "シンプル背筋", "ワンハンドロウ"],
      ["ウォークングランジ", "レッグブリッジ", "スクワット"],
    ];
    return {
      yourMuscle: query.myMuscle,
      comHand: muscle[comIndex],
      result: resultSheet[myIndex][comIndex],
    };
  } catch (e) {
    throw Error("Error！");
  }
};

