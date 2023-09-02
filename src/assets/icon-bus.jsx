import React from "react";

const IconBus = ({ selected }) => (
  <svg width="10" height="12" viewBox="0 0 10 12" className="route-item-icon">
    <path
      fill={selected ? "#ffffff" : "#000000"}
      d="M72.75,32h-7.5A1.268,1.268,0,0,0,64,33.286v8.571a1.3,1.3,0,0,0,.417.957V43.3a.687.687,0,0,0,.677.7h.729a.687.687,0,0,0,.677-.7v-.161h5V43.3a.687.687,0,0,0,.677.7h.729a.687.687,0,0,0,.677-.7v-.489A1.3,1.3,0,0,0,74,41.857V33.286A1.268,1.268,0,0,0,72.75,32Zm-6.576,9.852a.829.829,0,0,1-.842-.482.875.875,0,0,1,.162-.977.816.816,0,0,1,.949-.167.862.862,0,0,1,.468.866A.846.846,0,0,1,66.174,41.852Zm2.305-3H65.25a.423.423,0,0,1-.417-.429V35a.423.423,0,0,1,.417-.429h3.229a.106.106,0,0,1,.1.107V38.75A.106.106,0,0,1,68.479,38.857ZM69,33.714H65.262a.43.43,0,0,1-.428-.407.436.436,0,0,1,.114-.317.411.411,0,0,1,.3-.133h7.488a.43.43,0,0,1,.428.407.436.436,0,0,1-.114.317.411.411,0,0,1-.3.133Zm.521.857H72.75a.423.423,0,0,1,.417.429v3.429a.423.423,0,0,1-.417.429H69.521a.106.106,0,0,1-.1-.107V34.679A.106.106,0,0,1,69.521,34.571Zm1.567,6.522a.862.862,0,0,1,.468-.866.816.816,0,0,1,.949.167.875.875,0,0,1,.162.977.829.829,0,0,1-.842.482A.846.846,0,0,1,71.088,41.093Z"
      transform="translate(-64 -32)"
    />
  </svg>
);

export default IconBus;