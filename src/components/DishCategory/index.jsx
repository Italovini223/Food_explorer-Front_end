import { Container, Slider } from './styles';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useRef } from 'react';

export function DishCategory({title, children}) {
  const slider = useRef(null);

  function handleLeftClick(e) {
    e.preventDefault();

    slider.current.scrollLeft -= slider.current.offsetWidth;
  }

  function handleRightClick(e) {
    e.preventDefault();

    slider.current.scrollLeft += slider.current.offsetWidth;
  }

   return (
    <Container>
      <h2>prato principal</h2>

      <Slider>
        <button 
          className='btn-left'
          onClick={handleLeftClick}
        >
          <FiChevronLeft size={50}/>
        </button>

        <div ref={slider}>
          {children}
        </div>

        <button 
          className='btn-right'
          onClick={handleRightClick}
        >
          <FiChevronRight size={50}/>
        </button>
      </Slider>

    </Container>
   )
}