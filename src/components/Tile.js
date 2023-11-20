import { BarChart, Circle } from "react-feather";

const Tile = ({data}) => {
    return( 
        <div style={{   
            border: "1.5px solid #CACACA",
            borderRadius: "8px",
            background: "white",
            boxShadow: "1px 1px 4px 1px #CACACA", 
            maxWidth: "100%", 
            minWidth: "100%", 
            height: "fit-content", 
            display: "flex", 
            padding: "8px", 
            flexDirection: "column",
            gap: "4px"
            }}
        >
            <div style={{  display: "flex",
            alignItems: "start",
            justifyContent: "space-between",
            gap: "4px",
            margin: "6px 0",
            fontWeight: 600,
            fontFamily: "sans-serif",
            fontStretch: "extra-expanded",
            color: "1D1D1D",
            width: "100%"}}>
                {data?.id}
            </div>
            <div style={{ 
                display: "flex", 
                alignItems: "start",
                justifyContent: "start",
                padding: "4px" }}>
                {data?.title}
            </div>
            <div style={{ 
                display: "flex",
                gap: "4px",
                alignItems: "center",
                justifyContent: "start",
                padding: "4px"
            }}>
                <BarChart style={{
                    height: '14px',
                    stroke: "2px",
                    color: "#1D1D1D"
                    }}
                />
                 
                <button style={{
                    border: "1px",
                    borderRadius: "4px",
                    background: "white",
                    boxShadow: "1px 1px 6px 1px #E8E6E6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "4px",
                    fontWeight: 100,
                    fontFamily: "sans-serif",
                    fontSize : "small" ,
                    color: "1D1D1D",
                    padding: "4px 6px"
                    }}
                >
                    <Circle style={{
                    height: '14px',
                    stroke: "2px",
                    color: "#1D1D1D"
                    }}/>
                    <span>{data?.tag?.[0]}</span>
                </button>     
            </div>
        </div> 
    );
  }

  export default Tile; 