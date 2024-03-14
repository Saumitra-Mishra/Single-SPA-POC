import { useEffect } from "react"
import ResponsiveDrawer from "./components/Drawer"
// import {getData} from "@SampleOrg/utility";
export default function Root(props) {
  console.log(props)
  return <ResponsiveDrawer para1={props?.myProp?.para1} para2={props?.myProp?.para2}/>
}
