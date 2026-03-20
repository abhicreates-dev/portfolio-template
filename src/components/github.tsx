import { useEffect, useState } from "react";

type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

export default function Github1() {
  const [data, setData] = useState<ContributionDay[]>([]);

  async function getLast365Days(username: string) {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}`
    );

    const result = await response.json();

    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);

    const oneYearAgo = new Date(today);
    oneYearAgo.setFullYear(today.getFullYear() - 1);

    const filtered = result.contributions
      .map((day: ContributionDay) => {
        const parsedDate = new Date(day.date);
        parsedDate.setUTCHours(0, 0, 0, 0);
        return { ...day, parsedDate };
      })
      .filter((d: any) => d.parsedDate <= today)
      .filter((d: any) => d.parsedDate >= oneYearAgo)
      .sort(
        (a: any, b: any) =>
          a.parsedDate.getTime() - b.parsedDate.getTime()
      )
      .map(({ parsedDate, ...rest }: any) => rest);

    setData(filtered);
  }

  useEffect(() => {
    getLast365Days("nagmani001");
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Total Days: {data.length}</h2>

      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}