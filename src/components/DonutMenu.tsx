// ドーナツ（文法）の型定義
type DonutItem = {
  id: number;
  name: string;
  grammarPoint: string;
};

// 仮のメニューデータ
const donuts: DonutItem[] = [
  { id: 1, name: "Plain Glazed", grammarPoint: "Present Simple" },
  { id: 2, name: "Chocolate Sprinkles", grammarPoint: "Past Simple" },
  { id: 3, name: "Strawberry Cream", grammarPoint: "Present Perfect" },
];

export const DonutMenu = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🍩 Donut Grammar Menu</h1>
      <ul style={{ listStyle: "none" }}>
        {donuts.map((donut) => (
          <li key={donut.id} style={{ margin: "10px 0", padding: "10px", border: "1px solid #ccc" }}>
            <strong>{donut.name}</strong> - <span>{donut.grammarPoint}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};