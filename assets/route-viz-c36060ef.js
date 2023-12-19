var p=Object.defineProperty;var d=(a,n,t)=>n in a?p(a,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[n]=t;var l=(a,n,t)=>(d(a,typeof n!="symbol"?n+"":n,t),t);import{M as u,n as h,r as e,S as c,a as g}from"./index-c0197c81.js";import{m}from"./mapbox-gl-ea31cf16.js";m.accessToken=u;const v=a=>({type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"LineString",coordinates:(a||[]).map(n=>[n.lng,n.lat])}}]}});class y extends e.Component{constructor(t){super(t);l(this,"initMap",()=>{const{lng:t,lat:i,zoom:r}=this.state,o=new m.Map({container:this.mapContainer.current,style:"mapbox://styles/mapbox/streets-v11",center:[t,i],zoom:r,minZoom:10,maxZoom:18});o.dragRotate.disable(),o.touchZoomRotate.disableRotation(),o.getCanvas().style.cursor="crosshair",o.on("move",()=>{this.setState({lng:o.getCenter().lng.toFixed(4),lat:o.getCenter().lat.toFixed(4),zoom:o.getZoom().toFixed(2)})}),o.on("click",s=>{this.setState({points:[...this.state.points,s.lngLat]})}),this.map=o});this.state={lat:c.majestic.loc[0],lng:c.majestic.loc[1],zoom:11,points:[]},this.mapContainer=e.createRef()}componentDidMount(){this.initMap(),this.map.on("load",()=>{this.map.addSource("route",g([])),this.map.addLayer({id:"route",source:"route",type:"line",paint:{"line-color":"#4264fb","line-width":8}})})}componentDidUpdate(t,i,r){const{points:o}=this.state;i.points!==o&&this.map.getSource("route").setData(v(o).data)}render(){const{points:t}=this.state;return e.createElement("div",{id:"route-viz-wrapper"},e.createElement("div",{id:"route-viz-map",ref:this.mapContainer}),e.createElement("div",{id:"route-viz-info"},e.createElement("h3",null,"Route"),t.length===0?e.createElement("p",null,"Click on a point on the map to add to the route"):e.createElement(e.Fragment,null,e.createElement("button",null,"Copy"),e.createElement("div",{id:"route-viz-points"},t.map((i,r)=>e.createElement("div",{key:r},i.lng.toFixed(6),", ",i.lat.toFixed(6)))))))}}const E=h(document.getElementById("root"));E.render(e.createElement(y,null));
//# sourceMappingURL=route-viz-c36060ef.js.map
