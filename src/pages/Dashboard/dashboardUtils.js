import ProductList from "../../components/Section/Product/Product";
import Customer from "../../components/Section/Customer/Customer";
import { CustomImg } from "../../utils/images";

export const Columns = [
    { children: <Customer />, flex: 2 },
    { children: <ProductList />, flex: 5 },
  ];
           
 export const socialMedia = [
    {source :CustomImg.FacebookIcon, alt : "facebook" },
    {source :CustomImg.TwitterIcon, alt : "twitter" },
    {source :CustomImg.GithubIcon, alt : "github" },
    {source :CustomImg.DribbleIcon, alt : "dribble" },
  ];
