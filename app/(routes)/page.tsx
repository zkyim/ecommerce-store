import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getBillboards from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({ isFeaturedId: true });
    const billboard = await getBillboards('e274d0ae-ba97-4258-98ed-044d26c898d9');
    
    return (
        <div>
            <Container>
                <div className="space-y-10 pd-10">
                    {/* <Billboard data={billboard}/> */}
                </div>
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </Container>
        </div>
    );
} 

export default HomePage;