import { CheckCircle, MoreHorizontal, Plus } from "react-feather";
import Tile from "./Tile";

const Block = ({data, tileCount, title}) => {
    return( 
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        gap: "12px", 
        alignItems: "center", 
        justifyContent: "start", 
        minWidth: "300px",
        height: "fit-content",
        padding: "0px 16px"
      }}>
          <div style={{
            display: "flex",
            alignItems: "start",
            justifyContent: "space-between",
            gap: "4px",
            margin: "6px 0",
            fontWeight: 600,
            fontFamily: "sans-serif",
            fontStretch: "extra-expanded",
            color: "1D1D1D",
            width: "100%"
          }}>
              {/* Header Area */} 
              <div style={{ 
                alignItems : "center" , 
                display : "flex",
                gap: "6px" 
              }}>
                <CheckCircle style={{
                    height: '14px',
                    stroke: "2px",
                    color: "#508D69"
                  }}
                />
                {/* In case of priority map the values with the given values */}
                {title}
                {tileCount}
              </div>
              <div>
                <Plus style={{
                  height: '14px',
                  stroke: "2px",
                  color: "#1D1D1D"
                }}/>
                <MoreHorizontal style={{
                  height: '14px',
                  stroke: "2px",
                  color: "#1D1D1D"
                }}/>
              </div>             
          </div>
         

          {/* Tile Area */}
          {data?.map((tile) => {
            return <Tile data={tile} />
          })}
      </div>
    );
}

  export default Block;