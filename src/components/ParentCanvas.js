import BlockCanvas from "./BlockCanvas";
import Filters from "./Filters";
import { useState, useEffect } from "react";

function ParentCanvas() {

  const QUICK_SHELL_API_URI = "https://api.quicksell.co/v1/internal/frontend-assignment";

  const [cardData, setcardData] = useState([]);
  const [blockdata, setBlockData] = useState([]);
  const [selectedGroupBy, setSelectedGroupBy] = useState("status");
  const [selectedOrderBy, setSelectedOrderBy] = useState("priority");

  // Using this useEffect hook for fetching the data for cards
  useEffect(() => {
    try {
        fetch(QUICK_SHELL_API_URI).then((response)=>{
          return response?.json()
        }).then((data)=>{
          setcardData(data?.tickets)
        }) 
    } catch (err) {
      console.log(err);
    }
    
  }, [])

  useEffect(() => {
    if (cardData && cardData?.length > 0) {
      doParsing();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardData])

  const doParsing = () => {

    // You need to group the data of cards into smaller blocks on the basis of selectedGroupBy.
    const groupedCardData = [];

    cardData?.forEach((card) => {
      switch (selectedGroupBy) {
        case "userId":
          if (!groupedCardData?.some((block) => {
            return block?.[0]?.userId === card?.userId
          }
        )) {
            const newGroup = [card];
            groupedCardData?.push(newGroup);
          } else {
            const indexToBePushed = groupedCardData?.findIndex((block) => 
            block?.[0]?.userId === card?.userId);
            groupedCardData?.[indexToBePushed]?.push(card);
          }
          break;
        case "priority":
          if (!groupedCardData?.some((block) => {
            return block?.[0]?.priority === card?.priority
          }
        )) {
            const newGroup = [card];
            groupedCardData?.push(newGroup);
          } else {
            const indexToBePushed = groupedCardData?.findIndex((block) => 
            block?.[0]?.priority === card?.priority);
            groupedCardData?.[indexToBePushed]?.push(card);
          }
          break;
        case "status":
        
          if (!groupedCardData?.some((block) => {
            return block?.[0]?.status === card?.status
          }
        )) {
            const newGroup = [card];
            groupedCardData?.push(newGroup);
          } else {
            const indexToBePushed = groupedCardData?.findIndex((block) => 
            block?.[0]?.status === card?.status);
            groupedCardData?.[indexToBePushed]?.push(card);
          }
          break;

        default:
          if (!groupedCardData?.some((block) => {
            return block?.[0]?.status === card?.status
          }
        )) {
            const newGroup = [card];
            groupedCardData?.push(newGroup);
          } else {
            const indexToBePushed = groupedCardData?.findIndex((block) => 
            block?.[0]?.status === card?.status);
            groupedCardData?.[indexToBePushed]?.push(card);
          }

      }
    })

    // You need to sort the cards inside the blocks on the basis of selectOrderBy.

    groupedCardData?.map((block) => {
      const sortedBlock = [...block];
      switch (selectedOrderBy) {
        case "title":
          sortedBlock.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
          })
          return sortedBlock;
        case "priority":
          sortedBlock.sort((a, b) => b.priority - a.priority);
          return sortedBlock;
        default:
          sortedBlock.sort((a, b) => b.priority - a.priority);
          return sortedBlock
      }
    })

    setBlockData(groupedCardData);
  }

  return (
    <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        gap: "16px",
        height: '100%', 
        justifyContent: "flex-start", 
        alignItems: "flex-start",
        background: "#E6E6E6",
        minWidth: "max-content"
      }}
    >
        <Filters />
        <BlockCanvas data = {blockdata} groupBy={selectedGroupBy} />
    </div>
  );
   
}
export default ParentCanvas; 