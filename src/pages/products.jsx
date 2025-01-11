
import CardProduct from "../components/Fragments/CardProduct";
import CardProduct2 from "../components/Fragments/CardProduct2";

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

const ProductPage = () => {
    return (
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
    );
};

export default ProductPage;
