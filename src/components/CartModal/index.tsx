import { MdClose } from 'react-icons/md';
import CartProductList from './CartProductList';

import { StyledCartModalBox } from './style';
import { StyledParagraph, StyledTitle } from '../../styles/typography';
import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContexts';
interface Iisopen {
  isOpen: boolean;
}
const CartModal = ({ isOpen }: Iisopen) => {
  const { openModal, setOpenModal } = useContext(ProductsContext);
  const { productSelect, setProductSelect } = useContext(ProductsContext);
  if (isOpen) {
    return (
      <StyledCartModalBox>
        <dialog>
          <header>
            <StyledTitle tag='h2' $fontSize='three'>
              Carrinho de compras
            </StyledTitle>
            <button
              type='button'
              aria-label='Fechar'
              onClick={() => setOpenModal(false)}
            >
              <MdClose size={21} />
            </button>
          </header>
          <div className='cartBox'>
            {productSelect.length > 0 ? (
              <CartProductList />
            ) : (
              <div className='emptyBox'>
                <StyledTitle tag='h3' $fontSize='three' textAlign='center'>
                  Sua sacola está vazia
                </StyledTitle>
                <StyledParagraph textAlign='center'>
                  Adicione itens
                </StyledParagraph>
              </div>
            )}
          </div>
        </dialog>
      </StyledCartModalBox>
    );
  }
  return null;
};

export default CartModal;
