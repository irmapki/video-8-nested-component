import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import CardProduct2 from "../components/Fragments/CardProduct2";
import Button from "../components/Elements/Button";

const products = [
    {
        id: 1,
        name: "Laptop Baru",
        price: "Rp 2.000.000",
        image: "/images/laptop-1.jpg",
        description:
            "Laptop keren brutal keluaran tebaru yang pasti hnya dimiliki 1 orang di dunia yaitu irma kiyowo saja ahihihi.",
    },
    {
        id: 2,
        name: "kampus kuning",
        price: "Rp 1.500.000",
        image: "/images/sttp-1.png",
        description: "kampus kuning tanda sehat dan suka  makan sayur.",
    },
];
const email = localStorage.getItem('email');

const ProductPage = () => {
    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href ="/login";
    };
    return (
        <Fragment>
            <div className="flex justify-end h-20 bg-blue-300 text-black items-center px-10">
                <span className="mr-5">{email}</span>
                <Button className="!bg-black hover:bg-gray-800" onClick={handleLogout}>
                    Logout
                </Button>
            </div>
            <div className="flex flex-wrap justify-center py-5">
                {products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header image={product.image} />
                        <CardProduct.Body name={product.name}>
                            {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={product.price} />
                    </CardProduct>
                ))}
                
                {products.map((product) => (
                    <CardProduct2 key={`card-circle-${product.id}`}>
                        <CardProduct2.Header image={product.image} shape="circle" />
                        <CardProduct2.Body name={product.name}>
                            {product.description}
                        </CardProduct2.Body>
                        <CardProduct2.Footer price={product.price} />
                    </CardProduct2>
                ))}
            </div>
        </Fragment>
    );
};

export default ProductPage;