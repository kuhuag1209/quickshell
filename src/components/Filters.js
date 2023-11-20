import {  Settings } from "react-feather";
import {} from './ParentCanvas';

function Filters() {
  return (
    <div style={{ display: "flex", padding: "12px 24px", width: "100%", background: "white" }}>
        <button style={{
          border: "1.5px solid #E8E6E6",
          borderRadius: "6px",
          background: "white",
          boxShadow: "1px 1px 6px 1px #E8E6E6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
          padding: "6px 12px",
          fontWeight: 600,
          fontFamily: "sans-serif",
          fontStretch: "extra-expanded",
          color: "1D1D1D"
        }}>
          <Settings style={{
            background: "white",
            height: "16px",
            stroke: "2px"
            }}
          /> 
          <select id="display">
              <option  >Display</option>
              <option  >status</option>
              <option >priority</option> 
          </select>
        </button>
    </div>
  );
   
}
export default Filters;