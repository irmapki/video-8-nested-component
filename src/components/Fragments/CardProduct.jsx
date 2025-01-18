import Button from "../Elements/Button";

const CardProduct = (props) => {
    const { children } = props;
    return (
        <div className="w-full max-w-sm bg-gray-700 border border-gray-800 rounded-lg shadow mx-2 flex flex-col justify-between">
            {children}
        </div>
    );
};

const Header = (props) => {
    const {image} = props
    return (
        <a href="#" className="flex justify-center items-center">
            <img
                src={image}
                alt="product"
                className="p-4 rounded-t-lg max-h-48 object-contain" 
            />
        </a>
    );
};

const Body = (props) => {
    const { children, name }= props;
    return (
        <div className="px-5 pb-5 h-full">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-white">
                    {name}
                </h5>
                <p className="text-sm text-gray-300">
                   {children}
                </p>
            </a>
        </div>
    );
};

const Footer = (props) => {
    const {price} =  props;
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">{price}</span>
            <Button>Add to Cart</Button>
        </div>
    );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;