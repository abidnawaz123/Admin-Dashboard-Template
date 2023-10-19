import { CustomImg } from "../../../utils/images";
import Customer from "../../Section/Customer/Customer";
import ProductList from "../../Section/Product/Product";

export const Columns = [
    { children: <Customer />, flex: 2 },
    { children: <ProductList />, flex: 5 },
  ];
           
 export const socialMedia = [
    {source :CustomImg.FacebookIcon, alt : "facebook" },
    {source :CustomImg.TwitterIcon, alt : "twitter" },
    {source :CustomImg.GithubIcon, alt : "github" },
    {source :CustomImg.DribbleIcon, alt : "dribble" },
  ]