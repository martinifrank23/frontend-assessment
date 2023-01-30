import { useMemo, useState } from "react";
import "./App.css";

import countries, { Country } from "./countries";

type sortKey =
  | "country"
  | "population"
  | "deaths"
  | "recovered"
  | "lat"
  | "lng";

function App() {
  const [sortConfig, setSortConfig] = useState<{
    key: sortKey;
    direction: number;
  }>({
    key: "country",
    direction: 1, // 0: none, 1: asc, 2: dsc
  });

  const sortedCountries = useMemo(() => {
    if (sortConfig.direction === 0) return countries;
    let items = [...countries];
    items.sort((a: Country, b: Country) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 1 ? -1 : 1;
      } else if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 1 ? 1 : -1;
      }
      return 0;
    });
    return items;
  }, [sortConfig]);

  const sortTable = (key: sortKey) => {
    const direction =
      sortConfig.key === key ? (sortConfig.direction + 1) % 3 : 1;
    setSortConfig({ key, direction });
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => sortTable("country")}>Country</th>
          <th onClick={() => sortTable("population")}>Pop.</th>
          <th onClick={() => sortTable("deaths")}>Deaths</th>
          <th onClick={() => sortTable("recovered")}>Recovered</th>
          <th onClick={() => sortTable("lat")}>Lat.</th>
          <th onClick={() => sortTable("lng")}>Lng.</th>
        </tr>
      </thead>
      <tbody>
        {sortedCountries.map((country, index) => (
          <tr key={index}>
            <td>{country.country}</td>
            <td>{country.population}</td>
            <td>{country.deaths}</td>
            <td>{country.recovered}</td>
            <td>{country.lat}</td>
            <td>{country.lng}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
