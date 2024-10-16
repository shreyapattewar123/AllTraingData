import { ReactElement } from "react";
type HeadingProps ={paragraph:string}
const Heading2=({paragraph}:HeadingProps):ReactElement=>{
  return <h3>{paragraph}</h3>
}
export default Heading2