import styled from 'styled-components';

const LoadingWrapper = styled.section`
    position: 'fixed',
    left: 0,
    right: 0,
    top: 'calc(50% - 20px)',
    margin: 'auto',
    height: '40px',
    width: '40px',
    zIndex: 324324324,
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      <div className="spinner spinner-bubble spinner-bubble-primary"></div>
    </LoadingWrapper>
  );
};

export default Loading;
