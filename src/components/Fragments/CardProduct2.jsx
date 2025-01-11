import Button from "../Elements/Button";

const CardProduct2 = (props) => {
    const { children } = props;
    return (
        <div className="w-64 h-80 bg-gray-700 border border-gray-800 shadow mx-2 rounded-full flex flex-col items-center text-center p-4">
            {children}
        </div>
    );
};

const Header = (props) => {
    const { image } = props;
    return (
        <div className="w-32 h-32 rounded-full overflow-hidden">
            <img 
                src={image}
                alt="product" 
                className="w-full h-full object-cover"
            />
        </div>
    );
};

const Body = (props) => {
    const { children, name } = props;
    return (
        <div className="flex-1 mt-3 h-full">
            <h5 className="text-lg font-semibold text-white">{name}</h5>
            <p className="text-sm text-gray-300 mt-2">{children}</p>
        </div>
    );
};

const Footer = (props) => {
    const { price } = props;
    return (
        <div className="mt-auto flex flex-col items-center">
            <span className="text-lg font-bold text-white">{price}</span>
            <Button className="bg-blue-600 px-3 py-1.5 text-sm rounded-full hover:bg-blue-700 transition-colors mt-2">
                Add to Cart
            </Button>
        </div>
    );
};

CardProduct2.Header = Header;
CardProduct2.Body = Body;
CardProduct2.Footer = Footer;

export default CardProduct2;
