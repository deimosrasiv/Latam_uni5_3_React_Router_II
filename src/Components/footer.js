
import '../Styles/footer.css';


const Footer = ({footer}) => {
    return ( 
        <div className="py-3">
            <p align="center" className="textFooter"><strong>{footer}</strong></p>
        </div>
     );

}
 
export default Footer;