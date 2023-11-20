import Block from "./Block";
import React from 'react';
const BlockCanvas = ({data, groupBy}) => {
    return ( 
      <div style={{ 
          display: "flex", 
          alignItems: "start", 
          justifyContent: "flex-start",
          gap: "28px", 
          padding: "24px", 
          height: "fit-content", 
          minWidth: "min-content"
        }}
      >
        {
          data?.map((blockdata) => {
            const getBlockTitle = () => {
              switch (groupBy) {
                case "priority":
                  return blockdata?.[0]?.priority;
                case "status":
                  return blockdata?.[0]?.status;
                case "userId":
                  return blockdata?.[0]?.userId;
                default:
                  return blockdata?.[0]?.userId;
              }
            }  
            return <Block 
              data={blockdata} 
              title={getBlockTitle()} 
              tileCount={blockdata.length} />
          })
        }
      </div>
    );
  }

  export default BlockCanvas;