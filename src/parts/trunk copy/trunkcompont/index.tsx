import TrunkCard from "@/components/Card/trunk_card";
import { useEffect, useState } from "react";

// Mock data from SignalR
const mockData = {
  AllTrunksActiveCalls: [],
  AllTrunksInfo: [
    "name:WebMeeting bridge,id:1,trunkno:,activecalls:0,inbound:0,outbound:0",
    "name:Avencom Telekom,id:2,trunkno:08504600714,activecalls:0,inbound:0,outbound:0",
    "name:Avencom 0232 750 50 00-29,id:3,trunkno:902327505000,activecalls:0,inbound:0,outbound:0",
  ],
};

interface TrunkInfo {
  name: string;
  id: string;
  active: number;
  inbound: number;
  outbound: number;
}

const TrunkComponent = ({ checkboxes }: { checkboxes: any }) => {
  const [loading, setLoading] = useState(true);
  const [allTrunksInfo, setAllTrunksInfo] = useState<TrunkInfo[]>([]);

  useEffect(() => {
    // Parse mock data
    const parsedData = mockData.AllTrunksInfo.map((trunk) => {
      const objSplit = trunk.split(",");
      return {
        name: objSplit[0].split(":")[1],
        id: objSplit[1].split(":")[1],
        active: parseInt(objSplit[3].split(":")[1]),
        inbound: parseInt(objSplit[4].split(":")[1]),
        outbound: parseInt(objSplit[5].split(":")[1]),
      };
    });

    setAllTrunksInfo(parsedData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <img
        src="/app-assets/images/loading.gif"
        style={{
          display: "block",
          margin: "0 auto",
          width: "64px",
          height: "64px",
        }}
        id="LoadingGif"
      />
    );
  }

  // Calculate totals for "All Trunks"
  const inboundTotal = allTrunksInfo.reduce(
    (sum, trunk) => sum + trunk.inbound,
    0
  );
  const outboundTotal = allTrunksInfo.reduce(
    (sum, trunk) => sum + trunk.outbound,
    0
  );
  const activeTotal = allTrunksInfo.reduce(
    (sum, trunk) => sum + trunk.active,
    0
  );

  return (
    <div className="row trunk-container">
      {/* Render "All Trunks" card */}
      <TrunkCard
        id="all"
        name="All Trunks"
        active={activeTotal}
        inbound={inboundTotal}
        outbound={outboundTotal}
        isParent
      />

      {/* Render individual trunk cards */}
      {allTrunksInfo.map((trunk) => (
        <TrunkCard
          id={trunk.id}
          name={trunk.name}
          active={trunk.active}
          inbound={trunk.inbound}
          outbound={trunk.outbound}
          key={trunk.id}
          showCard={false}
          checkboxes={checkboxes}
        />
      ))}
    </div>
  );
};

export default TrunkComponent;
