import { LoadWrap } from './Loader.styled';
import { createPortal } from 'react-dom';
import { BallTriangle } from 'react-loader-spinner';

const loaderRoot = document.querySelector('#loader-root');

const Loader = () => {
  return createPortal(
    <LoadWrap>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </LoadWrap>,
    loaderRoot
  );
};

export default Loader;
