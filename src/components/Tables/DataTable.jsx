import React from "react";

const DataTable = ({ data, columns }) => {
  return (
    <table className="w-full bg-white rounded-lg shadow overflow-hidden">
      <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
        <tr>
          {columns.map((col, idx) => (
            <th key={idx} className="py-3 px-4 text-left">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id} className="border-t hover:bg-gray-50">
            {Object.values(row).map((val, idx) => (
              <td key={idx} className="py-3 px-4 text-gray-600">
                {val}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
