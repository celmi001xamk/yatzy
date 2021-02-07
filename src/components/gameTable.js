import "../css/gameTable.css";

export function GameTable({playerName, points, lockCategory}) {
  return (
    <table className="gameTable">
            <thead>
              <tr className="tableRow">
                <th className="tablePlayer">{playerName}</th>
              </tr>
            </thead>
            <tbody>
              {points.map((category, index) => (
                <tr
                  key={index}
                  className={
                    category.locked
                      ? `${category.className}Locked`
                      : category.className
                  }
                  onClick={() => lockCategory(index)}
                >
                  <th
                    className={
                      category.className === "tableRow"
                        ? "tableRowHeader"
                        : "tableRowHeaderConstant"
                    }
                  >
                    {category.name}
                  </th>
                  <td
                    className={
                      category.className === "tableRow"
                        ? "tableRowSum"
                        : "tableRowSumConstant"
                    }
                  >
                    {category.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
  )
}