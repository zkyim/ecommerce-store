import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getBillboards from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

const PageContent = async () => {
    const products = await getProducts({ isFeaturedId: true });
    const billboard = await getBillboards('9c5cdfc6-d32c-473e-9bc5-1fb86e7ec1b1');
    
    return (
        <div>
            <Container>
                <div className="space-y-10 pd-10">
                    <Billboard data={billboard}/>
                </div>
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </Container>
        </div>
    );
}

export default PageContent
