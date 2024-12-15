import CallStatsCard2 from "@/components/Card/call_stats_card2";
import React from "react";

const TopCallSection = () => {
  return (
    <>
      <CallStatsCard2
        title="Top 5 - Talk Time"
        cardId="most-talk-refresh"
        dailyId="most-talk-daily"
        weeklyId="most-talk-weekly"
        allId="most-talk-alls"
        monthlyId="most-talk-monthly"
        targetBt1="#most-talk-daily"
        Statusbt1="1"
        Typebt1="1"
        targetBt2="#most-talk-weekly"
        Statusbt2="1"
        Typebt2="2"
        targetBt3="#most-talk-monthly"
        Statusbt3="3"
        Typebt3="1"
        targetBt4="#most-talk-yearly"
        Statusbt4="4"
        Typebt4="1"
      />
      <CallStatsCard2
        title="Top 5 - Answered Calls"
        cardId="most-ans-refresh"
        dailyId="most-ans-daily"
        weeklyId="most-ans-weekly"
        allId="most-ans-alls"
        monthlyId="most-ans-monthly"
        targetBt1="#most-ans-daily"
        Statusbt1="1"
        Typebt1="2"
        targetBt2="#most-ans-weekly"
        Statusbt2="1"
        Typebt2="2"
        targetBt3="#most-ans-monthly"
        Statusbt3="3"
        Typebt3="2"
        targetBt4="#most-ans-yearly"
        Statusbt4="4"
        Typebt4="2"
      />
      <CallStatsCard2
        title="Top 5 - Inbound"
        cardId="least-talk-refresh"
        dailyId="most-inbound-daily"
        weeklyId="most-inbound-weekly"
        allId="most-inbound-alls"
        monthlyId="most-inbound-monthly"
        targetBt1="#most-inbound-daily"
        Statusbt1="1"
        Typebt1="3"
        targetBt2="#most-inbound-weekly"
        Statusbt2="1"
        Typebt2="3"
        targetBt3="#most-inbound-monthly"
        Statusbt3="3"
        Typebt3="3"
        targetBt4="#most-inbound-yearly"
        Statusbt4="4"
        Typebt4="3"
      />
      <CallStatsCard2
        title="Top 5 - Outbound"
        cardId="least-ans-refresh"
        dailyId="most-outbound-daily"
        weeklyId="most-outbound-weekly"
        allId="most-outbound-alls"
        monthlyId="most-outbound-monthly"
        targetBt1="#most-outbound-daily"
        Statusbt1="1"
        Typebt1="4"
        targetBt2="#most-outbound-weekly"
        Statusbt2="1"
        Typebt2="4"
        targetBt3="#most-outbound-monthly"
        Statusbt3="3"
        Typebt3="4"
        targetBt4="#most-outbound-yearly"
        Statusbt4="4"
        Typebt4="4"
      />
    </>
  );
};

export default TopCallSection;
