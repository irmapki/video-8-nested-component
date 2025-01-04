import Button from "../Elements/Button";

const CardProduct = (props) => {
    const { children, shape = "rectangle" } = props;
    const isRound = shape === "circle";
    return (
        <div
            className={`w-full max-w-sm bg-gray-700 border border-gray-800 shadow mx-2 ${
                isRound ? "rounded-full aspect-square flex flex-col items-center justify-center" : "rounded-lg"
            }`}
        >
            {children}
        </div>
    );
};

const Header = (props) => {
    const { image, shape = "rectangle" } = props;
    const isRound = shape === "circle";
    return (
        <a href="#" className={isRound ? "flex justify-center" : ""}>
            <img
                src={image}
                alt="product"
                className={`${
                    isRound 
                    ? "rounded-full w-48 h-48 object-cover p-4" 
                    : "p-8 w-full h-auto object-cover rounded-t-lg"
                }`}
            />
        </a>
    );
};

const Body = (props) => {
    const { children, title, shape = "rectangle" } = props;
    const isRound = shape === "circle";
    return (
        <div className={`px-5 pb-5 ${isRound ? "text-center" : ""}`}>
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-white">
                    {title}
                </h5>
                <p className="text-sm text-gray-300">{children}</p>
            </a>
        </div>
    );
};

const Footer = (props) => {
    const { price, shape = "rectangle" } = props;
    const isRound = shape === "circle";
    return (
        <div className={`flex items-center px-5 pb-5 ${
            isRound ? "justify-center gap-4 flex-col" : "justify-between"
        }`}>
            <span className="text-xl font-bold text-white">{price}</span>
            <Button className="bg-blue-600 px-4 py-2 rounded-lg">Add to Cart</Button>
        </div>
    );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;