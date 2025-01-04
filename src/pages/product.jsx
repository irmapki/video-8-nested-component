import Button from "../components/Elements/Button"
import CardProduct from "../components/Fragments/CardProduct";
import CardProduct2 from "../components/Fragments/CardProduct2";


const ProductPage = () => {
    return (
        <div className="flex justify-center py-5">
            <CardProduct>
                <CardProduct.Header image="/images/laptop-1.jpg" />
                <CardProduct.Body title="Laptop Baru"> 
                    Wisata adalah kegiatan perjalanan yang dilakukan oleh seseorang atau sekelompok orang dengan mengunjungi tempat tertentu dalam jangka waktu singkat untuk tujuan rekreasi, pengembangan pribadi, atau untuk mempelajari daya tarik wisata tempat tersebut.
                    </CardProduct.Body> 
                <CardProduct.Footer price="Rp 2.000.000"/>
            </CardProduct>
            <CardProduct>
                <CardProduct.Header image="/images/laptop-1.jpg" />
                <CardProduct.Body title="Laptop Baru"> 
                    Wisata adalah kegiatan perjalanan yang dilakukan oleh seseorang atau sekelompok orang dengan mengunjungi tempat tertentu dalam jangka waktu singkat untuk tujuan rekreasi, pengembangan pribadi, atau untuk mempelajari daya tarik wisata tempat tersebut.
                    </CardProduct.Body> 
                <CardProduct.Footer price="Rp 2.000.000"/>
            </CardProduct>
                <CardProduct2>
                    <CardProduct2.Header image="/images/Logo-STTP.jpg" />
                    <CardProduct2.Body title="STTP"> 
                    kampus kuning yang keren
                        </CardProduct2.Body> 
                    <CardProduct2.Footer price="Rp 25.000.000.000"/>
                </CardProduct2>
                <CardProduct2>
                    <CardProduct2.Header image="/images/Logo-STTP.jpg" />
                    <CardProduct2.Body title="STTP"> 
                    kampus kuning yang keren
                        </CardProduct2.Body> 
                    <CardProduct2.Footer price="Rp 25.000.000.000"/>
                </CardProduct2>
        </div>
    );
};

export default ProductPage;
