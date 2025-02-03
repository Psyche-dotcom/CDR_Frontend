"use client";
import CallStatsCard2 from "@/components/Card/call_stats_card2";
import CallStatsCardDetailsinfo from "@/components/Card/call_stats_card2 copy";
import React, { useEffect, useState } from "react";

const TopCallSection = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState<number>(3);
  const [selectedTime2Range, setSelectedTime2Range] = useState<number>(3);
  const [data, setData] = useState([
    {
      userdata: " GUVENLIK (5027)",
      time: "00:15:16",
      barwidth: 100,
      valuenow: 916,
    },
    {
      userdata: "MUHASEBE Emine hn ( 5026 )",
      time: " 00:07:06",

      barwidth: 36,
      valuenow: 916,
    },
    {
      userdata: "Adnan Ev ( 2580 )",
      time: "00:15:16",

      barwidth: 55,
      valuenow: 916,
    },
  ]);
  const [data2, setData2] = useState([
    {
      userdata: " GUVENLIK (5027)",
      time: "10",
      barwidth: 100,
      valuenow: 916,
    },
    {
      userdata: "MUHASEBE Emine hn ( 5026 )",
      time: "2",

      barwidth: 36,
      valuenow: 916,
    },
    {
      userdata: "Adnan Ev ( 2580 )",
      time: "5",

      barwidth: 55,
      valuenow: 916,
    },
  ]);
  useEffect(() => {
    setData([
      {
        userdata: " GUVENLIK (5027)",
        time: "00:15:16",
        barwidth: 100,
        valuenow: 916,
      },
      {
        userdata: "MUHASEBE Emine hn ( 5026 )",
        time: " 00:07:06",

        barwidth: 36,
        valuenow: 916,
      },
      {
        userdata: "Adnan Ev ( 2580 )",
        time: "00:15:16",

        barwidth: 55,
        valuenow: 916,
      },
    ]);
  }, [selectedTimeRange]);

  useEffect(() => {
    setData2([
      {
        userdata: " GUVENLIK (5027)",
        time: "10",
        barwidth: 100,
        valuenow: 916,
      },

      {
        userdata: "Adnan Ev ( 2580 )",
        time: "5",

        barwidth: 55,
        valuenow: 916,
      },
    ]);
  }, [selectedTime2Range]);

  const refetchData = () => {
    setData([
      {
        userdata: "MUHASEBE Emine hn ( 5026 )",
        time: " 00:07:06",
        barwidth: 36,
        valuenow: 916,
      },
      {
        userdata: "Adnan Ev ( 2580 )",
        time: "00:15:16",
        barwidth: 55,
        valuenow: 916,
      },
    ]);
  };
  const refetch2Data = () => {
    setData2([
      {
        userdata: " GUVENLIK (5027)",
        time: "10",
        barwidth: 100,
        valuenow: 916,
      },

      {
        userdata: "Adnan Ev ( 2580 )",
        time: "5",

        barwidth: 55,
        valuenow: 916,
      },
    ]);
  };
  const handleTimeRangeChange = (value: number) => {
    console.log(`Selected Time Range: ${value}`);
    setSelectedTimeRange(value);
  };
  const handleTimeRange2Change = (value: number) => {
    console.log(`Selected Time Range: ${value}`);
    setSelectedTime2Range(value);
  };
  return (
    <>
      <CallStatsCardDetailsinfo
        title="Top 5 - Talk Time"
        cardId="most-talk-refresh"
        allId="most-talk-alls"
        monthlyId="most-talk-monthly"
        data={data}
        onTimeFrameChange={handleTimeRangeChange}
        onReload={refetchData}
        showTime={true}
      />
      <CallStatsCardDetailsinfo
        title="Top 5 - Answered Calls"
        cardId="most-ans-refresh"
        allId="most-ans-alls"
        monthlyId="most-ans-monthly"
        data={data2}
        onTimeFrameChange={handleTimeRange2Change}
        onReload={refetch2Data}
        showTime={false}
      />
      <CallStatsCardDetailsinfo
        title="Top 5 - Inbound"
        cardId="least-talk-refresh"
        allId="most-inbound-alls"
        monthlyId="most-inbound-monthly"
        data={data2}
        onTimeFrameChange={handleTimeRange2Change}
        onReload={refetch2Data}
        showTime={false}
      />
      <CallStatsCardDetailsinfo
        title="Top 5 - Outbound"
        cardId="least-ans-refresh"
        allId="most-outbound-alls"
        monthlyId="most-outbound-monthly"
        data={data2}
        onTimeFrameChange={handleTimeRange2Change}
        onReload={refetch2Data}
        showTime={false}
      />
    </>
  );
};

export default TopCallSection;
