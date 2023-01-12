import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const nested = [
  {
    fname: "Anik Hasan",
    age: "28",
    phon:[
        {
          home: "01734535478",
        },
        {
          office: "01835936473"
        }
      ]
  },
  {
    fname: "Ahsan Haq",
    age: "29",
    phon: [
      {
        home: "017947382341",
      },
      {
        office: "019378453458"
      }
    ]
  },
  {
    fname: "Mohaimen",
    age: "32",
    phon: [
        {
          home: "01654645625",
        },
        {
          office: "0183455645656"
        }
      ]
  },
];

function NestedData() {
  console.log(nested)
  return (


    <div>
      <h1> Nested Mapping </h1>
      <Card>
        {nested.map((user, index) => (
          <article className="nested-parent" key={index}>
            <Card.Title className="nested-title"> {user.fname} </Card.Title> 
            <Card.Text className="nested-age">Age: {user.age}</Card.Text>
            {user.phon.map((phon, index) => (
              <div key={index}>
                <Card.Text>{phon.home} </Card.Text> 
                <Card.Text>{phon.office} </Card.Text>
              </div>
            ))}
            <a className="icon-a" href="#"><FaFacebookF className="icon" /></a>
            <a className="icon-a" href="#"><FaInstagram className="icon" /></a>
            <a className="icon-a" href="#"><FaTwitter className="icon" /></a>
            <a className="icon-a" href="#"><FaWhatsapp className="icon" /></a>
          </article>
        ))}
      </Card>
      
    </div>
  );
}

export default NestedData;
