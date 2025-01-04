import Button from "../components/Elements/Button"
import CardProduct from "../components/Fragments/CardProduct";


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
        </div>
    );
};

export default ProductPage;
