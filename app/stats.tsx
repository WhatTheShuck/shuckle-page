"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ShuckleStats = () => {
  const baseStats = [
    { stat: "HP", value: 20 },
    { stat: "Attack", value: 10 },
    { stat: "Defense", value: 230 },
    { stat: "Sp. Attack", value: 10 },
    { stat: "Sp. Defense", value: 230 },
    { stat: "Speed", value: 5 },
  ];

  return (
    <div className="mb-16">
      <h2 className="text-4xl font-bold text-red-500 mb-6">Base Stats</h2>
      <div className="bg-slate-800 rounded-lg shadow-lg shadow-red-900/20 p-6 border border-red-900/20">
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={baseStats} layout="vertical">
              <XAxis type="number" domain={[0, 230]} stroke="#94a3b8" />
              <YAxis dataKey="stat" type="category" stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid rgba(185, 28, 28, 0.2)",
                  color: "#94a3b8",
                }}
              />
              <Bar dataKey="value" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ShuckleStats;
