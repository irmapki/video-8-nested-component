import CardProduct from "../components/Fragments/CardProduct";

const ProductPage = () => {
    return (
        <div className="flex justify-center py-5 gap-5">
            {/* Card 1: Kotak */}
            <CardProduct shape="rectangle">
                <CardProduct.Header image="/images/laptop-1.jpg" shape="rectangle" />
                <CardProduct.Body title="Laptop Baru" shape="rectangle">
                    "Laptop adalah perangkat komputer portabel yang dirancang untuk memberikan kemudahan dalam bekerja, belajar, dan hiburan di mana saja. jadi ayo beli laptop enih :))))))"
                </CardProduct.Body>
                <CardProduct.Footer price="Rp 2.000.000" shape="rectangle" />
            </CardProduct>

            {/* Card 2: Kotak */}
            <CardProduct shape="rectangle">
                <CardProduct.Header image="/images/laptop-1.jpg" shape="rectangle" />
                <CardProduct.Body title="Laptop Baru" shape="rectangle">
                    Laptop adalah perangkat komputer portabel yang dirancang untuk memberikan kemudahan dalam bekerja, belajar, dan hiburan di mana saja. AYOK DEBELIIIIIIII
                </CardProduct.Body>
                <CardProduct.Footer price="Rp 2.000.000" shape="rectangle" />
            </CardProduct>

            {/* Card 3: Bulat */}
            <CardProduct shape="circle">
                <CardProduct.Header image="/images/Logo-STTP.jpg" shape="circle" />
                <CardProduct.Body title="STTP" shape="circle">
                    kampus kuning yang keren
                </CardProduct.Body>
                <CardProduct.Footer price="Rp 2.500.000" shape="circle" />
            </CardProduct>
        </div>
    );
};

export default ProductPage;