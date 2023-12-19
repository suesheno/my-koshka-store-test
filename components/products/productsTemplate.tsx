import Breadcrumbs from './breadcrumbs';
import CategoriesSidebarMenu from './category-sidebar-menu';
import ProductsWrapper from './product-list/products-wrapper';

const ProductsTemplate = () => {
  return (
    <div className='max-container padding-container pb-20'>
      <Breadcrumbs />
      <div className='flex gap-x-7 tablet:flex-nowrap 2xsmall:flex-wrap'>
        <CategoriesSidebarMenu />
        <ProductsWrapper />
      </div>
    </div>
  );
};

export default ProductsTemplate;
